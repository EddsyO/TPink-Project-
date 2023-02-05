import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/Users/angy/react-website-hackathon-1/public/Pictures/pinkTpic2.png'
              text='The Pink Tax'
              label='What is it?'
              path='/services'
            />
            <CardItem
              src='/Users/angy/react-website-hackathon-1/public/Pictures/PinkTPic3.png'
              text='How it affects you and you dont even know!'
              label='This is a Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/Users/angy/react-website-hackathon-1/public/Pictures/pinkTPic1.jpeg'
              text=' Ways to Donate'
              label='Helping you help others'
              path='/products'
            />
            <CardItem
              src='/Users/angy/react-website-hackathon-1/public/Pictures/PinkTPic5.jpeg'
              text='Dont pay extra for things you NEED as a women'
              label='Resources Available'
              path='/services'
            />
            <CardItem
              src='/Users/angy/react-website-hackathon-1/public/Pictures/PinkTPic4.jpeg'
              text='Educate and Delegate '
              label='Be the change '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;