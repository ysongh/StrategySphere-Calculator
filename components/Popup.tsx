import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ModalProps } from 'react-native';

interface PopupProps {
  visible: boolean;
  title: string;
  onClose: () => void;
  animationType?: ModalProps['animationType'];
  closeButtonColor?: string;
  decrementXPoints: Function;
  incrementXPoints: Function;
}

const Popup: React.FC<PopupProps> = ({
  visible,
  title,
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
          <Text style={styles.modalTitle}>{title}</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
            `<TouchableOpacity
                style={[styles.button, { backgroundColor: closeButtonColor }]}
                onPress={() => decrementXPoints("1", 3)}
              >
                <Text style={styles.buttonText}>-3</Text>
              </TouchableOpacity>
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
                <Text style={styles.buttonText}>+3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: closeButtonColor }]}
                onPress={() => incrementXPoints("1", 5)}
              >
                <Text style={styles.buttonText}>+5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: closeButtonColor }]}
                onPress={() => decrementXPoints("2", 3)}
              >
                <Text style={styles.buttonText}>-3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: closeButtonColor }]}
                onPress={() => decrementXPoints("2", 5)}
              >
                <Text style={styles.buttonText}>-5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: closeButtonColor }]}
                onPress={() => incrementXPoints("2", 3)}
              >
                <Text style={styles.buttonText}>+3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: closeButtonColor }]}
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
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
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