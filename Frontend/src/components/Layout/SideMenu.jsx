
import { useState } from "react";
import { Nav } from "react-bootstrap";

// Icon imports 
import dashboardIcon from "../../assets/menu/dashboard.svg";
import listIcon from "../../assets/menu/list (2).svg";
import paymentIcon from "../../assets/menu/payment (2).svg";
import profileIcon from "../../assets/menu/profile (2).svg";
import settingsIcon from "../../assets/menu/settings (2).svg";
export const SideMenu = () => {
    const [active, setActive] = useState("Dashboard");

    const menuItems = [
        { name: "Dashboard", icon: dashboardIcon, path: "/" },
        { name: "Liste des procès", icon: listIcon, path: "/liste-des-proces" },
        { name: "Payer mes dettes", icon: paymentIcon, path: "/payer-mes-dettes" },
        { name: "Profil", icon: profileIcon, path: "/profil" },
        { name: "Paramétrage", icon: settingsIcon, path: "/parametrage" },
    ];
    return (
        <>
            <Nav className="flex-column bg-wight vh-100 p-3 pe-0 side-menu col-sm-3">
                {menuItems.map((item) => (
                    <Nav.Link
                        href={item.path}
                        key={item.name}
                        onClick={() => setActive(item.name)}
                        className={`d-flex align-items-center mb-3 ${active === item.name ? "active-menu-item" : ""
                            }`}
                        style={{
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="me-3"
                            style={{
                                height: "24px",
                                filter: active === item.name ? "none" : "grayscale(100%)",
                            }}
                        />
                        <span>{item.name}</span>
                    </Nav.Link>
                ))}
            </Nav>
        </>
    )
}
