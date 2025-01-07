import VerifyEmailForm from "./_Component/VerifyEmail";

const page = () => {
  return (
    <div>
      <div
        className="flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/authbg.png)" }}
      >
        <VerifyEmailForm />
      </div>
    </div>
  );
};

export default page;
