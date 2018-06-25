/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './navigation';

storiesOf('Navigation', module)
  .add('Default', () => (
    <Navigation />
  ));
