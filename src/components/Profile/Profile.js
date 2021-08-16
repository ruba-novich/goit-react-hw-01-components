import React from 'react';
import styles from './Profile.module.css';
import PorpsTypes from 'prop-types';
import ProfileCards from '../ProfileCards';

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt={name} className={styles.avatar} width="180" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ProfileCards
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}
    />
  </div>
);

Profile.prototype = {
  avatar: PorpsTypes.string.isRequired,
  name: PorpsTypes.string.isRequired,
  tag: PorpsTypes.string.isRequired,
  location: PorpsTypes.string.isRequired,
};

export default Profile;
