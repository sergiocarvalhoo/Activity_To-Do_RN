import React, { ReactNode } from 'react';
import { View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function ItemWrapper({ index, children }: ItemWrapperProps) {
  if (index % 2 === 0)
    return (
      <LinearGradient
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}}
        colors={['rgba(199, 184, 184, 0.753)', 'rgba(196, 196, 196, 0)']}
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {children}
      </LinearGradient>
    )
  
  return (
    <View
      style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
    >
      {children}
    </View>
  )
}