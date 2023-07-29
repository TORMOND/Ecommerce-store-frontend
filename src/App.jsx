import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import ProductPage from './Pages/ProductPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignupPage';
import Cart from './Pages/Cart';
import FilteredCategoryPage from './Pages/FilteredCategories';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import Contacts from './Pages/Contacts';


function App() {

  return (
    <div className="App">
<Router>
  
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/LoginPage' element={<LoginPage />}></Route>
    <Route path='/SignupPage' element={<SignUpPage />}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/cancel' element={<Cancel/>}></Route>
    <Route path='/contactUs' element={<Contacts/>}></Route>
    <Route path='/success' element={<Success/>}></Route>
    <Route path='/ProductPage/:id' element={<ProductPage/>}></Route>
    <Route path='/Category/:categoryName' element={<FilteredCategoryPage />}></Route>
    <Route path="*"  element={<NotFound />}></Route>
  </Routes>

</Router>

    </div>
  );
}

export default App;
