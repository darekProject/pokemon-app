import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Pokemon from '../Poekmon/Pokemon';

import './Pokemons.css';

class Pokemons extends Component {
    static propTypes = {
        pokemons: PropTypes.array,
        error: PropTypes.string
    };

    static defaultProps = {
        pokemons: null,
        error: ''
    };

    renderPokemons = () => {
        if (this.props.pokemons) {
            const pokemons = this.props.pokemons;
            console.log(pokemons);
            return pokemons.map((pokemon, index) => {
                return <Pokemon key={index} name={pokemon.name} imgFront={pokemon.sprites.front_default} imgBack={pokemon.sprites.back_default} abilities={pokemon.abilities}/>
            });
        } else if(this.props.error) {
            console.log(this.props.error.data.error);
            console.log(this.props.error.data);
            // return <div>{this.props.error}</div>
            return <div>Find pokemons...</div>
        } else {
            return <div>Find pokemons...</div>
        }
    };

    render() {
        return (
            <div className="container wrapper-pokemons">
                <div className="row">
                    {this.renderPokemons()}
                </div>
            </div>
        )
    }
}

const mapStatToProps = state => ({
    pokemons: state.poke.pokemons,
    error: state.poke.error
});

export default connect(mapStatToProps)(Pokemons);
