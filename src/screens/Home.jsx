import CustomButton from "../components/CustomButton";

const { View, Text, FlatList, StyleSheet } = require("react-native");

const NoteCard = ({ item, setCurrentPage, deleteNote }) => (
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
            onPress={() => {deleteNote(item.id)}}
         />
      </View>
   </View>
)

const Home = ({ noteList, setCurrentPage, deleteNote }) => {
   return (
      <View style={styles.container}>
         <CustomButton
            backgroundColor="#DDD"
            color="#203239"
            text="Tambahkan Note"
            width="100%"
            onPress={() => {setCurrentPage('add')}}
         />
         {noteList.length > 0 ? (
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={noteList}
            renderItem={({ item }) => <NoteCard item={item} setCurrentPage={setCurrentPage} deleteNote={deleteNote} />}
            keyExtractor={(item) => item.id}
         />
         ) : (
            <Text style={styles.textNoteFound}>Tidak ada catatan...</Text>
         )}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 20,
      marginTop: 10,
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
   },
   textNoteFound: {
      textAlign: 'center',
      marginTop: 30,
      fontSize: 16,
      fontWeight: 'bold'
   }
})

export default Home;