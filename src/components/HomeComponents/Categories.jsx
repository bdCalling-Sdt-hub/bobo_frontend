"use client";
import Image from "next/image";
import cy1 from "/public/cy1.png";
import cy2 from "/public/cy2.png";
import cy3 from "/public/cy3.png";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

const Categories = () => {
  const router = useRouter();
  const t = useTranslations("home");

  const category = [
    {
      id: 1,
      title: "Cycle 1",
      img: cy1,
      link: "/cycleone",
      guide: "Explore Cycle 1, a perfect option for beginners!",
    },
    {
      id: 2,
      title: "Cycle 2",
      img: cy2,
      link: "/cycletwo",
      guide: "Check out Cycle 2, a medium-difficulty cycle.",
    },
    {
      id: 3,
      title: "Cycle 3",
      img: cy3,
      link: "/cyclethree",
      guide: "Discover Cycle 3, designed for advanced users.",
    },
  ];

  const bgColors = ["bg-red-100", "bg-green-100", "bg-blue-100"];

  const handleNavigate = (link, guide) => {
    router.push(`${link}?guide=${encodeURIComponent(guide)}`);
  };

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 justify-center gap-8 items-center">
      {category.map((item, index) => (
        <div
          key={item.id}
          className={`${
            bgColors[index % bgColors.length]
          } rounded-lg pb-8 relative`}
        >
          <div>
            <Image className="w-[332px] h-[186px]" src={item.img} alt="img" />
            <div className="rounded-2xl flex flex-col relative justify-center items-center bg-white -mt-10 py-5 space-y-3 w-11/12 m-auto">
              <h1 className="text-2xl">{t(`${item.title}`)}</h1>

              <Button
                varient="default"
                size="lg"
                className="bg-white text-black text-lg border-2 border-black hover:bg-purple-950 hover:text-white"
                onClick={() => handleNavigate(item.link, item.guide)}
              >
                {t("Select")}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
