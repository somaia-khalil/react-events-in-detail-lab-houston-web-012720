// Code CoordinatesButton Component Here

import React from "react";


export default class CoordinatesButton extends React.Component {


    displayCordinate = (event) => {
        this.props.onReceiveCoordinates([
        event.clientX,
        event.clientY])
    }

    render(){
        return (
            <div>
            <button onClick = {this.displayCordinate} >
                
            </button>
            </div>
        )
    }

}
