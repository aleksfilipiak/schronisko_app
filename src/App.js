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


import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class BurgerNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    showNav = () => {
        this.setState({
            clicked: true
            //clicked: !this.state.clicked  dziala w stylu toggle
        })
    };
    hideNav = () => {
        this.setState({
            clicked: false
        })
    }


    render() {
        const menu = ['Zweryfikuj profil instytucji', 'Instytucje na skróty', 'Info o apce', 'Wyloguj'];
        const nav =


            <div className={'nav ' + (this.state.clicked ? 'slided-down' : 'slided-up')}>
                <ul>

                    {menu.map((item, index) => <li key={index}>{item}</li>)}
                    <i className="fas fa-arrow-up" onClick={this.hideNav}/>

                </ul>
            </div>


        return (
            <div className='burger'>
                <i onClick={this.showNav} className='fas fa-bars'/>
                {nav}
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return <p className='footer'>Ikonki pobrane z: <a href='https://icons8.com'>www.icons8.com</a></p>
    }
}

class FirstView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseenter1: false,
            mouseenter2: false,
            mouseenter3: false,
            opacity: 0,
            scale: 1,


        }
    }

    showAnimalsIcons = (param) => {
        this.setState({
            [`mouseenter${param}`]: true,
            [`display${param}`]: 'none',
            opacity: 1,
            scale: 1.1
        })
    };

    hideAnimalsIcons = (param) => {
        this.setState({
            [`mouseenter${param}`]: false,
            [`display${param}`]: 'block',
            opacity: 0,
            scale: 1
        })
    }


    render() {
        const styles = {transition: 'all 0.2s ease-out'};

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
        const list = animalsIcons.map((item, index) => <li key={index} className='icon-list'><Link
            to={`/found/${item.name}`}><img src={item.img}
                                            alt=""/></Link>
        </li>);
        const list2 = animalsIcons.map((item, index) => <li key={index} className='icon-list'><Link
            to={`/lost/${item.name}`}><img src={item.img}
                                           alt=""/></Link>
        </li>);
        const list3 = animalsIcons.map((item, index) => <li key={index} className='icon-list'><Link
            to={`/aid/${item.name}`}><img src={item.img}
                                          alt=""/></Link>
        </li>);
        return (
            <div className='first-view'>
                <div className='choose-animal center-col' onMouseLeave={() => this.hideAnimalsIcons(1)}>
                    <button style={{display: this.state.display1}} onMouseEnter={() => this.showAnimalsIcons(1)}
                            className='main-buttons'>Znalezłam/em zwierzę
                    </button>
                    <ul className='center-col'
                        style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')'}}>
                        {this.state.mouseenter1 ? list : null}
                    </ul>
                </div>
                <div className='choose-animal center-col' onMouseLeave={() => this.hideAnimalsIcons(2)}>
                    <button style={{display: this.state.display2}} onMouseEnter={() => this.showAnimalsIcons(2)}
                            className='main-buttons'>Zgubiłam/em zwierzę
                    </button>
                    <ul className='center-col'
                        style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')'}}>
                        {this.state.mouseenter2 ? list2 : null}
                    </ul>
                </div>
                <div className='choose-animal center-col pulse' onMouseLeave={() => this.hideAnimalsIcons(3)}>
                    <button style={{display: this.state.display3}} onMouseEnter={() => this.showAnimalsIcons(3)}
                            className='main-buttons'>Ranne zwierzę <br/> Pierwsza pomoc
                    </button>
                    <ul className='center-col'
                        style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')'}}>
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

/*obce*/

function validate(email, password) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0,
        pass: password.length === 0,
    };
}

/*obce*/

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',

            /*obce*/
            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: '',
            /*obce*/
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value,

        })
    };

    handleSubmit = (event) => {

        if (!this.canBeSubmitted()) {
            event.preventDefault();

            return;
        }
        const {email, pass} = this.state;
        alert(`Signed up with email: ${email} password: ${pass}`);
    }

    canBeSubmitted() {
        const errors = validate(this.state.email, this.state.pass);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;

    }


    render() {
        const errors = validate(this.state.email, this.state.pass);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        console.log(errors);
        console.log(isDisabled);

        return (<div>
            <form action="#/main-page"
                  className='login-form center-col'
                  onSubmit={this.handleSubmit}>
                <label>email
                    <input type='email'
                           id='email'
                           onChange={this.changeHandler}
                           value={this.state.email}/>
                </label>
                <label>hasło
                    <input type='password'
                           id='pass'
                           onChange={this.changeHandler}
                           value={this.state.pass}/>
                </label>
                <input type='submit'
                       value='Zaloguj'
                       disabled={isDisabled}/>
                <button><Link to='/register-page'>Zarejestruj</Link></button>
            </form>
        </div>)
    }
}

class RegisterForm extends React.Component {
    render() {
        return (
            <div>
                <form action="#/main-page" className='center-col'>
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
                </form>
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
