import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './assets/componets/Navbar';
import Pagination from './assets/componets/Pagination';
import PickPage from './assets/Pages/PickPage';
import CardText from './assets/componets/CardText';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pagination />
      <Routes>
        <Route path="/" element={<PickPage />} />
        <Route path="/form">
          <Route path=":movieId" element={<CardText text="mauricio" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
