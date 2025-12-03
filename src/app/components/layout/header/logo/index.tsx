import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={getImagePath("/images/rsm/logo4.png")}
        alt="RSM Plumbing Logo"
        width={160}
        height={80} 
        className="object-contain max-h-20" 
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;