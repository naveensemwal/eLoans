import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import RNSpeedometer from "react-native-speedometer";

const labels = [
  {
    name: "Very Bad",
    labelColor: "#ff2900",
    activeBarColor: "#ff2900",
  },
  {
    name: "Bad",
    labelColor: "#ff5400",
    activeBarColor: "#ff5400",
  },
  {
    name: "Fare",
    labelColor: "#f4ab44",
    activeBarColor: "#f4ab44",
  },
  {
    name: "Good",
    labelColor: "#f2cf1f",
    activeBarColor: "#f2cf1f",
  },
  {
    name: "Very Good",
    labelColor: "#14eb6e",
    activeBarColor: "#14eb6e",
  },
  {
    name: "Excellent",
    labelColor: "#00ff6b",
    activeBarColor: "#00ff6b",
  },
];

const BureauScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            marginVertical: 15,
            fontSize: 20,
            color: "#004d99",
            alignSelf: "center",
          }}
        >
          CIBIL SCORE
        </Text>
        <SafeAreaView style={{ flex: 1 }}>
          <RNSpeedometer
            value={856}
            minValue={0}
            maxValue={900}
            labels={labels}
          />
        </SafeAreaView>
      </View>

      <View style={styles.nextButtonContainer}>
        <Button
          title="Next"
          style={{ width: 200 }}
          linearGradientProps={{
            colors: ['#1277DD', '#0052A2'],
            start: [1, 0],
            end: [0.2, 0],
        }}
          onPress={() => props.navigation.navigate("PersonalDetail")}
        />
      </View>
    </View>
  );
};

export default BureauScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  nextButtonContainer: {
    flex: 1,
    width: "50%",
    justifyContent: "flex-start",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
    paddingBottom: 10,
    overflow: "hidden",
    paddingHorizontal: 30,
  },
});
