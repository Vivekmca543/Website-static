import React from 'react';
import './CardItems.css';

const renderConnectText = ({ title31, description31, description32 },isThird) => {
    const textAlign = isThird ? 'card-align-center' : '';

    return (<div className='card-wrapper wrapper-fullwidth third-content'>
        <div className='card-padding-wrapper'>
            <div className={`card-title-wrapper  ${textAlign}`}>
                <h2 className="card-items-title">{title31}</h2>
            </div>
            <div className={`card-desc-wrapper  ${textAlign}`}>
                <div className='card-items-description'>
                    <p><strong>{description31}</strong></p>
                    <p>{description32}</p>
                </div>
            </div>
        </div>
    </div>);
};


const renderCardTextVideo = ({ title, description1, description2,videoUrl}, isFourth) => {
    const textAlign = isFourth ? 'card-align-left' : 'card-align-right';
    return (<div className='card-wrapper wrapper-fullwidth'>
        <div className='card-padding-wrapper wrapper-quatwidth mrgnr-rem'>
        {/* <img src="./images/Artboard4.png" className="dummy-screen"/> */}
            <div className={`card-title-wrapper ${textAlign}`}>
                <h2 className="card-items-title">{title}</h2>
            </div>
            <div className={`card-desc-wrapper ${textAlign}`}>
                <div className='card-items-description'>
                    <p>{description1}</p>
                    <p>{description2}</p>
                </div>
            </div>
        </div>
          
        <div className='card-padding-video-wrapper wrapper-quatbalncwidth'>
        <div className="video-parent">
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={videoUrl} type="video/mp4" />
            </video>
         </div> 
        </div>
    </div>);
};





const CardItems = (props) => {
    const { title, description1, description2,title31,description31,description32,isThird,isFourth,videoUrl } = props || {};
    return (<section className='card-items-section'>
        <div className="card-items-container">

            
            {/* {renderCardImage(imageUrl)} */}
            {/* {isSecond ? renderCardText({ title, description1, description2, description3 }, isSecond) : ''} */}
            {isFourth ?renderCardTextVideo({ title, description1, description2,videoUrl}, isFourth):''}
            {/* {renderCardVideo(videoUrl)} */}
            {isThird?renderConnectText({ title31, description31, description32},isThird):""}

        </div></section>);
};

export default CardItems;