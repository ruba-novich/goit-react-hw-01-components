import React from 'react';
import 'modern-normalize/modern-normalize.css';
import './styles.css';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friend-list.json';
import transactions from './transactions.json';

import StatisticData from './components/StatisticData/StatisticData';
import FriendsList from './components/FriendList/FriendList';
import TransactionList from './components/TransactionList/TransactionList';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticData title="Upload stats" stats={statisticalData} />
      <StatisticData stats={statisticalData} />

      <FriendsList friends={friends} />

      <TransactionList items={transactions} />
    </>
  );
};

export default App;
