import React from "react";
import Statistics from "../StatisticData/Statistic/Statistics";
import styles from './StatisticData.module.css'

const StatisticData = ({stats, title}) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {stats.map(({ label, percentage, id }) => (
                <Statistics
                    key={id}
                    label={label}
                    percentage={percentage}
                />
            ))}
        </ul>
    </section>
);

export default StatisticData;