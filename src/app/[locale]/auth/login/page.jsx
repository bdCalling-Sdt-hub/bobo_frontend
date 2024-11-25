import { useTranslations } from "next-intl";
import LoginForm from "./component/LoginForm";

const LoginPage = () => {
  const t = useTranslations("login");
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
