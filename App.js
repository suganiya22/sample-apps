import React, { Component } from 'react';
import Header from './components/Header/Header';
import ProductCart from './components/ProductCart/ProductCart';

import LoginScreen from './containers/LoginScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
		<div className="container">
		   <ProductCart />
            			 
        </div>
		<div className="login_container">
			<div className="row">
			    <div className="small 4 columns">
			
				</div>
		</div>
		 
		</div>
      </div>
    );
  }
}

export default App;
