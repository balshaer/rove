import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => (
  <Skeleton className="bg-gray-300 aspect-square h-[375px] rounded-lg w-[400px] object-cover" />
);

export default function ProductSkeleton() {
  const renderSkeletons = () => {
    const skeletonCount = 3;
    const gridItems = Array.from({ length: skeletonCount }).map((_, index) => (
      <ProductCardSkeleton key={index} />
    ));

    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {gridItems}
      </div>
    );
  };

  return (
    <div className="flex-col flex bg-white w-full lg:gap-8 group-block min-h-[100vh]">
      {renderSkeletons()}
      {renderSkeletons()}
      {renderSkeletons()}
    </div>
  );
}
