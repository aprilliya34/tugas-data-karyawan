import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import Karyawan from './Karyawan';


const Home = ({navigator}) => {
    const [data, setData] = React.useState(Karyawan);

    const listKaryawan = ({item}) => {
        return (
            <Card style={Styles.CardUtama} onPress={()=> navigation.navigate('Detail',{Karyawan:item})}>
                <View style={Styles.cardView}>
                    <Image style={{width:50, height:50, borderRadius:50/2}}
                    source={{uri:item.foto}}/>
                    <View style={{marginLeft:12}}>
                        <Text style={style.teks}>{item.nama}</Text>
                        <Text style={style.teks}>{item.jabatan}</Text>
                    </View>

                </View>
            </Card>
        )
    }
    
    return (
        <View style={{flex:1}}>
            <FlatList
            data={data}
            renderItem={listKaryawan}
            keyExtractor={item=>item.id}
            />
        </View>
    );
}

const style = StyleSheet.create({
    CardUtama: {
        margin:5,
        shadowColor:'#470000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2
    },
    cardView: {
        flexDirection:'row',
        padding :6
    },
    teks: { fontSize:16 }
});
export default Home;