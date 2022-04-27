import React from "react";
import AppRoutes from "./Routes";
import { DataProvider } from "./DataContext";

function App() {
  const userData = { username: "admin", password: "admin" };
  return (
    <div className="App">
      <DataProvider value={userData}>
        <AppRoutes />
      </DataProvider>
    </div>
  );
}

export default App;
