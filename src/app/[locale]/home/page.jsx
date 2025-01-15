import { useTranslations } from "next-intl";
import Categories from "../../../components/HomeComponents/Categories";

const Home = () => {
  const t = useTranslations("home");

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-5 bg-gradient-to-r from-cyan-100 to-orange-100 pt-10 lg:h-[100vh]">
      <div className="mt-[100px] space-y-5 lg:mt-5 lg:space-y-10">
        <h1 className="text-center text-2xl font-bold md:text-5xl">
          {t("Student Learning Stages")}
        </h1>
        <p className="text-center font-semibold md:text-2xl">
          {t(
            "Explore key learning areas, behaviors, and improvements by cycle level",
          )}
        </p>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Home;
