/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { GenreList } from './genre-list';

const genres = {
  'Sci-Fi': [{
    id: 1,
    title: 'A Movie',
  }, {
    id: 2,
    title: 'Another Movie',
  }],
  Comedy: [{
    id: 3,
    title: 'Funny',
  }],
};

storiesOf('Genre list', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => (
    <GenreList genres={genres} />
  ));
