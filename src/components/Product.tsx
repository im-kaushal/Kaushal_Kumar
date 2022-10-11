import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import TSHIRT from '../assets/icons/TSHIRT';
import ADD from '../assets/icons/ADD';
import MINUS from '../assets/icons/MINUS';
import {SvgUri} from 'react-native-svg';
import JEAN from '../assets/icons/JEAN';

const Product: React.FC<{name: String; price: number; Icon: string}> = ({
  name,
  price,
  Icon,
}) => {
  const [qty, setQty] = useState(0);
  const handleMinus = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };
  const handlePlus = () => {
    console.log('plus clicked', qty);
    setQty(qty + 1);
  };
  return (
    <View style={styles.container}>
      <JEAN height={40} width={40} />
      <View style={styles.innerContainer}>
        <Text style={styles.nameTxt}>{name}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsContainer}>
            <>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  marginRight: 20,
                }}>{`$${price}`}</Text>
              <Text>Menu</Text>
            </>
          </View>
          <View style={styles.featureContainer}>
            <TouchableOpacity onPress={handleMinus}>
              <MINUS style={{marginRight: 10}} />
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity onPress={handlePlus}>
              <ADD style={{marginLeft: 10}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    paddingVertical: 10,
  },
  nameTxt: {
    fontWeight: '500',
    fontSize: 18,
    color: '#38106A',
    fontFamily: 'Roboto',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
