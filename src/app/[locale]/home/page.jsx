import { useTranslations } from "next-intl";
import Categories from "../../../components/HomeComponents/Categories";

const Home = () => {
  const t = useTranslations("home");

  return (
    <div className="bg-gradient-to-r from-cyan-100 to-orange-100 lg:h-[100vh] h-full pt-10 flex flex-col justify-center items-center space-y-5">
      <div className=" mt-[50px] lg:mt-5 lg:space-y-10 space-y-5 ">
        <h1 className=" text-center md:text-5xl text-2xl font-bold">
          {t("Student Learning Stages")}
        </h1>
        <p className=" text-center font-semibold md:text-2xl">
          {t(
            "Explore key learning areas, behaviors, and improvements by cycle level"
          )}
        </p>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Home;
