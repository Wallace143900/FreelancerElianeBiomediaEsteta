import styles from "./styles.module.scss";
import localizada from "../../../public/Dra.Eliane_Brand/gorduraLocalizada.png";
import harmonizacao from "../../../public/Dra.Eliane_Brand/harmonizacao.png";
import preenchimento from "../../../public/Dra.Eliane_Brand/preenchimento.png";
import { FaWhatsapp } from "react-icons/fa";

export const Especialista = () => {


    const whatsappMessage = "Olá, gostaria de de saber mais sobre o curso e agendar um horário.";
    const whatsappNumber = "5521969096543";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className={styles.section}>
            <div className={styles.especialista}>
                <article className={styles.cardEspecialista}>
                    <img src={localizada} alt="Ícone de Gordura Localizada" size={45}/>
                    <h4 className="title4">Gordura localizada</h4>
                    <p className="paragraphy">O tratamento para redução de gordura localizada consiste em uma série de procedimentos estéticos voltados a diminuir a gordura em áreas específicas do corpo, como abdômen, coxas, culotes e braços. Esse processo é indicado para quem deseja redefinir o contorno corporal e alcançar resultados mais harmoniosos e proporcionais.</p>
                </article>
                <article className={styles.cardEspecialista}>
                    <img src={harmonizacao} alt="Ícone de harmonização facial" size={28}/>
                    <h4 className="title4">Harmonização Facial</h4>
                    <p className="paragraphy">A harmonização facial é um procedimento estético completo, desenvolvido para equilibrar as proporções faciais, realçar os traços naturais e proporcionar uma aparência mais jovem, saudável e harmoniosa. Além de contribuir para o rejuvenescimento, o tratamento também busca valorizar a simetria do rosto, destacando sua beleza de forma sutil e natural.</p>
                </article>
                <article className={styles.cardEspecialista}>
                    <img src={preenchimento} alt="Ícone de preenchimento labial" size={28}/>
                    <h4 className="title4">Preenchimento Labial</h4>
                    <p className="paragraphy">O preenchimento labial é um procedimento estético projetado para aumentar o volume dos lábios, redefinir seu contorno e melhorar a simetria facial, proporcionando um visual mais harmonioso e atraente. Além de dar mais destaque ao sorriso, o tratamento ajuda a suavizar linhas finas ao redor da boca, resultando em uma aparência mais rejuvenescida e natural.</p>
                </article>
            </div>
            <div className={styles.line}></div>
            <div className={styles.beleza}>
                <h4 className="title4">Agende agora a sua consulta e descubra os melhores tratamentos para realçar a sua beleza e bem-estar! Eu, com todo o cuidado e atenção, estou pronta para atendê-la(o) com segurança, qualidade e excelência.</h4>
                <button>
                    <a href={whatsappURL} className={styles.whatsappLink} target="_blank" id="paragraphy" >
                        Agende sua consulta <FaWhatsapp className={styles.iconZap} size={23} />
                    </a>
                </button>
            </div>
        </section>
    )
}