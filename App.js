import React, {Component} from 'react';
import {Image, View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Text, ApplicationProvider, Input} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const width = Dimensions.get('window').width * 0.6;
const height = (width * 839) / 1290;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vnd: '',
      myr: '',
    };
  }

  _focus = type => {
    if (type === 'myr') {
      this.setState({myr: ''});
    } else {
      this.setState({vnd: ''});
    }
  };

  _changeToVnd = text => {
    let vnd = (Number(text) * 1000000) / 183;
    vnd = vnd.toFixed(2)
    this.setState({vnd: vnd.toString(), myr: text});
  };

  _changeToMyr = text => {
    let myr = Number(text) * 0.000183;
    myr = myr.toFixed(2)
    this.setState({myr: myr.toString(), vnd: text});
  };

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <Image
              style={{width: width, height: height}}
              source={require('./assets/undraw_wallet_aym5.png')}
            />
            <Text category="h1">越南币(VND)：</Text>
            <Input
              onFocus={() => this._focus('vnd')}
              value={this.state.vnd}
              onChangeText={text => this._changeToMyr(text)}
              size="large"
              placeholder="VND"
              keyboardType="numeric"
            />
            <Text style={{marginTop: 10}} category="h1">
              马币(MYR)：
            </Text>
            <Input
              onFocus={() => this._focus('myr')}
              value={this.state.myr}
              onChangeText={text => this._changeToVnd(text)}
              size="large"
              placeholder="MYR"
              keyboardType="numeric"
            />
          </View>
        </ScrollView>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
