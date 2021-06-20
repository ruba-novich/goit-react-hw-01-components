import React from 'react';
import styles from './Profile.module.css'
import PorpsTypes from 'prop-types';


const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
    <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={avatar}
                alt={name}
                className={styles.avatar}
                width="180"
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

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
    </div>
);

Profile.defaultProps = {
    followers: 0,
    views: 0,
    likes: 0,
};

Profile.prototype = {
    avatar: PorpsTypes.string.isRequired,
    name: PorpsTypes.string.isRequired,
    tag: PorpsTypes.string.isRequired,
    location: PorpsTypes.string.isRequired,
    followers: PorpsTypes.number,
    views: PorpsTypes.number,
    likes: PorpsTypes.number,
};

export default Profile;