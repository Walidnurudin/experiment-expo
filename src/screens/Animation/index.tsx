import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
  import { View, Button, StyleSheet } from 'react-native';
  
  export default function index() {
    const randomWidth = useSharedValue(10);
  
    const config = {
      duration: 500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
  
    const style = useAnimatedStyle(() => {
      return {
        width: withTiming(randomWidth.value, config),
      };
    });
  
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, style]} />
        <Button
          title="toggle"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    box: {
      width: 100,
      height: 80,
      backgroundColor: 'black',
      margin: 30,
    },
  });
  