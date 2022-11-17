import './index.css';
import Project from './Project/index'

const RightSection = () => {
  return (
    <div className="RightSection">
      <div className="Projects">
        <p className="section-title">Projects</p>
        <Project
          name="Website"
          year="2022"
          techStack={["HTML", "CSS", "Bootstrap"]}
					point1="Created using HTML and CSS to improve my skills."
          point2="Shows the how the basic view of the websites and added basic effects using CSS"
        />
				 <Project
          name="Order Status Management App"
          year="2022"
          techStack={["HTML", "CSS", "Bootstrap"]}
					point1="Shows the status of Pizza when click on the order."
          point2="Used the JavaScript Concepts for dynamic changes used synchronous and asynchronous concept to
          understand the Java Script"
        />
				 <Project
          name="Registration App"
          year="2019"
          techStack={["HTML", "CSS", "JavaScript"]}
					point1="Registration and validation."
          point2="Simply to be authentication."
        />
      </div>
      <hr />
      <div className="Achievements">
        <p className="section-title">Achievements</p>
        <ul>
					<li>Secured first prize in technical quiz (2017)</li>
					<li>Recieved police merit schlorship (2017,2018)</li>
					
				</ul>
      </div>
			<hr />
      <div className="Languages">
        <p className="section-title">Languages</p>
        <ul>
					<li>English</li>
					<li>Hindi</li>
					<li>Telugu</li>
				</ul>
      </div>
    </div>
  );
};

export default RightSection;