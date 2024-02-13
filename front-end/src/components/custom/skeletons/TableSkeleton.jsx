import Loader from "../loading/Loader";

export default function TableSkeleton() {
  return (
    <div className=" w-full   flex justify-center items-center ">
      <Loader />
    </div>
  );
}
