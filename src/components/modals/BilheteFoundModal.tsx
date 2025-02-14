import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal, Title, Text, Button, Icon } from 'react-native-paper';

interface BilheteFoundModalProps {
  visible: boolean;
  onDismiss: () => void;
}

export default function BilheteFoundModal({ visible, onDismiss }: BilheteFoundModalProps) {
  return (
    <Portal>
      <Modal 
        visible={visible} 
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContent}
      >
        <View style={styles.modalContainer}>
          <Icon source="check-circle" size={64} color="green" />
          <Title style={styles.modalTitle}>Ingresso Encontrado</Title>
          <Text style={styles.modalText}>
            Cliente: Fulano de Tal{'\n'}
            CPF: 123.456.789-00{'\n'}
            Evento: Evento Teste{'\n'}
            Local: Teatro Municipal{'\n'}
            Data da Sessão: {new Date('2022-01-01').toLocaleDateString()}{'\n'}
            Categoria: Inteira{'\n'}
            Classificação: Livre{'\n'}
            Status: Válido{'\n'}
            Código do Ingresso: 1
          </Text>
          <Button 
            mode="contained" 
            style={styles.button}
            onPress={onDismiss}
          >
            Fechar
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalContainer: {
    alignItems: 'center',
  },
  modalTitle: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    marginVertical: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
});