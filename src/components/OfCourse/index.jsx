// src/OfCourse/OfCourse.jsx
import React from 'react';
import styles from './styles.module.scss';
import DescriptionCourse from './DescriptionCourse';

const courseData = [
  { title: 'Rinotox', content: 'Descrição do curso de Rinotox...' },
  { title: 'Preenchimento (Labial)', content: 'Descrição do curso de Preenchimento Labial...' },
  { title: 'Endolaser', content: 'Descrição do curso de Endolaser...' },
  { title: 'Botox', content: 'Descrição do curso de Botox...' },
  { title: 'Gluteopastia', content: 'Descrição do curso de Gluteopastia...' },
  { title: 'H. Corporal', content: 'Descrição do curso de Harmonização Corporal...' },
  { title: 'Microvasos', content: 'Descrição do curso de Microvasos...' },
];

const OfCourse = () => {
  return (
    <div className={styles.ofCourseContainer}>
      <h1>Serviços</h1>
      <p>Confira os cursos e treinamentos que ministramos</p>
      {courseData.map((course, index) => (
        <DescriptionCourse key={index} title={course.title} content={course.content} />
      ))}
    </div>
  );
};

export default OfCourse;
