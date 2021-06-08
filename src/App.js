import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import SelectedBeast from './component/SelectedBeast';




class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
       < SelectedBeast/>

      </div>

    )
  }
}
export default App;