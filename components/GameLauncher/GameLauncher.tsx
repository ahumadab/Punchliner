import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  view: {
    backgroundColor: "lightgray",
    paddingVertical: "2%",
    paddingHorizontal: "10%",
    borderRadius: 50,
  },
  text: {
    fontSize: 50,
  },
});

interface GameLauncherProps {
  myProp: () => void;
}

const GameLauncher: React.FC<GameLauncherProps> = ({ myProp }) => {
  return (
    <>
      <Text style={styles.title}>Bienvenue sur Punchliner !</Text>
      <Text>Le jeu où tu retrouves l'auteur d'une punchline.</Text>
      <Pressable style={styles.view} onPress={myProp}>
        <Text style={styles.text}>Start</Text>
      </Pressable>
    </>
  );
};

export default GameLauncher;
