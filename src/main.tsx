//import React from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRouter.tsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    //<App />
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
