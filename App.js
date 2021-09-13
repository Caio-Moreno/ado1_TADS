import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({nome,email,link}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={email}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
        {
            "id": 7,
            "email": "cristianoR@gmail.com",
            "first_name": "Cristiano",
            "last_name": "Ronaldo",
            "avatar": "https://s2.glbimg.com/JdovM-pu0bb-sHOwXBFs0Ct8p3w=/0x0:4213x2906/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/W/7/sDqRxsQratAxxjO81nuQ/2021-09-11t162829z-1452542178-up1eh9b16oqhs-rtrmadp-3-soccer-england-mun-new-report.jpg"
        },
        {
            "id": 8,
            "email": "lionelmessi@gmail.com",
            "first_name": "Lionel",
            "last_name": "Messi",
            "avatar": "https://conteudo.imguol.com.br/c/esporte/6b/2021/09/09/messi-comemora-gol-da-argentina-sobre-a-bolivia-pelas-eliminatorias-1631234821632_v2_900x506.jpg.webp"
        },
        {
            "id": 9,
            "email": "CraqueNeto@gmail.com",
            "first_name": "Craque",
            "last_name": "Neto",
            "avatar": "https://www.conjur.com.br/img/b/craque-neto-ex-jogador-apresentador.jpeg"
        },
        {
            "id": 10,
            "email": "Ronaldinho@gmail.com",
            "first_name": "Ronaldinho",
            "last_name": "Gaúcho",
            "avatar": "https://uploads.metropoles.com/wp-content/uploads/2020/03/09193151/Ronaldinho-Ga%C3%BAcho-na-pris%C3%A3o-no-Paraguai-600x400.jpg"
        },
        {
            "id": 11,
            "email": "Ronney@gmail.com",
            "first_name": "Wayne",
            "last_name": "Rooney",
            "avatar": "https://extra.globo.com/incoming/23351566-fb8-bd2/w448h673-PROP/wayne-roorney.jpg"
        },
        {
            "id": 12,
            "email": "Ronaldo@gmail.com",
            "first_name": "Ronaldo",
            "last_name": "Fenomeno",
            "avatar": "https://www.lance.com.br/files/article_main/uploads/2021/05/17/60a320101ca78.jpeg"
        }
    ];



//item com uma arrow function
/*const meuItemObj = ({item}) => (
  <View>
      <Text style={styles.paragraph}>{item.title}</Text>
    </View>
)*/



export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    let nomeCompleto = item.first_name + " " + item.last_name


    
    return(
      <Pessoa nome={nomeCompleto} 
              link={item.avatar}
              email={item.email}
      />
    )
  }
  

  return (

    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#edf3ff',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'yellow'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
