import { Product } from "../_types/types";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-md">
      <img
        src={product.thumbnail}
        alt={product.title}
        width={120}
        height={120}
        className="object-cover rounded-md"
      />
      <h4 className="text-sm font-bold">{product.title}</h4>
      <p className="text-xs text-gray-500">{product.category}</p>
      <p className="text-xs text-gray-500">{product.price}</p>
    </div>
  )
}