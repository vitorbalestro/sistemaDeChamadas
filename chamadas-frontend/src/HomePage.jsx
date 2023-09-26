import { View, StyleSheet } from 'react-native';
import { Routes, Route } from 'react-router-native';
import AppBar from './AppBar';
import ClassPage from './ClassPage';
import AlunoPresencaPage from './AlunoPresencaPage'

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
            <Route path="/turma" element={<ClassPage />} exact />
            <Route path="/aluno" element={<AlunoPresencaPage />} exact />
          </Routes>
        </View>
      )

}

export default HomePage;