import React from 'react';
import { View } from 'react-native';
import { Modal, Portal, Title, Text, Button, Icon } from 'react-native-paper';
import { styles } from '../../styles/shared.styles';

interface BilheteFoundModalProps {
  visible: boolean;
  onDismiss: () => void;
  message: string;
}

export const BilheteFoundModal: React.FC<BilheteFoundModalProps> = ({ visible, onDismiss, message }) => (
  <Portal>
    <Modal 
      visible={visible} 
      onDismiss={onDismiss}
      contentContainerStyle={styles.modalContent}
    >
      <View style={styles.modalContainer}>
        <Icon name="alert" size={50} color="#d63c42" />
        <Title style={styles.modalTitle}>Sucesso</Title>
        <Text style={styles.modalText}>{message}</Text>
        <Button 
          mode="contained" 
          onPress={onDismiss}
          style={styles.button}
        >
          Fechar
        </Button>
      </View>
    </Modal>
  </Portal>
);
