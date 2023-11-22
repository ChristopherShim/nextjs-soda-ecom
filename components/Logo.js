import Link from "next/link";
import sopopLogo from "@/assets/Sopop-logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src={sopopLogo}
        className="h-8 w-full object-contain"
      ></Image>
    </Link>
  );
}
