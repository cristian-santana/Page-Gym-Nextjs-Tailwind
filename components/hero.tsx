import Image from "next/image";
import  Container  from "./shared/container";
import ButtonPrimary from './ui/button-primary'

const Hero= () => {
    return  <section id="home">
        <div className="relative w-full h-screen">
            <Image
             src='/imagenes/hero.png' 
             alt='Hero' 
             fill className="object-cover" 
            />
           <div className="absolute bg-gradient-to-tr from-black to-transparent left-0 top-0 w-full h-full" 
           />
          <Container>
          <div className="absolute  top-1/2 -translate-y-1/2 left-1/2 lg:left-60 -translate-x-1/2 lg:translate-x-0 space-y-10">
            <h1 className="text-white text-6xl lg:text-7xl font-semibold text-center lg:text-left">
                Your body <br /> Will transform 
            </h1>
            <p className="text-gray-500">
                We are commited to helping you transform your life <br /> as part of uor commitmentto you.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
            <ButtonPrimary  type='button' text='Get started' className="w-full"/>
            <ButtonPrimary  type='button' text='Watch reviews' className="border-2 border-primary bg-trasparet hover:bg-transparent w-full"/>
            </div>
            </div>  
          </Container>
        </div>
    </section> 
}
 
export default Hero