import React, { useState, useEffect, useRef } from 'react';
import ElianeVideo from '../../../public/Depoimentos/ElianeVideo.mp4';
import video from '../../../public/Depoimentos/c8.mp4';
import { depoimentsStudent } from '../../data/depoiments';
import { CertificateCourse } from '../../data/certificado';
import { photoCourse } from '../../data/photoCourse';
import foto1 from "../../../public/Dra.Eliane_Brand/foto_botao_3.png";
import foto2 from "../../../public/Dra.Eliane_Brand/foto_botao_4.png";
import styles from './styles.module.scss';

export const Depoiments = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const videosRef = useRef([]);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentsStudent.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [isPaused, currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? depoimentsStudent.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentsStudent.length);
    };

    const handleVideoPlay = (index) => {
        // Pause todos os outros vídeos
        videosRef.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
            }
        });
        setIsPaused(true);
    };

    const handleVideoPause = () => {
        setIsPaused(false);
    };

    const addVideoRef = (el, index) => {
        if (el) {
            videosRef.current[index] = el;
            el.addEventListener('play', () => handleVideoPlay(index));
            el.addEventListener('pause', handleVideoPause);
            el.addEventListener('ended', handleVideoPause);
        }
    };

    return (
        <section className={styles.section} id="depoimentos">
            <h1 className="title1">Depoimentos Sobre Os Cursos</h1>
            <div className={styles.container}>
                <div className={styles.videoTop}>
                    <div className={styles.video}>
                        <video controls src={ElianeVideo} className={styles.ElianeVideo} />
                        <div className={styles.videoBottom}>
                            <img src={foto1} alt="Foto de um ícone" />
                            <p className="paragraphy">Assista meu depoimento</p>
                        </div>
                    </div>
                    <div className={styles.video}>
                        <video controls src={video} className={styles.CourseVideo} />
                        <div className={styles.videoBottom}>
                            <img src={foto2} alt="Foto de um ícone" />
                            <p className="paragraphy">Alguns detalhes sobre um curso</p>
                        </div>
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
                    <button onClick={handlePrev} className={styles.carouselButton} id={styles.prev}>◀</button>
                    <div className={styles.carousel} style={{ '--current-index': currentIndex }}>
                        {depoimentsStudent.map((depoiment, index) => (
                            <div
                                key={depoiment.id}
                                className={`${styles.carouselItem} ${
                                    index === currentIndex ? styles.active : ''
                                }`}
                            >
                                <video
                                    controls
                                    src={depoiment.video}
                                    ref={(el) => addVideoRef(el, index)}
                                />
                                <p className="paragraphy">{depoiment.name}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNext} className={styles.carouselButton} id={styles.next}>▶</button>
                </div>
            </div>
        </section>
    );
};
