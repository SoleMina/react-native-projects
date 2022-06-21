import {useState} from "react";
import {View, SafeAreaView, ActivityIndicator } from 'react-native';
import {Header} from "./src/components";
import GameScreen from "./screens/game-screen";
import StartGame from "./screens/start-game";
import {styles} from "./styles";
import {useFonts} from "expo-font";
import theme from "./constants/theme";

export default function App() {

  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans/OpenSans-Bold.ttf"),
    "open-sans-semibold": require("./assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    "open-sans-extrabold": require("./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf"),
    "open-sans-italic": require("./assets/fonts/OpenSans/OpenSans-Italic.ttf"),
  })

  const [userNumber, setUserNumber] = useState();

  if(!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />
  }

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={onStartGame} />

  if(userNumber) {
    content = <GameScreen userOptions={userNumber} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número"/>
        {content}
      </View>
    </SafeAreaView>
  );
}

