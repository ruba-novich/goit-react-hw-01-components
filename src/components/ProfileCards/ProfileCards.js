import React from 'react';
import styles from './ProfileCards.module.css';
import PorpsTypes from 'prop-types';

const ProfileCards = ({ followers, views, likes }) => (
  <ul className={styles.stats}>
    <li className={styles.list}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}> {followers}</span>
    </li>
    <li className={styles.list}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}> {views}</span>
    </li>
    <li className={styles.list}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}> {likes}</span>
    </li>
  </ul>
);

ProfileCards.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};

ProfileCards.prototype = {
  followers: PorpsTypes.number.isRequired,
  views: PorpsTypes.number.isRequired,
  likes: PorpsTypes.number.isRequired,
};

export default ProfileCards;
