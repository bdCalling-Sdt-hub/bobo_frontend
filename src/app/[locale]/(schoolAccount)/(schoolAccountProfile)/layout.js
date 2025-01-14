
import SchoolAccountSideber from "@/components/SchoolAccount/SchoolAccountSidebar";


const Layout = ({ children }) => {
  return (
    <div className="bg-mainColor min-h-screen h-full flex">
      {/* Sidebar */}
     <div className=" mt-20 flex mx-auto w-[80%] ">
    <div className=" mt-10">
 <SchoolAccountSideber/>
    </div>
     <main className="flex-1 p-8">{children}</main>
     </div>
    </div>
  );
};

export default Layout;
