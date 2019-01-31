import React, { Component } from 'react';
import './Partners.css';
import { MyConsumer } from './../Context/FullDataContex.js'

class Partners extends Component {
  constructor(props) {
    super(props);
    this.images = [];
    this.state = {
      ready: false
    };
  }

  componentDidMount() {

    // this.images = Object.keys(this.props.allUsers)
    fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json()).then(jsonData => {
      this.images = jsonData.slice(20, 30);
      this.setState({ready: true});
    });
  }

  slide = (direction) => {
    let allWidth=0;
    let images=document.getElementsByClassName('partner')
    console.log(images)
    for(let i=0; i<images.length; i++){
      allWidth+=images[i].offsetWidth
    }
    console.log(allWidth)
    console.log(allWidth)
    let currentPosition = +this.slider.style.marginLeft.slice(0, -2);
    console.log(allWidth, currentPosition, window.innerWidth )
    if(allWidth+currentPosition > window.innerWidth && direction === "left"){
      this.slider.style.marginLeft =  currentPosition - 200 + "px";
    }
    if (currentPosition < 0 && direction === "right") {
      this.slider.style.marginLeft =  currentPosition + 200 + "px";
    }
  }

  render() {
      const {texts}= this.props
      let allPartners= null
      if(this.props.allUsers){
        allPartners = Object.keys(this.props.allUsers)
      }
      // console.log(allPartners, this.props.allUsers)
    return (
      <div id="partners"> 
        {
          this.state.ready && allPartners ? (
            <>
            <h2 style={{color:"#5C3C79",fontSize: "calc( 25px + 3vw )",fontWeight: "bold",margin:"5vw"}}>{texts.ourPartners}</h2>
            <div style={styles.container} className="container">
            <a className="prev" onClick={e => this.slide("right")} >&#10094;</a>
              <div style={styles.slider} ref={element => this.slider = element}>
                {
                  allPartners.map((partner, i) => (
                  <div key={partner} style={{ width:'200px'}} className="partner">
                     {this.props.allUsers[partner].company}
                  </div>))
                }
              </div>
              <a className="next" onClick={e => this.slide("left")}>&#10095;</a>
             </div> 
            </>
          ) : null
        }
      </div>
    );
  }
}
export default MyConsumer(Partners);


const styles = {
  container: {
    display: "flex",
    height: "40vh",
    width: "100vw",
    alignItems: "center",
    overflow: "hidden",
  },
  slider: {
    margin : '10',
    position: 'absolute',
    display: "flex",
    overflow: "hidden",
    marginLeft: 0,
    marginRight:0,
    transition: "margin 0.3s ease-out"
  },
};
