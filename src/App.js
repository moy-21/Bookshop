
import './App.css';
import Button from './components/Button';
import NavBar from './components/NavBar';
import BookCard from './components/Card';

function App() {
  return (
    <NavBar>
        <Button color="primary">Button</Button>
        <BookCard/>
    </NavBar>
  );
}

export default App;
