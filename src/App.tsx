
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';


function App() {
  const personName={
    first:'Robert',
    second:'Petinson'
  }
  const nameList = [
    {
      first:'Taylor',
      last: 'Lentenent'
    },
    {
      first:'Bruce',
      last:'Wayne'

    },
    {
      first:'Clark',
      last:'kent'
    }
  ]
  return (
    <div className="App">
      <h1>Hey There</h1>
      <Greet name='Soyeb' massageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList} ></PersonList>
    </div>
  );
}

export default App;
