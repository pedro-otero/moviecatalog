/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Search } from './search';

const movies = [{
  id: 'anId',
  title: 'A Funny Movie',
  synopsis: 'This one makes you laugh',
  cast: ['AC1', 'AC2'],
  genres: ['Comedy'],
}, {
  title: 'Slashing And Blood',
  synopsis: 'This one will give you nightmares',
  cast: ['AC2', 'AC3', 'AC4'],
  genres: ['Horror', 'Thriller'],
}, {
  title: 'Super-Hyped film',
  synopsis: 'Everyone talks about this one',
  cast: ['Meryl Streep'],
  genres: ['Thriller'],
}];

storiesOf('Search', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Title', () => (
    <Search
        filter="Movie"
        movies={movies} />
  ))
  .add('Synopsis', () => (
    <Search
        filter="nightmares"
        movies={movies} />
  ))
  .add('Genre', () => (
    <Search
        filter="thriller"
        movies={movies} />
  ))
  .add('Cast', () => (
    <Search
        filter="meryl streep"
        movies={movies} />
  ));
