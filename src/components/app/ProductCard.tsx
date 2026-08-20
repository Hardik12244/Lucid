import Image from "next/image";

export interface Product {
  id: string | number;
  title: string;
  brand: string;
  category: string;
  price: string;
  rating: number;
  confidence: number;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0a0a0a] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#101010]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="260px"
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-600">
            No image
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full border border-white/[0.08] bg-black/60 px-2.5 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-md">
          {product.category}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xs text-zinc-500">
          {product.brand}
        </p>

        <h3 className="mt-1 truncate text-[15px] font-semibold text-white transition-colors group-hover:text-[#72d978]">
          {product.title}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-300">
            {product.price}
          </span>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-300">
              ★ {product.rating}
            </span>

            <span className="text-zinc-600">·</span>

            <span className="font-medium text-[#72d978]">
              {product.confidence}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}