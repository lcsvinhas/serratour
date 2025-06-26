import { StyleSheet } from 'react-native'
import { cores } from '../../styles/cores'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: 20,
  },
  card: {
    alignItems: 'center',
    backgroundColor: cores.gaveta,
    borderRadius: 12,
    marginBottom: 20,
    padding: 12,
    elevation: 2,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: cores.primaria,
  },
  localidade: {
    fontSize: 16,
    textAlign: 'center',
    color: cores.terciaria,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: cores.fundo,
    borderRadius: 12,
    padding: 20,
    width: '85%',
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: cores.primaria,
  },
  modalTexto: {
    fontSize: 16,
    color: cores.terciaria,
    marginBottom: 20,
    textAlign: 'justify',
  },
  modalBotao: {
    backgroundColor: cores.primaria,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalBotaoTexto: {
    color: cores.fundo,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})
