import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";
import ProductTable from "@/components/global/dashboard/products/ProductsTable";

export default function ShowProducts() {
  return (
    <AnimatedComponent>
      <ProductTable />
    </AnimatedComponent>
  );
}
