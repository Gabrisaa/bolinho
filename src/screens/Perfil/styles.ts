import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyles';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    name: {
        fontSize: 40,
        fontWeight: "bold"
    },
    sociais: {
        backgroundColor: colors.verdinho,
        marginBottom: 10,
        flexDirection: "row",
        padding: 25,
        borderRadius: 1
    },
    star: {
        backgroundColor: colors.rosao,
        marginBottom: 10,
        flexDirection: "row",
        padding: 25,
        borderRadius: 1
    },
    contatos: {
        backgroundColor: colors.roxo,
        marginBottom: 10,
        flexDirection: "row",
        padding: 25,
        borderRadius: 1
    },
    alimentos: {
        backgroundColor: colors.laranjinha,
        marginBottom: 10,
        flexDirection: "row",
        padding: 25,
        borderRadius: 1
    },
    sociaisText: {
        marginLeft: 20,
        fontSize:17,
    }
   
})