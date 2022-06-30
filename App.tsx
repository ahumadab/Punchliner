import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Footer from './components/Footer/Footer';
import GameLauncher from './components/GameLauncher/Gamelauncher';
import Header from './components/Header/Header';

export default function App() {
  const [isGameLauched, setIsGameLauched] = useState<boolean>(false);

  const startGame = () => {
    setIsGameLauched(true);
  };

  return (
    <View style={styles.container}>
      <Header />

      {!isGameLauched ? (
        <GameLauncher myProp={startGame} />
      ) : (
        <Text>Coucou</Text>
      )}

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
