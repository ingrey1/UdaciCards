import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TextInput, Button} from 'react-native'
import {addCard} from '../actions/index.js'

class AddCard extends Component {



	state = {
		question: '',
		answer: '',
		
	}


	addingCard = () => {

		

		// check validity
		if ((this.state.question.length > 0) && (this.state.answer.length > 0)) {

		
		// update store
		const deck = this.props.navigation.state.params.data
		this.props.add({question: this.state.question, answer: this.state.answer}, deck.title)



		// navigate back to deck
		this.props.navigation.navigate('Deck', {data: deck})

		

		}

		
	}


	render() {




		return (<View>



		<View style={{marginLeft: 50, marginTop: 100}}>	
		 <Text>Question</Text>
		 <TextInput style={{width: "70%", height: 50, borderWidth: 1   }} value={this.state.question !== undefined ? this.state.question : ''} onChangeText={text => this.setState({question: text})} />

		 <Text>Answer</Text>
		 <TextInput style={{width: "70%", height: 50, borderWidth: 1   }} value={this.state.answer !== undefined ? this.state.answer : ''} onChangeText={text => this.setState({answer: text})} />
		 <View style={{width: 100, marginTop: 10}}>
		 <Button title="Add Card" onPress={() => this.addingCard()} />
		 </View>
		 </View>
		
		</View>)


	}



}


const mapStateToProps = state => {

	return {

		store: state

	}
}

const mapDispatchToProps = dispatch => {

	return {
		add: (cardInfo, deckId) => dispatch(addCard(cardInfo, deckId)) 
	}


}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)




