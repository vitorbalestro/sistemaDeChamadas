import { View, StyleSheet } from 'react-native';
import { Routes, Route } from 'react-router-native';
import TurmasPage from './TurmasPage';
import AlunoPresencaPage from './AlunoPresencaPage'
import Login from './Login';
import ClassPage from './ClassPage'
import HistoricoAluno from './HistoricoAluno'


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    }
});


const HomePage = () => {

    return(  
        <View style={styles.container}>
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path ="/historicoaluno/:id_turma" element={<HistoricoAluno />} exact />
            <Route path="/turmas/:role/:id" element={<TurmasPage />} exact />
            <Route path="/aluno/:id" element={<AlunoPresencaPage />} exact />
            <Route path="/turma/:id" element={<ClassPage />} exact />
          </Routes>
        </View>
      )

}

export default HomePage;