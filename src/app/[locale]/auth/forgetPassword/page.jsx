import ForgetPasswordForm from "./component/ForgetPasswordForm";

const page = () => {
  return (
    <div>
      <div
        className="flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/authbg.png)" }}
      >
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default page;
