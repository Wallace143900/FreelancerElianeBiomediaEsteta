import styles from "./styles.module.scss";
import fotoElianeCourse from "../../../public/Dra.Eliane/fotoElianeCourse.jpg";

export const OfCourse = () => {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className="title2">Curso de Harmonização Facial com a Dra. Eliane Cristina</h2>
                    <p className="paragraphy"><strong className="strong">Domine Técnicas Avançadas:</strong> Aprenda a aplicar Toxina Botulínica e Preenchimento Facial/Labial com Ácido Hialurônico, altamente demandadas no mercado.</p>
                    <p className="paragraphy"><strong className="strong">Formação Completa:</strong> Nossa metodologia combina teoria e prática, preparando você para atuar com excelência imediatamente após o curso.</p>
                    <p className="paragraphy"><strong className="strong">Regulamentação Anvisa:</strong> Conheça as normas legais para atuar dentro das leis brasileiras de saúde e estética.</p>
                    <p className="paragraphy"><strong className="strong">Pré-requisitos:</strong> Curso exclusivo para profissionais formados em Biomedicina, Medicina, Odontologia, Farmácia, Enfermagem, Ciências Biológicas e Fisioterapia. Consulte o Conselho de sua categoria para mais detalhes.</p>
                </div>
                <img src={fotoElianeCourse} alt="Foto Dra. Eliane Cristina" />
            </div>
        </section>
    )
}
