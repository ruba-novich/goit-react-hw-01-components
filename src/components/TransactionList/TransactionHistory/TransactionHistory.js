import React from 'react';
import PorpsTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ type, amount, currency }) => (
    <tr className={styles.list}>
        <td className={styles.listBody}>{amount}</td>
        <td className={styles.listBody}>{currency}</td>
        <td className={styles.listBody}>{type}</td>
    </tr>
);
TransactionHistory.prototype = {
    type: PorpsTypes.string.isRequired,
    amount: PorpsTypes.number.isRequired,
    currency: PorpsTypes.string.isRequired,
};

export default TransactionHistory;