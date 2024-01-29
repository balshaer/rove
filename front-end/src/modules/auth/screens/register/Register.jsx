import Navbar from "@/components/global/website/navbar/Navbar";
import Footer from "@/components/global/website/Footer/Footer";
import RegisterForm from "@/components/global/auth/form/RegisterForm";

export default function Register() {
  return (
    <div className="Register">
      <Navbar />

      <RegisterForm />

      <Footer />
    </div>
  );
}
