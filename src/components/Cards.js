import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><u>Few of my Renders</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              text='Nobody ever understood abstract art...'
              label='Abstract'
              path='/services'
            />
            <CardItem
              src='images/img-2.png'
              text='Yo, are you spying on me?'
              label='Dronny Eyes'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='Did I hypnotize you?'
              label='Hypnotize'
              path='/services'
            />
            <CardItem
              src='images/img-4.png'
              text='Lost in the meteor sky'
              label='Meteor'
              path='/products'
            />
            <CardItem
              src='images/img-8.png'
              text='Cause we all are dust'
              label='Particles'
              path='/sign-up'
            />
          </ul>
        </div>
          </div>

          <h1><u>Few of my Codepens</u></h1>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <CardItem
                          src='images/jigs.png'
                          text='Cherishing the good-old childhood games'
                          label='Jigsaw Puzzle'
                          path='/services'
                      />
                      <CardItem
                          src='images/quiz.png'
                          text='Lets test your knowledge'
                          label='Literature Quiz'
                          path='/services'
                      />
                  </ul>
                  <ul className='cards__items'>
                      <CardItem
                          src='images/2048.png'
                          text='Can you score more than me?'
                          label='2048'
                          path='/services'
                      />
                      <CardItem
                          src='images/matchme.png'
                          text='Lets test your memory'
                          label='Find-My-Match'
                          path='/products'
                      />
                      <CardItem
                          src='images/calc.png'
                          text='Time for some calculations'
                          label='Simple Calculator'
                          path='/sign-up'
                      />
                  </ul>
              </div>
          </div>

    </div>
  );
}

export default Cards;
