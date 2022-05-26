
import './App.css';
import Button from './components/Button';
import NavBar from './components/NavBar';
import BookCard from './components/Card';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';

function App() {
  return (
    <NavBar>
        <Button color="primary">Button</Button>
        <BookCard/>

        <RegisterForm/>
    </NavBar>
  );
}

export default App;
