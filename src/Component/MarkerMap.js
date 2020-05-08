import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./MarkerMap.css";
import "./MediaQuery.css";

import fileLogo from './file1.png';

export default class MarkerMap extends Component {

    getMarkers(){
        return this.props.value.map((marker) =>
            <Marker key={marker.id} position={[marker.latitude, marker.longitude]}>
                <Popup >
                    {this.getMarkerInfo(marker)}
                </Popup>
            </Marker>
        ); 
    }

    getMarkerInfo(marker){
        return <div className="popupInfoWrapperDiv">
            {this.getMarkerImgAsDiv(marker.attachmentFile)}
            <div className="popup popupText" dangerouslySetInnerHTML={this.createMarkup(marker)} />
            <div className="popup">{this.getDataAsDiv(marker)}</div>
        </div>
    }

    createMarkup(marker) {
        return {__html: marker.text};
      }

    getDataAsDiv(marker){
        let hour = marker.hour;
        if(hour < 10){
            hour = "0" + hour;
        }

        let minute = marker.minute;
        if(minute < 10){
            minute = "0" + minute;
        }

        return <span>{hour}:{minute} {marker.day}/{marker.month + 1}/{marker.year}</span>
    }


    getMarkerImgAsDiv(attachmentFile){
        return  attachmentFile.map((file) => this.getAttachment(file));
    }

    getAttachment(file){
        if(file.mediaType === "PHOTO" 
            || file.mediaType === "PHOTO_PNG" 
            || file.mediaType === "PHOTO_JPG" 
            ){
            return <img key={file.fileName} className="scale popupImage" alt="img" src={"https://beldtp.ams3.digitaloceanspaces.com/beldtp/" + file.fileName} height="120" width="120"/>;
        }

        
        return <a key={file.fileName} href={"https://beldtp.ams3.digitaloceanspaces.com/beldtp/" + file.fileName}>
            <img alt="img" src={fileLogo} height="120" width="120"/>
        </a>
    }



    render(){
        return (
            <div>
                <Map center={[53.904541,27.561523]} zoom={6}>
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