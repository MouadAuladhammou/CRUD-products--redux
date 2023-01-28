import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

// Provider Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
