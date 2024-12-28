import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ModalProps } from 'react-native';

interface PopupProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
  animationType?: ModalProps['animationType'];
  closeButtonText?: string;
  closeButtonColor?: string;
  decrementXPoints: Function;
  incrementXPoints: Function;
}

const Popup: React.FC<PopupProps> = ({
  visible,
  title,
  message,
  onClose,
  animationType = 'fade',
  closeButtonText = 'Close',
  closeButtonColor = '#2196F3',
  decrementXPoints,
  incrementXPoints
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalText}>{message}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: closeButtonColor }]}
            onPress={() => decrementXPoints("1", 5)}
          >
            <Text style={styles.buttonText}>-5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: closeButtonColor }]}
            onPress={() => incrementXPoints("1", 5)}
          >
            <Text style={styles.buttonText}>+5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: closeButtonColor }]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>{closeButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
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
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    minWidth: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Popup;