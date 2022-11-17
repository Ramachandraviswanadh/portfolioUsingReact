import './index.css'

const Header = () => {
  return (
    <div className="Header">
      <p className="candidate-name">John Doe</p>
      <p className="candidate-email">Email:<a href="mailto:ramachandraviswanadh333@gmail.com">ramachandraviswanadh333@gmail.com</a></p>
      <p className="candidate-phone">Phone Number: <a href="tel:+91 9346871114">+91 9346871114</a></p>
      <p className="candidate-github">Github:<a href="https://github.com/Ramachandraviswanadh">Ramachandraviswanadh</a></p>
    </div>
  );
};

export default Header;