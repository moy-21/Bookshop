
import './App.css';
import Button from './components/Button';
import NavBar from './components/NavBar';
import BookCard from './components/Card';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import {getUser} from './api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import apiUser from './api/apiUser';
import apiBook from './api/apiBook';
import BookBrowser from './components/BookBrowser'


const my_token="HeazDJCgT7iHwy6va9Tg3ArcE_kQg8gb5dv1YJ5JeTg"
let registerInfo = {
  "email":"moi@email.com", 
  "first_name":"Moises", 
  "last_name":"Renteria",
  "password":"123"
}

const handleAPITest= async ()=>{
  const source = CancelToken.source();
  const response_object= await apiUser.post(registerInfo,source.token);
  console.log(response_object)
}

function App() {
  return (
    <NavBar>
        <Button color="primary" onClick={handleAPITest}>Button</Button>
        <BookBrowser/>

        <LoginForm/>
    </NavBar>
  );
}

export default App;
