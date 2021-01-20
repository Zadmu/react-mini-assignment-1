import React from 'react';

<div class = "ui card" style = {{marginLeft: '150px'}}>
                    <div class="image">
                        <img src = {this.state.teamLogo}/>
                    </div>
                    <div class="content">
                            <h1>{this.state.teamName}</h1>      
                    </div>
                    <div class="extra content" style ={{backgroundColor:'#17408b'}}>
                            <h2 style ={{fontSize: '150%', color: 'black',fontFamily: 'monospace'}}>Conference: {this.state.teamConference}</h2>
                            <h2 style ={{fontSize: '150%', color: 'black',fontFamily: 'monospace'}}>Record: {this.state.teamRecord}</h2>
                            <h2 style ={{fontSize: '150%', color: 'black',fontFamily: 'monospace'}}>Rank: {this.state.teamRank}</h2>
                    </div>
            </div>
        </div>