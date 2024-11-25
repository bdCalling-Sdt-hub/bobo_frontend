
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export default function EyeIconInverse({ showPassword, setShowPassword }) {
  return (
    <div>
      {showPassword ? (
        <VscEye
          className="stroke-secondary-1 absolute right-4 top-2"
          onClick={() => setShowPassword(!showPassword)}
          role="button"
          size={22}
        />
      ) : (
        <VscEyeClosed
          className="stroke-secondary-1 absolute right-4 top-2"
          onClick={() => setShowPassword(!showPassword)}
          role="button"
          size={22}
        />
      )}
    </div>
  );
}