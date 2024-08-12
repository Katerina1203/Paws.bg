"use client"; 
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
//import { items } from "../public/items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";




const filteredItems = [
  {
    id: 1,
    img: "https://www.aspca.org/sites/default/files/how-you-can-help_adoptions-tips_main-image-dog.jpg",
    description: "",
    
  },
  {
    id: 2,
    img: "https://rspca.sfo2.cdn.digitaloceanspaces.com/public/Uploads/adopt-a-pet-adopting-a-dog-selecting-your-dog__FocusFillWzE0NzIsNjI0LCJ5IiwxMDFd.jpg",
    description: "",
 
  },
  {
    id: 3,
    img: "https://www.unioncountysheriffsoffice.com/home/showpublishedimage/1952/637728311968300000",
    description: "",
   
  },
  {
    id: 4,
    img: "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg",
    description: "",
   
  },
  
];


const CarouselComponent = () =>{
  return (
    <div >
      <Carousel
        showArrows={false}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        autoPlay={true}
  
      >
         {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                <Link href={`/`} className="link">
                  <div className="item-header">
                    <img src={item.img} alt="product" />
                  </div>
                  <div className="item-description">
                    <p>{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
      </Carousel>
    </div>
  );


}
export default CarouselComponent;