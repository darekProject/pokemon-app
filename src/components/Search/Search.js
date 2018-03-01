import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import * as actions from "../../actions/index";

class Search extends Component {
    handleFormSubmit = ({pokemon}) => {
        console.log(pokemon);
    };

    render() {

        const {handleSubmit} = this.props;

        return (
            <div className="container d-flex justify-content-center">
                <div className="wrapper-search">
                    <h1>Find pokemons: </h1>
                </div>
                <form style={{marginTop: '50px'}} className="col-6"
                      onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}>
                    <div className="form-group row">
                        <div className="col-10">
                            <Field type="text" component="input" name="pokemon" className="form-control"/>
                        </div>
                    </div>
                    <button action="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}

const reduxFormSearch = reduxForm({
    form: 'search'
})(Search);

export default connect(null, actions)(reduxFormSearch);