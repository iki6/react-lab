import React, { Component } from "react";
import Layout from "./components/Layout";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";
import "./index.css";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout title="Chat App" />
      </Provider>
    );
  }
}

export default App;
