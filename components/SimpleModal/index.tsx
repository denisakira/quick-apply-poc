import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export const SimpleModal = ({
  visible,
  hideModal,
}: {
  visible: boolean;
  hideModal: () => void;
}) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.bottomView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Form finished!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => hideModal()}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '100%',
    margin: 16,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 24,
    textAlign: 'center',
  },
});
