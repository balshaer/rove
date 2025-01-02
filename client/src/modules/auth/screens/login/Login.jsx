import Navbar from "@/components/global/website/navbar/Navbar";
import Footer from "@/components/global/website/Footer/Footer";
import LoginForm from "@/components/global/auth/form/LoginForm";

export default function Login() {
  return (
    <div className="Login">
      <Navbar />

      <LoginForm />

      <Footer />
    </div>
  );
}
