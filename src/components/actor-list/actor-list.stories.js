/* eslint-disable import/no-extraneous-dependencies,global-require */
import React from 'react';
import { storiesOf, action } from '@storybook/react';
import ActorList from './actor-list';

const actors = [{
  name: '#1',
  bio: 'Lorem Ipsum',
}, {
  name: '#2',
  bio: 'Lorem Ipsum',
}];

storiesOf('Actor List', module)
  .add('Default', () => (
    <ActorList actors={actors} />
  ));
