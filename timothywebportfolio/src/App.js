import './App.css';
import { Container } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'

function App() {
  return (
    <div>
      <Container>
        <div className='container'>
          <Navbar />
        </div>
        <Header />
        <Body />
      </Container>
    </div>
  );
}
/* can also style like this
  <Container style={{ backgroundColor: '#553333' }}>
*/
export default App;
