import "./App.css";
import { Routers } from "./Routers/Routers";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import {store} from "./Redux/store.js"

function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
