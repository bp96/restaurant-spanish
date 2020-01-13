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
        <p> Non te qui existit exerci mi israel id cum proditorem, eu poenis quibusdam d putatur iusto. Usus submissionem illa ex dui ut leo mus ea quisquam. Id eos formas w zzril, montes nisl eu quam y diam hac ab tibi ea rem sunt mi suspendisse cras muneris. </p>
        </section>

        <section className='section-3' >
          
          <p className='description'>
            <h3> ME ARDUAS EORUM SEM </h3> 
            Nisi ita lapide lobortis, arcu in saluis uidem eum portorium occasionem, Ab Rudera ut e nobis nam si dis minus ut Gravatam ullo conferenduin est unanimi originem argenti et Autem. Suscipit ille sint ea eventu enim modo fortiaue totam tot dui patriae at Uidem nec nisl ac derelicta cooperabatur culpa class. 
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