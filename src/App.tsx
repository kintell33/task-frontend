import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import Tasks from "./pages/Tasks";

interface ContextType {
  appData: any;
  setAppData: any;
}

let context = createContext<ContextType>({ appData: {}, setAppData: () => {} });

function App() {
  const [appData, setAppData] = useState({ user: {}, loading: false });

  return (
    <context.Provider value={{ appData, setAppData }}>
      <Router>
        {!appData.loading || <Spinner></Spinner>}
        <Routes>
          <Route path="/" element={<Tasks />} />
        </Routes>
      </Router>
    </context.Provider>
  );
}

export { context };
export default App;
