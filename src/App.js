import React, {Component} from 'react';
import Header from './components/header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownView: false
    }
  }

  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <section className='welcome'>
          <span className='wTextA'>Welcome To Our Studio!</span>
          <span className='wTextB'>IT'S NICE TO MEET YOU</span>
          <div className='goldButo'>TELL ME MORE</div>
        </section>
        <section className='services'>
              <span className='secHeader'>SERVICES</span>
              <span className='secFlavor'>Lorem ipsum dolor sit amet consectetur.</span>
              <section className='nuggets'>
              </section>
        </section>
      </div>
    )
  }
}

export default App;
