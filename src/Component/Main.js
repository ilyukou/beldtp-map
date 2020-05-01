import React, { Component } from 'react';
import axios from 'axios'; // https://www.npmjs.com/package/react-axios

import {MARKER_URL} from '../properties';
import MarkerMap from './MarkerMap';

import './Filter.css';
import {Button,Container, Col, Row, InputGroup, FormControl, Spinner } from 'react-bootstrap';

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

        this.updateMarkers = this.updateMarkers.bind(this);
    }

    getFilterDiv(){
        
        var date = new Date();
        var localTime = date.getTime();

        // get local timezone offset and convert to milliseconds
        var localOffset = date.getTimezoneOffset() * 60000;

        // obtain the UTC time in milliseconds
        var utc = localTime + localOffset;

        var offset = 3;  // offset for Minsk is 3 hours
        var minskTimeInMillis = utc + (3600000 * offset);

        var minskTime = new Date(minskTimeInMillis);

        let month = "";

        if(minskTime.getMonth() < 9){
            month = "0" + (minskTime.getMonth() + 1);
        } else{
            month = (minskTime.getMonth() + 1).toString();
        }

        let day = "";

        if(minskTime.getDate() < 10){
            day = "0" + minskTime.getDate();
        } else{
            day = minskTime.getDate().toString();
        }

        let hour = "";

        if(minskTime.getHours() < 10){
            hour = "0" + minskTime.getHours();
        } else{
            hour = minskTime.getHours().toString();
        }

        let minute = "";

        if(minskTime.getMinutes() < 10){
            minute = "0" + minskTime.getMinutes();
        } else{
            minute = minskTime.getMinutes().toString();
        }

        let minskTimeString = minskTime.getFullYear() + "-" + month
        + "-" + day + "T" + hour + ":" + minute;

        return <Container>
            <Row >
                <Col>
                    <h5>Фильтр по времени</h5>
                </Col>
                <Col>
                    <InputGroup>
                        <InputGroup.Text>с</InputGroup.Text>
                        <FormControl 
                            id="fromTime"
                            type="date"
                            min="2000-01-01"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup>
                        <InputGroup.Text>по</InputGroup.Text>
                        <FormControl 
                            id="toTime"
                            type="date"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <Button variant="outline-success" onClick={this.updateMarkers} >
                        Поиск
                    </Button>
                </Col>
            </Row>
        </Container>;
    }

    async updateMarkers(){
        let from = document.getElementById("fromTime").value;
        let to = document.getElementById("toTime").value;

        if(!this.isValid(from)){
            alert("Начальный диапозон указан неверно или не полностью")
        }

        if(!this.isValid(to)){
            alert("Конечный диапозон указан неверно или не полностью")
        }

    }

    isValid(string){
        if(string.length != 10){
            return false;
        }

        return true;
    }

    validate(num,min,max){
       // Number.isInteger = Number.isInteger || function(value) {
    //    return typeof value === 'number' && 
   //     isFinite(value) && 
   //     Math.floor(value) === value;
   // };
        if(typeof 100 != num){
            return false;
        }

        if(num > min && num < max){
            return true;
        }

        return false;
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
                    <div class="div1">
                        {this.getFilterDiv()}
                    </div>
                      
                    <div class="div2">
                        <MarkerMap value={this.state.markers}/>
                    </div>
                    
                </div>
            );
            
        } else {
            return(
                
                <div>
                    <div class="div1">
                    {this.getFilterDiv()}
                    </div>
                    <div class="div2">
                        <Spinner animation="grow"/>
                        <MarkerMap value={[]}/>
                    </div>
                      
                </div>
            );           
        }

    }
}