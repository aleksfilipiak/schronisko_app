import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import FoundAnimal from './FoundAnimal';
import LostAnimal from './LostAnimal';
import FirstAid from './FirstAid';
import dog from './images/icons8-corgi-48.png';
import cat from './images/icons8-black-cat-48.png';
import rabbit from './images/icons8-rabbit-48.png';
import bird from './images/icons8-puffin-bird-48.png';
import cow from './images/icons8-cow-48.png';
import wolf from './images/icons8-wolf-48.png';
import unicorn from './images/icons8-unicorn-48.png';


class BurgerNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    showNav = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    };

    render() {
        const nav =
            <div className='nav'>
                <ul>
                    <li>Zweryfikuj profil schroniska/fundacji</li>
                    <li>Instytucje na skróty</li>
                    <li>Info o apce</li>
                    <li>Wyloguj</li>
                </ul>
            </div>;
        return (
            <div className='burger'>
                <i onClick={this.showNav} className='fas fa-bars'></i>
                {this.state.clicked ? nav : null}
            </div>
        );
    }
}

class Footer extends React.Component{
    render(){
        return <p className='footer'>Ikonki pobrane z: <a href='https://icons8.com'>www.icons8.com</a></p>
    }
}

class FirstView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseenter1: false,
            mouseenter2: false,
            mouseenter3: false

        }
    }

    showAnimalsIcons = (param) => {
        this.setState({
            [`mouseenter${param}`]: true,
            [`display${param}`]: 'none'
        })
    };

    hideAnimalsIcons = (param) => {
        this.setState({
            [`mouseenter${param}`]: false,
            [`display${param}`]: 'block'
        })
    }

    render() {

        const animalsIcons = [
            {
                name: 'pies',
                img: dog
            },
            {
                name: 'kot',
                img: cat
            },
            {
                name: 'gryzoń',
                img: bird
            },
            {
                name: 'ptak',
                img: rabbit
            },
            {
                name: 'hodowlane',
                img: cow
            },
            {
                name: 'dzikie',
                img: wolf
            },
            {
                name: 'inne',
                img: unicorn
            }];
        const list = animalsIcons.map((item, index) => <li key={index} className='icon-list'><Link to={`/found/${item.name}`}><img src={item.img}
                                                                                                             alt=""/></Link>
        </li>);
        const list2 = animalsIcons.map((item, index) => <li key={index} className='icon-list'><Link to={`/found/${item.name}`}><img src={item.img}
                                                                                                             alt=""/></Link>
        </li>);
        const list3 = animalsIcons.map((item, index) => <li key={index} className='icon-list'><Link to={`/found/${item.name}`}><img src={item.img}
                                                                                                             alt=""/></Link>
        </li>);
        return (
            <div className='first-view'>
                <div className='choose-animal center-col' onMouseLeave={() => this.hideAnimalsIcons(1)}>
                    <button style={{display: this.state.display1}} onMouseEnter={() => this.showAnimalsIcons(1)}
                            className='main-buttons'>Znalezłam/em zwierzę
                    </button>
                    <ul className='center-col'>
                        {this.state.mouseenter1 ? list : null}
                    </ul>
                </div>
                <div className='choose-animal center-col' onMouseLeave={() => this.hideAnimalsIcons(2)}>
                    <button style={{display: this.state.display2}} onMouseEnter={() => this.showAnimalsIcons(2)}
                            className='main-buttons'>Zgubiłam/em zwierzę
                    </button>
                    <ul className='center-col'>
                        {this.state.mouseenter2 ? list2 : null}
                    </ul>
                </div>
                <div className='choose-animal center-col' onMouseLeave={() => this.hideAnimalsIcons(3)}>
                    <button style={{display: this.state.display3}} onMouseEnter={() => this.showAnimalsIcons(3)}
                            className='main-buttons'>Ranne zwierzę <br/> Pierwsza pomoc
                    </button>
                    <ul className='center-col'>
                        {this.state.mouseenter3 ? list3 : null}
                    </ul>
                </div>
            </div>);
    }
}

class MainPage extends React.Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <BurgerNav/>
                <FirstView/>
                <Footer/>
            </div>)
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            isEnabled: true
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value,
            isEnabled: (this.state.email.length > 0 && this.state.pass.length > 0) ? false : true

        })
    };


    render() {
        return (<div>
            <form action="" className='login-form center-col'>
                <label>email
                    <input type='email' id='email' onChange={(event) => this.changeHandler}></input>
                </label>
                <label>hasło
                    <input type='password' id='pass' onChange={(event) => this.changeHandler}></input>
                </label>
                <button type='submit' disabled={this.state.isEnabled}><Link to='/main-page'>Zaloguj</Link></button>
                <button><Link to='/register-page'>Zarejestruj</Link></button>
            </form>
        </div>)
    }
}

class RegisterForm extends React.Component {
    render() {
        return (
            <div>
                FORMULARZ REJESTRACJI
                <button><Link to='/main-page'>Zarejestruj</Link></button>
            </div>
        )
    }
}

class App extends Component {
    render() {
        // const activeStyle = {
        //     fontWeight: 'bold'
        // };
        return (
            <HashRouter>
                <main className='container center-col'>
                    <Route exact path='/' component={LoginForm}/>
                    <Route path='/register-page' component={RegisterForm}/>
                    <Route path='/main-page' component={MainPage}/>
                    <Route path='/found/:animal' component={FoundAnimal}/>
                    <Route path='/lost/:animal' component={LostAnimal}/>
                    <Route path='/aid/:animal' component={FirstAid}/>
                </main>
            </HashRouter>
        );
    }
}

export default App;
