import './EmployeeCard.css'
import { useState } from 'react'
import '../assets/star.png'
import '../assets/birthday-cake.png'


function EmployeeCard(props) {
    const [displayStar, setDisplayStar] = useState(false);
    const [timeWorking, setTimeWorking] = useState(((new Date() - new Date(props.startDate)) / (1000 * 60 * 60 * 24 * 365)));

    const timeDependancy = [false, false];


    if (timeWorking <= 0.5) (timeDependancy[1] = true)
    else (Math.floor(timeWorking) % 5 == 0) && (timeDependancy[0] = true);

    console.log(timeWorking);

    const clickHandler = () => {
        displayStar ? setDisplayStar(false) : setDisplayStar(true);

    }

    const anniversarryCelebration = () => {
        <p>Anniversarry</p>
        //<img className="promoteImage" src="src/assets/star.png" />
    }

    return (
        <>
            <div className="CardClass">
                <h2>{props.name}</h2>
                <p> Role: {props.role}  </p>
                <p> Department: {props.department}</p>
                <p> Location: {props.location}</p>
                <button className="buttonPromotion" onClick={clickHandler}>{displayStar ? "Demote" : "Promote"}</button>
                {timeDependancy[0] && (
                    <>
                        <p>{Math.floor(timeWorking)}th anniversarry</p>
                        <img className="anniversarryImage" src="src/assets/birthday-cake.png" />
                    </>
                )}
                {timeDependancy[1] && <p>Schedule probation review</p>}
                {displayStar ? <img className="promoteImage" src="src/assets/star.png" /> : <p></p>}
            </div>
        </>
    )
}

export default EmployeeCard