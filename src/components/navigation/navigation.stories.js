/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './navigation';

storiesOf('Navigation', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => (
    <Navigation />
  ));
