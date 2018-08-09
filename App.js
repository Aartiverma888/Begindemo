import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
}from 'react-native';

import codePush from "react-native-code-push";

const instruction = Platform.select({
ios : 'Press Cmd+T to reload',
android: 'Double tap R',
});

export default class App extends Component{
	clickMe(){
		alert('history');
		codePush.sync({
				installMode :codePush.installMode.IMMEDIATE
		});
	}
	render(){
		return(
		<TouchableOpacity onPress = {this.clickMe.bind(this)}>
			<View style = {styles.box}>
				<Text>Hello{this.props.name}. Please Click me</Text>
			</View>
		</TouchableOpacity>
		);
	}
}

var styles = StyleSheet.create({
	box:{
		borderColor : 'red',
		backgroundColor: '#fff',
		borderWidth : 1,
		width:100,
		height :100
	}
});