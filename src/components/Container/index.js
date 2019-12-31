import React from 'react';
import './style.css';
import Puppies from '../Puppies';

// main container for each Puppies component
// loops through each index in props.puppies, which contains an array of puppy images
// to create a new Puppies component for each image
// attaches the passed down clickEvent function to each Puppies component
const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.characters.map((a, i) => <Puppies name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;