import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import MainProduct from './pages/MainProduct.jsx'
import MainCategory from './pages/MainCategory.jsx'
import Cart from './pages/Cart.jsx'


const router = createBrowserRouter([
  {
    path: "/shopping-app-redux/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path:"product/:pId",
        element:<MainProduct/>
      },
      {
        path:"category/:slug",
        element:<MainCategory/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path: "*",
        element: <div> Error</div>,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
