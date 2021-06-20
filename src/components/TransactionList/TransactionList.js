import React from 'react';
import TransactionHistory from '../TransactionList/TransactionHistory/TransactionHistory';
import styles from './TransactionList.module.css';

const TransactionList = ({ items }) => (
    <table className={styles.transactionHistory}>
        <thead className={styles.article}>
            <tr className={styles.articleList}>
                <th className={styles.item}>Type</th>
                <th className={styles.item}>Amount</th>
                <th className={styles.item}>Currency</th>
            </tr>
        </thead>
        <tbody className={styles.resaltBody}>
            {items.map((items) => (
            
                <TransactionHistory
                    key={items.id}
                    type={items.type}
                    amount={items.amount}
                    currency={items.currency}
                />          
            ))}
        </tbody>
    </table>
);

export default TransactionList;