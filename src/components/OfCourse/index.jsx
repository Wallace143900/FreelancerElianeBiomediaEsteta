import React from 'react';
import styles from './styles.module.scss';
import DescriptionCourse from './DescriptionCourse';

const courseData = [
  { 
    title: '💥Toxina Botulínica Full Face', 
    content: '1 dia de curso', 
    content2: 'Introdução prática e teórica ao uso da toxina botulínica para tratar linhas de expressão, rugas dinâmicas e prevenção do envelhecimento facial.' 
  },
  { 
    title: '💥Toxina Botulínica Advance', 
    content: '2 dias de curso', 
    content2: 'Foco em técnicas avançadas, incluindo aplicação em pontos estratégicos para rugas estáticas, utilização de fios de PDO e tratamentos complementares como microagulhamento e skinbooster.' 
  },
  { 
    title: '💥Fios de PDO', 
    content: '2 dias de curso', 
    content2: 'Capacitação completa sobre fios de PDO, abordando tipos como fios lisos, espiculados, mono e filler, e suas aplicações para sustentação e estimulação de colágeno.' 
  },
  { 
    title: '💥Preenchimento e Volumização Facial e Labial', 
    content: '2 dias de curso', 
    content2: 'Domínio de técnicas modernas para harmonização facial, com ênfase no preenchimento de áreas como maçãs do rosto, mandíbula e lábios para volumização natural.' 
  },
  { 
    title: '💥Intradermoterapia', 
    content: '2 dias de curso', 
    content2: 'Treinamento intensivo em aplicação de substâncias intradérmicas para tratamentos corporais e faciais, incluindo rejuvenescimento, redução de medidas e celulite.' 
  },
  { 
    title: '💥Vivência em Estética Avançada', 
    content: '4 dias de curso', 
    content2: 'Imersão prática em procedimentos de alta demanda no mercado, com foco em técnicas combinadas para resultados personalizados e otimizados.' 
  },
  { 
    title: '💥PEIM (Procedimento Estético em Microvasos)', 
    content: '1 dia de curso', 
    content2: 'Treinamento direcionado para a eliminação de microvasos e telangiectasias, com abordagem teórica e prática para resultados eficazes.' 
  },
  { 
    title: '💥Mini Glow', 
    content: '1 dia de curso', 
    content2: 'Técnicas para revitalização facial com PDRN, exossomos, peelings leves, microagulhamento e intradermoterapia facial, focando em resultados de luminosidade e rejuvenescimento.' 
  },
  { 
    title: '💥Harmonização Glútea', 
    content: '1 dia de curso', 
    content2: 'Capacitação prática em técnicas de bioestimulação e volumização glútea para contorno corporal e melhora da firmeza da pele.' 
  },
  { 
    title: '💥4 em 1: Botox, Preenchimento, PDO e Mini Glow', 
    content: '4 dias de curso', 
    content2: 'Programa intensivo que combina as principais técnicas de harmonização facial e corporal para profissionais que buscam excelência em estética.' 
  },
  { 
    title: '💥Bioestimulador de Colágeno', 
    content: '2 dias de curso', 
    content2: 'Capacitação em aplicação de bioestimuladores para rejuvenescimento e firmeza da pele, com ênfase em técnicas para diferentes regiões corporais e faciais.' 
  }
];

const serviceData = [
  { 
    name: "✨Botox", 
    description: "Reduz linhas de expressão e rugas faciais, proporcionando uma aparência mais suave e jovem." 
  },
  { 
    name: "✨Harmonização Facial", 
    description: "Procedimento para equilibrar as proporções faciais e realçar a beleza natural, incluindo técnicas de preenchimento." 
  },
  { 
    name: "✨Preenchimento Labial", 
    description: "Aumenta o volume e melhora o contorno dos lábios, proporcionando uma aparência mais jovem e harmônica." 
  },
  { 
    name: "✨Microagulhamento", 
    description: "Estimula a produção de colágeno e trata cicatrizes, linhas finas e textura da pele." 
  },
  { 
    name: "✨Skinbooster", 
    description: "Hidratação profunda da pele, melhorando a luminosidade, textura e elasticidade facial." 
  },
  { 
    name: "✨Rejuvenescimento Facial", 
    description: "Tratamentos variados para combater sinais de envelhecimento e melhorar a aparência da pele." 
  },
  { 
    name: "✨Lipo Enzimática", 
    description: "Procedimento não invasivo para redução de gordura localizada, melhorando o contorno corporal." 
  },
  { 
    name: "✨Eletroterapia para Perda de Medidas Abdominal", 
    description: "Terapia que auxilia na redução de medidas e tonificação do abdômen através de estímulos elétricos." 
  },
  { 
    name: "✨Endolaser", 
    description: "Técnica de laser que ajuda no tratamento de gordura localizada e flacidez." 
  },
  { 
    name: "✨Fios de PDO", 
    description: "Procedimento para sustentação da pele e estímulo de colágeno, melhorando a firmeza e o contorno facial." 
  },
  { 
    name: "✨PEIM (Procedimento em Microvasos)", 
    description: "Eliminação de microvasos através de aplicação direta, melhorando a aparência das pernas e rosto." 
  },
  { 
    name: "✨Terapia Capilar", 
    description: "Tratamento para fortalecimento capilar e combate à queda de cabelo, promovendo o crescimento saudável." 
  },
  { 
    name: "✨Jato de Plasma", 
    description: "Tratamento para remoção de manchas e pequenas rugas, promovendo o rejuvenescimento da pele." 
  },
  { 
    name: "✨Harmonização Glútea", 
    description: "Realça o volume e formato dos glúteos, utilizando técnicas de bioestimulação para contorno e firmeza." 
  }
]

const OfCourse = () => {
  const whatsappMessage = "Olá Dra Eliane Cristina, olhei seu site e gostaria mais sobre seu trabalho?";
  const whatsappNumber = "5521969096543";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={styles.ofCourseContainer}>
      <h1 className='title1'>Cursos</h1>
      <p className='paragraphy'>Confira os cursos e treinamentos que ministramos:</p>
      {courseData.map((course, index) => (
        <DescriptionCourse
          key={index}
          title={course.title}
          content={course.content}
          content2={course.content2}
          isService={false}
        />
      ))}
      <h1 className='title1'>Serviços</h1>
      <p className='paragraphy'>Confira também os serviços que oferecemos:</p>
      {serviceData.map((service, index) => (
        <DescriptionCourse
          key={index}
          title={service.name}
          content={service.description}
          isService={true}
        />
      ))}
      <button className={styles.button}>
        <a href={whatsappURL} className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
          Consultar Agenda e Valores
        </a>
      </button>
    </div>
  );
};


export default OfCourse;
