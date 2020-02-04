import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

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
            <MaterialIcons name="location-on" style={styles.loca}>
              <Text>OO광역시 O구 OO동</Text>
            </MaterialIcons>

            <TouchableOpacity>
              <AntDesign name="setting" style={styles.set} />
            </TouchableOpacity>
          </View>

          <View style={styles.pCover}>
            <Image
              source={require("./src/pompom/POMPOM_W.png")}
              style={styles.pom}
            ></Image>
            <Text style={styles.pro}>Progress Bar</Text>
            <TouchableOpacity>
              <Text style={styles.more}>+ 상세정보</Text>
            </TouchableOpacity>
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
  loca: {
    padding: 10
  },
  pro: {
    paddingTop: 10
  },
  more: {
    paddingTop: 10
  },
  setCover: {
    width: "90%",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
