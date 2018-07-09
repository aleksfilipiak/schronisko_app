import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import users from './users-db'
import FoundForm from "./FoundAnimal";

class RegisterForm extends React.Component {
    render() {
        return (
            <div>
                <form action={this.props.mainPage} className='center-col'>
                    <input type="email" placeholder='Podaj swój email'/>
                    <input type="pass" placeholder='Podaj hasło'/>
                    <input type="pass" placeholder='Powtórz hasło'/>
                    <input type="text" placeholder='Podaj nick'/>
                    <label htmlFor="">Wybierz typ profilu</label>
                    <select name="chooseActivity" id="">
                        <option value="shelterWorker">Pracownik schroniska</option>
                        <option value="foundationWorker">Pracownik fundacji</option>
                        <option value="associationMember">Członek stowarzyszenia</option>
                        <option value="volunteer">Wolontariusz</option>
                        <option value="private">Profil prywatny</option>
                    </select>
                    <input type="submit" value='Przejdź do serwisu'/>
                </form>
            </div>
        )
    }
};

export default RegisterForm


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    clickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div>
                <div className={this.state.clicked ? 'klikniete' : 'niekliknięte'}>Blala</div>
                <button onClick={this.clickHandler}></button>
            </div>
        )
    }
}