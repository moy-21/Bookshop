import './App.css';
import NavBar from './components/NavBar';
import SnackBar from './components/SnackBar';
import Box from '@mui/material/Box'
import {Route, Routes} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Logout from './views/Logout'
import ReadingList from './views/ReadingList'
import BookShop from './views/BookShop'



// const my_token="HeazDJCgT7iHwy6va9Tg3ArcE_kQg8gb5dv1YJ5JeTg"
// let registerInfo = {
//   "email":"moi@email.com", 
//   "first_name":"Moises", 
//   "last_name":"Renteria",
//   "password":"123"
// }


function App() {
  return (
    <>
      <SnackBar/>
        <NavBar>
          <Box sx={{minHeight:'90vh'}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/readinglist" element={<ReadingList/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/books" element={<BookShop/>}/>
            </Routes>
          </Box>
        </NavBar>
    </>
  );
}

export default App;
