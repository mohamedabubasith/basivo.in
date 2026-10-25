import Image from "next/image";
import icon from "../../public/assets/icon.png";

export default function Brand() {
  return (
    <a className="brand" href="#">
      <Image src={icon} alt="" width={34} height={34} priority />
      Basivo
    </a>
  );
}
