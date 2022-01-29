import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import Background from '../components/Background';
import Card from '../components/Card';
import {Palette} from '../components/Styled';
import Data from '../components/web.json';

const {height} = Dimensions.get('window');

export default function () {
  return (
    <Background>
      <ScrollView>
        <View style={{paddingHorizontal: '5%', marginTop: 10}}>
          <Text
            style={{
              color: Palette.color2,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Server
          </Text>
          <Card
            server={true}
            memory={Data.host.memory.text}
            cpu={Data.host.cpu.text}
          />
        </View>
        <View style={{paddingHorizontal: '5%', marginTop: 10}}>
          <Text
            style={{
              color: Palette.color2,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Jugadores
          </Text>
          {Data.players.map(e => {
            return <Card key={e.id} id={e.id} name={e.name} ping={e.ping} />;
          })}
        </View>
      </ScrollView>
    </Background>
  );
}
