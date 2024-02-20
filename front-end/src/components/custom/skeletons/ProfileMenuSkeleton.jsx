import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileMenuSkeleton() {
  return (
    <div className="flex items-center justify-center gap-2 ms-2">
      <div>
        <Skeleton className="rounded-full bg-gray-300 h-10 w-10" />
      </div>
      <div className="flex gap-2 flex-col">
        <Skeleton className="rounded-full bg-gray-300 h-3 w-[200px]" />
        <Skeleton className="rounded-full bg-gray-300 h-3  w-[200px]" />
      </div>
    </div>
  );
}
