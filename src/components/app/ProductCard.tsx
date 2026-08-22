import Image from "next/image";
import { Star, ShieldCheck } from "lucide-react";

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
    <div className="group relative w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0a0a0a] transition-all duration-300 hover:-translate-y-1 hover:border-[#72d978]/20 hover:shadow-[0_16px_45px_rgba(0,0,0,0.4)]">
      <div className="relative aspect-[1/1] overflow-hidden bg-[#101010]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="260px"
            className=" object-contain p-7 transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-700">
            Product image
          </div>
        )}

        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full border border-white/[0.08] bg-black/60 px-2.5 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-md">
          {product.category}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xs text-zinc-500">{product.brand}</p>

        <h3 className="mt-1 truncate text-[15px] font-semibold text-white transition-colors group-hover:text-[#72d978]">
          {product.title}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-300">
            {product.price}
          </span>

          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-white text-white" />

            <span className="text-xs font-medium text-zinc-300">
              {product.rating}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-[#72d978]" />

            <span className="text-[11px] text-zinc-500">
              AI confidence
            </span>
          </div>

          <span className="text-xs font-semibold text-[#72d978]">
            {product.confidence}%
          </span>
        </div>
      </div>
    </div>
  );
}