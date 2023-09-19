import { FlatList, View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    separator: {
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    flexCard: {
        display: 'flex',
        backgroundColor: 'white',
        height: 50,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth
    },
    nameStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    classHeaderStyle: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        fontWeight: 'bold',
        fontSize: 15
    }
})

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = ({ className }) => {
    return (
        <View>
            <Text style={styles.classHeaderStyle}>{className}</Text>
        </View>
    )
}

const onPressCard = ({ student }) => {
    console.log(JSON.stringify({student}));
}

const onPressPresente=({ student }) => {
    console.log(JSON.stringfy({student})+'Presente');
}


const onPressAusente=({ student }) => {
    console.log(JSON.stringfy({student})+'Ausente');
}

const StudentCard = ({ student }) => {
    return (

        <Pressable onPress={() => onPressCard({student})}>
            <View style={styles.flexCard}>
                <Text style={styles.nameStyle}>{student}</Text>
            </View>
        </Pressable>
    )
}

const className = "TCC00293 - Engenharia de Software II";

const students = ["Lexie George",
    "Nikolas Fisher",
    "Mayra Jackson",
    "Jewel Watson",
    "Alexandra Finley",
    "Emmalee French",
    "Andres Roth",
    "Bailey Everett",
    "Catalina Chaney",
    "Elisabeth Fuentes",
    "Deven Bishop",
    "Cael Rosario"]

const ClassPage = () => {

    return (
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <FlatList
                ListHeaderComponent={<ListHeader className={className} />}
                data={students}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <StudentCard student={item}/>}
            />
        </View>
    );
}

export default ClassPage;