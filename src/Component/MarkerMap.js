import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./MarkerMap.css";

export default class MarkerMap extends Component {

    getMarkersAsText(){
        let markers = this.props.value.map((marker) =>
            <ul >
                <li>{marker.id}</li>
                <li>{marker.longitude}</li>
                <li>{marker.latitude}</li>
            </ul>
        ); 

        return <ul>{markers}</ul>;
    }

    getMarkers(){
        return this.props.value.map((marker) =>
            <Marker key={marker.id} position={[marker.latitude, marker.longitude]}>
                <Popup>{marker.id}</Popup>
            </Marker>
        ); 
    }

    render(){
        return (
            <div>
                <Map center={[53.904541,27.561523]} zoom={7}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {this.getMarkers()}
                </Map>
            </div>
        );
    }
}