import React, { Component } from 'react';
import axios from 'axios'; // https://www.npmjs.com/package/react-axios

import {MARKER_URL} from '../properties';
import MarkerMap from './MarkerMap';

import './Filter.css';
import {Form,Button,Container, Col, Row, InputGroup, FormControl} from 'react-bootstrap';

import { MDBSpinner } from 'mdbreact';

import './Main.css';

export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoaded : false,
            isLoadPage : false,
            markers : []
        };

        this.updateMarkers = this.updateMarkers.bind(this);
        
    }

    getFilterDiv(){
        return <Container>
        <Row >
            <Col>
                <Form>

                    <Form.Group >
                    <Form.Label><h5>Поиск по временнным промежуткам.</h5></Form.Label>
                    </Form.Group>

                    <Form.Group>

                        <InputGroup>

                            <InputGroup.Prepend>
                                <InputGroup.Text>с</InputGroup.Text>
                            </InputGroup.Prepend>

                            <FormControl placeholder="0" type="datetime-local"/>

                        </InputGroup>
                        <InputGroup>

                            <InputGroup.Prepend>
                                <InputGroup.Text>по</InputGroup.Text>
                            </InputGroup.Prepend>

                            <FormControl placeholder="0" type="datetime-local"/>

                        </InputGroup>
                    </Form.Group>
                    

                    <InputGroup>
                        <Button variant="outline-success" onClick={this.updateMarkers} >
                            Поиск
                        </Button>
                    </InputGroup>
                    
                </Form>
            </Col>
        </Row>
        </Container>;
    }

    async updateMarkers(){
        if(this.state.isLoadPage && this.state.isLoaded){
            
            if(this.isValid()){
                
            }
            
        }
    }

    isValid(){

        let fromYear = document.getElementById("fromYear").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("From year incorrect. Correct range 2000-2020");
            return false;
        }

        let toYear = document.getElementById("toYear").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("To year incorrect. Correct range 2000-2020");
            return false;
        }

        let fromMonth = document.getElementById("fromMonth").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("From month incorrect. Correct range 1-12");
            return false;
        }

        let toMonth = document.getElementById("toMonth").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("To month incorrect. Correct range 1-12");
            return false;
        }

        let fromDay = document.getElementById("fromDay").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("From day incorrect. Correct range 1-31");
            return false;
        }

        let toDay = document.getElementById("toDay").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("To day incorrect. Correct range 1-31");
            return false;
        }

        let fromHour = document.getElementById("fromHour").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("From hour incorrect. Correct range 1-23");
            return false;
        }

        let toHour = document.getElementById("toHour").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("To hour incorrect. Correct range 1-23");
            return false;
        }

        let fromMinute = document.getElementById("fromMinute").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("From minute incorrect. Correct range 1-59");
            return false;
        }

        let toMinute = document.getElementById("toMinute").value;
        if(!this.validate(fromYear,2000,2020)){
            alert("To minute incorrect. Correct range 1-59");
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
                        
                    </div>
                    <div class="div2">
                        {this.getFilterDiv()}
                    </div>
                      
                </div>
            );           
        }

    }
}