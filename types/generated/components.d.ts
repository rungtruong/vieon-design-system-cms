import type { Schema, Attribute } from '@strapi/strapi';

export interface Block01 extends Schema.Component {
  collectionName: 'components_block_01s';
  info: {
    displayName: '01';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    image: Attribute.Component<'card.card', true>;
  };
}

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomeHome extends Schema.Component {
  collectionName: 'components_home_homes';
  info: {
    displayName: 'Home';
    icon: 'apps';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.01': Block01;
      'card.card': CardCard;
      'home.home': HomeHome;
    }
  }
}
