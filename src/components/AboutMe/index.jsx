import styles from "./styles.module.scss";
import missao from "../../../public/Dra.Eliane_Brand/foto_botao_2.png";
import valor from "../../../public/Dra.Eliane_Brand/foto_botao_1.png";
import About from "../../../public/Dra.Eliane/About.png";

export const AboutMe = () => {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.topHeader}>
                        <div className={styles.line}></div>
                        <h3 className="title3">Eliane Cristina</h3>
                    </div>
                    <div className={styles.I}>
                        <h2 className="title2">Quem Sou eu?</h2>
                    </div>
                    <div className={styles.eu}>
                        <p className="paragraphy">Meu nome é Eliane, sou Biomédica Esteta e atuo na área da estética desde 2001. Comecei de forma humilde como depiladora, passei pela micropigmentação e segui meu caminho na comunidade da Rocinha.</p>
                        <p className="paragraphy">Em uma igreja, recebi uma profecia que dizia que eu estudaria, faria faculdade e estaria entre senhores e doutores. Era algo que parecia impossível para mim, que ainda não havia terminado o ensino médio, com filhos pequenos e um emprego CLT.
                        </p>
                        <p className="paragraphy">Hoje, aos 46 anos, 28 de casamento e com dois filhos maravilhosos, vejo a mão de Deus em cada passo. Tornei-me cristã há 17 anos e, 16 anos após aquela profecia, iniciei minha jornada acadêmica. Comecei em Estética, mas meu sonho me levou à Biomedicina, onde concluí uma pós em Biomedicina Estética.
                        </p>
                        <p className="paragraphy">Há 11 anos, atendo com orgulho na Rocinha e estou expandindo para a Barra da Tijuca. Também ofereço cursos para profissionais de saúde que desejam ingressar na estética.
                        </p>
                        <p className="paragraphy">Vinda de uma família humilde, acredito nos planos de Deus para minha vida. Com fé e determinação, sei que é possível transformar profecias em realidade e alcançar o sucesso, independentemente de onde venhamos.</p>
                    </div>
                </div>
                <div className={styles.AboutMe}>
                    <img src={About} alt="Foto sobre mim" />
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.missao}>
                    <img src={missao} alt="Ícone de missão" />
                    <h3 className="title3">Minha Missão</h3>
                    <p className="paragraphy">Minha missão é realizar serviços com excelência e segurança, promovendo cuidado e carinho. Quero que cada pessoa se sinta especial e acolhida, com a confiança de estar em boas mãos. Com atenção aos detalhes, transformo cada atendimento em uma experiência de bem-estar, sempre focando no cliente.</p>
                </div>
                <div className={styles.valor}>
                    <img src={valor} alt="Ícone de valor" />
                    <h3 className="title3">Meus Valores</h3>
                    <p className="paragraphy">Tenho como valores fundamentais colocar Deus acima de tudo, promover o bem-estar, ser proativa, priorizar a segurança, agir com lealdade e manter um foco constante em resultados. Sou comprometida em entregar excelência e busco alcançar resultados que garantam a plena satisfação dos meus clientes.</p>
                </div>
            </div>
        </section>
    )
}