import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom'

import FoundForm from './FoundLostForm'
import AnimalsMenager from './AnimalMenager'




class LostAnimal extends React.Component {

    render() {
        return (
            <div>
                <FoundForm spieces ={this.props.match.params.animal}/>
                <button><Link to='/main-page'>Powrót</Link></button>
                <AnimalsMenager kind={this.props.match.params.animal}/>
                <button><Link to='/main-page'>Powrót</Link></button>
            </div>);
    }
}


export default LostAnimal