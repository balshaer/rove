import Loader from "../loading/Loader";

export default function TableSkeleton() {
  return (
    <div className=" w-full py-20 flex justify-center items-center ">
      <Loader />
    </div>
  );
}
