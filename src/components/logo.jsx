import { assets } from "../assets/assets";

export default function Logo() {
  return (
    <img
      alt="iBoard Repair Logo"
      className="h-8 md:h-10 w-auto"
      src={assets.iBoardLogo}
    />
  );
}
