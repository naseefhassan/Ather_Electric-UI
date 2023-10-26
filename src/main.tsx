import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Show from './Components/Show/Show'
import India from './Components/India/India'
import Base from './Components/Base/Base'
import Accessories from './Components/Accessories/Accessories'
import Footer from './Components/Footer/Footer'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Show />
    <India />
    <Base />
    <Accessories />
    <Footer />
  </React.StrictMode>,
)
