import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from './features/counter/counterSlice';
const Feed = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  return (
    <View>
      <Text>Feed! {count}🎉</Text>

      <Button
        title={'Increment value'}
        onPress={() => dispatch(increment())}
      />
      <Button
        title={'decrement value'}
        onPress={() => dispatch(decrement())}
      />
    </View>
  );
};

export default Feed;