import React, {Component} from 'react';
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


    render() {


        if (this.state.loading) return <h1>Ładuję dane</h1>;
        let baseDataReversed = this.state.data.sort(function (a, b) {
            return b.id - a.id
        });

        baseDataReversed = baseDataReversed.filter((animal) => {
            if (this.state.tagFilter.indexOf('unknown'))
                return animal.sex === this.state.tagFilter
        });

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

class FoundForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spieces: this.props.match.params.animal,
            isChecked1: true,
            isDisabled1: true,
            isDisabled2: true,
            isChecked2: true,
            isChecked3: false,
            isChecked4: false,
            date: new Date,
            day: '',
            dzien: '',
            czas: '',
            hour: '',
            type: '',
            sex: '',
            castration: '',
            weight: '',
            additionalThings: '',
            haveChip: '',
            chipNumb: '',
            marks: '',
            additional: '',
            img: '',
            place: ''
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {

            this.setState({
                date: new Date(),
                day: new Intl.DateTimeFormat('pl-PL', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }).format(this.state.date),
                hour: new Intl.DateTimeFormat('pl-PL', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }).format(this.state.date),

            })

            if (this.state.isChecked1) {
                this.setState({
                    dzien: this.state.day
                })
            }
            if (this.state.isChecked2) {
                this.setState({
                    czas: this.state.hour
                })
            }

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    addAnimal = () => {
        this.baseUrl = `http://localhost:3001/dogs`;
        const example = {
            id: 0,
            dataType: 'found',
            spieces: this.props.match.params.animal,
            day: this.state.dzien,
            hour: this.state.czas,
            type: this.state.type,
            sex: this.state.sex,
            castration: this.state.castration,
            weight: this.state.weight,
            additionalThings: this.state.additionalThings,
            haveChip: this.state.haveChip,
            chipNumb: this.state.chipNumb,
            marks: this.state.marks,
            additional: this.state.additional,
            img: this.state.img,
            place: this.state.place
        };

        fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify(example),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok)
                    return res.json();
                else
                    throw new Error('bład POST');
            })
            .then(() => console.log('post klika sie'))
            .catch(err => console.log(err));
    };

    switchCheckbox1 = () => {
        this.setState({
            isChecked1: !this.state.isChecked1,
            isDisabled1: !this.state.isDisabled1,
            dzien: this.state.isDisabled1 ? this.state.day : this.state.dzien
        })
    };

    switchCheckbox2 = () => {
        this.setState({
            isChecked2: !this.state.isChecked2,
            isDisabled2: !this.state.isDisabled2,
            czas: this.state.isDisabled2 ? this.state.hour : this.state.czas
        })
    }
    switchCheckbox3 = () => {
        this.setState({
            isChecked3: !this.state.isChecked3
        })
    }
    switchCheckbox4 = () => {
        this.setState({
            isChecked4: !this.state.isChecked4
        })
    }

    changeHandlerDay = (event) => {
        this.setState({
            dzien: event.currentTarget.value
        })
    };
    changeHandlerTime = (event) => {
        this.setState({
            czas: event.currentTarget.value
        })
    };

    changeHandlerInput = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }


    render() {

        return (
            <div>
                <div className='header'>
                    <h1>Znalezione zwierzę: {this.props.match.params.animal}</h1>
                </div>
                <div>
                    <form action="" className='addAnimalForm center-col'>

                        <div className='timePlaceImg'>
                            <label>aktualna data
                                <input type="checkbox"
                                       checked={this.state.isChecked1}
                                       onChange={this.switchCheckbox1}/>
                            </label>
                            <input id='dzien'
                                   onChange={this.changeHandlerDay}
                                   disabled={this.state.isChecked1 ? true : false}
                                   value={this.state.dzien}
                                   placeholder='DD.MM.RRRR'/>
                            <label>aktualny czas
                                <input type="checkbox"
                                       checked={this.state.isChecked2}
                                       onChange={this.switchCheckbox2}/>
                            </label>
                            <input id='czas'
                                   onChange={this.changeHandlerTime}
                                   disabled={this.state.isChecked2 ? true : false}
                                   value={this.state.czas}
                                   placeholder='GG.MM.SS'/>
                            <input id='place'
                                   type="text"
                                   placeholder='podaj miejsce zaginięca (np. ulicę)'
                                   onChange={this.changeHandlerInput}
                                   value={this.state.place}/>

                        </div>
                        <div className='basicInfo'>
                            <input type="text"
                                   id='type'
                                   value={this.state.type}
                                   onChange={this.changeHandlerInput}
                                   placeholder='wpisz rasę lub typ'/>
                            <select id="sex"
                                    value={this.state.sex}
                                    onChange={this.changeHandlerInput}>
                                <option value="" disabled selected hidden>podaj płeć</option>
                                <option value="unknown">nie wiadomo</option>
                                <option value="male">samiec</option>
                                <option value="female">samica</option>
                            </select>
                            <input type="text"
                                   id='weight'
                                   value={this.state.weight}
                                   onChange={this.changeHandlerInput}
                                   placeholder='wpisz wagę'/>
                            <select id='castration'
                                    value={this.state.castration}
                                    onChange={this.changeHandlerInput}>
                                <option value="" disabled selected hidden>jest po zabiegu kastracji?</option>
                                <option value='unknown'>nie wiadomo</option>
                                <option value='productive'>niekastrowany/niesterylizowany</option>
                                <option value='eunuch'>kastrowany/sterylizowana</option>
                            </select>
                            <input id='img'
                                   type="text"
                                   value={this.state.img}
                                   onChange={this.changeHandlerInput}
                                   placeholder='dodaj zdjęcie'/>
                        </div>
                        <div className='additionalInfo'>

                            <label>znaleziono coś przy nim:
                                <input type="checkbox" checked={this.state.isChecked3}
                                       onChange={this.switchCheckbox3}/>
                            </label>


                            <textarea id="marks"
                                      placeholder='znaki szczególne'
                                      value={this.state.marks}
                                      onChange={this.changeHandlerInput}/>


                            <label>posiada chip:
                                <input type="checkbox"
                                       checked={this.state.isChecked4}
                                       onChange={this.switchCheckbox4}/>
                            </label>


                            <textarea id="additional"
                                      placeholder='dodatkowe informacje'
                                      value={this.state.additional}
                                      onChange={this.changeHandlerInput}/>

                        </div>
                        <div className='forAdditionalTextarea'>
                            <div>{this.state.isChecked3 && <textarea
                                id='additionalThings'
                                placeholder='obroża, smycz, puszorki itp'
                                value={this.state.additionalThings}
                                onChange={this.changeHandlerInput}/>}</div>
                            <div>{this.state.isChecked4 && <input id='chipNumb'
                                                                  value={this.state.chipNumb}
                                                                  onChange={this.changeHandlerInput}
                                                                  placeholder='wpisz nr chipa'/>}</div>
                        </div>

                        {this.state.img !== '' &&
                        <div className='image'>
                            <img src={this.state.img} alt=""/>
                        </div>}

                        <button type='submit' onClick={this.addAnimal}>Dodaj zwierzę</button>


                    </form>
                </div>


                <button className='come-back'><Link to='/main-page'>Powrót</Link></button>

                <AnimalsMenager kind={this.props.match.params.animal}/>

                <button className='come-back'><Link to='/main-page'>Powrót</Link></button>

            </div>
        )
    }
}


export default FoundForm