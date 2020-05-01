import React, { Component } from 'react';
import axios from 'axios'; // https://www.npmjs.com/package/react-axios

import {MARKER_URL} from '../properties';
import MarkerMap from './MarkerMap';

import { Spinner } from "react-bootstrap";

import './Main.css';

export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoaded : false,
            isLoadPage : false,
            markers : [],
            fromTime : null,
            toTime : null,
        };
    }

    async handle(){

        // not Loaded
        if(!this.state.isLoaded){ // net update

            await axios.get(MARKER_URL, {'Access-Control-Allow-Origin':'*'})
            .then(res => {
                this.setState({isLoaded : true});
                this.setState({isLoadPage : true});
                this.setState({markers : res.data})
            })
            .catch(error => {
                console.log(error);
            });
        }
    }


    render(){
        this.handle();
        if(this.state.isLoaded){
            return(
                <div>
                    <div class="div2">
                        <MarkerMap value={this.state.markers}/>
                    </div>
                </div>
            );
            
        } else {
            return(
                <div className="preloader">
                    <div className="preloader__loader">
                        <Spinner animation="grow" size="lg"/>
                    </div>
                </div>
            );           
        }
    }
}