import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Palette} from './Styled';
import {useNavigation} from '@react-navigation/native';

export default function () {
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Pressable
        onPress={() => {
          navigation.navigate('Server');
        }}>
        <Text style={{color: Palette.color2, textAlign: 'center'}}>Server</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: Palette.color2, textAlign: 'center'}}>
          Jugadores
        </Text>
      </Pressable>
    </View>
  );
}
