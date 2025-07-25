import { Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles'
import { useEffect, useState } from 'react'
import api from '../../services/api'

interface climaData {
    location: {
        name: string
    },
    current: {
        temp_c: number
        condition: {
            text: string
        }
    }
}

export default function Home() {
    const [clima, setClima] = useState<climaData | null>(null)

    useEffect(() => {
        const buscar = async () => {
            try {
                const response = await api.get('')
                setClima(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        buscar()
    }, [])

    return (
        <ScrollView style={styles.container}>

            <Image
                source={require('../../../assets/Casa_Santos_Dumont.jpg')}
                style={styles.banner}
                resizeMode="cover"
            />
            <Text style={styles.titulo}>🌄 Descubra o melhor de Petrópolis com o SerraTour!</Text>


            <Text style={styles.paragrafo}>
                Seja bem-vindo ao SerraTour, seu guia oficial dos pontos turísticos de Petrópolis! 🎒🏞️
            </Text>
            <Text style={styles.paragrafo}>
                Aqui você encontra os lugares mais incríveis da cidade imperial: palácios, museus, trilhas, culinária local e muito mais. Tudo isso com fotos, dicas e curiosidades que só um local saberia! 💡
            </Text>
            <Text style={styles.paragrafo}>
                Quer saber onde tirar aquela selfie com uma vista de tirar o fôlego? 🍃📸 Ou qual restaurante serve o melhor fondue da serra? A gente te mostra!
            </Text>
            <Text style={styles.climaTexto}>{clima?.location.name}, {clima?.current.temp_c}°C - {clima?.current.condition.text}</Text>
        </ScrollView>
    )
}
