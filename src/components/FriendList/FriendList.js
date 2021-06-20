import React from 'react';
import PorpsTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem/FriendListItem';
import styles from './FriendList.module.css'

const FriendsList = ({ friends }) => (
    <ul className={styles.friendList}>
        {friends.map((friends) => (
          <FriendListItem
            key={friends.id}
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}
          />     
       ))}
    </ul>
);
FriendsList.porpsTypes = {
    friends: PorpsTypes.arrayOf(PorpsTypes.shape({
        id: PorpsTypes.string.isRequired,
    })).isRequired,
};
export default FriendsList;