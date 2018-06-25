/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ActorInput from './actor-input';

storiesOf('Actor Input', module)
  .add('Default', () => (
    <ActorInput
        name="Some Guy"
        bio="Bio text" />
  ));
