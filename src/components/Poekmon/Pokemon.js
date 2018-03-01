import React, {Component} from 'react';

import './Pokemon.css';

class Pokemon extends Component {

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
                      <span>{this.props.abilities[0].ability.name}</span>
                      <span>{this.props.abilities[1].ability.name}</span>
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