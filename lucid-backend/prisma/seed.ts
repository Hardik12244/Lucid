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
  { rating: 5, title: "Absolutely incredible", content: "This product changed my workflow entirely. Highly recommended." },
  { rating: 4, title: "Great but pricey", content: "Very solid build quality and performs well, though I wish it was a bit cheaper." },
  { rating: 3, title: "Average experience", content: "It does the job, but there are better alternatives for the price." },
  { rating: 5, title: "Best in class", content: "I have tried many competitors but this one is the absolute best." },
  { rating: 4, title: "Very good", content: "Battery life is excellent, performance is solid." },
  { rating: 2, title: "Disappointed", content: "Started having issues after a month. Customer support was slow." },
  { rating: 5, title: "Perfect!", content: "Everything about this is perfect. No complaints at all." },
  { rating: 1, title: "Do not buy", content: "Mine arrived defective and return process is a hassle." },
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

    // Add some random reviews to the product if it doesn't have any
    const existingReviews = await prisma.review.count({
      where: { productId: product.id }
    });

    if (existingReviews === 0) {
      // Pick 3-5 random reviews
      const numReviews = Math.floor(Math.random() * 3) + 3; // 3 to 5
      
      const selectedReviews = [...mockReviews].sort(() => 0.5 - Math.random()).slice(0, numReviews);
      
      for (const r of selectedReviews) {
        await prisma.review.create({
          data: {
            rating: r.rating,
            title: r.title,
            content: r.content,
            productId: product.id,
            userId: seedUser.id
          }
        });
      }
      console.log(`Added ${numReviews} reviews for: ${product.name}`);
    }
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
