import React, { useContext } from 'react';
import Logo from "../../../public/Dra.Eliane_Brand/logo_eliane_header.png";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
    const { toggleMenu, isMenuOpen } = useContext(UserContext);

    const whatsappMessage = "Olá, gostaria de de saber mais sobre o curso e agendar um horário.";
    const whatsappNumber = "5521969096543";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img src={Logo} alt="Logo Dra.Eliane" />
                <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <button className={styles.menuButton} onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes size={30} /> : <IoMenu size={30} />}
                    </button>
                    <li className="paragraphy">INÍCIO</li>
                    <li className="paragraphy">CURSO</li>
                    <li className="paragraphy">SOBRE MIM</li>
                    <li className="paragraphy">DEPOIMENTOS</li>
                    <li className="paragraphy">CONTATO</li>
                </ul>
                <div className={styles.iconContainer}>
                    <a href={whatsappURL} className={styles.whatsappLink}>
                        <p>QUERO AGENDAR MEU HORÁRIO</p>
                        <FaWhatsapp className={styles.iconZap} />
                    </a>
                </div>
                <button className={styles.menuButton} onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes size={30} /> : <IoMenu size={30} />}
                    </button>
            </nav>
            <div className={styles.linhaHeader}></div>
        </header>
    );
};
