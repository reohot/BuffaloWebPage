import React,{useEffect} from 'react'
import './Try.css'
import InfoCard from './InfoCard'
import Aos from 'aos';


function Try(props) {
    useEffect(() =>{
        Aos.init({duration:1300});
    },[]);

    return (
        <div className = 'component-block-container' >
            <div data-aos= "fade-left" className = 'InfoCard-container'>
                <InfoCard  
                path = "/about-us" 
                header = "Brightentechs is a trusted partner of Australia's leading telecommunications and ICT network providers " 
                text = "We began NBN FTTB(Fiber To TheBuilding) projects since 2015, helping nearly hundred of residents/commercials daily in connecting to NBN now. We began NBN HFC(Hybrid Fiber Coax)   since 2017 where partnership set up over hundreds community broadband fundamental constructions."
                />
            </div>
        </div>
    )
}

export default Try
