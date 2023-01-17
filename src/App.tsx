import "./App.css";
import Router from "./pages/routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/index";


function App() {


  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
