/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import MovieInput from './movie-input';

storiesOf('Movie Input', module)
  .add('Default', () => (
    <MovieInput
        title="Some Movie"
        synopsis="Something that happens"
        genres={['Genre #1', 'Genre #2']}
        actors={{
          ac1: {
            name: 'Actor #1',
          },
        }}
        actions={{
          create: action(),
          update: action(),
        }} />
  ));
