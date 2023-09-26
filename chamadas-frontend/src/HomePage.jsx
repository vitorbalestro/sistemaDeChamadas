import { View, StyleSheet } from 'react-native';
import { Routes, Route } from 'react-router-native';
import TurmasPage from './TurmasPage';
import AlunoPresencaPage from './AlunoPresencaPage'
import AppBar from './AppBar';
import Login from './Login';
import ClassPage from './ClassPage'


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    }
});


const HomePage = () => {

    return(  
        <View style={styles.container}>
          <AppBar />
          <Routes>
            <Route path="/login" element={<Login />} exact />
            <Route path="/turmas" element={<TurmasPage />} exact />
            <Route path="/aluno" element={<AlunoPresencaPage />} exact />
            <Route path="/turma" element={<ClassPage />} exact />
          </Routes>
        </View>
      )

}

export default HomePage;