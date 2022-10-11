import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Schedule({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price Details</Text>
      <View style={styles.cardContainer}>
        <View style={styles.subTotalContainer}>
          <Text style={styles.leftTxt}>Subtotal</Text>
          <Text style={styles.rightTxt}>$220</Text>
        </View>
        <View style={styles.subTotalContainer}>
          <Text style={styles.leftTxt}>Tax</Text>
          <Text style={styles.rightTxt}>$60</Text>
        </View>
        <View style={styles.subTotalContainer}>
          <Text style={styles.leftTxt}>Total</Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto',
              color: '#CE1567',
              lineHeight: 18,
              fontWeight: '500',
            }}>
            $280
          </Text>
        </View>
      </View>
      <Text style={styles.title}>Schedule Date</Text>
      <View style={styles.subTotalContainer}>
        <View></View>
        <View></View>
      </View>
      <Text style={styles.title}>Payment Method</Text>
      <View style={styles.subTotalContainer}>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
      <Text style={styles.title}>Address</Text>
      <View style={styles.subTotalContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
  },
  title: {
    color: '#38106A',
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '500',
  },
  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  cardContainer: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  leftTxt: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#38106A',
    lineHeight: 18,
    fontWeight: '500',
  },
  rightTxt: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#38106A',
    lineHeight: 18,
    fontWeight: '500',
  },
});
