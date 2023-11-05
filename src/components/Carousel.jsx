import "./Carousel.css"
import {useState} from "react"
import {FiArrowLeftCircle,FiArrowRightCircle} from "react-icons/fi"
const Carousel = ({data}) => {
    const [slide, setSlide]=useState(0);

    const nextSlide=()=>{
        setSlide(slide===data.length - 1? 0 : slide+1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
      };
  return (
    <div className="carousel">
        <FiArrowLeftCircle onClick={prevSlide} className="arrow arrow-left"/>
     {data.map((item,i)=>{
        return(
            <img 
            src={item.src} 
            alt={item.alt} 
            key={i} 
            className={slide === i ? "slide" : "slide slide-hidden"}
            />
        );
     })}
     <FiArrowRightCircle 
     onClick={nextSlide}
     className="arrow arrow-right"
     />
     <span className="circles">
        {data.map((_,i)=>{
            return(
                <button
                key={i}
                className={
                    slide===i?"circle":"circle circle-inactive"
                }
                onClick={()=>setSlide(i)}
                ></button>
            );
        })}
     </span>
    </div>
  )
}

export default Carousel
