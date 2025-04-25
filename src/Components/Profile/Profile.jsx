import React from 'react';
import './Profile.css';

function Profile({
  avatar = 'https://placehold.co/88',
  name = 'Profile Name',
  location = 'Profile Location',
  tagline,
}) {
  return (
    <div className='profile'>
      <img src={avatar} alt={name} className='profile__avatar' />
      <h1 className='profile__name'>{name}</h1>
      <h4 className='profile__location'>{location}</h4>
      <p className='profile__tagline'>{tagline}</p>
    </div>
  );
}

export default Profile;
