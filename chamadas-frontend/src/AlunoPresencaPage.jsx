import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Card } from 'react-native-elements'
import { useParams } from 'react-router-native'

const styles = StyleSheet.create({
    center: {
      alignItems: 'center',
      justifyContent: 'center'
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
            <Text style={styles.center}>{props.class}</Text>
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

const turmas = [
  {
      name: "TCC00284 - Algoritmos em Grafos",
      professor: "Fábio Protti",
      time: "11:00 às 13:00"
  },
  {
      name: "TCC00293 - Engenharia de Software II",
      professor: "Leonardo Murta",
      time: "7:00 às 9:00"
  },
  {
      name: "TCC00384 - Estruturas de Dados e seus Algoritmos",
      professor: "Isabel Rosseti",
      time: "11:00 às 13:00"
  },
]
  
// funções temporárias para resgatar dados da turma carregada

function getProfessor( turmaId ){
  const turma = turmas.filter(item => item.name.split("-")[0].trim() === turmaId)
  return turma[0].professor
} 

function getTime( turmaId ){
  const turma = turmas.filter(item => item.name.split("-")[0].trim() === turmaId)
  return turma[0].time
}

const classTime = "07:00 - 09:00";

const AlunoPresencaPage = () => {

    const id = useParams().id
    const turmaName = id.split("-")[0] + " - " + id.split("-")[1]
    const turmaId = id.split("-")[0].trim()
    const professor = getProfessor(turmaId)
    const _time = getTime(turmaId)
    return (
      <View style={[styles.center, {top: 50}]}>
        <Card style={styles.center}>
          <ApresentarTurma class={turmaName}></ApresentarTurma>
          <ApresentarHorarioTurma time={_time}></ApresentarHorarioTurma>
          <ApresentarProfessor name={professor} />
        </Card>
        <Pressable style={styles.button} onPress={onPressPresente}>
          <Text style={styles.text}>{"Marcar presença"}</Text>
        </Pressable>
      </View>
    );
};

export default AlunoPresencaPage;