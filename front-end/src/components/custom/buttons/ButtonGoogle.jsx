/* eslint-disable react/prop-types */

export default function ButtonGoogle(props) {
  return (
    <div className="flex capitalize items-center justify-center w-full dark:bg-gray-800">
      <span className=" w-full items-center justify-center max-w-80 px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-200 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow-sm transition duration-150">
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>{props.text}</span>
      </span>
    </div>
  );
}
