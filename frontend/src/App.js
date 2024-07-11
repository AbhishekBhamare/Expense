import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Components/Pages/Landing';
import Dashboard from './Components/Pages/Dashboard';
import ProtectedRoute from './Components/Utils/ProtectedRoute';
import Spending from './Components/Pages/Spending';
import './App.css';
import Categories from './Components/Pages/Categories';
import Budget from './Components/Pages/Budget'
import User from './Components/Pages/User'
import { useCallback, useContext, useEffect, useState } from 'react';
import { MyContext } from './Components/Utils/MyContext';
import { getCookie } from './Components/Utils/getCookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';


function App() {
  const { userData, setUserData } = useContext(MyContext);
  const [id, setId] = useState();

  const getUserData = useCallback(async() => {
    if (id) {
      await axios.get('https://expense-api-5ehm.onrender.com/user', {
        params: { id: id }
      }).then((response) => {
        setUserData({ key: response.data });
      });
    }
  }, [id, setUserData]);

  useEffect(() => {
    const verifyToken = () => {
      const token = getCookie('token');
      if (token) {
        const decodedToken = jwtDecode(token);
        setId(decodedToken.id);
      }
    };
    verifyToken();
    getUserData();
  }, [getUserData]);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/categories' element={<ProtectedRoute>
            <Categories />
          </ProtectedRoute>
          } />
          <Route exact path='/budget' element={<ProtectedRoute>
            <Budget />
          </ProtectedRoute>
          } />
          <Route exact path='/user' element={<ProtectedRoute>
            <User />
          </ProtectedRoute>
          } />
          <Route exact path='/spending' element={<ProtectedRoute><Spending /></ProtectedRoute>} />
          <Route exact path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
