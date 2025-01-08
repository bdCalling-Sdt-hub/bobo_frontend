import { useTranslations } from "next-intl";

import SchoolLoginForm from "./component/LoginForm";

const LoginPage = () => {
  const t = useTranslations("login");
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <SchoolLoginForm />
    </div>
  );
};

export default LoginPage;
