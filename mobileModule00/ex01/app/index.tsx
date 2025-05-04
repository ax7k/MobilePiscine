import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {
  const [displayText, setDisplayText] = useState("Za Worudo!!");

  const handlePress = () => {
    console.log("Button pressed");
    setDisplayText(displayText === "Za Worudo!!" ? "Hello World!" : "Za Worudo!!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.widget}>{displayText}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 15,
    marginBottom: 20,
  },
  widget: {
    backgroundColor: "#F4F4F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "#8B8000",
    borderWidth: 2,
    fontSize: 30,
    color: "#575000",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#8B8000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});
