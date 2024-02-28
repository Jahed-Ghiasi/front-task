import "./App.css";
import AsideMenu from "src/app/components/menu/asideMenu/asideMenu";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "src/app/utils/context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="app">
          <AsideMenu />
          <div className="page"></div>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
