import { Route, Routes } from 'react-router-dom';
import App from '../src/pages/Home/app'

export function Routing() {
    return (
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
    );
  }

  export default Routing;
