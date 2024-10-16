import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import { MobileNav } from "./MobileNav";

const Header = () => {
  return (
    <header className="py-2 lg:py-8 xl:py-10 text-white bg-transparent fixed w-[100%]">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image
              src="/images/logo.svg"
              alt="ongdalsam"
              width={66.94}
              height={64}
            ></Image>
          </Link>

          <Link href={"/"}>
            <h1 className="text-[16px] xl:text-xl font-bold">ONGDALSAM</h1>
          </Link>
        </div>

        {/* desktop nav */}

        <div className="hidden xl:flex items-center gap-8">
          <Nav></Nav>
          <Link href={"/donation"}>
            <Button>후원하기</Button>
          </Link>
        </div>

        {/* mobile nav */}

        <div className="xl:hidden">
          <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
};

export default Header;
