import React from 'react';
import PorpsTypes from 'prop-types';
import styles from './FriendListItem.module.css'

const status = {
    options: {
        marginLeft: 15,
        marginRight: 15,
        width: 20,
        height: 20,
        borderRadius: '50%',
    }
};

const FriednsListItem = ({ avatar, name, isOnline }) => (
    <li className={styles.item}>
        <span style={{
            ...status.options, backgroundColor: isOnline === true ?  'green' : 'red'}} /> 
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </li>
);
FriednsListItem.porpsTypes = {
    avatar: PorpsTypes.string.isRequired,
    name: PorpsTypes.string.isRequired,
    isOnline: PorpsTypes.string.isRequired,
}
export default FriednsListItem;