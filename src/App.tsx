import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FactoryFlow from './components/FactoryFlow';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <Container>
     <Row>
      <h1>Factory Flow</h1>
     </Row>
        
    <Row>
    <FactoryFlow />
    </Row>
    <div>
      <Button>Create Square Node</Button>{' '}
      <Button>Create Circle Node</Button>{' '}   
      <Button>Create Triangle Node</Button>{' '}
    </div>
      
    </Container>
  );
}

export default App;
