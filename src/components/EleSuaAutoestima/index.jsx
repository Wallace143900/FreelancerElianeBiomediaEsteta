import styles from "./styles.module.scss";
import React, { useContext, useEffect, useState } from 'react';
import Logo from "../../../public/Dra.Eliane_Brand/logo_eliane_header.png";
import { FaWhatsapp, FaTimes, FaInstagram } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { UserContext } from "../../providers/UserContext";
import fotoPrincipal from "../../../public/Dra.Eliane/fotoPrincipal.png";
import fotoPrincipalMobile from "../../../public/Dra.Eliane/fotoMobile.png";

export const EleveAutoestima = () => {

    const { toggleMenu, isMenuOpen } = useContext(UserContext);

    const whatsappMessage = "Olá, gostaria de de saber mais sobre o curso e agendar um horário.";
    const whatsappNumber = "5521969096543";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const [currentImage, setCurrentImage] = useState(fotoPrincipal);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Função para verificar largura da janela e ajustar a imagem
        const handleResize = () => {
            setCurrentImage(window.innerWidth <= 450 ? fotoPrincipalMobile : fotoPrincipal);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Função para verificar rolagem da página
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section>
            <img src={currentImage} alt="Foto Principal" />
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <nav className={styles.nav}>
                    <img src={Logo} alt="Logo Dra.Eliane" />
                    <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                        <button className={styles.menuButton} onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes size={30} /> : <IoMenu size={30} />}
                        </button>
                        <li className="paragraphy">INÍCIO</li>
                        <li className="paragraphy">ANTES E DEPOIS</li>
                        <li className="paragraphy">CURSOS E SERVIÇOS</li>
                        <li className="paragraphy">SOBRE MIM</li>
                        <li className="paragraphy">DEPOIMENTOS</li>
                        <li className="paragraphy">CONTATO</li>
                    </ul>
                    <div className={styles.iconContainer}>
                        <a href={whatsappURL} className={styles.whatsappLink} target="_blank">
                            <FaWhatsapp className={styles.iconZap} size={25} />
                        </a>
                        <a href="https://www.instagram.com/draelianecristina/?hl=pt" className={styles.whatsappLink} target="_blank">
                            <FaInstagram className={styles.iconZap} size={25} />
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
                <a href="https://www.instagram.com/draelianecristina/?hl=pt" target="_blank" className="paragraphy">
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
