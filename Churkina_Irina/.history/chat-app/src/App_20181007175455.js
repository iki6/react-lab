import React, { Component } from "react";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
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
