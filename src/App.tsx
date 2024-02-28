import "./App.css";
import AsideMenu from "src/app/components/menu/asideMenu/asideMenu";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "src/app/utils/context";
import AppRoutes from "./app/routing/appRoutes";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="app">
          <AsideMenu />
          <div className="page">
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
