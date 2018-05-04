import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, FlatList, Button} from 'react-native'
import {objToArr} from '../utils/helpers.js'
import DecksItem from "./DecksItem.js"
import {addDeck} from "../actions/index.js"





class Decks extends Component {


	 viewDeck = (deckTitle) => {

	 	
	 	this.props.navigation.navigate('Deck', {data: this.props.store[deckTitle]  }     )


	 }
	
	

	render() {


		return (<View style={{flex: 1, alignSelf: 'stretch'}}>
			
		<Text style={{color: 'black', fontSize: 50}}>Decks</Text> 
		<View style={{width: '25%', margin: '5%'}}>
		<Button  title="New Deck" onPress={() => this.props.navigation.navigate('AddDeck') }   />
		</View>

		<FlatList style={{flex: 1}} keyExtractor={item => item.title} data={objToArr(this.props.store)} renderItem={({item}) =>  <DecksItem viewDeck={this.viewDeck} data={item} />} />
		

		</View>)


	}



}


const mapStateToProps = state => {

	return {

		store: state

	}
}



export default connect(mapStateToProps)(Decks)




