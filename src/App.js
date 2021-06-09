import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import hornedBeasts from './component/data.json';





class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      dataHorn:hornedBeasts
    }
  }
  displayFilteredImages = (newHorns) =>{
    this.setState ({
      dataHorn: newHorns

    })
  }
  
  render(){
    return (
      <div>
        <Header/>
        <Main displayFilteredImages={this.displayFilteredImages}
        dataHorn={this.state.dataHorn}
        />

        <Footer/>
     

      </div>

    )
  }
}
export default App;