import fotoEliane from "../../../public/Dra.Eliane/eliane.png";
import styles from "./styles.module.scss";

export const Section1 = () => {

    return (
        <section>
            <div className={styles.section}>
                <div className={styles.write}>
                    <p className="paragraphy" id={styles.paragraphy}>Curso dado pelo Brasil</p>
                    <h1 className="title1">Transforme sua Carreira com o Curso de Toxina Botulínica e Preenchimento Facial</h1>
                    <h3 className="title3">Domine as Técnicas Avançadas de Harmonização Facial</h3>
                    <p className="paragraphy"><span className="span">Aprenda com os melhores profissionais do mercado e eleve suas habilidades estéticas a um novo patamar.</span> Nosso curso oferece treinamento completo em procedimentos de toxina botulínica e preenchimento facial, capacitando você para oferecer resultados excepcionais e transformar a vida de seus clientes.</p>
                </div>
                <div className={styles.imgsEliane}>
                    <img src={fotoEliane} alt="Foto Dra. Eliane Cristina" />
                </div>
            </div>
        </section>
    )
}