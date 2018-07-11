import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class AnimalsMenager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tagFilter: ''

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

    handleInputFilter = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    };

    filter = () => {
        let animalsLoaded = [...this.state.data],
            result = [],
            sex = '';

        //searchbar

        if (this.state.tagFilter.length > 0) {
            animalsLoaded = animalsLoaded.filter(animal => {
                const sex = animal.sex.toLowerCasae();
                const sexSearch = this.state.tagFilter.toLowerCase();
                return sex.includes(sexSearch)
            })
        }
    };

//wyświetlanie bazy zwierząt
    render() {

        //odwrócenie kolejności- dodane jako ostatnie

        if (this.state.loading) return <h1>Ładuję dane</h1>;
        let baseDataReversed = this.state.data.sort(function (a, b) {
            return b.id - a.id
        });

        //filtrowanie

        baseDataReversed = baseDataReversed.filter((animal) => {
                return animal.sex === this.state.tagFilter
        });

        //wyświetlanie info o zwierzętach

        const animals = baseDataReversed.map((animal, i) => {
            if (this.props.kind === animal.spieces)
                return (
                    <li key={animal.id} className='foundOneLi'>
                        <div className='foundOne'>

                            <div className='foundOneWhen foundOneHover'>
                                <p>Dzień: {animal.day} Godzina: {animal.hour}</p>
                            </div>
                            <img className='foundOneHover' src={animal.img} alt=""/>

                            <div className='foundOneInfo'>
                                <p>Rasa/typ: {animal.type}</p>
                                <p>Płeć: {animal.sex}</p>
                                <p>Czy kastrat: {animal.castration}</p>
                                <p>Waga: {animal.weight}</p>
                                <p>Miał przy sobie: {animal.additionalThings}</p>
                                <p>Miał chip: {animal.haveChip}</p>
                                <p>O numerze: {animal.chipNumb}</p>
                                <p>Znaki szczególne: {animal.marks}</p>
                                <p>Dodatkowe info: {animal.additional}</p>
                            </div>
                        </div>
                        <button onClick={() => this.deleteAnimal(animal.id, i)}>Właściciel znaleziony</button>

                    </li>
                )
        });

        return <div className='center-col filter-div'>
            <label className='filter'>Szukaj według płci
                <select name="" id="tagFilter" value={this.state.tagFilter} onChange={e => this.handleInputFilter(e)}>
                    <option value="unknown">nie wiadomo</option>
                    <option value="male">samiec</option>
                    <option value="female">samica</option>
                </select>

            </label>
            <ul className='ulAnimals'>{animals}</ul>
        </div>

    }
}

export default AnimalsMenager