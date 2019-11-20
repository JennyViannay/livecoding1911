import React from 'react';
import {Link} from 'react-router-dom';

export default class Game extends React.Component {
    render() {
        console.log(this.props.id)
        return (
            <div className="GameCard">
                <h2>{this.props.name}</h2>
                <h3>{this.props.note}</h3>
                <h4>Date de sortie : {this.props.date}</h4>
                <Link to={`/screenshot/${this.props.id}`}>
                    <img src={this.props.image} alt={this.props.name}/>
                </Link>
            </div>
        )
    }
}