import CustomButton from "../components/customButton";

const { View, Text, FlatList, StyleSheet } = require("react-native");

const NoteCard = ({ item, setCurrentPage }) => (
   <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.buttons}>
         <CustomButton
            backgroundColor="#FFC300"
            color="#151D3B"
            text="Ubah"
            fontSize={12}
            width={100}
            onPress={() => {setCurrentPage('edit')}}
         />
         <CustomButton
            backgroundColor="#D82148"
            color="#fff"
            text="Hapus"
            fontSize={12}
            width={100}
            onPress={() => {}}
         />
      </View>
   </View>
)

const Home = ({ noteList, setCurrentPage }) => {
   return (
      <View style={styles.container}>
         <CustomButton
            backgroundColor="#DDD"
            color="#203239"
            text="Tambahkan Note"
            width="100%"
            onPress={() => {setCurrentPage('add')}}
         />
         <FlatList 
            showsVerticalScrollIndicator={false}
            data={noteList}
            renderItem={({ item }) => <NoteCard item={item} setCurrentPage={setCurrentPage} />}
            keyExtractor={(item) => item.id}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 20,
      marginTop: 10
   },
   card: {
      borderWidth: 2,
      borderColor: '#DDD',
      padding: 10,
      marginVertical: 15,
      borderRadius: 5
   },
   cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5
   },
   buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 5,
   }
})

export default Home;