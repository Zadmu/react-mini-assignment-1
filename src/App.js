import React from 'react';
import SearchBar from './SearchBar';
import TeamDisplay from './TeamDisplay';

class App extends React.Component{

    state = {term:'', teamConference: '', teamName: '', rank: null, teamRecord: '', teamLogo: '', err: ''};

    nba = [
        {teamConference: 'Western', teamName: 'Lakers', teamRank: 1, teamRecord: '11-4', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/lal.png'},
        {teamConference: 'Western', teamName: 'Jazz', teamRank: 2, teamRecord: '10-4', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/uta.png'},
        {teamConference: 'Western', teamName: 'Clippers', teamRank: 3, teamRecord: '10-4', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/lac.png'},
        {teamConference: 'Western', teamName: 'Suns', teamRank: 4, teamRecord: '7-5', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/phx.png'},
        {teamConference: 'Western', teamName: 'Spurs', teamRank: 5, teamRecord: '8-6', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png'},
        {teamConference: 'Western', teamName: 'Trail Blazers', rank: 6, teamRecord: '8-6', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/por.png'},
        {teamConference: 'Western', teamName: 'Warriors', teamRank: 7, teamRecord: '7-6', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png'},
        {teamConference: 'Western', teamName: 'Grizzlies', teamRank: 8, teamRecord: '7-6', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/mem.png'},
        {teamConference: 'Eastern', teamName: 'Celtics', teamRank: 1, teamRecord: '8-4', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/bos.png'},
        {teamConference: 'Eastern', teamName: 'Bucks', teamRank: 2, teamRecord: '9-5', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/mil.png'},
        {teamConference: 'Eastern', teamName: '76ers', teamRank: 3, teamRecord: '9-5', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/phi.png'},
        {teamConference: 'Eastern', teamName: 'Pacers', teamRank: 4, teamRecord: '8-5', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/ind.png'},
        {teamConference: 'Eastern', teamName: 'Nets', teamRank: 5, teamRecord: '9-6', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/bkn.png'},
        {teamConference: 'Eastern', teamName: 'Knicks', teamRank: 6, teamRecord: '7-8', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/nyk.png'},
        {teamConference: 'Eastern', teamName: 'Cavaliers', teamRank: 7, teamRecord: '6-7', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png'},
        {teamConference: 'Eastern', teamName: 'Hawks', teamRank: 8, teamRecord: '6-7', teamLogo: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/atl.png'}
    ]

    // componentDidMount() {
    //     this.onSearchSubmit('');
    // }

    onSearchSubmit = (term) => {
        console.log('this is the term entered: ' + term);
        
    const termCapitalized = term.charAt(0).toUpperCase() + term.slice(1) //this works for all except the Trail Blazers

        for(var i = 0; i < 16; i++) {
            if(this.nba[i].teamName === termCapitalized) {
                this.setState({
                        teamName: termCapitalized,
                        teamConference: this.nba[i].teamConference,
                        teamRank: this.nba[i].teamRank,
                        teamRecord: this.nba[i].teamRecord,
                        teamLogo: this.nba[i].teamLogo}
                )
                console.log('this is the selected team: ' + this.state.teamName);
            } 
           else if (this.nba[i].teamName !== termCapitalized) {
                     console.log('there is no team with this name: ' + term);
                     this.setState({err: 'true'});
             }
        }
    }


    render () {
        return(
        <div className = "page">
            <div className = "ui container" style = {{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                <TeamDisplay
                    error = {this.state.err}
                    teamName = {this.state.teamName}
                    teamLogo = {this.state.teamLogo}
                    teamConference = {this.state.teamConference}
                    teamRank = {this.state.teamRank}
                    teamRecord = {this.state.teamRecord}
                />
            </div>
        </div>
        )
    }
}

export default App;

