import Title from "./title";
import  Container  from "@/components/shared/container";
import Service from "@/components/ui/service";


const Services = () => {
    return <section
     id="serices"
     className="min-h-screen flex items-center justify-center mb-10 lg:mb-0">
        <Container>
        <Title  title='Fitness Plans &' titlePrimary='Nutritions' />
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            <Service
             image="/icons/icon-1.png"
             title="Weigth Loss"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui."
            />
              <Service
             image="/icons/yoga.png"
             title="Classic Yoga"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui."
            />
                <Service
             image="/icons/cycling.png"
             title="Cycling"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui."
            />
                <Service
             image="/icons/body.png"
             title="Body Building"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui."
            />
                <Service
             image="/icons/musculation.png"
             title="Musculation"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui."
            />
                <Service
             image="/icons/running.png"
             title="Fitness Running"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui."
            />
        </div>
        </Container>
        
    </section>;
}
 
export default Services;