import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ModalProps } from 'react-native';

const PLAYER1_COLOR = "red";
const PLAYER2_COLOR = "purple";

interface PopupProps {
  visible: boolean;
  onClose: () => void;
  animationType?: ModalProps['animationType'];
  closeButtonColor?: string;
  decrementXPoints: Function;
  incrementXPoints: Function;
}

const Popup: React.FC<PopupProps> = ({
  visible,
  onClose,
  animationType = 'fade',
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
          <View style={styles.labelView}>
            <Text style={styles.labelText}>P1</Text>
            <Text style={styles.labelText}>P2</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: PLAYER1_COLOR }]}
                onPress={() => decrementXPoints("1", 4)}
              >
                <Text style={styles.buttonText}>-4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: PLAYER1_COLOR }]}
                onPress={() => decrementXPoints("1", 5)}
              >
                <Text style={styles.buttonText}>-5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: PLAYER1_COLOR }]}
                onPress={() => incrementXPoints("1", 4)}
              >
                <Text style={styles.buttonText}>+4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: PLAYER1_COLOR }]}
                onPress={() => incrementXPoints("1", 5)}
              >
                <Text style={styles.buttonText}>+5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: PLAYER2_COLOR }]}
                onPress={() => decrementXPoints("2", 4)}
              >
                <Text style={styles.buttonText}>-4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: PLAYER2_COLOR }]}
                onPress={() => decrementXPoints("2", 5)}
              >
                <Text style={styles.buttonText}>-5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: PLAYER2_COLOR }]}
                onPress={() => incrementXPoints("2", 4)}
              >
                <Text style={styles.buttonText}>+4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: PLAYER2_COLOR }]}
                onPress={() => incrementXPoints("2", 5)}
              >
                <Text style={styles.buttonText}>+5</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity
            style={[styles.button, { backgroundColor: closeButtonColor }]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Close</Text>
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
  labelView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  labelText: {
    fontWeight: 'bold',
    marginHorizontal: 33,
    marginBottom: 5,
    fontSize: 30,
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
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  buttonRow: {
    gap: 8,
  },
});

export default Popup;