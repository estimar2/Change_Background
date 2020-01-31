import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ProgressBarClassic } from "react-native-progress-bar-classic";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        <TouchableOpacity>
          <AntDesign name="setting" style={styles.set} />
        </TouchableOpacity>
        <Image
          source={require("./src/pompom/POMPOM_W.png")}
          style={styles.pom}
        ></Image>

        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pom: {
    width: 250,
    height: 250
  },
  setCover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  set: {
    fontSize: 25
  },
  conCover: {
    flex: 3,
    alignItems: "center"
  }
});

export default App;
