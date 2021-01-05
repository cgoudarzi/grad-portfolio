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
import { Container, Row, Col, Nav, NavDropdown, Image} from 'react-bootstrap';

// import Components
import Name from './Name.js';
import Bio from './Bio.js';
import Res from './Resume.js';
import ResPDF from './ResumePDF.js';

// import assetts
import prof from './gradprof.jpg';

function App() {
  return (<Router>
            <div>
              <Nav className="nav" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link className="li" href="/home" >Home</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Resume" id="resume">
                  <NavDropdown.Item href="/resume/html">HTML</NavDropdown.Item>
                  <NavDropdown.Item href="/resume/pdf">PDF</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Portfolio" id="portfolio">
                  <NavDropdown.Item href="/portfolio/1">Coming Soon</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Switch>
                <Route path="/portfolio">
                  <h1>PLACEHOLDER</h1>
                </Route>
                <Route path="/resume/html">
                  <Resume/>
                </Route>
                <Route path="/resume/pdf">
                  <ResPDF/>
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
              <Bio color="#f7f7f7" description="I&#39;m a recent graduate with a MS in Computer Science and Information Systems from the University of North Carolina at Wilmington. 
              I worked as a Graduate Assistant throughout graduate school under both the Cameron School of Business and the Watson College of Education.  I have been pursuing freelance web development work  
              throughout grad school as well.  I recently defended my thesis project which is focused on text data analytics and visualization in a disaster context.  In my thesis project I was working with natural language processing using Python and Pandas while handling front-end visualizations with Tableau.  
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