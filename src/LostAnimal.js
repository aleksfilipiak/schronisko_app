import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom'


class AnimalsMenager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            display: 'block',
            tagFilter:''

        };
        this.baseUrl = `http://localhost:3001/dogs`
    }

    componentDidMount() {
        this.loadAnimals()
    }

    loadAnimals() {
        fetch(this.baseUrl)
            .then(resp => { /*nie trzeba klamr do if bo jednoliniowy resp to promise fetcha*/
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error('Błąd sieci!')
            }).then(data => {
            this.setState({
                loading: false,
                data /*to jest tworzenie obiektu - jakby wsadzic zmienna w obiekt to stworzy z tego klucz tutaj z wartosciami z jsona*/
            })
        }).catch(err => { /*osobna funkcja, która robi timeouta i potem wywowułemy całego fetcha poprzez te funkcję (wywołanie w catcherr i w else throw new Error)*/
            console.log(err);
        });
    }

    deleteAnimal = (id, i) => {
        const tempArr = [...this.state.data];
        tempArr.splice(i, 1);
        this.setState({

            data: tempArr
        });

        fetch(`${this.baseUrl}/${id}`, {method: 'DELETE'})
            .then(resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error('Błąd sieci');
            })
            .then(() => console.log('zwierzak adoptowany'))
            .catch(err => console.log(err));


        console.log(id, i); //osobno wywalić z fronta splicem, osobno z fetcha
    };



    filterSubmit = () =>{
        this.setState({
            display: this.state.tagFilter === this.state.data.sex ? 'block' : 'none'
        })
    }

    render() {

        if (this.state.loading) return <h1>Ładuję dane</h1>;

        let baseDataReversed = this.state.data.sort(function (a, b) {
            return b.id - a.id
        });

        baseDataReversed = baseDataReversed.filter((animal)=> {
            if (this.state.tagFilter.indexOf('unknown'))
                return animal.sex === this.state.tagFilter
        });

        const animals = baseDataReversed.map((animal, i) => {

            if(this.props.kind === animal.spieces)

                return (
                    <div>

                    <li key={animal.id} style={{}}>
                        <p>Dzień: {animal.day}</p>
                        <p>Godzina: {animal.hour}</p>
                        <p>Rasa/typ: {animal.type}</p>
                        <p>Płeć: {animal.sex}</p>
                        <p>Czy kastrat: {animal.castration}</p>
                        <p>Waga: {animal.weight}</p>
                        <p>Miał przy sobie: {animal.additionalThings}</p>
                        <p>Miał chip: {animal.haveChip}</p>
                        <p>O numerze: {animal.chipNumb}</p>
                        <p>Znaki szczególne: {animal.marks}</p>
                        <p>Dodatkowe info: {animal.additional}</p>
                        <p>Zdjęcie: <img src={animal.img} alt=""/></p>
                        <button onClick={() => this.deleteAnimal(animal.id, i)}>Właściciel znaleziony</button>
                    </li>
                    </div>
                )
        });

        return <div>
            <label className='filter'>Szukaj według płci
                <select name="" id="tagFilter" value = {this.state.tagFilter} onChange={e=>this.handleInputFilter(e)}>
                    <option value="unknown">nie wiadomo</option>
                    <option value="male">samiec</option>
                    <option value="female">samica</option>
                </select>

            </label>
            <ul className='ulAnimals'>{animals}</ul>
        </div>

    }
}


class LostAnimal extends React.Component {
constructor (props){
    super(props);
    this.state={
        tagFilter :''
    }
}

    changeHandler=(event)=>{
        this.setState({
            tagFilter: event.currentTarget.value

        })
    }

    render() {
        return (
            <div>
                <button><Link to='/main-page'>Powrót</Link></button>
                <label>Szukaj...
                    <input id='tagFilter' type="text" value={this.state.tagFilter} onChange={this.changeHandler}/>
                </label>
                <button onClick={this.filterSubmit}>Filtruj</button>
                <AnimalsMenager kind={this.props.match.params.animal}/>
                <button><Link to='/main-page'>Powrót</Link></button>
            </div>);
    }
}


export default LostAnimal