import { useState, useRef } from "react";
import SectionHeading from "../components/SectionHeading.jsx";

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

const TONE_COLORS = {
  formal:     { bar: "bg-p1",   badge: "bg-p2/60 text-p3",     dot: "bg-p1" },
  casual:     { bar: "bg-s4",   badge: "bg-s5/80 text-p3",     dot: "bg-s4" },
  confident:  { bar: "bg-p3",   badge: "bg-s5/80 text-p3",     dot: "bg-p3" },
  persuasive: { bar: "bg-p1/70",badge: "bg-p2/50 text-p3",     dot: "bg-p1/70" },
  warm:       { bar: "bg-s4/80",badge: "bg-s5/60 text-p5",     dot: "bg-s4/80" },
  technical:  { bar: "bg-p3/80",badge: "bg-s3/60 text-p5",     dot: "bg-p3/80" },
};

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

  const sorted = TONE_DEFINITIONS.map((t) => ({
    ...t,
    score: percentages[t.key] || 0,
    rawScore: scores[t.key] || 0,
  })).sort((a, b) => b.score - a.score);

  return sorted;
}

const ToneFinder = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState(null);
  const [analyzed, setAnalyzed] = useState(false);
  const textareaRef = useRef(null);

  const handleAnalyze = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const tones = analyzeTone(trimmed);
    setResults(tones);
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

  const topTones = results ? results.filter((t) => t.score > 0).slice(0, 3) : [];
  const dominant = results ? results[0] : null;

  return (
    <section id="tone-finder" className="section-rule py-24 max-lg:py-16">
      <div className="container">
        <SectionHeading
          eyebrow="Tone Finder"
          title="Paste your copy. See how it sounds."
          description="Drop in a paragraph — job post, sales email, product description — and get an instant read on the tone your words are projecting."
          titleClassName="h2 max-lg:h3"
          className="mb-14 max-lg:mb-10"
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
          {/* Input panel */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  if (analyzed) {
                    setResults(null);
                    setAnalyzed(false);
                  }
                }}
                placeholder="Paste or type any copy here — an email, a headline, a job description…"
                rows={9}
                className="w-full resize-none rounded-[14px] border border-s3/75 bg-s2/45 px-5 py-4 text-[0.97rem] leading-relaxed text-p4 placeholder:text-p5/50 focus:border-p1/60 focus:outline-none focus:ring-2 focus:ring-p1/20 transition-colors duration-200"
              />
              {text.length > 0 && (
                <span className="absolute bottom-3.5 right-4 text-[0.78rem] font-medium text-p5/60">
                  {text.trim().split(/\s+/).filter(Boolean).length} words
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleAnalyze}
                disabled={!text.trim()}
                className="rounded-[10px] bg-p4 px-5 py-2.5 text-[0.92rem] font-semibold text-s1 transition-opacity duration-200 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Analyze tone
              </button>

              {text.length > 0 && (
                <button
                  onClick={handleReset}
                  className="rounded-[10px] border border-s3/75 px-5 py-2.5 text-[0.92rem] font-medium text-p5 transition-colors duration-200 hover:border-p1/40 hover:text-p4"
                >
                  Clear
                </button>
              )}

              <span className="text-[0.82rem] font-medium text-p5/60 max-sm:hidden">or try an example:</span>

              {EXAMPLE_PROMPTS.map((ex) => (
                <button
                  key={ex.label}
                  onClick={() => handleExample(ex)}
                  className="rounded-full border border-s3/75 px-3.5 py-1.5 text-[0.8rem] font-medium text-p5 transition-colors duration-200 hover:border-p1/50 hover:text-p4"
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results panel */}
          <div className="min-h-[200px]">
            {!analyzed && (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center rounded-[14px] border border-dashed border-s3/60 px-8 py-10 text-center">
                <p className="text-[0.9rem] font-medium text-p5/60">
                  Your tone breakdown will appear here
                </p>
                <p className="mt-1.5 text-[0.82rem] text-p5/40">
                  Formal · Casual · Confident · Warm · Persuasive · Technical
                </p>
              </div>
            )}

            {analyzed && results && (
              <div className="rounded-[14px] border border-s3/75 bg-s2/40 px-6 py-5">
                {/* Dominant label */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="caption mb-1.5">Primary tone</p>
                    <p className="h5 text-p4">{dominant?.label}</p>
                    <p className="mt-1 text-[0.85rem] text-p5/70">{dominant?.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {topTones.map((t) => (
                      <span
                        key={t.key}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.76rem] font-semibold ${TONE_COLORS[t.key]?.badge ?? "bg-s3/60 text-p5"}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${TONE_COLORS[t.key]?.dot ?? "bg-p5"}`} />
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bars */}
                <div className="space-y-3">
                  {results.filter((t) => t.score > 0 || t.rawScore > 0).map((tone) => (
                    <div key={tone.key}>
                      <div className="mb-1 flex justify-between">
                        <span className="text-[0.82rem] font-semibold text-p4">{tone.label}</span>
                        <span className="text-[0.82rem] font-medium text-p5/70">{tone.score}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-s3/50">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ease-out ${TONE_COLORS[tone.key]?.bar ?? "bg-p1"}`}
                          style={{ width: `${tone.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[0.78rem] text-p5/50">
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
