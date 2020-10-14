import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import HeaderComponent from './Components/HeaderComponent';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import ShopperProvider from './Context/ShopContext';
import Cart from './Components/Cart';
import CarouselComponent from './Components/CarouselComponent';
import FashionPage from './Pages/FashionPage';
import Profile from './Components/Profiles/Profile';
import MenPage from './Pages/MenPage';
import WomensPage from './Pages/WomensPage';
import KidsPage from './Pages/KidsPage';


const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopperProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <HeaderComponent />
          <Cart />
          <Switch>
            <Route path="/men">
              <MenPage passed="Men" load={true} />
            </Route>
            <Route path="/women">
              <MenPage passed="women" load={true} />
            </Route>
            <Route path="/kids">
              <KidsPage />
            </Route>
            <Route path="/fashion">
              <FashionPage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route exact path="/">
              <CarouselComponent />
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </StyletronProvider>
    </ShopperProvider>
  );
}

export default App;
