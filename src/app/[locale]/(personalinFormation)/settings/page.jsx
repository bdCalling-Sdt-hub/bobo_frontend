import AccountDelete from "@/components/personalinformation/Setttings/AccountDelete";
import ChangePassword from "@/components/personalinformation/Setttings/ChangePassword";

const page = () => {
  return (
    <div className="mt-2">
      <ChangePassword />
      <AccountDelete />
    </div>
  );
};

export default page;
