import "./App.css";
import AsideMenu from "src/app/components/menu/asideMenu/asideMenu";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AsideMenu />
        <div className="page"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
