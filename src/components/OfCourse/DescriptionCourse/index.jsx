// src/OfCourse/DescriptionCourse/DescriptionCourse.jsx
import React, { useState } from 'react';
import styles from './styles.module.scss';

const DescriptionCourse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.descriptionCourse}>
      <button className={styles.courseTitle} onClick={toggleAccordion}>
        {title}
        <span className={isOpen ? styles.iconOpen : styles.iconClosed}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      {isOpen && <p className={styles.courseContent}>{content}</p>}
    </div>
  );
};

export default DescriptionCourse;
