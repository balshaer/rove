import RegisterForm from "@/components/global/auth/RegisterForm";
import Navbar from "@/components/custom/Navbar/Navbar";

export default function Register() {
  return (
    <div className="Register">
      <Navbar />

      <RegisterForm />
    </div>
  );
}
