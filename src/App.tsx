import "./App.css";
import RoutesMain from "./routes";
import GlobalStyle from "./style/global";
import { ToastContainer } from "react-toastify";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
