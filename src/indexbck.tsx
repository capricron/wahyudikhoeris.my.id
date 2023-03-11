import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './routes';
import reportWebVitals from './reportWebVitals';

import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

// ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
