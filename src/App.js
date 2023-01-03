import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
