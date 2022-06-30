import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    height: "10%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Ici se placera la pub</Text>
    </View>
  );
};

export default Footer;
