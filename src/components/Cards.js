import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the news!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('./Images/image1.jpeg')}
              text='Relase date PlayStation 5'
              label='Console'
              path='/news_1'
            />
            <CardItem
              src={require('./Images/image3.jpeg')}
              text='Cyberpunk 2077 has been delayed until December'
              label='Gaming'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('./Images/image4.jpeg')}
              text='ASUS Announces EKWB GeForce RTX 30 Series Graphics Cards'
              label='PC componentes'
              path='/'
            />
            <CardItem
              src={require('./Images/image5.jpeg')}
              text='Arcane, the league of legends anime'
              label='Anime'
              path='/'
            />
            <CardItem
              src={require('./Images/image6.jpeg')}
              text='GEFORCE NOW'
              label='Game Streaming'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;