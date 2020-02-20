import React, { Component } from 'react'
import { Text, TextInput, View, Image, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import CheckBox from 'react-native-check-box'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isChecked: false,
      isChecked2: false,
      isChecked3: false,
      angka: '',
      angka2: '',
      angka3: '',
      hasil: '',
      error: 'Masukkan angka dengan benar'
    }
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  onPlus() {
    const { isChecked, isChecked2, isChecked3, angka, angka2, angka3, error } = this.state
    let cekNumber = /\d/g
    let validasi1 = angka.match(cekNumber) != null, validasi2 = angka2.match(cekNumber) != null, validasi3 = angka3.match(cekNumber) != null
    if (isChecked && isChecked2 && isChecked3) {
      if (validasi1 && validasi2 && validasi3 && angka.match(cekNumber).length == angka.length && angka2.match(cekNumber).length == angka2.length && angka3.match(cekNumber).length == angka3.length)
        this.setState({
          hasil: parseInt(angka) + parseInt(angka2) + parseInt(angka3)
        })
      else alert(error)
    }
    else if (isChecked && isChecked2 && validasi1 && validasi2 && angka.match(cekNumber).length == angka.length && angka2.match(cekNumber).length == angka2.length) {
      this.setState({
        hasil: parseInt(angka) + parseInt(angka2)
      })
    }
    else if (isChecked && isChecked3 && validasi1 && validasi3 && angka.match(cekNumber).length == angka.length && angka3.match(cekNumber).length == angka3.length) {
      this.setState({
        hasil: parseInt(angka) + parseInt(angka3)
      })
    }
    else if (isChecked2 && isChecked3 && validasi2 && validasi3 && angka2.match(cekNumber).length == angka2.length && angka3.match(cekNumber).length == angka3.length) {
      this.setState({
        hasil: parseInt(angka2) + parseInt(angka3)
      })
    }
    else {
      this.setState({
        error: 'Centang minimal 2 check box dan harus berisikan angka'
      })
      alert(this.state.error)}
  }
  onMinus() {
    const { isChecked, isChecked2, isChecked3, angka, angka2, angka3, error } = this.state
    let cekNumber = /\d/g
    let validasi1 = angka.match(cekNumber) != null, validasi2 = angka2.match(cekNumber) != null, validasi3 = angka3.match(cekNumber) != null
    if (isChecked && isChecked2 && isChecked3) {
      if (validasi1 && validasi2 && validasi3 && angka.match(cekNumber).length == angka.length && angka2.match(cekNumber).length == angka2.length && angka3.match(cekNumber).length == angka3.length)
        this.setState({
          hasil: parseInt(angka) - parseInt(angka2) - parseInt(angka3)
        })
      else alert(error)
    }
    else if (isChecked && isChecked2 && validasi1 && validasi2 && angka.match(cekNumber).length == angka.length && angka2.match(cekNumber).length == angka2.length) {
      this.setState({
        hasil: parseInt(angka) - parseInt(angka2)
      })
    }
    else if (isChecked && isChecked3 && validasi1 && validasi3 && angka.match(cekNumber).length == angka.length && angka3.match(cekNumber).length == angka3.length) {
      this.setState({
        hasil: parseInt(angka) - parseInt(angka3)
      })
    }
    else if (isChecked2 && isChecked3 && validasi2 && validasi3 && angka2.match(cekNumber).length == angka2.length && angka3.match(cekNumber).length == angka3.length) {
      this.setState({
        hasil: parseInt(angka2) - parseInt(angka3)
      })
    }
    else {
      this.setState({
        error: 'Centang minimal 2 check box dan harus berisikan angka'
      })
      alert(this.state.error)}
  }
  onTimes() {
    const { isChecked, isChecked2, isChecked3, angka, angka2, angka3, error } = this.state
    let cekNumber = /\d/g
    let validasi1 = angka.match(cekNumber) != null, validasi2 = angka2.match(cekNumber) != null, validasi3 = angka3.match(cekNumber) != null
    if (isChecked && isChecked2 && isChecked3) {
      if (validasi1 && validasi2 && validasi3 && angka.match(cekNumber).length == angka.length && angka2.match(cekNumber).length == angka2.length && angka3.match(cekNumber).length == angka3.length)
        this.setState({
          hasil: parseInt(angka) * parseInt(angka2) * parseInt(angka3)
        })
      else alert(error)
    }
    else if (isChecked && isChecked2 && validasi1 && validasi2 && angka.match(cekNumber).length == angka.length && angka2.match(cekNumber).length == angka2.length) {
      this.setState({
        hasil: parseInt(angka) * parseInt(angka2)
      })
    }
    else if (isChecked && isChecked3 && validasi1 && validasi3 && angka.match(cekNumber).length == angka.length && angka3.match(cekNumber).length == angka3.length) {
      this.setState({
        hasil: parseInt(angka) * parseInt(angka3)
      })
    }
    else if (isChecked2 && isChecked3 && validasi2 && validasi3 && angka2.match(cekNumber).length == angka2.length && angka3.match(cekNumber).length == angka3.length) {
      this.setState({
        hasil: parseInt(angka2) * parseInt(angka3)
      })
    }
    else {
      this.setState({
        error: 'Centang minimal 2 check box dan harus berisikan angka'
      })
      alert(this.state.error)}
  }
  onDevide() {
    const { isChecked, isChecked2, isChecked3, angka, angka2, angka3, error } = this.state
    let cekNumber = /\d/g
    let validasi1 = angka.match(cekNumber) != null, validasi2 = angka2.match(cekNumber) != null, validasi3 = angka3.match(cekNumber) != null
    if (isChecked && isChecked2 && isChecked3) {
      if (validasi1 && validasi2 && validasi3 && angka.match(cekNumber).length == angka.length && angka2.match(cekNumber).length == angka2.length && angka3.match(cekNumber).length == angka3.length)
        this.setState({
          hasil: parseInt(angka) / parseInt(angka2) / parseInt(angka3)
        })
      else alert(error)
    }
    else if (isChecked && isChecked2 && validasi1 && validasi2 && angka.match(cekNumber).length == angka.length && angka2.match(cekNumber).length == angka2.length) {
      this.setState({
        hasil: parseInt(angka) / parseInt(angka2)
      })
    }
    else if (isChecked && isChecked3 && validasi1 && validasi3 && angka.match(cekNumber).length == angka.length && angka3.match(cekNumber).length == angka3.length) {
      this.setState({
        hasil: parseInt(angka) / parseInt(angka3)
      })
    }
    else if (isChecked2 && isChecked3 && validasi2 && validasi3 && angka2.match(cekNumber).length == angka2.length && angka3.match(cekNumber).length == angka3.length) {
      this.setState({
        hasil: parseInt(angka2) / parseInt(angka3)
      })
    }
    else {
      this.setState({
        error: 'Centang minimal 2 check box dan harus berisikan angka'
      })
      alert(this.state.error)}
  }
  render() {
    return (
      <View style={styles.container}>
        {console.log(this.state, 'llllllllllll')}
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={styles.myTitle}>My</Text>
            <Text style={styles.myCal}>Calculator</Text>
          </View>
          <Image style={styles.logo} source={require('./assets/calculator.png')} />
        </View>
        <View flexDirection='row'>
          <TextInput
            onChangeText={val => this.onChangeText('angka', val)}
            style={styles.textInput} />
          <CheckBox
            style={styles.check}
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
          // leftText={"CheckBox"}
          />
        </View>
        <View flexDirection='row'>
          <TextInput
            onChangeText={val => this.onChangeText('angka2', val)}
            style={styles.textInput} />
          <CheckBox
            style={styles.check}
            onClick={() => {
              this.setState({
                isChecked2: !this.state.isChecked2
              })
            }}
            isChecked={this.state.isChecked2}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            onChangeText={val => this.onChangeText('angka3', val)}
            style={styles.textInput} />
          <CheckBox
            style={styles.check}
            onClick={() => {
              this.setState({
                isChecked3: !this.state.isChecked3
              })
            }}
            isChecked={this.state.isChecked3}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.onPlus()} style={styles.tombol}>
            <Text style={styles.simbol}>+</Text>
          </Button>
          <Button onPress={() => this.onMinus()} style={styles.tombol}>
            <Text style={styles.simbol}>-</Text>
          </Button>
          <Button onPress={() => this.onTimes()} style={styles.tombol}>
            <Text style={styles.simbol}>x</Text>
          </Button>
          <Button onPress={() => this.onDevide()} style={styles.tombol}>
            <Text style={styles.simbol}>/</Text>
          </Button>
        </View>
        <View style={styles.line} />
        <Text style={styles.hasil}>Hasil: {this.state.hasil}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  myTitle: {
    fontSize: 45,
    marginLeft: 15
  },
  myCal: {
    marginBottom: 25,
    fontSize: 45,
    marginLeft: 15
  },
  logo: {
    marginTop: 25,
    marginLeft: 15
  },
  textInput: {
    backgroundColor: '#add8e6',
    borderWidth: 3,
    marginLeft: 15,
    width: 250,
    marginBottom: 15,
    fontSize:25
  },
  check: {
    flex: 1,
    padding: 10
  },
  simbol: {
    fontSize: 25,
    marginLeft: 17
  },
  tombol: {
    width: 50,
    marginRight: 15,
    backgroundColor: '#4682b4'
  },
  line:{
    marginTop:15,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  hasil: {
    marginTop:15,
    marginLeft: 15,
    fontSize: 25
  },
  buttonContainer:{
    flexDirection: 'row',
    padding: 15
  }
});