import './App.css';
import  Series  from './components/Series';

function App() {
  return (
    <div className="App">
       <h1>TV Series</h1>
      <div className='contendor-principal'>

        <Series
          nombre='Peaky Blinders'
          ficha='Steven Knight'
          sinopsis='A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.'
          imagen='PeakyBlinders'
        />

        <Series
          nombre='Dr House'
          ficha='David Shore'
          sinopsis='An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.'
          imagen='DrHouse'
        />

        <Series
          nombre='Breaking Bad'
          ficha='Vince Gilligan'
          sinopsis='A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his familys future.'
          imagen='BreakingBad'
        />
        <Series
          nombre='Game Of Thrones'
          ficha='David Benioff & D.B. Weiss'
          sinopsis='Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.'
          imagen='GameOfThrones'
        />
      
      </div>
    </div>
  );
}

export default App;
