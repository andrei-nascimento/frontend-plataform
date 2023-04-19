import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthGoogleProvider } from "./contexts/authGoogle";

function App() {

  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
}

export default App;