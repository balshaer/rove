import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";

export default function RegisterForm() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 RegisterForm animate__animated  animate__fadeIn">
      <div className="mx-auto max-w-lg">
        <form
          action
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-md sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <div className="relative">
              <Input type="text" placeholder="Enter Full Name" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <Input type="email" placeholder="Enter Email" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Input type="password" placeholder="Enter Password" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Repeat Password
            </label>
            <div className="relative">
              <Input type="password" placeholder="Repeat Password" />
            </div>
          </div>

          <Button text="Register" />

          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="underline cursor-pointer font-bold ms-1"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
