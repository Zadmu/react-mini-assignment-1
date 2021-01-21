import React from 'react';



const TeamDisplay = (props) => {
 console.log(props.teamName);
    if (props.teamName != '') {
        console.log('I entered the props.teamName')
        return (
            <div class = "ui card" style = {{marginLeft: '150px'}}>
                        <div class="image">
                            <img src = {props.teamLogo}/>
                        </div>
                        <div class="content">
                                <h1 style ={{fontSize: '250%', color: 'black',fontFamily: 'monospace'}}>{props.teamName}</h1>      
                        </div>
                        <div class="extra content" style ={{backgroundColor:'lightblue'}}>
                                <h2 style ={{fontSize: '150%', color: 'black',fontFamily: 'monospace'}}>Conference:{props.teamConference}</h2>
                                <h2 style ={{fontSize: '150%', color: 'black',fontFamily: 'monospace'}}>Record:{props.teamRecord}</h2>
                                <h2 style ={{fontSize: '150%', color: 'black',fontFamily: 'monospace'}}>Rank:{props.teamRank}</h2>
                        </div>
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