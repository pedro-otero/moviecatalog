/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Movie } from './movie';

storiesOf('Movie', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => (
    <Movie
        title="Chick Flick"
        synopsis={`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         `}
        genres={['Chickflick', 'Comedy']}
        cast={[{ id: 's', name: 'Sofia Vergara' }, { id: 'r', name: 'Reese Whitherspoon' }]}
    />
  ));
