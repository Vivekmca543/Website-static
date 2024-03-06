
import React from 'react';
import './Cardsliders.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const renderCardsliderone= ({ title, description1, description2, description3,description4 },isSecond) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  console.log(title, description1, description2, description3,description4);
  return (<div className='card-padding-wrapper '>
  <h3>{title}</h3>
  <p className="p1">{description1}</p>
  <button className="slider-one">{description2}</button>
  <p className="p2">{description3}</p>
  <Carousel responsive={responsive} autoPlay={true}
autoPlaySpeed={3000}
keyBoardControl={true}
swipeable={false}
draggable={false}   infinite={true}

showDots={true}  className="carosel-slides">
{
description4.map(n=>(
<div className="slides pos-rel" key={n}>
   <img src= {n.imgsrc} className="w-100"/>
   <div className="pos-abs">
   <p>{n.title}</p>
   <p>{n.discription}</p>
   </div>
   </div>
))

}
 

</Carousel>
  </div>);
};

const renderCardslidertwo= ({title21,description21,description22,description23  },isFifth) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (<div className='card-padding-wrapper card-slidestwo'>
  <h3>{title21}</h3>
  <p className="p1">{description21}</p>
  <p className="p2-1">{description22}</p>
  <Carousel responsive={responsive} autoPlay={true}
autoPlaySpeed={3000}
keyBoardControl={true}
swipeable={false}
draggable={false}   infinite={true}

showDots={true}  className="carosel-slides ">
{
  description23.map(n=>(
<div className="slides pos-rel" key={n}>
   <img src= {n.imgsrc} className="w-100"/>
   <div className="pos-abs">
   <p>{n.title}</p>
   <p>{n.discription}</p>
   </div>
   </div>
))
}
</Carousel>
  </div>);
};

const renderCardsliderthree= ({title30,description31,description32,description33 },isSixth) => {
  return (<div className='card-padding-wrapper card-slidesthree'>
  <h3>{title30}</h3>
  <p className="p1">{description31}</p>
  <button className="slider-one">{description32}</button>

  <div className="static-slides ">
{
  description33.map(n=>(
<div className="slides pos-rel" key={n}>
   <img src= {n.imgsrc} className="w-100"/>
   <div className="pos-abs">
   <p>{n.title}</p>
   <p>{n.discription}</p>
   </div>
   </div>
))
}
</div>
  </div>);
};


const Cardsliders = (props) => {
  const {title30,description31,description32,description33,isSixth, title, description1, description2,description3,description4,isSecond,isFifth,title21,description21,description22,description23 } = props || {};

    return (<div className='card-wrapper Cardsliders'>
                {isSecond ?renderCardsliderone({title, description1, description2, description3,description4}, isSecond):''}
                {isFifth ?renderCardslidertwo({title21,description21,description22,description23}, isFifth):''}
                {isSixth ?renderCardsliderthree({title30,description31,description32,description33}, isSixth):''}
     </div>);
 };

export default Cardsliders;