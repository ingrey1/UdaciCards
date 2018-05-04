import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native'
//import Nav from './Nav.js'




const Deck = (props) => {

	

		const data = props.store[props.navigation.state.params.data.title] 

		return (



		<View style={{padding: 30, marginBottom: "40%" }}>

		
		<Text style={{color: "black", fontSize: 50}}>{data.title}</Text>
		<Text style={{color: "black", fontSize: 25}}>{(data.questions.length > 1) ?  data.questions.length + ' Cards' : data.questions.length + ' Card'}</Text>
		<View style={{padding: 30}}>
		<Button  style={{padding: 30}} onPress={() => props.navigation.navigate('AddCard', {data: data})} title="Add Card" />
		</View>
		
		
		<View>
		<Button onPress={() => props.navigation.navigate('Quiz', {data: data})}  title="Start Quiz" />
		</View>


		</View>


		)




	



}


const mapStateToProps = state => {

	return {

		store: state

	}
}

export default connect(mapStateToProps)(Deck)




