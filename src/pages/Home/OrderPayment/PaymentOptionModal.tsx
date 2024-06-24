import React, { useEffect, useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { COLORS, IMAGES, SIZES } from '@constants/Colors';

import { Text, View } from '@components/Themed';

type IProps = {
  isModalVisible: boolean;
  setModalVisible: () => void;
  onSave: (val: string) => void;
};

const PaymentMethodModal = ({ isModalVisible, setModalVisible, onSave }: IProps) => {
  //   const [isModalVisible, setModalVisible] = useState<boolean>(true);

  const toggleModal = () => {
    setModalVisible();
  };

  return (
    <View>
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalR1}>
              <View style={styles.modalR1C1}>
                <Text style={styles.modalR1C1ta}>Payment Method</Text>
              </View>
              <TouchableOpacity
                style={styles.modalR1C1}
                onPress={() => {
                  toggleModal();
                }}
              >
                <Text style={styles.modalR1C1ta}>
                  <Feather color={COLORS.light.active} name="x-circle" size={24} />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalR2}>
              <View style={styles.modalR2a}>
                <Text style={styles.modalR2at1}>Wallet balance: </Text>
                <Text style={styles.modalR2at2}>£654.41</Text>
              </View>
              <View style={styles.modalR2b}>
                <Text style={styles.modalR2bt}>Fund Wallet</Text>
              </View>
              <View style={styles.modalR2c}>
                <Text style={styles.modalR2ct1}>Add a new card</Text>
                <TouchableOpacity style={styles.modalR2ct2}>
                  <Ionicons
                    color={COLORS.light.text}
                    name="add-circle-outline"
                    size={24}
                  />
                </TouchableOpacity>
              </View>
              {/*<TouchableOpacity onPress={toggleModal} style={styles.modalR2C1}>*/}
              {/*    <Text style={styles.modalR2C2t1}>Cancel</Text>*/}
              {/*</TouchableOpacity>*/}
              {/*<TouchableOpacity*/}
              {/*    style={styles.modalR2C2}*/}
              {/*    onPress={() => {*/}
              {/*        onSave("");*/}
              {/*        toggleModal();*/}
              {/*    }}*/}
              {/*>*/}
              {/*    <Text style={styles.modalR2C2t2}>Save</Text>*/}
              {/*</TouchableOpacity>*/}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PaymentMethodModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light.modalOverlay,
  },
  modalView: {
    margin: 10,
    backgroundColor: COLORS.light.background,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    // height: "23%",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    // borderWidth:1
  },
  modalR1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35,
    width: '100%',
    // borderWidth:1
  },
  modalR1C1: {
    // borderWidth:1,
    // marginRight: 10,
  },
  modalR1C1ta: {
    marginVertical: 10,
    color: COLORS.light.text,
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
    // marginRight: 10,
    // borderWidth:1
  },
  modalR1C1r: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth:1,
    marginRight: 10,
  },
  modalR1C1tb: {
    // color: COLORS.Light.deeperGreyColor,
    fontSize: SIZES.sizeSixB,
    fontWeight: '400',
    marginRight: 10,
  },
  modalR1C1tc: {},
  modalR2: {
    width: '100%',
  },
  modalR2a: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.light.textGray,
    marginBottom: 5,
  },
  modalR2at1: {
    color: COLORS.light.textGray,
    fontSize: SIZES.sizeSixB,
  },
  modalR2at2: {
    color: COLORS.light.textGray,
    fontSize: SIZES.sizeSixB,
  },
  modalR2b: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.light.textGray,
    marginBottom: 5,
  },
  modalR2bt: {
    fontSize: SIZES.sizeSixC,
  },
  modalR2c: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    // borderBottomWidth:1,
    // borderColor: COLORS.light.textGray,
    marginBottom: 5,
  },
  modalR2ct1: {
    // color: COLORS.light.textGray,
    fontSize: SIZES.sizeSixC,
  },
  modalR2ct2: {},
  modalR2C1: {
    borderWidth: 1,
    paddingHorizontal: 26,
    paddingVertical: 10,
    borderRadius: 30,
    borderColor: COLORS.light.tickGray,
    minWidth: '38%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,

    // borderWidth:1
  },
  modalR2C2t1: {
    color: COLORS.light.deepActive,
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
  },
  modalR2C2: {
    // borderWidth: 1,
    // paddingHorizontal: 26,
    paddingVertical: 10,
    borderRadius: 30,
    // borderColor: COLORS.Light.tickGray,
    minWidth: '38%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light.colorOne,
    marginHorizontal: 10,
  },
  modalR2C2t2: {
    color: COLORS.light.background,
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
  },
  //   modalR2C2t:{},
  //   modalR1:{},
});
