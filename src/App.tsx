
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Counter from './components/Hooks/Counter';
import User from './components/Hooks/User';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

import {ThemeContextProvider} from './components/Hooks/Context/ThemeContext'
import Box from './components/Hooks/Context/Box';


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
      <Button handleClick={(event,id)=>{
        console.log('Event Clicked',event,id)
      }}></Button>
      <Input value='' onChange={(event)=>console.log
      (event)}></Input>
      <Container styles={{border:'1px solid black', padding:'1rem'}}></Container>
      <User name='Soyeb' email='tssoyeb@gmail.com'></User>
      <Counter></Counter>

      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>


    </div> 
  );
}

export default App;
