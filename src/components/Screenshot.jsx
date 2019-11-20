import React from 'react';
import axios from 'axios';

export default class Screenshot extends React.Component {
    state = {
        game: [],
        isLoaded: false
    }

    getScreenShots = () => {
        const gameId = this.props.match.params.id;
        axios
            .get(`https://wild-games.herokuapp.com/api/v1`)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    game: data.filter(game => game.id == gameId),
                    isLoaded: true
                });
            });
    }

    componentDidMount() {
        this.getScreenShots();
    }

    render() {
        console.log('screenshot game', this.state.game)
        return (
            <div>
                <div className="GameName">
                    {
                        this.state.isLoaded ? (
                            <h3>{this.state.game[0].name}</h3>
                        ) : (
                                <p>Loading...</p>
                            )
                    }
                </div>

                <div className="ScreenShots">
                    {this.state.isLoaded ? (
                        this.state.game[0].short_screenshots.map(item => (
                            <img 
                                key={item.id} 
                                className="Game_screenshots" 
                                alt={item.id} 
                                src={item.image} 
                            />
                        ))
                    ): (
                        <p>Loading...</p>
                    )
                    }
                </div>
            </div>
        )
    }
}