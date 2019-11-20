import React from 'react';
import axios from 'axios';
import Game from './Game';

export default class ListGame extends React.Component {
    state = {
        games : [],
        bestGamesOnly : false,
        isLoaded : false
    }

    componentDidMount(){
        this.getGames();   
    }

    getGames = () => {
        axios.get(`https://wild-games.herokuapp.com/api/v1`)
        .then(resultat => resultat.data)
        .then(data => {
            this.setState({
                games : data,
                isLoaded : true
            })
        })
    }
    
    bestGameSwitch = () => {
        this.setState({
            bestGamesOnly : !this.state.bestGamesOnly
        })
    }

    render() {
        console.log(this.state.games)
        return (
            <div>
                <button className="RatingButton" onClick={() => this.bestGameSwitch()}>
                    {this.state.bestGamesOnly ? 'All Games' : 'Best Games'}
                </button>

                <div className="GamesGlobal">
                    {   this.state.isLoaded ? (
                            this.state.games
                            .filter(game => !this.state.bestGamesOnly || game.rating >= 4.5)
                            .map((game, i) => (
                                <Game 
                                    key={i}
                                    id={game.id}
                                    name={game.name}
                                    image={game.background_image}
                                    note={game.rating}
                                    date={game.released}
                                />
                            ))
                        ) : (<p>Loading...</p>)
                    }
                </div>
            </div>
        )
    }
}