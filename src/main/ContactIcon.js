import React from 'react';
import styles from './MainPage.css';

const ContactIcon = props => {
  const { link, image, alt } = props;
  console.log(image);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={require(`${image}`)} alt={alt} className={styles.contactIcon} />
    </a>
  );
};

export default ContactIcon;
