import './App.css';
import Header from './components/Header/index'
import LeftSection from './components/LeftSection/index'
import RightSection from './components/RightSection/index'

function App() {
  return (
    <div className="App">
      <Header />
			<hr />
			<div className="main-section">
				<LeftSection />
				<RightSection />
			</div>
    </div>
  );
}

export default App;