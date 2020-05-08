import React, { Component } from 'react';
import axios from 'axios'; // https://www.npmjs.com/package/react-axios

import {BACKUP_URL} from '../properties';
import MarkerMap from './MarkerMap';

import './Main.css';

export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            data : null,
            isLoding : true
        };
    }

    async getBackupFromS3(){
        await axios.get(BACKUP_URL, {
            headers: {
              'Content-Type': 'application/octet-stream'
            }
          }).then(res => {
              console.log(res);
              this.setState({data : res.data})
              this.setState({isLoding : false})
          })
    }


    render(){
        document.title = "Карта ДТП"

        if(this.state.isLoding){
            this.getBackupFromS3();
            return(
                <div>
                    <MarkerMap value={[]}/>
                </div>
            );
        } else {
            return(
                <div>
                    <MarkerMap value={this.state.data.incident}/>
                </div>
            );
        }
        
    }
}