// import React packages
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Nav, Image} from 'react-bootstrap';

// import Components
import Name from './Name.js';
import Bio from './Bio.js';
import Res from './Resume.js';

// import assetts
import prof from './gradprof.jpg';

function App() {
  return (<Router>
            <div>
              <Nav className="nav" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link className="li" href="/home" >Cyrus Goudarzi</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" >
                  <Nav.Link className="li"  href="/resume" eventKey="resume">Resume</Nav.Link>
                </Nav.Item>
              </Nav>
              <Switch>
                <Route path="/resume">
                  <Resume/>
                </Route>
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
            </div>
          </Router>

  );
}

function Home() {
  return (<Container fluid>
            <Row>
            <Name name="Cyrus Goudarzi"/>
            </Row>
            <Row>
            <Col>
              <Image src={prof} rounded className="img-small"/>
            </Col>
            </Row>
            <Row>
            <Col>
              <Bio description="I&#39;m a graduate student pursuing a MS in Computer Science and Information Systems from the University of North Carolina at Wilmington. 
              I work as a Graduate Assistant for the Curriculum Materials Center within Watson College at UNCW and also freelance as a Web Development consultant in my free time.  
              I am currently working on my thesis project which is focused on text data analytics and visualization in a disaster context.  
              I am currently seeking full-time employment in Software Engineer or Data Scientist roles." list="HTML, CSS, JavaScript/JQuery, Bootstrap, SQL, Python, R"/>
            </Col>
            </Row>
            </Container>
  );
}

function Resume() {
  return (<Res/>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
  );

export default App;