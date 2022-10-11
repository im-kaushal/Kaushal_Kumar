import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BOX from '../assets/icons/BOX';
import Product from '../components/Product';
import Tab from '../components/Tabs';

const tabs = [
  {id: 1, name: 'wash'},
  {id: 2, name: 'Ironing'},
  {id: 3, name: 'Fold'},
  {id: 4, name: 'Dry'},
  {id: 5, name: 'Clean'},
  {id: 6, name: 'Dry Clean'},
];

const products = [
  {id: 1, name: 'T-shirt', price: 6, Icon: 'TSHIRT'},
  {id: 2, name: 'Shirt', price: 6, Icon: 'SHIRT'},
  {id: 3, name: 'Sleeveless', price: 6, Icon: 'SLEEVLESS'},
  {id: 4, name: 'Skirt', price: 6, Icon: 'SKIRT'},
  {id: 5, name: 'Polo', price: 6, Icon: 'POLO'},
  {id: 6, name: 'Suit', price: 3, Icon: 'SUIT'},
  {id: 7, name: 'Jean', price: 6, Icon: 'JEAN'},
];

function OrderList({navigation}: any) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
        data={tabs}
        renderItem={(item: any) => {
          return <Tab name={item.item.name} />;
        }}
      />
      <ScrollView>
        {products.map((item: any) => {
          return (
            <Product name={item.name} price={item.price} Icon={item.Icon} />
          );
        })}
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerDetails}>
          <View style={{flexDirection: 'row'}}>
            <BOX />
            <View>
              <Text style={{color: '#595757'}}>Total</Text>
              <Text
                style={{
                  color: '#292929',
                  fontSize: 19,
                  fontFamily: 'Roboto',
                  fontWeight: '500',
                }}>
                16 Items
              </Text>
            </View>
          </View>
          <View>
            <Text style={{color: '#595757'}}>Cost</Text>
            <Text
              style={{
                color: '#292929',
                fontSize: 19,
                fontFamily: 'Roboto',
                fontWeight: '500',
              }}>
              $165
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}
          style={styles.confirmOrderBtn}>
          <Text style={styles.btnTxt}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OrderList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
  },
  confirmOrderBtn: {
    paddingVertical: 10,
    paddingHorizontal: wp(10),
    backgroundColor: '#CE1567',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#fff',
    fontWeight: '500',
  },
  footerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: wp(10),
    backgroundColor: '#fff',
    height: hp(20),
    paddingVertical: hp(5),
  },
  footerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
