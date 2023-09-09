import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Product from "./Components/Pages/Products/Product";
import TableList from "./Components/Pages/Table/TableList";

function App() {

  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/table" element={<TableList/>}/>
    <Route path="/product" element={<Product/>}/>
   
    </Routes>
    </Router> 
    </div>
  )
}

export default App
