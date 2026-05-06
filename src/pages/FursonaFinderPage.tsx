import { useState } from "react";

type Species =
  | "Wolf"
  | "Fox"
  | "Red Panda"
  | "Cat"
  | "Dog"
  | "Bunny"
  | "Dragon"
  | "Deer"
  | "Lion"
  | "Tiger"
  | "Shark"
  | "Bird";

type Option = {
  label: string;
  points: Partial<Record<Species, number>>;
  archetype?: string;
  environment?: string;
  colorMood?: string;
  style?: string;
  buildType?: string;
  useCase?: string;
};

const questions = [
  {
    question: "Which type of character do you feel most connected to?",
    options: [
      {
        label: "A wild predator with strong presence",
        points: { Wolf: 2, Tiger: 2, Lion: 2, Dragon: 1 },
        archetype: "Strong, bold, and protective",
      },
      {
        label: "A playful creature with cute expressive energy",
        points: { Fox: 2, Bunny: 2, Cat: 1, "Red Panda": 2 },
        archetype: "Playful, friendly, and expressive",
      },
      {
        label: "A calm character with graceful movement",
        points: { Deer: 3, Bird: 1, Fox: 1 },
        archetype: "Calm, elegant, and thoughtful",
      },
      {
        label: "A fantasy creature or something unusual",
        points: { Dragon: 3, Shark: 1, Bird: 1 },
        archetype: "Unique, imaginative, and dramatic",
      },
      {
        label: "A loyal companion type character",
        points: { Dog: 3, Wolf: 1, Cat: 1 },
        archetype: "Loyal, warm, and approachable",
      },
    ],
  },
  {
    question: "Where does your character naturally belong?",
    options: [
      {
        label: "Forests, mountains, or wild landscapes",
        points: { Wolf: 2, Deer: 2, Fox: 1 },
        environment: "Forest",
      },
      {
        label: "Cold snowy regions",
        points: { Wolf: 2, Fox: 2, Deer: 1 },
        environment: "Arctic",
      },
      {
        label: "Deep ocean or underwater world",
        points: { Shark: 4 },
        environment: "Deep Ocean",
      },
      {
        label: "Urban streets or a futuristic city",
        points: { Cat: 2, Fox: 2, Dog: 1 },
        environment: "Urban",
      },
      {
        label: "A fantasy realm or unknown world",
        points: { Dragon: 3, Bird: 1, Lion: 1 },
        environment: "Fantasy",
      },
    ],
  },
  {
    question: "What kind of build do you imagine for your character?",
    options: [
      {
        label: "Slim and agile",
        points: { Fox: 2, Cat: 2, Shark: 1 },
        buildType: "Slim toony or semi-realistic build",
      },
      {
        label: "Fluffy and soft",
        points: { Bunny: 2, "Red Panda": 2, Dog: 1 },
        buildType: "Soft kemono or plushy partial suit",
      },
      {
        label: "Muscular and strong",
        points: { Wolf: 2, Lion: 2, Tiger: 2, Dragon: 1 },
        buildType: "Full suit with bold proportions",
      },
      {
        label: "Small and compact",
        points: { Bunny: 2, Cat: 1, "Red Panda": 2 },
        buildType: "Cute head or partial suit",
      },
      {
        label: "Tall and elegant",
        points: { Deer: 2, Bird: 2, Dragon: 1 },
        buildType: "Elegant full suit or expressive head",
      },
    ],
  },
  {
    question: "Which visual fursuit style do you prefer?",
    options: [
      {
        label: "Cute and expressive kemono style",
        points: { Bunny: 2, "Red Panda": 2, Cat: 1, Fox: 1 },
        style: "Kemono",
      },
      {
        label: "Balanced cartoon style",
        points: { Dog: 2, Fox: 1, Wolf: 1, Tiger: 1 },
        style: "Toony",
      },
      {
        label: "Semi-realistic but still friendly",
        points: { Wolf: 2, Deer: 2, Tiger: 1, Lion: 1 },
        style: "Semi-realistic",
      },
      {
        label: "Fantasy and high-detail design",
        points: { Dragon: 3, Bird: 1, Shark: 1 },
        style: "Fantasy / detailed",
      },
      {
        label: "Soft plushy character look",
        points: { Bunny: 2, Dog: 1, "Red Panda": 2 },
        style: "Plushy",
      },
    ],
  },
  {
    question: "Which vibe fits your character best?",
    options: [
      {
        label: "Soft pastel and friendly",
        points: { Bunny: 2, "Red Panda": 2, Cat: 1 },
        colorMood: "Pastel colors, soft white, pink, and light blue",
      },
      {
        label: "Dark and mysterious",
        points: { Wolf: 2, Dragon: 2, Fox: 1, Cat: 1 },
        colorMood: "Black, purple, silver, and deep tones",
      },
      {
        label: "Bright and energetic",
        points: { Fox: 2, Bird: 2, Dog: 1, Tiger: 1 },
        colorMood: "Bright orange, yellow, red, and high contrast",
      },
      {
        label: "Natural earthy tones",
        points: { Deer: 2, Dog: 1, Wolf: 1, "Red Panda": 1 },
        colorMood: "Brown, cream, tan, forest green, and natural shades",
      },
      {
        label: "Bold and contrasting",
        points: { Tiger: 2, Shark: 2, Dragon: 1, Lion: 1 },
        colorMood: "Strong contrast, sharp markings, and standout colors",
      },
    ],
  },
  {
    question: "What would you mostly use your fursuit for?",
    options: [
      {
        label: "Conventions and meetups",
        points: { Wolf: 1, Fox: 1, Bunny: 1, Dragon: 1 },
        useCase: "Conventions and meetups",
      },
      {
        label: "Photoshoots and content",
        points: { Fox: 1, Cat: 1, Bird: 1, Tiger: 1 },
        useCase: "Photoshoots and content creation",
      },
      {
        label: "Personal identity / main fursona",
        points: { Wolf: 1, Dog: 1, Deer: 1, "Red Panda": 1 },
        useCase: "Personal fursona expression",
      },
      {
        label: "Roleplay or storytelling",
        points: { Dragon: 2, Deer: 1, Fox: 1, Bird: 1 },
        useCase: "Roleplay and character storytelling",
      },
      {
        label: "Business, mascot, or brand use",
        points: { Lion: 2, Tiger: 1, Dog: 1, Bird: 1 },
        useCase: "Mascot or business use",
      },
    ],
  },
];

const speciesDetails: Record<
  Species,
  {
    personality: string;
    recommendedStyle: string;
    defaultBuild: string;
    why: string;
  }
> = {
  Wolf: {
    personality: "Loyal, bold, protective, and confident.",
    recommendedStyle: "Toony or semi-realistic",
    defaultBuild: "Partial or full body suit",
    why: "Wolf fursonas work well for strong characters with loyal energy, expressive markings, and a powerful convention presence.",
  },
  Fox: {
    personality: "Clever, stylish, playful, and mysterious.",
    recommendedStyle: "Kemono or toony",
    defaultBuild: "Head, partial, or full suit",
    why: "Fox designs are flexible and look great with sharp markings, bright colors, elegant shapes, or playful expressions.",
  },
  "Red Panda": {
    personality: "Soft, friendly, cute, and expressive.",
    recommendedStyle: "Kemono",
    defaultBuild: "Partial or full suit",
    why: "Red panda fursonas are perfect for warm, approachable, cute character designs with soft expressions and rounded features.",
  },
  Cat: {
    personality: "Playful, stylish, curious, and expressive.",
    recommendedStyle: "Toony or kemono",
    defaultBuild: "Head or partial suit",
    why: "Cat fursonas work well for sleek designs, fun expressions, content creation, and stylish character concepts.",
  },
  Dog: {
    personality: "Friendly, loyal, cheerful, and energetic.",
    recommendedStyle: "Toony",
    defaultBuild: "Partial suit",
    why: "Dog fursonas are great for approachable characters with friendly expression and strong social energy.",
  },
  Bunny: {
    personality: "Soft, cute, gentle, and charming.",
    recommendedStyle: "Kemono or plushy",
    defaultBuild: "Partial or full suit",
    why: "Bunny fursonas look amazing with pastel colors, oversized ears, rounded shapes, and soft plushy proportions.",
  },
  Dragon: {
    personality: "Powerful, fantasy-inspired, bold, and dramatic.",
    recommendedStyle: "Fantasy or semi-realistic",
    defaultBuild: "Full suit or detailed head",
    why: "Dragon fursonas are perfect for high-impact fantasy builds with horns, spikes, wings, bold colors, or dramatic details.",
  },
  Deer: {
    personality: "Elegant, calm, graceful, and nature-inspired.",
    recommendedStyle: "Semi-realistic or toony",
    defaultBuild: "Head or full suit",
    why: "Deer fursonas work beautifully with natural palettes, antlers, soft graceful shapes, and calm personality concepts.",
  },
  Lion: {
    personality: "Royal, confident, strong, and proud.",
    recommendedStyle: "Toony or semi-realistic",
    defaultBuild: "Full suit",
    why: "Lion fursonas create a strong mascot-like presence with bold shapes, powerful personality, and eye-catching silhouettes.",
  },
  Tiger: {
    personality: "Energetic, fierce, bold, and eye-catching.",
    recommendedStyle: "Toony or semi-realistic",
    defaultBuild: "Partial or full suit",
    why: "Tiger fursonas stand out because stripes, contrast, and warm colors create instant visual impact.",
  },
  Shark: {
    personality: "Sporty, bold, playful, and unique.",
    recommendedStyle: "Toony",
    defaultBuild: "Head or partial suit",
    why: "Shark fursonas feel memorable and unique, especially with ocean colors, smooth shapes, and confident expressions.",
  },
  Bird: {
    personality: "Bright, expressive, creative, and energetic.",
    recommendedStyle: "Toony",
    defaultBuild: "Head or partial suit",
    why: "Bird fursonas are great for colorful characters with beaks, feather shapes, strong expressions, and playful visual personality.",
  },
};

export default function FursonaFinderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<Species, number>>({
    Wolf: 0,
    Fox: 0,
    "Red Panda": 0,
    Cat: 0,
    Dog: 0,
    Bunny: 0,
    Dragon: 0,
    Deer: 0,
    Lion: 0,
    Tiger: 0,
    Shark: 0,
    Bird: 0,
  });

  const [archetype, setArchetype] = useState("");
  const [environment, setEnvironment] = useState("");
  const [colorMood, setColorMood] = useState("");
  const [style, setStyle] = useState("");
  const [buildType, setBuildType] = useState("");
  const [useCase, setUseCase] = useState("");
  const [finished, setFinished] = useState(false);

  const [generatedImage, setGeneratedImage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageError, setImageError] = useState("");

  const selectOption = (option: Option) => {
    const newScores = { ...scores };

    Object.entries(option.points).forEach(([species, points]) => {
      newScores[species as Species] += points || 0;
    });

    setScores(newScores);

    if (option.archetype) setArchetype(option.archetype);
    if (option.environment) setEnvironment(option.environment);
    if (option.colorMood) setColorMood(option.colorMood);
    if (option.style) setStyle(option.style);
    if (option.buildType) setBuildType(option.buildType);
    if (option.useCase) setUseCase(option.useCase);

    if (currentStep === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentStep((step) => step + 1);
    }
  };

  const resultSpecies = (Object.entries(scores).sort(
    (a, b) => b[1] - a[1]
  )[0][0] || "Wolf") as Species;

  const result = speciesDetails[resultSpecies];

  const generateFursonaImage = async () => {
    try {
      setIsGenerating(true);
      setImageError("");

      const response = await fetch("/api/generate-fursona-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          species: `${environment ? `${environment} ` : ""}${resultSpecies}`,
          style: style || result.recommendedStyle,
          colorMood: colorMood || "Custom colors based on the character",
          environment: environment || "custom fantasy setting",
          buildType: buildType || result.defaultBuild,
          personality: archetype || result.personality,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Image generation failed.");
      }

      if (!data.image) {
        throw new Error("No image data was returned.");
      }

      setGeneratedImage(`data:image/png;base64,${data.image}`);
    } catch (error) {
      setImageError(
        error instanceof Error
          ? error.message
          : "Something went wrong while generating the image."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setScores({
      Wolf: 0,
      Fox: 0,
      "Red Panda": 0,
      Cat: 0,
      Dog: 0,
      Bunny: 0,
      Dragon: 0,
      Deer: 0,
      Lion: 0,
      Tiger: 0,
      Shark: 0,
      Bird: 0,
    });
    setArchetype("");
    setEnvironment("");
    setColorMood("");
    setStyle("");
    setBuildType("");
    setUseCase("");
    setFinished(false);
    setGeneratedImage("");
    setImageError("");
    setIsGenerating(false);
  };

  return (
    <main className="min-h-screen bg-background pt-32 text-foreground">
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Fursona Build Finder
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
            Find Your Fursuit Match
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Answer a few fursuit-focused questions and get a build direction
            based on species, character vibe, style, and how you want your suit
            to feel.
          </p>
        </div>

        {!finished ? (
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-card p-6 shadow-elevated md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-primary">
                Question {currentStep + 1} of {questions.length}
              </p>

              <p className="text-sm text-muted-foreground">
                {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </p>
            </div>

            <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{
                  width: `${((currentStep + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <h2 className="text-2xl font-bold">
              {questions[currentStep].question}
            </h2>

            <div className="mt-6 grid gap-3">
              {questions[currentStep].options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => selectOption(option)}
                  className="rounded-2xl border border-white/10 bg-background/40 px-5 py-4 text-left text-sm font-semibold transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-primary/25 bg-card shadow-elevated">
            <div className="bg-primary/10 p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Your Fursona Build Match
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {environment ? `${environment} ` : ""}
                {resultSpecies}
              </h2>

              <p className="mt-3 text-muted-foreground">{result.personality}</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Recommended Style
                  </p>
                  <p className="mt-2 font-semibold">
                    {style || result.recommendedStyle}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Best Build Type
                  </p>
                  <p className="mt-2 font-semibold">
                    {buildType || result.defaultBuild}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Color Mood
                  </p>
                  <p className="mt-2 font-semibold">
                    {colorMood || "Custom colors based on your character"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Character Direction
                  </p>
                  <p className="mt-2 font-semibold">
                    {archetype || result.personality}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-background/40 p-4 md:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Best For
                  </p>
                  <p className="mt-2 font-semibold">
                    {useCase ||
                      "Custom fursuit commissions and personal fursona builds"}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-background/40 p-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  {result.why}
                </p>
              </div>

              <button
                type="button"
                onClick={generateFursonaImage}
                disabled={isGenerating}
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-4 text-sm font-bold text-primary-foreground transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isGenerating
                  ? "Generating your fursona..."
                  : generatedImage
                  ? "Generate Another Version"
                  : "Generate Fursona Image"}
              </button>

              {imageError && (
                <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                  {imageError}
                </p>
              )}

              {generatedImage && (
                <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-background/40 p-3">
                  <img
                    src={generatedImage}
                    alt={`${resultSpecies} generated fursona concept`}
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/18555578702?text=${encodeURIComponent(
                    `Hi FurNFurry, I completed the Fursona Build Finder and got ${
                      environment ? `${environment} ` : ""
                    }${resultSpecies}. Can you help me turn this into a custom fursuit?`
                  )}`}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-primary px-5 py-4 text-sm font-bold text-primary-foreground transition hover:scale-[1.02]"
                >
                  Turn This Into My Fursuit
                </a>

                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/10 px-5 py-4 text-sm font-bold transition hover:border-primary/40 hover:text-primary"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}