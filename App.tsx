import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import GameLauncher from "./components/GameLauncher/GameLauncher";
import Header from "./components/Header/Header";

export default function App() {
  const [isGameLauched, setIsGameLauched] = useState<boolean>(false);

  const startGame = () => {
    setIsGameLauched(true);
  };

  return (
    <View style={styles.container}>
      <Header />

      {!isGameLauched ? <GameLauncher myProp={startGame} /> : <Game />}

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
