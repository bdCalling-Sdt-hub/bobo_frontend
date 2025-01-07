import Image from "next/image";

const CycleHeroSection = ({ bgImage }) => {
  return (
    <div className="flex h-auto w-full items-center justify-center overflow-hidden">
      <Image
        src={bgImage}
        alt="Background Image"
        layout="responsive"
        width={2920}
        height={2080}
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default CycleHeroSection;
