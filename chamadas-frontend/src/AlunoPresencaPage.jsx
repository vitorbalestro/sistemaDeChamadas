import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Card } from 'react-native-elements'
import { useParams } from 'react-router-native'
import turmaService from '../services/turma'
import { useState, useEffect } from 'react'


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

  
const AlunoPresencaPage = () => {

    const id = useParams().id
    const [ turma, setTurma ] = useState();

    useEffect(() => {
      async function fetchTurma() {
            const response = await turmaService.getTurmaPorId(id);
            setTurma(response.data[0]);
            return;
      }
           
      fetchTurma()
    }
    , []);

    console.log(turma)
    var turmaName = ""
    var professor = ""

    if(turma !== undefined) {
      turmaName = turma.nome_disciplina;
      professor = turma.nome_professor;
    }

    

    return (
      <View style={[styles.center, {top: 50}]}>
        <Card style={styles.center}>
          <ApresentarTurma class={turmaName}></ApresentarTurma>
          <ApresentarProfessor name={professor} />
        </Card>
        <Pressable style={styles.button} onPress={onPressPresente}>
          <Text style={styles.text}>{"Marcar presença"}</Text>
        </Pressable>
      </View>
    );
};

export default AlunoPresencaPage;