import "./index.css";
import Education from './Education/index'

const LeftSection = () => {
  return (
    <div className="LeftSection">
      <div className="Education">
        <p className="section-title">Education</p>
        <Education
          institute="Maharaj Vijayaram Gajapathi Raj College of Engineering "
          years="2017-2021"
          cgpa={8.5}
          point1="B.Tech"
          point2="Civil Engineering"
        />
				<Education
          institute="Sri Chaitanya Junior College"
          years="2015-2017"
          cgpa={9.1}
          point1="Intermediate"
          point2="M.P.C"
        />
				<Education
          institute="J.M.J English Medium School"
          years="2015"
          cgpa={9.5}
          point1="Matriculation"
          point2="Science"
        />
      </div>
      <hr />
      <div className="Skill">
        <p className="section-title">Skills</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>Bootstrap</li>
					<li>JavaScript</li>
					<li>React.js</li>
				</ul>
      </div>
    </div>
  );
};

export default LeftSection;