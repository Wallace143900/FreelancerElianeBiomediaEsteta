import React, { useState, useEffect } from 'react';
import ElianeVideo from '../../../public/Depoimentos/ElianeVideo.mp4';
import video from '../../../public/Depoimentos/c8.mp4';
import { depoimentsStudent } from '../../data/depoiments';
import { CertificateCourse } from '../../data/certificado';
import { photoCourse } from '../../data/photoCourse';
import styles from './styles.module.scss';

export const Depoiments = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentsStudent.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? depoimentsStudent.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentsStudent.length);
    };

    return (
        <section className={styles.section}>
            <h1 className="title1">Depoimentos Sobre Os Cursos</h1>
            <div className={styles.container}>
                <div className={styles.videoTop}>
                    <div className={styles.video}>
                        <video controls src={ElianeVideo} className={styles.ElianeVideo} />
                        <p className="paragraphy">Assista meu depoimento</p>
                    </div>
                    <div className={styles.video}>
                        <video controls src={video} className={styles.CourseVideo} />
                        <p className="paragraphy">Alguns detalhes sobre um curso por aí</p>
                    </div>
                </div>
                <h3 className="title3">Confira algumas imagens de como são nossos cursos!</h3>
                <div className={styles.containerImages}>
                    {photoCourse.map((depo) => (
                        <div key={depo.id} className={styles.images}>
                            <img src={depo.image} alt="Imagens dos cursos" />
                        </div>
                    ))}
                </div>
                <h3 className="title3">Sobre algumas turmas formadas</h3>
                <div className={styles.certifateImages}>
                    {CertificateCourse.map((certificado) => (
                        <div key={certificado.id} className={styles.images}>
                            <img src={certificado.image} alt="Imagens das turmas formadas" />
                        </div>
                    ))}
                </div>
                <h2 className="title2">Confira alguns depoimentos em vídeo</h2>
                <div className={styles.carouselContainer}>
                    <button onClick={handlePrev} className={styles.carouselButton}>◀</button>
                    <div className={styles.carousel} style={{ '--current-index': currentIndex }}>
                        {depoimentsStudent.map((depoiment, index) => (
                            <div
                                key={depoiment.id}
                                className={`${styles.carouselItem} ${
                                    index === currentIndex ? styles.active : ''
                                }`}
                            >
                                <video controls src={depoiment.video} />
                                <p className="paragraphy">{depoiment.name}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNext} className={styles.carouselButton}>▶</button>
                </div>
            </div>
        </section>
    );
};
