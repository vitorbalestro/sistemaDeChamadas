import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {Card} from 'react-native-elements'


const styles = StyleSheet.create({
    center: {
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 3,
      elevation: 3,
      backgroundColor: 'blue',
      marginTop: 50
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

const onPressPresente = () => {
    console.log("Sua presença foi registrada!")
}

const ApresentarTurma = props => {
    return (
        <View style={styles.center}>
            <Text>Turma: {props.class}</Text>
        </View>
    )
}

const ApresentarHorarioTurma = props => {
    return (
        <View style={styles.center}>
            <Text>Horário das aulas: {props.time}</Text>
        </View>
    )
}

const ApresentarProfessor = props => {
    return (
      <View style={styles.center}>
        <Text>Professor: {props.name}</Text>
      </View>
    );
};

  

const profName = "Leonardo Murta";
const className = "TCC00293 - Engenharia de Software II";
const classTime = "07:00 - 09:00";

const AlunoPresencaPage = () => {
    return (
      <View style={[styles.center, {top: 50}]}>
        <Card>
          <ApresentarTurma class={className}></ApresentarTurma>
          <ApresentarHorarioTurma time={classTime}></ApresentarHorarioTurma>
          <ApresentarProfessor name={profName} />
        </Card>
        <Pressable style={styles.button} onPress={onPressPresente}>
          <Text style={styles.text}>{"Marcar presença"}</Text>
        </Pressable>
      </View>
    );
};

export default AlunoPresencaPage;