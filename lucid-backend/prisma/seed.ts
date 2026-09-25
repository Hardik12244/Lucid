import prisma from "../src/lib/prisma.js";

const productsData = [
  {
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "headphones",
    price: 29990,
    description: "Premium over-ear headphones with excellent noise cancellation, a lightweight design, and up to 30 hours of battery life for travel, work, and daily listening.",
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
  },
  {
    name: "Bose QuietComfort 45",
    brand: "Bose",
    category: "headphones",
    price: 22990,
    description: "Comfort-focused noise-cancelling headphones with clear sound, reliable ANC, and a foldable design that works well for commuting and travel.",
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
  },
  {
    name: "Apple AirPods Pro (2nd Generation)",
    brand: "Apple",
    category: "earbuds",
    price: 24900,
    description: "Premium wireless earbuds with strong active noise cancellation, adaptive transparency mode, and seamless switching across Apple devices.",
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "smartphones",
    price: 129999,
    description: "Flagship Android phone with a bright display, versatile cameras, built-in AI tools, and an S Pen for productivity and note-taking.",
    imageUrl: "https://images.unsplash.com/photo-1706691459424-df3594ccf0e2?w=800&q=80",
  },
  {
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    category: "smartphones",
    price: 159900,
    description: "Premium iPhone with a titanium frame, powerful A17 Pro chip, advanced camera system, and excellent battery life for all-day use.",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
  },
  {
    name: "MacBook Pro 14-inch (M3 Pro)",
    brand: "Apple",
    category: "laptops",
    price: 199900,
    description: "Powerful 14-inch laptop for developers and creators, with a sharp Liquid Retina XDR display, long battery life, and M3 Pro performance.",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
  },
  {
    name: "Dell XPS 15",
    brand: "Dell",
    category: "laptops",
    price: 179900,
    description: "Premium Windows laptop with a high-resolution display, solid performance, and a compact chassis that suits both work and creative tasks.",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
  },
  {
    name: "Keychron Q1 Pro",
    brand: "Keychron",
    category: "keyboards",
    price: 15990,
    description: "A solid 75% wireless mechanical keyboard with hot-swappable switches, an aluminum case, and a strong enthusiast following.",
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
  },
  {
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    category: "mice",
    price: 10995,
    description: "A productivity mouse with quiet clicks, excellent ergonomics, and precise tracking for long work sessions.",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c3c9c?w=800&q=80",
  },
  {
    name: "LG UltraGear 27GL850-B",
    brand: "LG",
    category: "monitors",
    price: 27999,
    description: "27-inch QHD gaming monitor with a Nano IPS panel, fast response time, and NVIDIA G-SYNC compatibility for smooth play.",
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
  },
  {
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "smartwatches",
    price: 41900,
    description: "A capable smartwatch with a bright display, fast performance, fitness tracking, and useful health and safety features.",
    imageUrl: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80",
  },
];

const mockReviews = [
  { rating: 5, title: "Worth every penny", content: "Tight build quality, easy setup, and performance that feels genuinely premium in daily use.", source: "Amazon" },
  { rating: 4, title: "Very good overall", content: "Strong performance and a polished app experience, though the pricing is definitely on the high side.", source: "Reddit" },
  { rating: 3, title: "Solid with a few tradeoffs", content: "It gets the basics right, but there are a couple of compromises that keep it from being perfect.", source: "YouTube" },
  { rating: 5, title: "Instant recommendation", content: "Reliable, comfortable, and better than I expected after a week of use.", source: "Best Buy" },
  { rating: 2, title: "Did not age well", content: "Started out fine, but I noticed a few quirks that made it hard to justify the price.", source: "Google Reviews" },
];

const sonyReviews = [
  { rating: 5, title: "Still the best ANC I’ve tried", content: "The noise cancellation is excellent on flights and in the office, and the default tuning sounds polished without needing much EQ.", source: "Amazon" },
  { rating: 4, title: "Comfortable for all-day use", content: "They are light and comfortable for long sessions, but the non-folding case is less convenient in a backpack.", source: "Reddit" },
  { rating: 5, title: "Balanced sound and great calls", content: "Mic quality is cleaner than the previous model and the sound feels refined right out of the box.", source: "YouTube" },
  { rating: 4, title: "Battery life is genuinely strong", content: "I’m getting close to the advertised 30 hours and the quick charge has saved me a few times.", source: "Best Buy" },
  { rating: 5, title: "Worth the premium for travel", content: "These are fantastic for commuting and flights because the ANC is so effective and the headphones feel very light.", source: "Amazon" },
  { rating: 3, title: "Great sound, but the case is bulkier", content: "I love the sound and comfort, but the non-folding design makes them harder to pack than my old pair.", source: "Reddit" },
];

const airpodsReviews = [
  { rating: 5, title: "Best everyday earbuds I’ve owned", content: "The ANC is noticeably stronger than my previous pair, and they stay comfortable on long commutes. Pairing with my iPhone took seconds.", source: "Amazon" },
  { rating: 4, title: "Excellent with iPhone, just pricey", content: "They sound clean, the transparency mode feels natural, and switching between my devices is effortless.", source: "Reddit" },
  { rating: 5, title: "The stem controls are genuinely useful", content: "Volume swipes, conversation awareness, and the improved mic quality make these feel like a proper upgrade, not just a refresh.", source: "YouTube" },
  { rating: 4, title: "Great fit after trying the XS tips", content: "Once I found the right tip size, the seal was excellent and the noise cancellation improved a lot. Battery life is good for a workday but not amazing.", source: "Apple Store" },
  { rating: 5, title: "Worth the upgrade from Gen 1", content: "The improved ANC and smoother transitions between my MacBook and iPhone are exactly what I wanted. Calls also sound clearer on the other end.", source: "Amazon" },
  { rating: 4, title: "Premium feel, but the case still scratches", content: "I’ve been using them daily for a month and the sound is excellent. My only complaint is that the glossy case shows wear very quickly.", source: "Reddit" },
];

async function main() {
  console.log("Starting database seeding...");

  // Create a default user for reviews if not exists
  let seedUser = await prisma.user.findUnique({
    where: { email: "seed@example.com" }
  });

  if (!seedUser) {
    seedUser = await prisma.user.create({
      data: {
        id: "seed_user_1",
        name: "Test Reviewer",
        email: "seed@example.com",
        emailVerified: true
      }
    });
  }

  // Clear existing reviews to ensure clean slate
  await prisma.review.deleteMany();

  for (const p of productsData) {
    let product = await prisma.product.findFirst({
      where: { name: p.name }
    });

    if (!product) {
      product = await prisma.product.create({
        data: {
          name: p.name,
          brand: p.brand,
          category: p.category,
          price: p.price,
          description: p.description,
          imageUrl: p.imageUrl
        }
      });
      console.log(`Created product: ${product.name}`);
    } else {
      product = await prisma.product.update({
        where: { id: product.id },
        data: {
          brand: p.brand,
          category: p.category,
          price: p.price,
          description: p.description,
          imageUrl: p.imageUrl
        }
      });
      console.log(`Updated product: ${product.name}`);
    }

    // Insert targeted reviews for specific products, and generic for the rest
    let reviewsToInsert = mockReviews;
    if (p.name === "Sony WH-1000XM5") {
      reviewsToInsert = sonyReviews;
    } else if (p.name === "Apple AirPods Pro (2nd Generation)") {
      reviewsToInsert = airpodsReviews;
    } else {
      // Pick 3-5 random mock reviews for generic products
      const numReviews = Math.floor(Math.random() * 3) + 3;
      reviewsToInsert = [...mockReviews].sort(() => 0.5 - Math.random()).slice(0, numReviews);
    }
    
    for (const r of reviewsToInsert) {
      await prisma.review.create({
        data: {
          rating: r.rating,
          title: r.title,
          content: r.content,
          source: r.source,
          productId: product.id,
          userId: seedUser.id
        }
      });
    }
    console.log(`Added ${reviewsToInsert.length} reviews for: ${product.name}`);
  }

  console.log("Seeding finished successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
