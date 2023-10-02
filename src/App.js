
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div>
      <Navbar style={{backgroundColor: "#f5e042", height: "150px"}} fixed="top">
        <Container>
          <Navbar.Brand>Notes App</Navbar.Brand>
  
        </Container>
      </Navbar>
     
      <div>
      <Note />
      </div>
    
    
    


    
    </div>
  );
}


function Note() {
  return (
    <>
    
        <div style={{backgroundColor: "yellow", height: "60px", width: "100px"}}>
          <p>this is a note </p>
        </div>
     
    </>
  )
}


export default App;
