import { Skeleton } from "@/components/ui/skeleton";

const generateSkeletons = (count) => {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <Skeleton
        key={i}
        className="w-[100%] h-[20px] rounded-full bg-gray-300"
      />
    );
  }
  return skeletons;
};

export default function SideBarSkeleton() {
  const linkSkeletons = generateSkeletons(1);
  const groupSkeletons = generateSkeletons(5);

  return (
    <div className="h-full w-full flex flex-col items-start justify-start gap-4">
      <div className="links w-full flex items-start justify-start py-5 max-w-[70%]">
        {linkSkeletons}
      </div>

      <div className="group w-full flex items-start justify-start  flex-col ps-4 gap-4">
        {groupSkeletons}
      </div>

      <div className="links w-full flex items-start justify-start py-5 max-w-[70%]">
        {linkSkeletons}
      </div>

      <div className="group w-full flex items-start justify-start  flex-col ps-4 gap-4">
        {groupSkeletons}
      </div>
    </div>
  );
}
