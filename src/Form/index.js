import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function index() {
    // Hooks para manibulação de variáveis e estados
    

    return (
        <View style={styles.form}>
            <View>
                <Text style={styles.label}></Text>
                <TextInput style={styles.input}>Email </TextInput>
            </View>
            <View>
                <Text style={styles.label}></Text>
                <TextInput style={styles.input} >Senha</TextInput>
            </View>
            <TouchableOpacity style={styles.btn} >
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Criar Usuário</Text>

        </View>
    )
}