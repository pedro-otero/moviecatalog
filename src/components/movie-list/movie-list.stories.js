/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import MovieList from './movie-list';

const movies = [{
  title: '#1',
  synopsis: 'Lorem Ipsum',
  cast: ['This', 'That'],
  genres: ['G1', 'G2'],
}, {
  title: '#2',
  synopsis: 'Lorem Ipsum',
  cast: ['ABC', 'DEF'],
  genres: ['X', 'Y'],
}];

storiesOf('Movie List', module)
  .add('Default', () => (
    <MovieList movies={movies} />
  ));
