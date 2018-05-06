import React from 'react';
import { Text, View, Button } from 'react-native';

const DecksItem = props => {
  return (
    <View
      style={{
        flex: 1,
        borderColor: 'black',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'blue'
      }}
    >
      <Button
        onPress={() => props.viewDeck(props.data.title)}
        title={props.data.title}
        style={{ fontSize: 30 }}
      />
      <Text style={{ fontSize: 20 }}>
        {props.data.questions.length > 1
          ? props.data.questions.length + ' Cards'
          : props.data.questions.length + ' Card'}
      </Text>
    </View>
  );
};

export default DecksItem;
