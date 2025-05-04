import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState("0");

  const handleButtonPress = (value: string) => {
    console.log(`Button pressed: ${value}`);
    
    switch (value) {
      case "AC":
        setExpression("0");
        setResult("0");
        break;
      case "C":
        if (expression.length > 1) {
          setExpression(expression.slice(0, -1));
        } else {
          setExpression("0");
        }
        break;
      case "=":
        break;
      default:
        if (expression === "0" && value !== ".") {
          setExpression(value);
        } else {
          setExpression(expression + value);
        }
        break;
    }
  };

  const renderButton = (text: string, color: string = "#333333") => {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={() => handleButtonPress(text)}
      >
        <Text style={[styles.buttonText, { color: color === "#FF5722" ? "white" : "white" }]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* AppBar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Calculator</Text>
      </View>
      
      {/* Display Fields */}
      <View style={styles.displayContainer}>
        <TextInput
          style={styles.expressionField}
          value={expression}
          editable={false}
        />
        <TextInput
          style={styles.resultField}
          value={result}
          editable={false}
        />
      </View>
      
      {/* Calculator Buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {renderButton("7")}
          {renderButton("8")}
          {renderButton("9")}
          {renderButton("C", "#FF5722")}
          {renderButton("AC", "#FF5722")}
        </View>
        <View style={styles.row}>
          {renderButton("4")}
          {renderButton("5")}
          {renderButton("6")}
          {renderButton("+")}
          {renderButton("-")}
        </View>
        <View style={styles.row}>
          {renderButton("1")}
          {renderButton("2")}
          {renderButton("3")}
          {renderButton("*")}
          {renderButton("/")}
        </View>
        <View style={styles.row}>
          {renderButton("0")}
          {renderButton(".")}
          {renderButton("00")}
          {renderButton("=")}
          <View style={styles.emptyButton}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  appBar: {
    backgroundColor: "#303030",
    padding: 16,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  appBarTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  displayContainer: {
    backgroundColor: "#424242",
    padding: 16,
    height: "30%",
  },
  expressionField: {
    color: "white",
    fontSize: 24,
    textAlign: "right",
    padding: 8,
    height: 50,
  },
  resultField: {
    color: "white",
    fontSize: 36,
    textAlign: "right",
    padding: 8,
    height: 60,
  },
  buttonContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: "#303030",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    height: '20%'
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    margin: 4,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "grey"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyButton: {
    flex: 1,
    padding: 16,
    margin: 4,
  }
});
