import { Skeleton } from "@/components/ui/skeleton";

export default function BannerImageSkeleton() {
  return (
    <Skeleton className=" bg-gray-300 h-[300px] w-[300px] aspect-square rounded object-cover" />
  );
}
