import { hydrate, render } from 'react-dom';
import 'styles/global.scss';
import { StrictMode } from 'react';
import Containers from 'containers';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<StrictMode><Containers /></StrictMode>, rootElement);
} else {
  render(<StrictMode><Containers /></StrictMode>, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
