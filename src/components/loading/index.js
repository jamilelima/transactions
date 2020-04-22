import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Loading() {
  useEffect(() => {
    spin;
  });

  const rotateAnim = useRef(new Animated.Value(0)).current;

  Animated.timing(rotateAnim, {
    toValue: 1,
    duration: 5000,
    useNativeDriver: true,
  }).start();

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container>
      <Animated.Text style={{transform: [{rotate: spin}]}}>
        <Icon color="#FFF" name="spinner" size={64} />
      </Animated.Text>
    </Container>
  );
}
