import ParkOfficersPage from "./pages/parkOfficersPage/parkOfficersPage";
import ProtocolsPage from "./pages/protocolsPage/protocolsPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.scss";
import HomePage from "./pages/homePage/homePage";
import AdminPanelPage from "./pages/adminPanelPage/adminPanelPage";

function App() {
  return (
    <>
      <HomePage />
      <BrowserRouter>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.link} to="/">
                Officers
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/protocols">
                Protocols
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ParkOfficersPage />} />
          <Route path="/protocols" element={<ProtocolsPage />} />
          <Route path="admin" element={<AdminPanelPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
