import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function numeros() {
  function getNumeros() {
    let num = (Math.random() * 60 + 1).toFixed();
    return num;
  }
  var semDuplicado = []
  while (semDuplicado.length < 6) {
    semDuplicado.push(getNumeros());
    var semDuplicado = [...new Set(semDuplicado)]
  }
  return semDuplicado;
}
//forEach
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vetNum: numeros(),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Numeros:  {this.state.vetNum[0]} - {this.state.vetNum[1]} - {this.state.vetNum[2]} - {this.state.vetNum[3]} - {this.state.vetNum[4]} - {this.state.vetNum[5]}</Text>
        <Button title="Aleatorio" onPress={() => { this.setState({vetNum:(this.vetNum = numeros())}) }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

