import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <View>
        <Text
          style={[styles(size).text, textStyle]}
          adjustsFontSizeToFit
          onPress={props.onPress}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size/2 ,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: {
      color: '#fff',
      fontSize: size / 3,
      paddingBottom : 5,
    },
  });
