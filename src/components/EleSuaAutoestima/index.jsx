import styles from "./styles.module.scss";
import React, { useContext, useEffect, useState, useRef } from 'react';
import Logo from "../../../public/Dra.Eliane_Brand/logo_eliane_header.png";
import { FaWhatsapp, FaTimes, FaInstagram } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { UserContext } from "../../providers/UserContext";
import fotoPrincipal from "../../../public/Dra.Eliane/fotoPrincipal.png";
import fotoPrincipalMobile from "../../../public/Dra.Eliane/fotoMobile.png";

export const EleveAutoestima = () => {
    const { toggleMenu, isMenuOpen } = useContext(UserContext);

    const whatsappMessage = "Olá, gostaria de de saber mais sobre seus cursos e serviços para agendar um horário.";
    const whatsappNumber = "5521969096543";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const [currentImage, setCurrentImage] = useState(fotoPrincipal);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuRef = useRef(null);

    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => {
            toggleMenu();
        }, 500); // Fecha o modal após a navegação
    };

    useEffect(() => {
        const handleResize = () => {
            setCurrentImage(window.innerWidth <= 590 ? fotoPrincipalMobile : fotoPrincipal);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                if (isMenuOpen) {
                    toggleMenu();
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen, toggleMenu]);

    return (
        <section id="inicio">
            <img src={currentImage} alt="Foto Principal" className={styles.mainImage} />
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <nav className={styles.nav}>
                    <img src={Logo} alt="Logo Dra.Eliane" className={styles.logo} />
                    <ul
                        ref={menuRef}
                        className={`${styles.menu} ${isMenuOpen ? `${styles.menuOpen} ${styles.menuOpened}` : ''}`}
                    >
                        <li className="paragraphy" onClick={() => handleNavigation("inicio")}>INÍCIO</li>
                        <li className="paragraphy" onClick={() => handleNavigation("antesDepois")}>ANTES E DEPOIS</li>
                        <li className="paragraphy" onClick={() => handleNavigation("cursosServicos")}>CURSOS E SERVIÇOS</li>
                        <li className="paragraphy" onClick={() => handleNavigation("sobreMim")}>SOBRE MIM</li>
                        <li className="paragraphy" onClick={() => handleNavigation("depoimentos")}>DEPOIMENTOS</li>
                        <li className="paragraphy" onClick={() => handleNavigation("contato")}>CONTATO</li>
                    </ul>
                    <div className={styles.iconContainer}>
                        <a href={whatsappURL} className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className={styles.iconZap} size={25} />
                        </a>
                        <a href="https://www.instagram.com/draelianecristina/?hl=pt" className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className={styles.iconInsta} size={25} />
                        </a>
                    </div>
                    <button className={styles.menuButton} onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes size={30} /> : <IoMenu size={30} />}
                    </button>
                </nav>
                <div className={styles.linhaHeader}></div>
            </header>
            <div className={styles.top}>
                <div className={styles.lineTop}></div>
                <a href="https://www.instagram.com/draelianecristina/?hl=pt" target="_blank" rel="noopener noreferrer" className="paragraphy">
                    @draelianecristina <FaInstagram className={styles.iconZap} size={25} />
                </a>
            </div>
            <div className={styles.section}>
                <div className={styles.lineLeft}></div>
                <div className={styles.write}>
                    <p className="paragraphy" id={styles.paragraphy}>Reinvente-se</p>
                    <h1 className="title1">Eleve sua autoestima!</h1>
                    <h3 className="title3">By Eliane Cristina</h3>
                </div>
                <div className={styles.lineRight}></div>
            </div>
        </section>
    );
};
