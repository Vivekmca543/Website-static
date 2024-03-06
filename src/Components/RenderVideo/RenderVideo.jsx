import React from 'react';
import './RenderVideo.css';
const renderCardBanner = ({ title11, description12, description13 }, isFirst) => {
    const textAlign = isFirst ? 'card-align-center' : '';
    return (<div className='card-wrapper  home-banner-abs'>
        <div className='card-padding-wrapper'>
            <div className={`card-title-wrapper ${textAlign}`}>
                <h2 className="card-items-title">{title11}</h2>
                <h4>{description12}</h4>
                <h5>{description13}</h5>
            </div>
        </div>
    </div>);
};
const RenderVideo = (props) => {
    const {title11,description12,description13,isFirst } = props || {};
    return (
        
        <div className='home-banner'>
        {isFirst ? renderCardBanner({ title11, description12, description13}, isFirst):""}
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="./images/acadamy.mp4" type="video/mp4" />
            </video>

        </div>
    );
}

export default RenderVideo;