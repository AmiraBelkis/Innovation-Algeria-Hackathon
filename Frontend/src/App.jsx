import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Layout/Header";
import { SideMenu } from "./components/Layout/SideMenu";

import { Dashboard } from "./pages/Dashboard";
import { ListeDesProces } from "./pages/ListeDesProces";
import { PayerMesDettes } from "./pages/PayerMesDettes";
import { Profile } from "./pages/Profile";
import { Parametrage } from "./pages/Parametrage";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Router>

        <Row>
          <SideMenu />
          <Col xs={9} className="p-5 bg-light">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/liste-des-proces" element={<ListeDesProces />} />
              <Route path="/payer-mes-dettes" element={<PayerMesDettes />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/parametrage" element={<Parametrage />} />
            </Routes>
          </Col>
        </Row>
      </Router>

    </>
  )
}

export default App
