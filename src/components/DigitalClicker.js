// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            timesClicked: 0
         }
    }

    handleClick = () => {
        let newTime = this.state.timesClicked + 1
        this.setState({ 
            timesClicked: newTime  
        },()=> console.log(this.state.timesClicked));
    }


    render() { 
        return ( 
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
         );
    }
}
 
export default DigitalClicker;