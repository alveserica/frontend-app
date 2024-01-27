import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
