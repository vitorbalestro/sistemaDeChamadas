import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigate } from 'react-router-native';

export default function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Matrícula:', matricula);
    console.log('Senha:', senha);
    navigate("/aluno")
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <ImageBackground
      source={require('/assets/uff-logo.png')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.loginText}>Bem-vindo à UFF</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Número de Matrícula"
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, '');
              setMatricula(numericValue);
            }}
            value={matricula}
            keyboardType="numeric"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Senha"
              onChangeText={(text) => setSenha(text)}
              value={senha}
              secureTextEntry={!mostrarSenha}
            />
            <TouchableOpacity onPress={toggleMostrarSenha}>
              <Icon
                name={mostrarSenha ? 'eye-slash' : 'eye'}
                size={20}
                color="blue"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton} // Estilo do botão
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20, 
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20, 
    color: '#002b5e', 
  },
  formContainer: {
    flex: 2,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  loginButton: {
    width: '100%', 
    height: 50, 
    backgroundColor: 'blue', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 5,
    marginTop: 20, 
  },
  loginButtonText: {
    fontSize: 18,
    color: 'white', 
    fontWeight: 'bold',
  },
});
