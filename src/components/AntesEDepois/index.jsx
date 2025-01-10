import React, { useEffect, useState } from "react";
import { AntesDepois } from "../../data/antesEDepois";
import styles from "./styles.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const AntesEDepoisResults = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [virtualIndex, setVirtualIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const transitionEndHandler = () => {
        setIsTransitioning(false);

        if (currentIndex === -1) {
            setCurrentIndex(AntesDepois.length - 1);
        } else if (currentIndex === AntesDepois.length) {
            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        if (currentIndex === -1) {
            setVirtualIndex(AntesDepois.length - 1);
        } else if (currentIndex === AntesDepois.length) {
            setVirtualIndex(0);
        } else {
            setVirtualIndex(currentIndex);
        }
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.section} id="antesDepois">
            <div className={styles.container}>
                <div className={styles.photo}>
                    <div className={styles.carousel}>
                        <div
                            className={styles.slide}
                            style={{
                                transform: `translateX(-${
                                    (currentIndex + 1) * 100
                                }%)`,
                                transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
                            }}
                            onTransitionEnd={transitionEndHandler}
                        >
                            <div className={styles.carouselItem}>
                                <img
                                    src={AntesDepois[AntesDepois.length - 1].image}
                                    alt={AntesDepois[AntesDepois.length - 1].name}
                                />
                            </div>
                            {AntesDepois.map((result) => (
                                <div key={result.id} className={styles.carouselItem}>
                                    <img src={result.image} alt={result.name} />
                                </div>
                            ))}
                            <div className={styles.carouselItem}>
                                <img src={AntesDepois[0].image} alt={AntesDepois[0].name} />
                            </div>
                        </div>
                        <button className={styles.prevButton} onClick={handlePrev}>
                            <FaArrowLeft size={20} className={styles.iconPrev} />
                        </button>
                        <button className={styles.nextButton} onClick={handleNext}>
                            <FaArrowRight size={20} className={styles.iconNext} />
                        </button>
                    </div>
                    <div className={styles.imageName}>
                        <p className="paragraphy2" id={styles.Paragrafo}>
                            {AntesDepois[virtualIndex]?.name}
                        </p>
                    </div>
                </div>
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
