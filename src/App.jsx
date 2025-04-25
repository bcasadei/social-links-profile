import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Button from './Components/Button/Button';

const socialLinks = [
  {
    id: 0,
    name: 'GitHub',
    url: 'https://github.com',
  },
  { id: 1, name: 'Frontend Mentor', url: 'https://www.frontendmentor.io' },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Twitter',
    url: 'https://x.com/',
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://instagram.com',
  },
];

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='card'>
          <Profile
            avatar={'./images/avatar-jessica.jpeg'}
            name={'Jessica Randall'}
            location={'London, United Kingdom '}
            tagline={'"Front-end developer and avid reader."'}></Profile>
          {socialLinks.map((link) => (
            <Button
              key={link.id}
              buttonUrl={link.url}
              buttonName={link.name}></Button>
          ))}
        </div>
        <div className='attribution'>
          Challenge by&nbsp;
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='https://github.com/bcasadei'>Bill Casadei</a>.
        </div>
      </div>
    </>
  );
}

export default App;
