import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import ProductPage from './Pages/ProductPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignupPage';
import Cart from './Pages/Cart';
import AdminPage from './Pages/AdminPage';
import FilteredCategories from './Pages/FilteredCategories';
import { useAuthContext } from './Hooks/useAuthContext';


function App() {
const { user } = useAuthContext()

  return (
    <div className="App">
<Router>
  
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/LoginPage' element={<LoginPage />}></Route>
    <Route path='/SignupPage' element={<SignUpPage />}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/AdminPage' element={<AdminPage/>}></Route>
    {/* <Route path='/AdminPage' element={ user? <AdminPage/>: <Navigate to="/LoginPage" />}></Route> */}
    <Route path='/ProductPage/:id' element={<ProductPage/>}></Route>
    <Route path='/Filtered Items/:id' element={<FilteredCategories />}></Route>
    <Route path="*"  element={<NotFound />}></Route>
  </Routes>

</Router>

    </div>
  );
}

export default App;
