/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Movie from './movie';

storiesOf('Movie', module)
  .add('Full', () => (
    <Movie
        title="Chick Flick"
        synopsis={`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         `}
        genres={['Chickflick', 'Comedy']}
        cast={['Sofia Vergara', 'Reese Whitherspoon']}
    />
  ));
