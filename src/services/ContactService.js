import React, { Component } from 'react'
import axios from 'axios'

export default class ContactService extends Component {

    static serverURL = "  http://localhost:9000";

    static getAllContacts(){
        let  dataURL = `${this.serverURL}/contacts`
        return axios.get(dataURL);
    }




  render() {
    
    return (
      <div>ContactService</div>
    )
  }
}
