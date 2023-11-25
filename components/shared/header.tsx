'use client';

import { useState } from "react";
import Container  from "./container";
import Logo from "./logo";
import MainMenu from "./main-menu";

import { RiMenu3Line } from "react-icons/ri";
import MenuMobile from "./menu-mobile";
import { useSearchParams } from "next/navigation";


const Header = () => {

    const  [ showMenu, setSHowMenu] = useState(false);
    return ( 
      <>
         <header className="fixed left-0 top-0 w-full p-3 z-40 bg-black">
       <Container className=" flex items-center justify-between">
        <section>
         <Logo />
        </section>
        <section className="hidden lg:block">
         <MainMenu />
        </section>
        <section className="lg:hidden">
          <button type="button" onClick={() => setSHowMenu(true)} className="text-white">
          <RiMenu3Line size={24} />
          </button>
        </section>
       </Container>
      </header>
      <MenuMobile isOpen={showMenu} onClose={() => setSHowMenu(false)} />
      </>
 
     );
}
 
export default Header;