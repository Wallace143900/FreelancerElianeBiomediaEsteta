import React, { useState } from 'react';
import styles from './styles.module.scss';

const DescriptionCourse = ({ title, content, content2, isService }) => {
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
      <div className={`${styles.courseContentWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={styles.courseContent}>
          <p className={`${isService ? styles.serviceDescription : styles.courseDays}`} id={styles.p}>
            {content}
          </p>
          {content2 && <p className={styles.courseContent} id={styles.pp}>{content2}</p>}
        </div>
      </div>
    </div>
  );
};

export default DescriptionCourse;
