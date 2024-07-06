import styles from "./styles.module.scss";

export const ButtonConhecaMais = () => {

    const whatsappMessage = "Olá, gostaria de de saber mais sobre o curso e agendar um horário.";
    const whatsappNumber = "5521969096543";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className={styles.buttonZap}>
                <h3 className="title3">Fale Conosco e conheça mais sobre o curso em si.</h3>
                <button><a href={whatsappURL}>Quero Saber Mais.</a></button>
            </div>
    )
}