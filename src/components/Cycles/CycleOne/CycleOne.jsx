import CycleHeroSection from "@/components/shared/Navber/CycleHeroSection";
import CycleForm from "./CycleForm";
const CycleOne = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <CycleHeroSection bgImage="/heroone.png" />
      </section>

      {/* Feedback Section */}
      <CycleForm></CycleForm>
    </div>
  );
};

export default CycleOne;
