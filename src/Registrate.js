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
                <div className='row d-flex'>

                    <div className='col-lg-12'>
                        <input type="email" placeholder='Podaj swój email'/>
                    </div>
                    <div className='col-lg-12'>
                        <input type="pass" placeholder='Podaj hasło'/>
                    </div>
                    <div className='col-lg-12'>
                        <input type="pass" placeholder='Powtórz hasło'/>
                    </div>
                    <div className='col-lg-12'>
                        <input type="text" placeholder='Podaj nick'/>
                    </div>
                    <div className='col-lg-12'>
                        <label htmlFor="">Wybierz typ profilu</label>
                    </div>
                    <div className='col-lg-12'>
                        <select name="chooseActivity" id="">
                            <option value="shelterWorker">Pracownik schroniska</option>
                            <option value="foundationWorker">Pracownik fundacji</option>
                            <option value="associationMember">Członek stowarzyszenia</option>
                            <option value="volunteer">Wolontariusz</option>
                            <option value="private">Profil prywatny</option>
                        </select>
                    </div>
                    <div className='col-lg-12'>
                        <form action={this.props.mainPage}>
                            <input type="submit" value='Przejdź do serwisu'/>
                        </form>
                    </div>
                </div>
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