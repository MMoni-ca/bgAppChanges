import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  const [randomBackground, setRandomBackground] = useState('#DAE0E2');
  const generateColor = () => {
    const hexRange = "01234556789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      console.log("color", color);
    }
    // tO update the state need to set the color to setRBG method , 
    // instead of the randomBackground = color , 
    // it will not update the background of the state 
    setRandomBackground(color)
  }
  return (
    <><StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DAE0E2'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#1BCA9B',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  actionBtnText: {
    fontSize: 24,
    textTransform: 'uppercase'
  },
});

export default App;
