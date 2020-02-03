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
// import { styled } from "styled-components";
// import { ProgressBarClassic } from "react-native-progress-bar-classic";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./src/iPhone_Xr/7_Level_iPhone_Xr.jpg")}
          style={styles.bg}
        >
          <StatusBar barStyle={"dark-content"} />

          <View style={styles.setCover}>
            <TouchableOpacity>
              <AntDesign name="setting" style={styles.set} />
            </TouchableOpacity>
          </View>

          <View style={styles.pCover}>
            <Image
              source={require("./src/pompom/POMPOM_W.png")}
              style={styles.pom}
            ></Image>
          </View>

          <View style={styles.conCover}>
            <Text>안녕하시게나</Text>
          </View>
        </ImageBackground>
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
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  pCover: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  pom: {
    width: 250,
    height: 250
  },
  setCover: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 50
  },
  set: {
    fontSize: 25
  },
  conCover: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default App;
