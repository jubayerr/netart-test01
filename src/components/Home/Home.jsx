import React from 'react';
import './Home.css'
import trophy from '../../images/img1.png'
import photograph from '../../images/img2.png'
import gallery from '../../images/img3.png'

const Home = () => {
    return (
        <div className="home">
           <div className="banner-section">
               <div className="trophy-area">
                    <img className="trophy" src={trophy} alt="trophy" />
               </div>
               <div className="photograph-area">
                   <p><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
                   <br />
                   <ul className="list-items">
                       <li><small>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</small></li>
                       <li><small>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</small></li>
                   </ul>
                    <img className="photograph" src={photograph} alt="photograph" />
                    <small>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</small>
               </div>
           </div>
           <div className="gallery">
               <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
               <img className="galleryImg" src={gallery} alt="gallery" />
               <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
               <br />
               <div className="divider"/>
               <br />
               <p><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p>
               <br />
               <p>
                CHEMICALS & PROCESS <span className="b-style"/> POWER <span className="b-style"/> WATER & WASTE WATER <span className="b-style"/> OILS & GAS <span className="b-style"/> PHARMA <span className="b-style"/> SUGARS & DISTILLERIES <span className="b-style"/> PAPER & PULP <span className="b-style"/> MARINE & DEFENCE <span className="b-style"/> METAL & MINING <span className="b-style"/> FOOD & BEVERAGE <span className="b-style"/> PETROCHEMICAL & REFINERIES <span className="b-style"/> SOLAR <span className="b-style"/> BUILDING <span className="b-style"/> HVAC <span className="b-style"/> FIRE FIGHTING <span className="b-style"/> AGRICULTURE & RESIDENTIAL
                </p>
           </div>
        </div>
    );
};

export default Home;