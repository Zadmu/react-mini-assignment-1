import React from 'react';



const TeamDisplay = (props) => {
    if (props.teamName !== '') {
        console.log('User entered: ' + props.teamName)
        return (
            <div className = "ui card" style = {{marginLeft: '150px'}}>
                        <div className="image">
                            <img src = {props.teamLogo}/>
                        </div>
                        <div className="content">
                                <h1 style ={{fontSize: '250%', color: 'black',fontFamily: 'monospace'}}>{props.teamName}</h1> 
                        </div>
                        <div className="extra content" style ={{backgroundColor:'lightblue'}}>
                                <h2 style ={{fontSize: '150%', color: 'black',fontFamily: 'monospace'}}>Conference:{props.teamConference}</h2>
                                <h2 style ={{fontSize: '150%', color: 'black',fontFamily: 'monospace'}}>Record:{props.teamRecord}</h2>
                                <h2 style ={{fontSize: '150%', color: 'black',fontFamily: 'monospace'}}>Rank:{props.teamRank}</h2>
                        </div>
                </div>
        )
    }
    else if (props.error === 'true') {
        return(
        <div>
            <h1>The term you entered does not exist</h1>
            <img src='http://frankjkenny.com/wp-content/uploads/2012/04/sad-face.png'/>
        </div>
        )
    }
    return (
        <div>
            <h1>Awaiting Input!!</h1>
        </div>
    )
}

export default TeamDisplay;

//if statement in functional componenet