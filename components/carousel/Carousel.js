import Image from "next/image";
import Carousel from "nuka-carousel";

    export default function Fcarousel(){


       return(
       <Carousel wrapAround={true} slidesToShow={1} autoplay={1000}>
        <Image
          src="/surfing-sunseat.png"
          alt="dog"
          width={2500}
          height={900}
        />
        <Image
          src="/SurftheWorld333.jpg"
          alt="surf"
          width={2500}
          height={900}
        />
        <Image src="/men-surfing.jpg" alt="dog" width={2500} height={900} />
        <Image src="/girl-.png" alt="dog" width={2500} height={900} />
      </Carousel>
      ) 
    
      };