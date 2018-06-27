/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Actor } from './actor';

storiesOf('Actor', module)
  .add('Default', () => (
    <Actor
        name="Some Guy"
        bio={`
    Born in 1956, American
    `} />
  ));
