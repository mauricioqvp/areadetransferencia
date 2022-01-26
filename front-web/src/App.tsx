import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './assets/componets/Navbar';
import Pagination from './assets/componets/Pagination';
import PickPage from './assets/Pages/PickPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pagination />
      <Routes>
        <Route path="/" element={<PickPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
