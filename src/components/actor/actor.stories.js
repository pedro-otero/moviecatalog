/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Actor } from './actor';

storiesOf('Actor', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => (
    <Actor
        name="Some Guy"
        bio="Born in 1956, American"
        movies={[{ id: 'm1', title: 'A movie' }]} />
  ));
