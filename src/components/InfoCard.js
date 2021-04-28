import React, {useEffect} from 'react'
import './InfoCard.css'
import { Button } from 'semantic-ui-react'

import "aos/dist/aos.css"
import {Link} from 'react-router-dom'


function InfoCard(props) {

    
    return (
        
            <div className = 'about-info-container' > 
                         
                <h1>
                    {/* Brightentechs is a trusted partner of Australia's leading telecommunications and ICT network providers */}
                    {props.header}
                </h1>

                <p>
                    {props.text}
                {/* We began NBN FTTB(Fiber To TheBuilding) projects since 2015, helping nearly hundred of residents/commercials daily in connecting to NBN now. We began NBN HFC(Hybrid Fiber Coax)   since 2017 where partnership set up over hundreds community broadband fundamental constructions.                 */}
                </p>

                
                    <div className = 'about-btns'>
                        <Link to={props.path}> 
                        <Button inverted>More Info</Button>
                        </Link>
                    </div> 
                                  
            </div>
        
    )
}

export default InfoCard
