import { View, StyleSheet } from 'react-native';
import { Routes, Route } from 'react-router-native';
import AppBar from './AppBar';
import ClassPage from './ClassPage';
import TurmasPage from './TurmasPage';

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
            <Route path="/turma" element={<TurmasPage />} exact />
            <Route path="/aluno" element={<ClassPage />} exact />
          </Routes>
        </View>
      )

}

export default HomePage;