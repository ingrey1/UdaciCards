import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import {
  setLocalNotification,
  clearLocalNotification
} from '../utils/helpers.js';

class Quiz extends Component {
  state = {
    deck: this.props.store[this.props.navigation.state.params.data.title],
    currentQuestionIndex: 0,
    showAnswer: false,
    correctAnswers: 0,
    quizOver: false
  };

  nextCard = () => {
    if (
      this.state.currentQuestionIndex ===
      this.state.deck.questions.length - 1
    ) {
      this.setState({ quizOver: true });
      clearLocalNotification().then(setLocalNotification());
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          showAnswer: false,
          currentQuestionIndex:
            (prevState['currentQuestionIndex'] += 1) %
            this.state.deck.questions.length
        };
      });
    }
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 30 }}>{`${this.state.currentQuestionIndex +
          1}/${this.state.deck.questions.length}`}</Text>

        <View>
          <Text style={{ fontSize: 50 }}>
            {this.state.deck.questions.length < 1
              ? 'This deck has no questions. Add Some.'
              : this.state.deck.questions[this.state.currentQuestionIndex]
                  .question}
          </Text>
        </View>
        <Text>
          {this.state.showAnswer &&
            this.state.deck.questions[this.state.currentQuestionIndex].answer}
        </Text>

        {!this.state.quizOver && (
          <Button
            title="Toggle Answer"
            onPress={() =>
              this.state.showAnswer
                ? this.setState({ showAnswer: false })
                : this.setState({ showAnswer: true })
            }
          />
        )}

        {!this.state.quizOver && (
          <Button
            title="Correct"
            onPress={() => {
              this.setState(prevState => {
                return {
                  ...prevState,
                  correctAnswers: (prevState['correctAnswers'] += 1)
                };
              });
              this.nextCard();
            }}
          />
        )}

        {!this.state.quizOver && (
          <Button title="Incorrect" onPress={() => this.nextCard()} />
        )}

        {this.state.quizOver && (
          <Text style={{ fontSize: 50 }}>
            You've finished the quiz! Your score is{' '}
            {Math.ceil(
              this.state.correctAnswers / this.state.deck.questions.length * 100
            )}%
          </Text>
        )}

        {this.state.quizOver && (
          <Button
            title="Back to Deck"
            onPress={() =>
              this.props.navigation.navigate('Deck', { data: this.state.deck })
            }
          />
        )}
        {this.state.quizOver && (
          <Button
            title="Restart Quiz"
            onPress={() =>
              this.props.navigation.navigate('Quiz', { data: this.state.deck })
            }
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state
  };
};

export default connect(mapStateToProps)(Quiz);
