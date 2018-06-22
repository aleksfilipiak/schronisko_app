//https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Poznan&destinations=Gdansk
import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const {StandaloneSearchBox} = require("react-google-maps/lib/components/places/StandaloneSearchBox");


class MyMapComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <GoogleMap
            defaultZoom={6}
            defaultCenter={{lat: 51.9324509, lng: 16.8922361}}
        >
            {this.props.markerA && <Marker position={{
                lat: this.props.markerA[0].geometry.location.lat(),
                lng: this.props.markerA[0].geometry.location.lng()
            }}/>}
            {this.props.markerB && <Marker position={{
                lat: this.props.markerB[0].geometry.location.lat(),
                lng: this.props.markerB[0].geometry.location.lng()
            }}/>}
        </GoogleMap>
    }
}

MyMapComponent = withGoogleMap(MyMapComponent);


class Map extends Component {
    constructor() {
        super();

        this.state = {
            searchBoxA: false,
            searchBoxB: false
        }
    }

    componentWillMount() {
        this.refs = {
            searchBoxA: null,
            searchBoxB: null
        };
    }

    onSearchBoxMounted = (ref, searchBox) => {
        this.refs[searchBox] = ref;
    }

    onPlacesChanged = (searchBox) => {
        const places = this.refs[searchBox].getPlaces();

        this.setState({
            [searchBox]: places
        })
    }

    render() {
        console.log(this.state);

        const places = [
            {
                id: 1,
                name: 'Schronisko Bukowska',
                contact: '61 2323 2323',
                adress: 'Bukowska 266, 60-101 Poznań'
            },
            {
                id: 2,
                name: 'Klinika dr Wąsiatycza',
                contact: '61 444 3343',
                adress: 'Księcia Mieszka I 18, 60-101 Poznań'
            }, {
                id: 3,
                name: 'Koci Pazur',
                contact: '61 2323 2323',
                adress: 'Grochowska 4760-101 Poznań'
            }];

       places.map(item=>{
            return (
            <div>
                <h2>Wybierz miejsce pomocy</h2>
                <select name="" id="selectPlace">
                    <option key={item.id} value={item.adress}>{item.name}</option>
                </select>

            </div>
            )
        });



        return (
            <div>
                <StandaloneSearchBox
                    ref={ref => this.onSearchBoxMounted(ref, 'searchBoxA')}
                    onPlacesChanged={() => this.onPlacesChanged('searchBoxA')}>
                    <input
                        type="text"
                        placeholder="Gdzie jesteś?"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                        }}
                    />
                </StandaloneSearchBox>

                <StandaloneSearchBox
                    ref={ref => this.onSearchBoxMounted(ref, 'searchBoxB')}
                    onPlacesChanged={() => this.onPlacesChanged('searchBoxB')}>
                    <input
                        type="text"
                        placeholder="Wybierz miejsce z listy obok lub wpisz"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                        }}
                    />
                </StandaloneSearchBox>

                <MyMapComponent
                    markerA={this.state.searchBoxA}
                    markerB={this.state.searchBoxB}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `400px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />



            </div>
        )
    }
}

export default Map