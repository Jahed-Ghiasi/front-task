import "./App.css";
import AsideMenu from "src/app/components/menu/asideMenu/asideMenu";
import AppRoutes from "./app/routing/appRoutes";

function App() {
  return (
    <div className="app">
      <AsideMenu />
      <div className="page">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
