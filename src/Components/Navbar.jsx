import Logo from "../assets/images/Logo.png";
import "../assets/style/Navbar.scss";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <div id="logo">
          <img src={Logo} alt="" />
        </div>
        <div id="navLink">
          <ul>
            <li>
              <NavLink to="/" href="#" className="navlinkItem">
                <i className="fa-solid fa-house"></i>
                Anasayfa
              </NavLink>
            </li>
            <li>
              <NavLink to="/creditCards" href="#" className="navlinkItem">
                <i className="fa-solid fa-credit-card"></i>
                Banka Kartları
              </NavLink>
            </li>
            <li>
              <NavLink to="/bankTransactions" href="#" className="navlinkItem">
                <i className="fa-solid fa-money-bill-transfer"></i>
                Hesap Hareketleri
              </NavLink>
            </li>
            <li>
              <NavLink to="/accountManager" href="#" className="navlinkItem">
                <i className="fa-solid fa-wallet"></i>
                Hesap Yönetimi
              </NavLink>
            </li>
            <li>
              <a href="#" className="navlinkItem">
                <i className="fa-solid fa-user"></i>
                Kişiler
              </a>
            </li>
            <li>
              <a href="#" className="navlinkItem">
                <i className="fa-solid fa-right-long"></i>
                Borçlar
              </a>
            </li>
            <li>
              <a href="#" className="navlinkItem">
                <i className="fa-solid fa-left-long"></i>
                Alacaklar
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
