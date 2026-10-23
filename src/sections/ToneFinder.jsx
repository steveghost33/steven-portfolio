import { useState, useRef } from "react";

const TONE_DEFINITIONS = [
  {
    key: "formal",
    label: "Formal",
    description: "Structured, professional language",
    keywords: [
      "therefore", "furthermore", "consequently", "regarding", "pursuant",
      "herein", "aforementioned", "subsequently", "nevertheless", "notwithstanding",
      "accordingly", "hence", "thus", "whilst", "moreover", "henceforth",
      "hereby", "therein", "wherein", "inasmuch",
    ],
    boostPatterns: [/\b(mr|ms|dr|prof)\./gi],
    penaltyWords: ["hey", "yeah", "gonna", "wanna", "kinda", "cool", "awesome", "super", "totally", "literally", "honestly"],
  },
  {
    key: "casual",
    label: "Casual",
    description: "Relaxed, conversational tone",
    keywords: [
      "hey", "yeah", "yep", "cool", "awesome", "gonna", "wanna", "kinda",
      "sorta", "super", "totally", "literally", "basically", "honestly",
      "tbh", "ngl", "btw", "fyi", "stuff", "things", "pretty", "pretty much",
      "a lot", "you know", "right", "though", "anyway",
    ],
    boostPatterns: [/n't\b/gi, /\bi'm\b/gi, /\bwe're\b/gi, /\byou're\b/gi, /\bit's\b/gi],
  },
  {
    key: "confident",
    label: "Confident",
    description: "Assertive, decisive language",
    keywords: [
      "will", "must", "always", "never", "definitely", "absolutely",
      "certainly", "clearly", "proven", "guaranteed", "ensure", "commit",
      "achieve", "deliver", "lead", "drive", "own", "excel",
    ],
    penaltyWords: [
      "maybe", "perhaps", "might", "could", "possibly", "probably",
      "somewhat", "sort of", "kind of", "i think", "i believe",
      "i feel like", "i guess", "i suppose", "not sure",
    ],
  },
  {
    key: "persuasive",
    label: "Persuasive",
    description: "Benefit-driven, action-oriented",
    keywords: [
      "discover", "unlock", "transform", "imagine", "exclusive", "limited",
      "proven", "results", "benefit", "value", "save", "gain", "grow",
      "boost", "increase", "improve", "powerful", "effective", "trusted",
      "easy", "simple", "fast", "now", "today", "start", "join", "get",
    ],
    boostPatterns: [/!\s/g, /you (can|will|get|deserve)/gi],
  },
  {
    key: "warm",
    label: "Warm",
    description: "Empathetic, human-centered",
    keywords: [
      "understand", "feel", "care", "support", "together", "community",
      "appreciate", "thank", "value", "respect", "listen", "share",
      "connect", "welcome", "glad", "happy", "love", "hope", "excited",
      "grateful", "kind", "genuine", "heart", "people", "team",
    ],
  },
  {
    key: "technical",
    label: "Technical",
    description: "Precise, detail-rich language",
    keywords: [
      "system", "process", "implement", "architecture", "configure",
      "integration", "api", "data", "function", "parameter", "variable",
      "algorithm", "protocol", "infrastructure", "framework", "module",
      "interface", "deploy", "optimize", "scalable", "robust", "latency",
      "throughput", "debug", "schema", "endpoint", "repository",
    ],
  },
];

const EXAMPLE_PROMPTS = [
  {
    label: "Job posting",
    text: "We are seeking a highly motivated Senior Software Engineer to join our growing team. The ideal candidate will demonstrate exceptional problem-solving abilities and a proven track record of delivering scalable solutions.",
  },
  {
    label: "Startup pitch",
    text: "Imagine never losing track of a customer again. Our platform transforms how small businesses manage relationships — saving you hours every week and turning missed follow-ups into closed deals.",
  },
  {
    label: "Team Slack message",
    text: "Hey team! Just wanted to give everyone a quick heads-up — we're gonna push the launch to Friday so we can fix those last few bugs. Pretty sure it'll be worth it though. Thanks for being so awesome about it!",
  },
];

function analyzeTone(text) {
  const lower = text.toLowerCase();
  const words = lower.match(/\b\w+\b/g) || [];
  const wordCount = words.length;
  if (wordCount === 0) return null;

  const scores = {};

  for (const tone of TONE_DEFINITIONS) {
    let score = 0;
    for (const kw of tone.keywords) {
      const re = new RegExp(`\\b${kw.replace(/\s+/g, "\\s+")}\\b`, "gi");
      const matches = text.match(re);
      if (matches) score += matches.length * 2;
    }
    if (tone.boostPatterns) {
      for (const pat of tone.boostPatterns) {
        const matches = text.match(pat);
        if (matches) score += matches.length;
      }
    }
    if (tone.penaltyWords) {
      for (const pw of tone.penaltyWords) {
        const re = new RegExp(`\\b${pw.replace(/\s+/g, "\\s+")}\\b`, "gi");
        const matches = text.match(re);
        if (matches) score = Math.max(0, score - matches.length * 1.5);
      }
    }
    scores[tone.key] = score;
  }

  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const avgSentenceLen = wordCount / Math.max(sentences.length, 1);
  if (avgSentenceLen > 22) scores.formal = (scores.formal || 0) + 3;
  if (avgSentenceLen < 12) scores.confident = (scores.confident || 0) + 2;

  const contractionCount = (text.match(/\b\w+n't\b|\bi'm\b|\byou're\b|\bwe're\b|\bthey're\b|\bit's\b/gi) || []).length;
  scores.casual = (scores.casual || 0) + contractionCount * 1.5;
  if (contractionCount === 0 && wordCount > 20) scores.formal = (scores.formal || 0) + 3;

  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
  const percentages = {};
  for (const key of Object.keys(scores)) {
    percentages[key] = Math.round((scores[key] / total) * 100);
  }

  return TONE_DEFINITIONS.map((t) => ({
    ...t,
    score: percentages[t.key] || 0,
    rawScore: scores[t.key] || 0,
  })).sort((a, b) => b.score - a.score);
}

const ToneFinder = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState(null);
  const [analyzed, setAnalyzed] = useState(false);
  const textareaRef = useRef(null);

  const handleAnalyze = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setResults(analyzeTone(trimmed));
    setAnalyzed(true);
  };

  const handleExample = (sample) => {
    setText(sample.text);
    setResults(null);
    setAnalyzed(false);
    textareaRef.current?.focus();
  };

  const handleReset = () => {
    setText("");
    setResults(null);
    setAnalyzed(false);
    textareaRef.current?.focus();
  };

  const dominant = results?.[0];
  const topTones = results ? results.filter((t) => t.score > 0).slice(0, 3) : [];

  return (
    <section id="tone-finder" className="section-rule py-20 max-lg:py-14">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="caption">Tone Finder</p>
            <h2 className="h2 max-w-[18ch] text-balance">Paste your copy. See how it sounds.</h2>
          </div>
          <p className="body-3 max-w-[44ch] lg:text-right">
            Drop in a paragraph — job post, sales email, product description — and get an instant tone breakdown.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
          {/* Input */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  if (analyzed) { setResults(null); setAnalyzed(false); }
                }}
                placeholder="Paste or type any copy here — an email, headline, job description…"
                rows={9}
                className="w-full resize-none rounded-2xl border border-s3 bg-s1 px-5 py-4 text-[0.95rem] leading-relaxed text-p4 placeholder:text-p3 focus:border-p1/50 focus:outline-none focus:ring-2 focus:ring-p1/15 transition-colors duration-200"
              />
              {text.length > 0 && (
                <span className="absolute bottom-3.5 right-4 text-[0.75rem] font-medium text-p3">
                  {text.trim().split(/\s+/).filter(Boolean).length} words
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleAnalyze}
                disabled={!text.trim()}
                className="h-10 rounded-lg bg-p4 px-5 text-[0.875rem] font-semibold text-s1 transition-colors duration-200 hover:bg-p1 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Analyze tone
              </button>
              {text.length > 0 && (
                <button
                  onClick={handleReset}
                  className="h-10 rounded-lg border border-s3 px-5 text-[0.875rem] font-medium text-p5 transition-colors duration-200 hover:border-p1/40 hover:text-p4"
                >
                  Clear
                </button>
              )}
              <span className="text-[0.78rem] text-p3 max-sm:hidden">or try:</span>
              {EXAMPLE_PROMPTS.map((ex) => (
                <button
                  key={ex.label}
                  onClick={() => handleExample(ex)}
                  className="rounded-full border border-s3 bg-s2 px-3.5 py-1.5 text-[0.78rem] font-medium text-p5 transition-colors duration-200 hover:border-p1/40 hover:text-p4"
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            {!analyzed ? (
              <div className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-dashed border-s3 bg-s2/50 px-8 py-10 text-center">
                <p className="text-[0.875rem] font-medium text-p5">Tone breakdown will appear here</p>
                <p className="mt-1.5 text-[0.78rem] text-p3">Formal · Casual · Confident · Warm · Persuasive · Technical</p>
              </div>
            ) : (
              <div className="rounded-2xl border border-s3 bg-s1 p-5 shadow-[0_2px_16px_rgba(15,23,42,0.06)]">
                <div className="mb-5">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-p3 mb-2">Primary Tone</p>
                  <p className="h5 text-p4">{dominant?.label}</p>
                  <p className="mt-0.5 text-[0.82rem] text-p5">{dominant?.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {topTones.map((t) => (
                      <span key={t.key} className="rounded-full border border-p1/20 bg-p1/8 px-2.5 py-1 text-[0.72rem] font-semibold text-p1">
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {results.filter((t) => t.score > 0).map((tone) => (
                    <div key={tone.key}>
                      <div className="mb-1.5 flex justify-between">
                        <span className="text-[0.8rem] font-semibold text-p4">{tone.label}</span>
                        <span className="text-[0.8rem] font-medium text-p5">{tone.score}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-s3">
                        <div
                          className="h-full rounded-full bg-p1 transition-all duration-700 ease-out"
                          style={{ width: `${tone.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[0.72rem] text-p3">
                  Based on vocabulary patterns, sentence structure, and writing style signals.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToneFinder;
