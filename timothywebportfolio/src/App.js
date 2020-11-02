import './App.css';
import { Container } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Container style={{ backgroundColor: '#553333', height: '100vh' }}>
        <Navbar />
        <h1>Timothy Reynoso</h1>
      </Container>
    </div>
  );
}

export default App;
