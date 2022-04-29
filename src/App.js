import React from "react";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./DataContext";
import EmployeeContextProvider from "./EmployeeContext";
import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <EmployeeContextProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </EmployeeContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
