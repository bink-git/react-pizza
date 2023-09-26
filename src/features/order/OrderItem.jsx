import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 p-3">
      <div className="flex items-center justify-between sm:gap-6">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
