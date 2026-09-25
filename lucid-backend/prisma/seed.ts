import prisma from "../src/lib/prisma.js";

const productsData = [
  {
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "headphones",
    price: 399.99,
    description: "Premium over-ear headphones with class-leading noise cancellation, a lightweight fit, and adaptive sound control for travel, work, and long listening sessions.",
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
  },
  {
    name: "Bose QuietComfort 45",
    brand: "Bose",
    category: "headphones",
    price: 329.0,
    description: "Iconic quiet. Comfort. And sound. The first noise cancelling headphones are back, now with lightweight materials.",
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
  },
  {
    name: "Apple AirPods Pro (2nd Generation)",
    brand: "Apple",
    category: "earbuds",
    price: 249.99,
    description: "Premium wireless earbuds with strong active noise cancellation, adaptive transparency, and effortless Apple device switching.",
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "smartphones",
    price: 1299.99,
    description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility.",
    imageUrl: "https://images.unsplash.com/photo-1706691459424-df3594ccf0e2?w=800&q=80",
  },
  {
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    category: "smartphones",
    price: 1199.0,
    description: "Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
  },
  {
    name: "MacBook Pro 14-inch (M3 Pro)",
    brand: "Apple",
    category: "laptops",
    price: 1999.0,
    description: "The 14-inch MacBook Pro blasts forward with M3 Pro and M3 Max, radically advanced chips that drive even greater performance for more demanding workflows.",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
  },
  {
    name: "Dell XPS 15",
    brand: "Dell",
    category: "laptops",
    price: 1499.0,
    description: "The XPS 15 is a perfect balance of power and portability with an unrivaled visual experience.",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
  },
  {
    name: "Keychron Q1 Pro",
    brand: "Keychron",
    category: "keyboards",
    price: 199.0,
    description: "A fully customizable 75% layout wireless custom mechanical keyboard.",
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
  },
  {
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    category: "mice",
    price: 99.99,
    description: "An iconic mouse remastered for ultimate tactility, performance, and flow.",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c3c9c?w=800&q=80",
  },
  {
    name: "LG UltraGear 27GL850-B",
    brand: "LG",
    category: "monitors",
    price: 349.99,
    description: "27 Inch Ultragear QHD Nano IPS 1ms NVIDIA G-SYNC Compatible Gaming Monitor.",
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
  },
  {
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "smartwatches",
    price: 399.0,
    description: "A healthy leap ahead. With the S9 chip, a bright new display, and a magical new way to use your watch without touching the screen.",
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
