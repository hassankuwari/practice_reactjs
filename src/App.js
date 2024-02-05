import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Container, Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import AllProducts from './Components/AllProducts';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/practice">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Practice</Nav.Link> */}
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/all-products">AllProducts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/about/:id'element={<About/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
        <Route path='/all-products'element={<AllProducts/>}></Route>
        <Route path='/product-details/:id'element={<ProductDetails/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
