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
      {isOpen && (
        <div className={styles.courseContent}>
          <p 
            className={`paragraphy ${isService ? styles.serviceDescription : styles.courseDays}`} 
            id={styles.p}
          >
            {content}
          </p>
          {content2 && <p className='paragraphy' id={styles.pp}>{content2}</p>}
        </div>
      )}
    </div>
  );
};

export default DescriptionCourse;