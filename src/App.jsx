import React from 'react';
import { Header, RenderVideo, CardItems, Footer }  from './Components';
import './index.css';
import Cardsliders from "./Components/Cardsliders/Cardsliders";
import cardItems from './mockData/cardItems.json';
import cardItems3 from './mockData/cardItems3.json';
import cardItems4 from './mockData/cardItems4.json';
import cardItems5 from './mockData/cardItems5.json';
import cardItems6 from './mockData/cardItems6.json';
import cardItems7 from './mockData/cardItems7.json';
export default function App() {
    return (
        <>
            <Header />
            <RenderVideo {...cardItems} isFirst/>
            <Cardsliders {...cardItems5} isSecond/>
            <Cardsliders {...cardItems7} isSixth/>
            <CardItems {...cardItems4} isFourth />
            <Cardsliders {...cardItems6} isFifth/>
            

            <CardItems {...cardItems3} isThird/>
            <Footer />
        </>
    );
};
