import React from 'react';
import Name from './Name.js';
import Ed from './Education.js';
import Work from './Work.js';
import { Container, Row, Col, Image} from 'react-bootstrap';
import luc from './luc.png';
import uncw from './uncw.png';

function Resume() {
  return (<Container>
  			<Row><Name name="Cyrus Goudarzi"/></Row>
  			<Row><p className="center">cgoudarzi@gmail.com | <a href="https://www.linkedin.com/in/cyrus-goudarzi">LinkedIn</a></p></Row>
  			<Row><Name name="Summary"/></Row>
  			<Row><p className="center">Software Development | Data Science</p></Row>
  			<Row><p className="sum-desc center res-padding">Versatile and creative professional, recent graduate with a masters degree in Computer Science and Information Systems. Fast learner with a background in communications and education. Collaborative nature and desire to continue growing as a programmer and learning through working with other industry professionals. Open to relocation.</p></Row>
  			<Row><p className="center res-padding">HTML ▪ CSS ▪ Javascript ▪ Tableau ▪ Python ▪ Node.js ▪ R ▪ Pandas ▪ MVC Framework ▪ Git ▪ SQL</p></Row>
  			<Row><Name name="Education"/></Row>
  			<Row>
            <Col xs={12} md={6}>
              <Ed school="University of North Carolina at Wilmington" year="2018 - 2020" degree="M.S. Computer Science and Information Systems" title="Text Analytics and Spatial Visualization of Social Media Data during the Various Stages of a Disaster: The Case of Hurricane Dorian" thesis="Text data analysis project to further understand the disaster lifecycle and develop a dashboard that visualizes text data analysis spatially and temporally using Python, Django, Pandas, Plotly.js, and Tableau. This abstract was accepted under Technology Research, Education, and Opinion (TREO) Talk Sessions for Americas Conference of Information Systems 2020."/>
            </Col>
            <Col xs={12} md={6}>
              <Image src={uncw} rounded className="img-small img-ed"/>
            </Col>
            </Row>
            <Row>
            <Col xs={12} md={6}>
              <Ed school="Loyola University Chicago" year="2009 - 2014" degree="B.A. Communication Studies"/>
            </Col>
            <Col xs={12} md={6}>
              <Image src={luc} rounded className="img-small img-ed"/>
            </Col>
            </Row>
            <Row><Name name="Work Experience"/></Row>
            <Work name="UNC-Wilmington," location="Wilmington, North Carolina" dept="Watson College of Education, Curriculum Materials Center" role="Graduate Assistant," year="08/2019-12/2020" duties="Design/Develop a ticketing web-application for Watson College students to use while working in the Curriculum Materials Center. The application keeps track of information regarding student’s projects and is used by Watson Faculty in efforts of operations and fundraising."/>
            <Work dept="Congdon School of Supply Chain, Business Analytics, and Information Systems" role="Graduate Assistant," year="01/2018 - 08/2019" duties="Serve as on-site tutor available for undergraduate students seeking help in Management Information Systems classes. Subjects can include database design, report analysis/design, and network fundamentals."/>
            <Work name="BlackLine," location="Woodland Hills, California" dept="Marketing, Web Development Team" role="Web Development Consultant," year="11/2018 - 08/2019" duties="Worked with Recruiting team to build web pages for internship program applications, projects include landing pages, HTML emails, web graphics, responsive styling with Foundation CSS, HTML/JQuery User Interface development."/>
            <Work role="Web Development Intern," year="06/2018 - 08/2018" duties="Summer internship in front-end web development, projects include landing pages, HTML emails, web graphics, responsive styling with Foundation CSS, HTML/JQuery User Interface development."/>
  		  </Container>
  	);
}
export default Resume;