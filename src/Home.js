import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        <Card
          src='https://www.savoy.com.au/wp-content/uploads/2018/10/airbnb-introvert-GUIDE0316.jpg'
          title='Entire Home and HOuse'
          description='very comfortable with private places, with rooms for friends and family'
        />
        <Card
          src='https://miro.medium.com/max/3000/1*FyZktqFMhrQD3swFaNun2g.jpeg'
          title='Entire Home'
          description='very comfortable with private places, with rooms for friends and family'
        />
        <Card
          src='https://cdn.thespaces.com/wp-content/uploads/2020/04/Airbnb-press-shot-Japanese-rental-3.jpg'
          title='Entire Home'
          description='very comfortable with private places, with rooms for friends and family'
        />
      </div>

      <div className='home__section'>
        <Card
          src='https://pbs.twimg.com/media/Eh1mKT_U4AABJ7u.jpg'
          title='Entire Home and HOuse'
          description='very comfortable with private places, with rooms for friends and family'
        />
        <Card
          src='https://media.architecturaldigest.com/photos/5a39377f38bb817b7ffe1dd7/16:9/w_2560%2Cc_limit/airbnb-tips-greenwich-village-apt.jpg'
          title='Entire Home'
          description='very comfortable with private places, with rooms for friends and family'
        />
        <Card
          src='https://bridgesandballoons.com/Images/2019/04/AirBnB-Plus-876x584.jpg'
          title='Entire Home'
          description='very comfortable with private places, with rooms for friends and family'
        />
      </div>
    </div>
  );
};

export default Home;
