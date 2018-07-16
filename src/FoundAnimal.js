import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import FoundForm from './FoundLostForm'
import AnimalsMenager from './AnimalMenager'


class FoundDog extends React.Component {
constructor (props){
    super(props);
    this.state={}
}

    render() {

        return (
            <div className='smallContainer'>
                <div className='header'>
                    <h1>Znalezione zwierzę: {this.props.match.params.animal}</h1>
                </div>

                <FoundForm spieces={this.props.match.params.animal}/>
                <button className='come-back'><Link to='/main-page'>Powrót</Link></button>

                <AnimalsMenager kind={this.props.match.params.animal}/>

                <button className='come-back'><Link to='/main-page'>Powrót</Link></button>

            </div>
        )
    }
}

export default FoundDog