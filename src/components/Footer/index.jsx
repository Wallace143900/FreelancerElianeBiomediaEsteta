import styles from "./styles.module.scss";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import logo from "../../../public/Dra.Eliane_Brand/logo_eliane_footer.png";

export const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={logo} alt="Logo Footer" />
                    <p className="paragraphy">Aqui você realmente é amada</p>
                </div>
                <div className={styles.middle}>
                    <h3 className="title3">Contato</h3>
                    <div className={styles.bottom}>
                        <div className={styles.whats}>
                            <FaWhatsapp size={22} className={styles.icon}/>
                            <a href="https://wa.me/5521969096543" className="paragraphy">(21)96909-6543</a>
                        </div>
                        <div className={styles.email}>
                            <MdOutlineEmail size={22} className={styles.icon}/>
                            <p className="paragraphy">elianecristina1408@hotmail.com</p>
                        </div>
                        <div className={styles.location}>
                            <IoLocationOutline size={50} className={styles.icon}/>
                            <p className="paragraphy">Avenida das Américas 3120, bloco 4, sala 201 - Rio de Janeiro/RJ</p>
                        </div>
                        <div className={styles.insta}>
                            <FaInstagram size={22} className={styles.icon}/>
                            <a href="" className="paragraphy">@draelianecristina</a>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <h3 className="title3">Institucional</h3>
                    <ul className={styles.bottom2}>
                        <li className="paragraphy">Início</li>
                        <li className="paragraphy">Antes e Depois</li>
                        <li className="paragraphy">Cursos e Serviços</li>
                        <li className="paragraphy">Sobre Mim</li>
                        <li className="paragraphy">Depoimentos</li>
                        <li className="paragraphy">Contato</li>
                    </ul>
                </div>
            </div>
            <div className={styles.reservado}>
                <p className="paragraphy">&copy; 2024 Todos os Direitos Reservados <a href="https://www.instagram.com/draelianecristina/" target="_blank">Eliane Cristina</a> | Desenvolvido por <a href="https://www.instagram.com/wallacedeveloper95/" target="_blank">Wallace Menezes</a></p>
            </div>
        </footer>
    )
}