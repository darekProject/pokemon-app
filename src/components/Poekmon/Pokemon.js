import React, {Component} from 'react';

import './Pokemon.css';

class Pokemon extends Component {
    renderAbilities = () => {
        return this.props.abilities.map((ability, index) => {
            return <span key={index}>{Object.values(ability)[2].name}</span>
        })
    };

    render() {
        return (
            <div className="col-4 box-pokemon">
                <header>
                    <div>
                        <img src={this.props.imgFront} alt=""/>
                        <img src={this.props.imgBack} alt=""/>
                    </div>
                    <p>{this.props.name.toUpperCase()}</p>
                </header>
                <article className="details-pokemon">
                    Abilities:
                    <div>
                        {this.renderAbilities()}
                    </div>
                </article>
                <footer>
                    <button type="button" className="btn-info">more</button>
                </footer>
            </div>
        );
    }
}

export default Pokemon;