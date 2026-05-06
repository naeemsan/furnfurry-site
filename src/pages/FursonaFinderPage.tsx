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
    question: "What kind of body shape feels closest to your character?",
    options: [
      {
        label: "Slim and agile",
        points: { Fox: 2, Cat: 2, Shark: 1 },
      },
      {
        label: "Fluffy and soft",
        points: { Bunny: 2, "Red Panda": 2, Dog: 1 },
      },
      {
        label: "Strong and powerful",
        points: { Wolf: 2, Lion: 2, Tiger: 2, Dragon: 1 },
      },
      {
        label: "Small and cute",
        points: { Bunny: 2, Cat: 1, "Red Panda": 2 },
      },
      {
        label: "Tall and elegant",
        points: { Deer: 2, Bird: 2, Dragon: 1 },
      },
    ],
  },
  {
    question: "Which visual direction do you like most?",
    options: [
      {
        label: "Cute and expressive",
        points: { Bunny: 2, "Red Panda": 2, Cat: 1, Fox: 1 },
      },
      {
        label: "Cartoon mascot style",
        points: { Dog: 2, Fox: 1, Wolf: 1, Tiger: 1 },
      },
      {
        label: "Natural animal-inspired look",
        points: { Wolf: 2, Deer: 2, Tiger: 1, Lion: 1 },
      },
      {
        label: "Fantasy and high-detail design",
        points: { Dragon: 3, Bird: 1, Shark: 1 },
      },
      {
        label: "Soft plushy character look",
        points: { Bunny: 2, Dog: 1, "Red Panda": 2 },
      },
    ],
  },
  {
    question: "Which color vibe fits your character best?",
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
    buildType: string;
    suitFeel: string;
    defaultColorMood: string;
    bestFor: string;
    why: string;
  }
> = {
  Wolf: {
    personality: "Loyal, bold, protective, and confident.",
    recommendedStyle: "Semi-realistic",
    buildType: "Athletic digitigrade full suit",
    suitFeel: "Strong proportions with bold markings",
    defaultColorMood: "Grey, black, white, and cold forest tones",
    bestFor: "Conventions and public meets",
    why: "Wolf characters feel powerful and memorable with sharp markings, larger tails, and confident body language.",
  },
  Fox: {
    personality: "Clever, stylish, playful, and mysterious.",
    recommendedStyle: "Kemono",
    buildType: "Digitigrade partial or full suit",
    suitFeel: "Soft, fluffy, expressive, and lightweight",
    defaultColorMood: "Bright oranges, white fur, and soft cream tones",
    bestFor: "Photoshoots and content creation",
    why: "Fox fursonas work best with expressive eyes, fluffy cheek fur, elegant tails, and energetic personalities.",
  },
  "Red Panda": {
    personality: "Soft, friendly, cute, and expressive.",
    recommendedStyle: "Kemono",
    buildType: "Soft partial or full suit",
    suitFeel: "Rounded, cozy, warm, and approachable",
    defaultColorMood: "Warm red-brown, cream, white, and soft tan",
    bestFor: "Cute aesthetic content and meetups",
    why: "Red panda fursonas are perfect for warm character designs with soft expressions, rounded features, and gentle friendly energy.",
  },
  Cat: {
    personality: "Playful, stylish, curious, and expressive.",
    recommendedStyle: "Toony",
    buildType: "Lightweight partial suit",
    suitFeel: "Cute, playful, and convention friendly",
    defaultColorMood: "Soft pastel shades and warm tones",
    bestFor: "Casual events and social content",
    why: "Cat fursonas look adorable with rounded shapes, oversized expressions, sleek markings, and colorful playful designs.",
  },
  Dog: {
    personality: "Friendly, loyal, cheerful, and energetic.",
    recommendedStyle: "Kemono",
    buildType: "Lightweight convention partial suit",
    suitFeel: "Friendly, soft, and expressive",
    defaultColorMood: "Warm browns, cream, white, and playful colors",
    bestFor: "Conventions and streaming content",
    why: "Dog fursonas are universally lovable with fluffy ears, wagging tails, and cheerful expressive designs.",
  },
  Bunny: {
    personality: "Soft, cute, gentle, and charming.",
    recommendedStyle: "Kemono",
    buildType: "Soft plush partial or full suit",
    suitFeel: "Ultra soft, cuddly, and rounded",
    defaultColorMood: "White, pink, cream, and pastel lavender",
    bestFor: "Cute aesthetic content and meetups",
    why: "Bunny designs shine with fluffy cheeks, oversized ears, soft colors, and cozy plush styling.",
  },
  Dragon: {
    personality: "Powerful, fantasy-inspired, bold, and dramatic.",
    recommendedStyle: "Fantasy semi-realistic",
    buildType: "Large full body digitigrade suit",
    suitFeel: "Massive, detailed, and cinematic",
    defaultColorMood: "Black, crimson, gold, and deep jewel tones",
    bestFor: "Stage performances and showcases",
    why: "Dragon suits look incredible with large horns, layered details, glowing accents, and dramatic proportions.",
  },
  Deer: {
    personality: "Elegant, calm, graceful, and nature-inspired.",
    recommendedStyle: "Semi-realistic",
    buildType: "Elegant plantigrade full suit",
    suitFeel: "Natural, graceful, and lightweight",
    defaultColorMood: "Brown, cream, forest green, and gold",
    bestFor: "Nature aesthetics and photography",
    why: "Deer fursonas feel elegant with softer shapes, graceful poses, antlers, and earthy natural palettes.",
  },
  Lion: {
    personality: "Royal, confident, strong, and proud.",
    recommendedStyle: "Toony mascot",
    buildType: "Bold full body suit",
    suitFeel: "Powerful, friendly, and stage-ready",
    defaultColorMood: "Gold, cream, brown, and warm royal tones",
    bestFor: "Mascot or business use",
    why: "Lion fursonas create a strong mascot-like presence with bold shapes, powerful personality, and eye-catching silhouettes.",
  },
  Tiger: {
    personality: "Energetic, fierce, bold, and eye-catching.",
    recommendedStyle: "Semi-realistic",
    buildType: "Digitigrade partial or full suit",
    suitFeel: "Bold, athletic, and high-contrast",
    defaultColorMood: "Orange, black, white, and warm contrast tones",
    bestFor: "Conventions and performance content",
    why: "Tiger fursonas stand out because stripes, contrast, and warm colors create instant visual impact.",
  },
  Shark: {
    personality: "Sporty, bold, playful, and unique.",
    recommendedStyle: "Toony",
    buildType: "Slim aquatic partial suit",
    suitFeel: "Sporty, smooth, and playful",
    defaultColorMood: "Ocean blue, cyan, grey, and white",
    bestFor: "Online content and conventions",
    why: "Shark fursonas feel memorable and unique, especially with ocean colors, smooth shapes, and confident expressions.",
  },
  Bird: {
    personality: "Bright, expressive, creative, and energetic.",
    recommendedStyle: "Toony",
    buildType: "Lightweight partial suit with feather details",
    suitFeel: "Colorful, expressive, and animated",
    defaultColorMood: "Bright colors, soft gradients, and clean contrast",
    bestFor: "Colorful content and character performance",
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
    if (option.useCase) setUseCase(option.useCase);

    setGeneratedImage("");
    setImageError("");

    if (currentStep === questions.length - 1) {
  setFinished(true);

  setTimeout(() => {
    generateFursonaImage();
  }, 800);

} else {
  setCurrentStep((step) => step + 1);
}

  const resultSpecies = (Object.entries(scores).sort(
    (a, b) => b[1] - a[1]
  )[0][0] || "Wolf") as Species;

  const result = speciesDetails[resultSpecies];

  const resultTitle = `${environment ? `${environment} ` : ""}${resultSpecies}`;

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
          species: resultTitle,
          style: result.recommendedStyle,
          colorMood: colorMood || result.defaultColorMood,
          environment: environment || "custom fantasy setting",
          buildType: result.buildType,
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

              <h2 className="mt-3 text-4xl font-bold">{resultTitle}</h2>

              <p className="mt-3 text-muted-foreground">{result.personality}</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Recommended Style
                  </p>
                  <p className="mt-2 font-semibold">
                    {result.recommendedStyle}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Best Build Type
                  </p>
                  <p className="mt-2 font-semibold">{result.buildType}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Suit Feel
                  </p>
                  <p className="mt-2 font-semibold">{result.suitFeel}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Color Mood
                  </p>
                  <p className="mt-2 font-semibold">
                    {colorMood || result.defaultColorMood}
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

                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Best For
                  </p>
                  <p className="mt-2 font-semibold">
                    {useCase || result.bestFor}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-background/40 p-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  {result.why}
                </p>
              </div>

              
              {imageError && (
                <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                  {imageError}
                </p>
              )}
              
            {isGenerating && (
            <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center">
    
             <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />

            <h3 className="mt-6 text-2xl font-bold">
             Creating Your Fursona...
              </h3>

              <p className="mt-3 text-muted-foreground">
              Analyzing personality, style, and character energy.
             </p>

               <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p>Generating fur textures...</p>
             <p>Building facial expressions...</p>
           <p>Matching your aesthetic...</p>
       </div>
     </div>
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
                    `Hi FurNFurry, I completed the Fursona Build Finder and got ${resultTitle}. Can you help me turn this into a custom fursuit?`
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