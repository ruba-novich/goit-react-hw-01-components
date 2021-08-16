import React from 'react';
import PorpsTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistics = ({ label, percentage }) => (
  <li className={styles.item}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

Statistics.porpsTypes = {
  label: PorpsTypes.string.isRequired,
  percentage: PorpsTypes.number.percentage,
};

export default Statistics;
