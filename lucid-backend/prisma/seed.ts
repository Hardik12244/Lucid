import prisma from "../src/lib/prisma.js";

const productsData = [
  {
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "headphones",
    price: 398.0,
    description: "Industry leading noise canceling headphones with multiple microphones and auto noise canceling optimization.",
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
    price: 249.0,
    description: "Rich, high-quality audio and voice with Active Noise Cancellation.",
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
  { rating: 5, title: "Great product", content: "[Demo Review] Does exactly what it says. Very satisfied.", source: "Demo-Store" },
  { rating: 4, title: "Good but pricey", content: "[Demo Review] Solid build quality, but maybe a bit expensive.", source: "Demo-Tech" },
  { rating: 3, title: "Average", content: "[Demo Review] It's okay. Nothing special.", source: "Demo-Forum" },
  { rating: 5, title: "Excellent", content: "[Demo Review] Highly recommended!", source: "Demo-Store" },
  { rating: 2, title: "Disappointed", content: "[Demo Review] Had some issues after a week. Not the best.", source: "Demo-Tech" },
];

const sonyReviews = [
  { rating: 5, title: "Best ANC on the market", content: "[Demo Review] The noise cancellation on the WH-1000XM5 is simply unparalleled. It blocks out airplane engine noise flawlessly.", source: "Demo-Tech-Reddit" },
  { rating: 4, title: "Comfortable but less portable", content: "[Demo Review] They are incredibly comfortable for long sessions. However, the new case design doesn't fold, making them bulkier in a backpack.", source: "Demo-Video-Reviews" },
  { rating: 5, title: "Superb sound quality", content: "[Demo Review] The audio profile is very balanced out of the box, and the EQ in the app lets you tune it perfectly. Call quality is also a huge step up from the XM4.", source: "Demo-Store" },
  { rating: 3, title: "Auto-ANC can be annoying", content: "[Demo Review] I dislike that you cannot manually max out the ANC anymore. The auto-optimizer sometimes lowers the ANC when I don't want it to.", source: "Demo-Audio-Forum" },
  { rating: 4, title: "Great battery life", content: "[Demo Review] easily getting 30 hours of playback. The quick charge feature is also a lifesaver when I forget to plug them in.", source: "Demo-Store" },
  { rating: 5, title: "Lightweight and sleek", content: "[Demo Review] The new design is much sleeker and the headband is very comfortable on the crown of my head.", source: "Demo-Tech-Reddit" },
];

const airpodsReviews = [
  { rating: 5, title: "Huge upgrade over Gen 1", content: "[Demo Review] The ANC on the AirPods Pro 2 is easily twice as good as the first generation. Volume swipe controls on the stem are a game changer.", source: "Demo-Tech-Reddit" },
  { rating: 5, title: "Seamless Apple ecosystem integration", content: "[Demo Review] As expected, switching between my iPhone, iPad, and Mac is flawless. The H2 chip makes pairing instantaneous.", source: "Demo-Video-Reviews" },
  { rating: 4, title: "Good fit, finally", content: "[Demo Review] The addition of the XS ear tips means these finally stay securely in my ears while running.", source: "Demo-Store" },
  { rating: 3, title: "Case gets scratched easily", content: "[Demo Review] The glossy white case scuffs if you just look at it wrong. Highly recommend getting a protective cover.", source: "Demo-Forum" },
  { rating: 5, title: "Transparency mode is magic", content: "[Demo Review] Adaptive transparency is incredible. It lets ambient sound in perfectly while dampening loud construction noises.", source: "Demo-Audio-Blog" },
  { rating: 4, title: "Battery life is decent", content: "[Demo Review] Six hours on a single charge is good, but I wish the case held more than 30 hours total.", source: "Demo-Store" },
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
