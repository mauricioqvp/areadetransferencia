import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './assets/componets/Navbar';
import PickPage from './assets/Pages/PickPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<PickPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
