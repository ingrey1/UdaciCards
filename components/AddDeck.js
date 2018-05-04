import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TextInput, Button} from 'react-native'
import {addDeck} from "../actions/index.js"

class AddDeck extends Component {


	state = {
		title: ''
	}

	addingDeck = () => {


		if (this.state.title.length > 0) {
			this.props.newDeck({title: this.state.title, questions: []})
			this.props.navigation.navigate('Decks')
		}



	}

	render() {


		return (<View style={{justifyContent: 'center'}}>

		 <Text style={{marginLeft: 20}}>Deck Title</Text>
		 <TextInput style={{width: '50%', borderWidth: 1}} value={this.state.title} onChangeText={text => this.setState({title: text})} />
		 <View style={{width: '25%', marginTop: 10}}>
		 <Button title="Create Deck" onPress={this.addingDeck} />
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
		newDeck: (title) => dispatch(addDeck(title))
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)




