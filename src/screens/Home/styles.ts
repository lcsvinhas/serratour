import { StyleSheet } from 'react-native'
import { cores } from '../../styles/cores'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left',
    paddingLeft: 20,
    paddingRight: 20,
    color: cores.primaria,
  },
  banner: {
    width: '100%',
    height: 300,
    marginBottom: 20
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    color: cores.texto,
  },
  botao: {
    backgroundColor: cores.primaria,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20
  },
  botaoSecundario: {
    backgroundColor: cores.secundaria,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },
  textoBotao: {
    color: cores.fundo,
    fontSize: 16,
    fontWeight: 'bold'
  },
  climaTexto: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 16,
    marginTop: 40,
    letterSpacing: 2
  }
})
