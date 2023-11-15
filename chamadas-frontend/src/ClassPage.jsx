import { FlatList, View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { useState } from 'react';
import { useParams } from 'react-router-native';

const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
    separator: {
        marginVertical: 5,
    },
    flexCard: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 20,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth, 
        borderRadius: 5, 
    },
    nameStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 13,
    },
    porcentNeg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'italic',
        color: 'red',
    },
    porcentPos: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'italic',
        color: 'green',
    },
    classHeaderStyle: {
        marginTop: 20,
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        //fontWeight: 'bold',
        fontSize: 17
    },
    dateHeaderStyle: {
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //fontWeight: 'bold'
    },
    presenteDarButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        border: '1px solid blue',
        width: 65,
        height: 25,
        borderRadius: 5,
    },
    textPresenteDarButton: {
        color: 'white'
    },
    presencaDadaButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid blue',
        width: 65,
        height: 25,
        borderRadius: 5,
    },
    textPresencaDadaButton: {
        color: 'blue'
    },
    ausenteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: 65,
        height: 25,
        borderRadius: 5,
        marginRight: 5
    }
})

const getCurrentDate = () => {
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '/' + month + '/' + year;//format: d-m-y;
}

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = ({ className }) => {
    return (
        <View>
            <Text style={styles.classHeaderStyle}>{className}</Text>
            <Text style={styles.dateHeaderStyle}>{getCurrentDate()}</Text>
        </View>
    )
}

let onPressCard = ({ student }) => {
    console.log(JSON.stringify({student}));
}

let onPressPresente=({student}, students, setStudents) => {
    console.log(JSON.stringify({student})+' Presente');
    let newArray = [...students]
    let index = newArray.findIndex(newArray.nome === student.nome);
    if (student.presencaDada==="não") {
        newArray[index].presencaDada = "sim";
    } else {
        newArray[index].presencaDada = "não";
    }
    setStudents(newArray);
}


let onPressAusente=({ student }) => {
    console.log(JSON.stringify({student})+' Ausente');
}

let StudentCard = ({ student }, students, setStudents) => {
    return (

        <Pressable onPress={() => onPressCard({student})}>
            <View style={styles.flexCard}>
                <Text style={styles.nameStyle}>{student.nome}</Text>
                <Pressable onPress={() => onPressPresente({student}, students, setStudents)} style={student.presencaDada==="não" ? styles.presenteDarButton : styles.presencaDadaButton}>
                    <Text style={student.presencaDada==="não" ? styles.textPresenteDarButton : styles.textPresencaDadaButton}>Presente</Text>
                </Pressable>
                <Pressable onPress={()=> onPressAusente({student})} style={styles.ausenteButton}>
                    <Text style={{color:'white'}}>Ausente</Text>
                </Pressable>
                <Text style={student.porcentagem>=75 ? styles.porcentPos : styles.porcentNeg}>{student.porcentagem}%</Text>
            </View>
        </Pressable>
    )
}

let ClassPage = () => {

    const [students, setStudents] = useState([
        {nome: "Lexie George", presencaDada: "sim", porcentagem: 75},
        {nome: "Nikolas Fisher", presencaDada: "não", porcentagem: 100},
        {nome: "Mayra Jackson", presencaDada: "sim", porcentagem: 100},
        {nome: "Jewel Watson", presencaDada: "não", porcentagem: 0},
        {nome: "Alexandra Finley", presencaDada: "sim", porcentagem: 10},
        {nome: "Emmalee French", presencaDada: "não", porcentagem: 45},
        {nome: "Andres Roth", presencaDada: "sim", porcentagem: 93},
        {nome: "Bailey Everett", presencaDada: "não", porcentagem: 50},
        {nome: "Catalina Chaney", presencaDada: "sim", porcentagem: 89},
        {nome: "Elisabeth Fuentes", presencaDada: "não", porcentagem: 74},
        {nome: "Deven Bishop", presencaDada: "sim", porcentagem: 63},
        {nome: "Cael Rosario", presencaDada: "não", porcentagem: 77},
        {nome: "Christopher Smith Hartmann Fields", presencaDada: "sim", porcentagem: 1}]);
    let id = useParams().id;
    let turmaHeader = id.split("-")[0] + " - " + id.split("-")[1]

    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <FlatList
                    ListHeaderComponent={<ListHeader className={turmaHeader} />}
                    data={students}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }, students, setStudents) => <StudentCard student={item}/>}
                />
            </View>
        </View>
    );
}

export default ClassPage;