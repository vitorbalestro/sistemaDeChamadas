import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    appBarText: {
        color: 'white',
    },
    container: {
        paddingTop: 20,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'blue',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 10,
        width: 150,
    },
    modalOption: {
        paddingVertical: 10,
    },
    selectedOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowIcon: {
        color: 'white',
        marginLeft: 5,
    },
});

const AppBarTab = ({ title, onSelect, options }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSelect = (option) => {
        setModalVisible(false);
        onSelect(option);
    };

    return (
        <View style={styles.selectedOptionContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.appBarText, { color: 'white' }]}>{title}</Text>
                    <Icon name="keyboard-arrow-down" size={20} style={styles.arrowIcon} />
                </View>
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, { backgroundColor: 'blue' }]}>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={styles.modalOption}
                                onPress={() => handleSelect(option)}
                            >
                                <Text style={{ color: 'white' }}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const SignedInAppBar = () => {
    const [selectedRole, setSelectedRole] = useState('Professor');
    const roles = ['Professor', 'Doutorando', 'Mestrando', 'Graduando'];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <AppBarTab
                    title={selectedRole}
                    onSelect={setSelectedRole}
                    options={roles}
                />
                <Link to="/turmas/professor">
                    <Text style={styles.appBarText}>Turmas</Text>
                </Link>
                <Link to="/login">
                    <Text style={styles.appBarText}>Sair</Text>
                </Link>
            </View>
        </SafeAreaView>
    );
};

const AppBar = () => {
    return <SignedInAppBar />;
};

export default AppBar;
