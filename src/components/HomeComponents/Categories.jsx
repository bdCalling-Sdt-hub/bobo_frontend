"use client";
import Image from "next/image";
import cy1 from "/public/cy1.png";
import cy2 from "/public/cy2.png";
import cy3 from "/public/cy3.png";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import CustomLoader from "../CustomLoader/CustomLoader";

const Categories = () => {
  const router = useRouter();
  const t = useTranslations("home");
  const [loading, setLoading] = useState({});

  const category = [
    {
      id: 1,
      title: "Cycle 1",
      img: cy1,
      link: "/cycleone",
      guide: t("Please_explore_Cycle_One_more_details_and_guide"),
    },
    {
      id: 2,
      title: "Cycle 2",
      img: cy2,
      link: "/cycletwo",
      guide: t("Please_explore_Cycle_Two_more_details_and_guide"),
    },
    {
      id: 3,
      title: "Cycle 3",
      img: cy3,
      link: "/cyclethree",
      guide: t("Please_explore_Cycle_Three_more_details_and_guide"),
    },
  ];

  const bgColors = ["bg-red-100", "bg-green-100", "bg-blue-100"];

  const handleNavigate = (index, link, guide) => {
    setLoading((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      router.push(`${link}?guide=${encodeURIComponent(guide)}`);
    }, 1000);
  };

  return (
    <div className="grid items-center justify-center gap-8 lg:grid-cols-2 xl:grid-cols-3">
      {category.map((item, index) => (
        <div
          key={item.id}
          className={`${
            bgColors[index % bgColors.length]
          } relative rounded-lg pb-8`}
        >
          <div>
            <Image className="h-[186px] w-[332px]" src={item.img} alt="img" />
            <div className="relative m-auto -mt-10 flex w-11/12 flex-col items-center justify-center space-y-3 rounded-2xl bg-white py-5">
              <h1 className="text-2xl">{t(`${item.title}`)}</h1>

              <Button
                varient="default"
                size="lg"
                className="border-2 border-black bg-white text-lg text-black shadow-lg hover:bg-purple-950 hover:text-white"
                onClick={() => handleNavigate(index, item.link, item.guide)}
                // disabled={loading[index] === true}
              >
                {loading[index] ? <CustomLoader /> : t("Select")}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
