import React from 'react';
import {View} from 'react-native';
import {Palette} from './Styled';

export default function ({children}) {
  return (
    <View style={{backgroundColor: Palette.color1, flex: 1}}>{children}</View>
  );
}
