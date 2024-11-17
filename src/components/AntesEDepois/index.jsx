import React, { useState } from "react";
import { AntesDepois } from "../../data/antesEDepois";
import styles from "./styles.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const AntesEDepoisResults = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? AntesDepois.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === AntesDepois.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.photo}>
                    <div className={styles.carousel}>
                        <div
                            className={styles.slide}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {AntesDepois.map((result) => (
                                <div key={result.id} className={styles.carouselItem}>
                                    <img src={result.image} alt={result.name} />
                                </div>
                            ))}
                        </div>
                        <button className={styles.prevButton} onClick={handlePrev}>
                            <FaArrowLeft size={20} />
                        </button>
                        <button className={styles.nextButton} onClick={handleNext}>
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                    <div className={styles.imageName}>
                        <p className="paragraphy">{AntesDepois[currentIndex].name}</p>
                    </div>
                </div>
                {/* Nome da imagem fora do carrossel */}
                <div className={styles.right}>
                    <div className={styles.topHeader}>
                        <div className={styles.line}></div>
                        <h2 className="title2">Antes E Depois</h2>
                    </div>
                    <div className={styles.bottom}>
                        <p className="paragraphy">
                            Na nossa clínica, cada detalhe é pensado para proporcionar uma experiência
                            excepcional, com dedicação e paixão em cada atendimento.
                        </p>
                        <p className="paragraphy">
                            Estamos sempre atualizando nossas técnicas e expandindo nosso
                            conhecimento para garantir resultados estéticos de alta qualidade,
                            personalizados para cada paciente.
                        </p>
                        <p className="paragraphy">
                            Nosso compromisso é fortalecer a confiança e a autoestima, promovendo o
                            bem-estar físico e emocional de todos que confiam em nosso cuidado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
