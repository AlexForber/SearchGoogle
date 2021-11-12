import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Results from './components/main/Results';
import Queries from './components/queries/Queries';

import SubResult from './components/subresults/SubResult';




function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__wrapper">
        <div className="container">
          <Results />
          <Queries />
          
        </div>
        <SubResult />
      </div>
      <Footer />
    </div>
  );
}

export default App;
