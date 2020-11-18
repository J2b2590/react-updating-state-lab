// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }


    handleClick = () => {
        console.log(this.state.settings.bitrate)
        let upDateBit = this.state.settings.bitrate + 4
        this.setState({ 
            settings: {
                ...this.state.settings,
                bitrate: upDateBit
            }
        },()=>console.log(this.state.settings.bitrate));
        
    }

    handleResClick = () => {
        this.setState({ 
            settings: {
                ...this.state.settings,
                video: {
                    resolution: "720p"
                }
            }
         });
        
    }



    render() { 
        return ( 
            <div>
                <button className="bitrate" onClick={this.handleClick} >Im a Button</button>

                <button className="resolution" onClick={this.handleResClick}>Im the Res BUtt</button>
            </div>
         );
    }
}
 
export default YouTubeDebugger;