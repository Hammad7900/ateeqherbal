const rawProducts = [
  {
    id: "ashwagandha-capsules",
    name: "Ashwagandha Capsules",
    category: "supplements",
    price: 2499,
    rating: 4.5,
    reviews: 128,
    badge: "Best Seller",
    bestSeller: true,
    image: "/images/products/ashwagandha-capsules.png",
    bullets: [
      "Made with Pure Ashwagandha Root",
      "Supports Stress Relief & Calm",
      "Best For Daily Energy & Strength",
      "Easy to Take Daily Capsules",
    ],
    sizes: [
      { label: "30 CAPSULES", price: 2499 },
      { label: "60 CAPSULES (FREE SHIPPING)", price: 4499 },
    ],
    description:
      "Support your calm and energy with our 100% natural Ashwagandha Capsules.\n\nMade from pure ashwagandha root, these capsules are designed to help you manage everyday stress, support strength and stamina, and feel balanced through your day.",
    descriptionUr:
      "ہمارے 100% قدرتی اشوگندھا کیپسول کے ساتھ سکون اور توانائی حاصل کریں۔ خالص اشوگندھا کی جڑ سے تیار کردہ، یہ کیپسول روزمرہ کی تھکن اور تناؤ میں کمی، طاقت اور ہمت میں اضافے، اور دن بھر توازن برقرار رکھنے میں مدد کے لیے بنائے گئے ہیں۔",
    ingredients: "Ashwagandha root extract, vegetable capsule shell.",
    howToUse: "Take 1 capsule twice a day after meals with water.",
  },
  {
    id: "moringa-powder",
    name: "Moringa Powder",
    category: "herbal-powders",
    price: 1999,
    rating: 4.5,
    reviews: 96,
    bestSeller: true,
    image: "/images/products/moringa-powder.png",
    bullets: [
      "Made from Pure Moringa Leaves",
      "Rich in Natural Nutrients",
      "Supports Daily Energy & Wellness",
      "No Added Sugar or Preservatives",
    ],
    sizes: [
      { label: "100 GRAM", price: 1999 },
      { label: "250 GRAM (FREE SHIPPING)", price: 3999 },
    ],
    description:
      "Add a boost of nature to your day with our 100% pure Moringa Powder.\n\nMade from carefully dried moringa leaves, it is packed with natural nutrients and is easy to add to water, smoothies, or your daily meals.",
    descriptionUr:
      "ہمارے 100% خالص موریںگا پاؤڈر کے ساتھ اپنے دن کو قدرتی توانائی دیں۔ احتیاط سے خشک کیے گئے موریںگا کے پتوں سے تیار کردہ، یہ قدرتی غذائی اجزا سے بھرپور ہے اور پانی، اسموتھی یا روزمرہ کے کھانوں میں آسانی سے شامل کیا جا سکتا ہے۔",
    ingredients: "100% dried moringa leaf powder.",
    howToUse: "Mix 1 teaspoon in a glass of water or a smoothie once a day.",
  },
  {
    id: "neem-oil",
    name: "Neem Oil",
    category: "essential-oils",
    price: 1899,
    rating: 4.5,
    reviews: 75,
    bestSeller: true,
    image: "/images/products/neem-oil.png",
    bullets: [
      "100% Pure Cold Pressed Neem Oil",
      "Best For Skin & Hair Care",
      "Natural Botanical Care",
      "No Harsh Chemicals",
    ],
    sizes: [
      { label: "30 ML", price: 1899 },
      { label: "50 ML (FREE SHIPPING)", price: 2799 },
      { label: "100 ML (FREE SHIPPING)", price: 4599 },
    ],
    description:
      "Experience traditional care with our 100% pure Neem Oil.\n\nCold pressed from neem seeds, it is made for everyday skin and hair care, and can be used on its own or mixed with your favourite carrier oil.",
    descriptionUr:
      "ہمارے 100% خالص نیم کے تیل کے ساتھ روایتی دیکھ بھال کا تجربہ کریں۔ نیم کے بیجوں سے کولڈ پریس کیا گیا یہ تیل جلد اور بالوں کی روزمرہ نگہداشت کے لیے ہے، اور اسے اکیلے یا اپنے پسندیدہ کیریئر آئل کے ساتھ ملا کر استعمال کیا جا سکتا ہے۔",
    ingredients: "100% cold pressed neem seed oil.",
    howToUse: "Mix a few drops with a carrier oil and apply to skin or scalp. Do a patch test first.",
  },
  {
    id: "detox-herbal-tea",
    name: "Detox Herbal Tea",
    category: "herbal-teas",
    price: 1499,
    rating: 4.5,
    reviews: 112,
    bestSeller: true,
    image: "/images/products/detox-herbal-tea.png",
    bullets: [
      "Blend of Natural Herbs",
      "Caffeine Free",
      "Light & Refreshing Taste",
      "Supports Daily Digestion & Wellness",
    ],
    sizes: [
      { label: "20 TEA BAGS", price: 1499 },
      { label: "40 TEA BAGS (FREE SHIPPING)", price: 2699 },
    ],
    description:
      "Refresh your day with our Detox Herbal Tea.\n\nA soothing blend of natural herbs, it is caffeine free and made to be enjoyed warm after meals or any time you want a calm, light cup.",
    descriptionUr:
      "ہمارے ڈیٹاکس ہربل ٹی کے ساتھ اپنے دن کو تازگی دیں۔ قدرتی جڑی بوٹیوں کا یہ پرسکون امتزاج کیفین سے پاک ہے اور کھانے کے بعد یا کسی بھی وقت ہلکی اور آرام دہ چائے کے لیے تیار کیا گیا ہے۔",
    ingredients: "Natural herbal blend. Caffeine free.",
    howToUse: "Steep 1 tea bag in hot water for 3 to 5 minutes. Drink 1 to 2 cups a day.",
  },
  {
    id: "aloe-vera-gel",
    name: "Aloe Vera Gel",
    category: "personal-care",
    price: 1699,
    rating: 4.5,
    reviews: 58,
    badge: "New",
    bestSeller: true,
    image: "/images/products/aloe-vera-gel.png",
    bullets: [
      "Made with Pure Aloe Vera",
      "Light, Non-Sticky Gel",
      "Soothes & Hydrates Skin",
      "For Face, Body & Hair",
    ],
    sizes: [
      { label: "100 ML", price: 1699 },
      { label: "200 ML (FREE SHIPPING)", price: 2999 },
    ],
    description:
      "Cool, soothe and hydrate with our pure Aloe Vera Gel.\n\nLight and non-sticky, it absorbs quickly and can be used on your face, body and hair as part of your daily care.",
    descriptionUr:
      "ہمارے خالص ایلو ویرا جیل کے ساتھ جلد کو ٹھنڈک، سکون اور نمی دیں۔ ہلکا اور چپچپاہٹ سے پاک یہ جیل جلدی جذب ہو جاتا ہے اور روزمرہ نگہداشت کے لیے چہرے، جسم اور بالوں پر استعمال کیا جا سکتا ہے۔",
    ingredients: "Aloe vera gel, glycerin, vitamin E.",
    howToUse: "Apply a thin layer on clean skin or hair. Use daily as needed.",
  },
  {
    id: "turmeric-capsules",
    name: "Turmeric Capsules",
    category: "supplements",
    price: 2299,
    rating: 4,
    reviews: 84,
    bestSeller: true,
    image: "/images/products/turmeric-capsules.png",
    bullets: [
      "Made with Natural Turmeric",
      "Supports Joint and Immune Health",
      "Easy to Take Daily Capsules",
    ],
    sizes: [
      { label: "30 CAPSULES", price: 2299 },
      { label: "60 CAPSULES (FREE SHIPPING)", price: 3999 },
    ],
    description:
      "Daily support from 100% natural turmeric in easy capsules.\n\nMade from premium turmeric root, these capsules are designed to support your joints, immunity and everyday wellness.",
    descriptionUr:
      "100% قدرتی ہلدی سے تیار کردہ یہ کیپسول روزانہ استعمال کے لیے آسان ہیں۔ پریمیم ہلدی کی جڑ سے بنے یہ کیپسول آپ کے جوڑوں، قوتِ مدافعت اور روزمرہ صحت میں مدد کے لیے تیار کیے گئے ہیں۔",
    ingredients: "Turmeric root extract, vegetable capsule shell.",
    howToUse: "Take 1 capsule twice a day after meals.",
  },
  {
    id: "joint-ease",
    name: "Joint Ease",
    category: "essential-oils",
    price: 1900,
    rating: 5,
    reviews: 762,
    image: "/images/products/joint-ease.png",
    images: [
      "/images/products/joint-ease.png",
      "/images/products/joint-ease-2.png",
      "/images/products/joint-ease-3.png",
      "/images/products/joint-ease-4.png",
    ],
    bullets: [
      "Comfort & Care in Every Drop",
      "Made with Natural Botanicals",
      "Best For All Joint Pain",
      "Supports Relaxation & Everyday Wellness",
    ],
    sizes: [
      { label: "30 ML", price: 1900 },
      { label: "50 ML (FREE SHIPPING)", price: 2900 },
      { label: "100 ML (FREE SHIPPING)", price: 4900 },
    ],
    description:
      "Experience soothing comfort with our 100% natural Relief Oil.\n\nCrafted with a blend of premium botanicals, it's designed to help you unwind, relax tired areas, and support everyday ease of movement, so you can feel your best and enjoy the moments that matter.",
    descriptionUr:
      "ہمارے 100% قدرتی ریلیف آئل کے ساتھ آرام دہ سکون کا تجربہ کریں۔ پریمیم بوٹینیکلز کے امتزاج کے ساتھ تیار کردہ، یہ آپ کو آرام کرنے، تھکے ہوئے علاقوں کو آرام دینے، اور روزمرہ کی نقل و حرکت میں آسانی کے لیے ڈیزائن کیا گیا ہے۔",
    ingredients: "Yahan ingredients likhein.",
    howToUse: "Yahan istemal ka tareeqa likhein.",
  },
];
// Jin products mein images ki list nahi, unke liye automatic 3 choti pics:
// name.png, name-2.png, name-3.png
const withGallery = (p) => {
  if (p.images || !p.image) return p;
  const ext = p.image.slice(p.image.lastIndexOf("."));
  const base = p.image.slice(0, -ext.length);
  return { ...p, images: [p.image, `${base}-2${ext}`, `${base}-3${ext}`] };
};

export const products = rawProducts.map(withGallery);

export const categoryNames = {
  supplements: "Supplements",
  "herbal-powders": "Herbal Powders",
  "essential-oils": "Essential Oils",
  "herbal-teas": "Herbal Teas",
  "personal-care": "Personal Care",
  wellness: "Wellness",
};