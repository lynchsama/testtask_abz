import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import SecondSection from './components/SecondSection';
import Grid from './components/Grid'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <SecondSection />
      <Grid />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
