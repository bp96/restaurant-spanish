import React from 'react';

import './App.css';
import Navbar from './components/Navbar.js'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      scrolled: false, 
    }
  }
  
  
  render(){
  return (

    <div className='content'>

      <section className='section-1 parallax'>
        <Navbar />
      </section>
      
        <section className='section-2'> 
        <p> Due to the limited amount of tables in our restaurant, we cannot guarantee a private table. Some reservations will be sat at the bar or communal. If you prefer a table, please call or make a note and we will do our best to accommodate your request. </p>
        </section>

        <section className='section-3' >
          
          <p className='description'>
            <h3> LA MARCHA TAPAS BAR </h3> 
            With its rustic interior, pops of bright color and welcoming atmosphere, La Marcha is a tapas bar in the heart of Berkeley that encapsulates the vibrant culinary culture of Spain. Visitors will feel as though they have strolled right off the streets of Spain and into an authentic neighborhood tapas place. 
          </p>
          <img className='image' src='/images/restimage2.jpg' />
        
        </section>

        <section className='section-4 parallax'> </section>

        <section className='section-5'> </section>



    </div>
  );
}
}

export default App;

// creating: https://www.lamarchaberkeley.com/