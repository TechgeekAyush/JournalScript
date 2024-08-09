import Navbar from './components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes> */}
    </BrowserRouter>
    </>
  )
}

export default App
