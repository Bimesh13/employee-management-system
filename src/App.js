import React from "react";
import DataContextProvider from "./DataContext";
import EmployeeContextProvider from "./EmployeeContext";
import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <EmployeeContextProvider>
          <AppRoutes />
        </EmployeeContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
