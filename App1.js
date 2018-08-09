import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,Image,
	TouchableOpacity
}from 'react-native';

const instruction = Platform.select({
ios : 'Press Cmd+T to reload',
android: 'Double tap R',
});

export default class App extends Component<{}>{
	render(){
		let pic = {uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
		return(
		<View style = {{flex : 1, flexDirection : 'column', justifyContent : 'flex-end'}}>
		<View style = {{width :50, height : 50, backgroundColor : 'red'}}></View>
		<View style = {{width : 50, height : 50,backgroundColor : 'blue'}}></View>
		<View style = {{width : 50, height : 50,backgroundColor : 'yellow'}}></View>
			<Text style = {createstyle.red}> RED</Text>
			<Text style = {createstyle.blue}>Big Blue</Text>
			</View>
		);
	}
	
}

const createstyle =  StyleSheet.create({
    blue : {
        fontWeight : 'bold',
        fontSize : 30,
        color : 'blue'},
    Red : {
        fontWeight : 'bold',
        fontSize : 10,
        color : 'red'
    }
});