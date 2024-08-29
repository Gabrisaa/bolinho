import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { styles } from "./styles";
import { useAuth } from "../../hook/auth";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ButtonInterface } from "../../components/ButtonInterface";
import Entypo from '@expo/vector-icons/Entypo';

export function Perfil() {
    const { user, signOut } = useAuth()
    const fundinho = require("../../assets/uou.png")
    return (
        <ImageBackground source={fundinho} style={styles.container}>
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
            <View>
                <View style={styles.star}>
                    <AntDesign name="star" size={24} color="black" />
                    <Text style={styles.sociaisText}>Contagem Regressiva</Text>
                </View>
                <View style={styles.sociais}>
                    <Entypo name="cake" size={24} color="black" />
                    <Text style={styles.sociaisText}>Lista de Alimentos</Text>
                </View>
                <View style={styles.contatos}>
                    <AntDesign name="contacts" size={24} color="black" />
                    <Text style={styles.sociaisText}>Lista de Convidados</Text>
                </View>
                <View style={styles.alimentos}>
                    <Entypo name="credit" size={24} color="black" />
                    <Text style={styles.sociaisText}>Gastos</Text>
                </View>
            </View>
            
            <ButtonInterface title=" Sair " type="primary"
                onPressI={async () => await signOut()}
            />
        </View>
        </ImageBackground>
    )
}