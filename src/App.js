import React from 'react'; 
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink';
import Rank from './components/Rank/Rank';
import FaceId from './components/FaceId/FaceId';
import Form from './components/Form/Form';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: 'bf09bed0a5fc4f89817d9be561b64cb7'
});

const particlesParameters = {
  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
        value_area: 700
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: [],
      route: 'signin'
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input})
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then((response) => {
          this.setState({
            box: this.FaceBoxCal(response.outputs[0].data.regions.map(
              (regions) => regions.region_info.bounding_box)
            )
          })
        })
        .catch((error) => console.log('The error is',error));
    }

  FaceBoxCal = (bounding_box) => {
    const image = document.getElementById('inputImg');
    
    return (bounding_box.map((each_box) => {
        return ({
          leftCol: each_box.left_col * Number(image.width),
          topRow: each_box.top_row * image.height,
          rightCol: image.width - (each_box.right_col * image.width),
          bottomRow: image.height - (each_box.bottom_row * image.height)
        })
      })
    )
  }

  // We could leave the (rightCOL & bottomROW) 
    // as [bounding_box.right_col * image.width] 
    // & [bounding_box.bottom_row * image.height]
  // But remember in css we have explicit left and right position properties from 
  // the left and right of each enclosing block. 
  // So calculations won't just be only from the top/left of each block.

  onRouteChange = (routeValue) => {
    this.setState({route: routeValue})
  }

  render() {

    const {imageURL, box} = this.state;

    return (
      <div className="tc">
        <Particles className='particles' params={particlesParameters} />
        {this.state.route === 'signin'
          ? <>
              <Form onRouteChange={this.onRouteChange}/>
              <Logo />
            </>
          : <>
              <Navigation onRouteChange={this.onRouteChange}/>
              <Logo />
              <Rank />
              <ImageLink prop1={this.onInputChange} prop2={this.onSubmit}/>
              <FaceId image={imageURL} box={box}/>
            </>
        }
      </div>
    );
  }
}

export default App;
