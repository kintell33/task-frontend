import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import Tasks from "./pages/Tasks";
import Modal from "./components/Modal/Modal";

interface ContextType {
  appData: any;
  setAppData: any;
}

let context = createContext<ContextType>({ appData: {}, setAppData: () => {} });

function App() {
  const [appData, setAppData] = useState({
    user: {},
    loading: false,
    modal: {
      show: false,
      title: "",
      data: "",
      onAccept: () => {},
      onClose: () => {},
    },
  });

  return (
    <context.Provider value={{ appData, setAppData }}>
      <Router>
        {!appData.loading || <Spinner></Spinner>}
        {!appData.modal.show || (
          <Modal
            title={appData.modal.title}
            data={appData.modal.data}
            onAccept={appData.modal.onAccept}
            onClose={appData.modal.onClose}
          ></Modal>
        )}
        <Routes>
          <Route path="/" element={<Tasks />} />
        </Routes>
      </Router>
    </context.Provider>
  );
}

export { context };
export default App;
