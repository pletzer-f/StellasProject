export const images = {
  heroTrain: "/moodboard/hero-training.jpg",
  heroFood: "/moodboard/food-omelette-toast.jpg",
  heroNature: "/moodboard/nature-tree.jpg",
  yoga: "/moodboard/yoga-lunge.jpg",
  garden: "/moodboard/nature-vegetable-garden.jpg",
  smoothie: "/moodboard/smoothie-color.jpg",
  trainWide: "/moodboard/train-floor.jpg",
  trainPortrait: "/moodboard/train-trx.jpg",
  foodAlt: "/moodboard/food-avocado-egg.jpg",
  natureAlt: "/moodboard/nature-red-house.jpg",
};

export const homeVisualFeed = [
  "/moodboard/train-jumprope.jpg",
  "/moodboard/train-trx.jpg",
  "/moodboard/train-stretch.jpg",
  "/moodboard/food-omelette-toast.jpg",
  "/moodboard/food-beet-pasta.jpg",
  "/moodboard/food-yogurt-berries.jpg",
  "/moodboard/nature-tree.jpg",
  "/moodboard/nature-red-house.jpg",
  "/moodboard/nature-vegetable-garden.jpg",
] as const;

export const communityTickerStats = [
  { label: "Instagram community", value: 312450 },
  { label: "weekly check-ins", value: 2940 },
  { label: "moodboard uploads", value: 418 },
  { label: "countries", value: 38 },
] as const;

export const communityTickerTape = [
  "Lisa, Berlin uploaded a recovery walk ritual",
  "Mia, Stockholm shared a protein-first breakfast plate",
  "Nora, Vienna completed 5 planned sessions this week",
  "Emma, Copenhagen added her Sunday reset setup",
  "Klara, Zurich logged 4 days of hydration targets",
] as const;

export const socialMoodboard = [
  {
    id: "mb01",
    image: "/moodboard/train-jumprope.jpg",
    title: "Jump rope primer",
    tag: "training",
  },
  {
    id: "mb02",
    image: "/moodboard/train-trx.jpg",
    title: "Cable pulling sequence",
    tag: "training",
  },
  {
    id: "mb03",
    image: "/moodboard/food-omelette-toast.jpg",
    title: "Protein-first breakfast",
    tag: "nutrition",
  },
  {
    id: "mb04",
    image: "/moodboard/food-beet-pasta.jpg",
    title: "Beetroot pasta plate",
    tag: "nutrition",
  },
  {
    id: "mb05",
    image: "/moodboard/nature-red-house.jpg",
    title: "Nordic evening setting",
    tag: "lifestyle",
  },
  {
    id: "mb06",
    image: "/moodboard/yoga-lunge.jpg",
    title: "Open-air mobility",
    tag: "recovery",
  },
  {
    id: "mb07",
    image: "/moodboard/food-yogurt-berries.jpg",
    title: "Yogurt and berries",
    tag: "nutrition",
  },
  {
    id: "mb08",
    image: "/moodboard/nature-tree.jpg",
    title: "Green space reset",
    tag: "lifestyle",
  },
  {
    id: "mb09",
    image: "/moodboard/yoga-meditation-coast.jpg",
    title: "Coastal breathwork",
    tag: "recovery",
  },
  {
    id: "mb10",
    image: "/moodboard/train-floor.jpg",
    title: "Post-session floor stretch",
    tag: "training",
  },
  {
    id: "mb11",
    image: "/moodboard/smoothie-banana-date.jpg",
    title: "Smoothie prep",
    tag: "nutrition",
  },
  {
    id: "mb12",
    image: "/moodboard/nature-vegetable-garden.jpg",
    title: "Garden sourcing",
    tag: "lifestyle",
  },
] as const;

export const featuredCommunityPosts = [
  {
    id: "cm01",
    image: "/moodboard/yoga-prayer-sea.jpg",
    name: "Sofia",
    city: "Barcelona",
    caption: "Sunrise breathwork before emails.",
  },
  {
    id: "cm02",
    image: "/moodboard/smoothie-green.jpg",
    name: "Helena",
    city: "Oslo",
    caption: "Green blend after strength day.",
  },
  {
    id: "cm03",
    image: "/moodboard/food-salmon-bowl.jpg",
    name: "Marta",
    city: "Milan",
    caption: "Simple salmon bowl for lunch consistency.",
  },
] as const;

export const homePillars = [
  {
    key: "train",
    label: "Train",
    title: "Structured workouts, zero noise.",
    statement: "Short sessions. Measurable progression. Premium coaching tone.",
    metricLabel: "Weekly cadence",
    metricValue: "5 sessions",
    image: images.heroTrain,
  },
  {
    key: "fuel",
    label: "Fuel",
    title: "Nutrition that looks good and works.",
    statement: "Protein-first plates and anti-inflammatory rhythm for real life.",
    metricLabel: "Protocol match",
    metricValue: "92%",
    image: images.heroFood,
  },
  {
    key: "reset",
    label: "Reset",
    title: "Calm nervous system, sharper output.",
    statement: "Meditation and mobility routines to sustain consistency.",
    metricLabel: "Daily reset",
    metricValue: "10 min",
    image: images.yoga,
  },
] as const;

export const workoutPrograms = [
  {
    title: "Sculpt Protocol",
    detail: "Low-impact strength for posture, core and lower body.",
    length: "34 min",
    level: "Intermediate",
    image: "/moodboard/train-cable.jpg",
  },
  {
    title: "Longevity Cardio",
    detail: "Zone-2 foundation for energy, recovery and metabolic flexibility.",
    length: "45 min",
    level: "All levels",
    image: "/moodboard/train-jumprope.jpg",
  },
  {
    title: "Mobility Reset",
    detail: "Breath-led mobility for hips, spine and shoulder decompression.",
    length: "18 min",
    level: "Beginner",
    image: "/moodboard/yoga-headstand.jpg",
  },
];

export const recipes = [
  {
    id: "r1",
    name: "Nordic Egg Plate",
    meal: "breakfast",
    time: "10 min",
    protein: "32g",
    image: "/moodboard/food-avocado-egg.jpg",
    ingredients: ["eggs", "cottage cheese", "tomatoes", "olive oil"],
  },
  {
    id: "r2",
    name: "Salmon Recovery Bowl",
    meal: "lunch",
    time: "20 min",
    protein: "38g",
    image: "/moodboard/food-salmon-bowl.jpg",
    ingredients: ["salmon", "quinoa", "greens", "lemon"],
  },
  {
    id: "r3",
    name: "Beet Pasta Lift",
    meal: "dinner",
    time: "24 min",
    protein: "29g",
    image: "/moodboard/food-beet-pasta.jpg",
    ingredients: ["beetroot", "feta", "whole wheat pasta", "mint"],
  },
  {
    id: "r4",
    name: "Berry Yogurt Crunch",
    meal: "snack",
    time: "6 min",
    protein: "18g",
    image: "/moodboard/food-yogurt-berries.jpg",
    ingredients: ["greek yogurt", "berries", "nuts", "chia"],
  },
] as const;

export const insightDeck = [
  {
    title: "Meal order beats meal size.",
    line: "Eat protein and fiber first. Glucose stability follows.",
    action: "Start your next meal with protein + greens.",
    tag: "Glycemic control",
  },
  {
    title: "Sleep timing is performance architecture.",
    line: "Consistency is a stronger signal than occasional long sleep.",
    action: "Keep wake time within a 30-minute window.",
    tag: "Circadian rhythm",
  },
  {
    title: "Low-intensity movement scales better.",
    line: "Daily zone-2 builds endurance without stress overload.",
    action: "Accumulate 40 minutes of low-intensity cardio.",
    tag: "Cardio base",
  },
  {
    title: "Structure removes decision fatigue.",
    line: "Plan tomorrow tonight. Better execution, less friction.",
    action: "Write your top 3 health actions before bed.",
    tag: "Behavior design",
  },
] as const;

export function todayInsightIndex() {
  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - yearStart.getTime()) / 86_400_000);
  return dayOfYear % insightDeck.length;
}
