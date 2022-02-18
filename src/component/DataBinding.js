/* eslint-disable no-undef */
import React, { Component } from 'react';
class CardComp extends Component{
    constructor(){
        super()
        this.state={
            data:'Data is loding..'
    }
    }
    updateData=(event)=>{
        this.setState({
            data:event.target.value
        })
    }
    render(){
        return <div>
            <div className="card ">
<hi>Data Binding</hi>
            <span>Enter Text:</span><input className="size" type="text" onChange={this.updateData}/>
        </div>

        <div className="card-body">
            <h5>{this.state.data}</h5></div>

            </div>
    }
}
export default CardComp;