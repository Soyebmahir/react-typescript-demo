
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';


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
      <Greet name='Soyeb' massageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList} ></PersonList>
      <Status status ='error'></Status>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button handleClick={()=>{
        console.log('Event Clicked')
      }}></Button>
    </div> 
  );
}

export default App;
