import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import WhoHelp from './components/WhoHelp';
import HowHelp from './components/HowHelp';
import WhySocius from './components/WhySocius';
import White from './components/White';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <WhoHelp />
      <HowHelp />
      <WhySocius />
      <White />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
