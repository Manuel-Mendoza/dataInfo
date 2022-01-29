import React from 'react';
import {View} from 'react-native';
import Background from '../components/Background';
import Card from '../components/Card';
import Header from '../components/Header';
import Data from '../components/web.json';

export default function () {
  return (
    <Background>
      <Header />
      <View style={{paddingHorizontal: '5%', marginTop: 10}}>
        <View>
          <Card
            server={true}
            memory={Data.host.memory.text}
            cpu={Data.host.cpu.text}
          />
        </View>
      </View>
    </Background>
  );
}
