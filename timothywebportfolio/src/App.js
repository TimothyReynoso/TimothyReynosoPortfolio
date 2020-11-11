import './App.css';
import { Container } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'

function App() {
  return (
    <div>
      <Container style={{ backgroundColor: '#553333', height: '100vh' }}>
        <Navbar />
        <Header />
        <Body />
      </Container>
    </div>
  );
}

export default App;
