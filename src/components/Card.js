import React from 'react';
import {Text, View} from 'react-native';
import {Palette} from './Styled';

export default function ({server, id, name, ping, memory, cpu}) {
  return (
    <View
      style={{
        backgroundColor: 'rgba(255,255,255,.2)',
        marginBottom: 15,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      {server ? (
        <>
          <Text
            style={{
              color: Palette.color2,
              fontWeight: 'bold',
              marginBottom: 15,
            }}>
            Memoria: {memory}
          </Text>
          <Text
            style={{
              color: Palette.color2,
              fontWeight: 'bold',
            }}>
            CPU: {cpu}
          </Text>
        </>
      ) : (
        <>
          <Text style={{color: Palette.color2, fontWeight: 'bold'}}>
            ID: {id}
          </Text>
          <Text style={{color: Palette.color2, fontWeight: 'bold'}}>
            Nombre: {name}
          </Text>
          <Text style={{color: Palette.color2, fontWeight: 'bold'}}>
            Ping: {ping}
          </Text>
        </>
      )}
    </View>
  );
}
