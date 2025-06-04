import type { Schema, Struct } from '@strapi/strapi';

export interface HelloHello extends Struct.ComponentSchema {
  collectionName: 'components_hello_hellos';
  info: {
    displayName: 'hello';
    icon: 'alien';
  };
  attributes: {
    ewwww: Schema.Attribute.RichText;
    qwcvm: Schema.Attribute.Boolean;
    qwerty: Schema.Attribute.Component<'qwerty.qwerty', false>;
    qwertyu: Schema.Attribute.String;
    u123: Schema.Attribute.String;
  };
}

export interface QwertyQwerty extends Struct.ComponentSchema {
  collectionName: 'components_qwerty_qwerties';
  info: {
    displayName: 'qwerty';
    icon: 'brush';
  };
  attributes: {
    qwertyuiop: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hello.hello': HelloHello;
      'qwerty.qwerty': QwertyQwerty;
    }
  }
}
