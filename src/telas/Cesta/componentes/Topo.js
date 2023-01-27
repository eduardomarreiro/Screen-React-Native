import React, { StyleSheet, Dimensions } from "react-native"
import { Image } from "react-native"
import Texto from "../../../componentes/Texto"
import top from "../../../../assets/top.png"

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
    return <>
        <Image source={top} style={estilos.topo} />
        <Texto style={estilos.titulo}>{ titulo }</Texto>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    topo: {
        width: "100%",
        height: 578 / 768 * width, //altura / largura da imagem * const width
    },
})