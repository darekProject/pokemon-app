import React, {Component, Fragment} from 'react';
import Search from './Search/Search';
import Pokemons from "./Pokemons/Pokemons";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Search/>
                <Pokemons/>
            </Fragment>
        );
    }
}

export default App;
