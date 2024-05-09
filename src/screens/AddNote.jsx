import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native"
import CustomButton from "../components/customButton";
import CustomTextInput from './../components/CustomTextInput';

const AddNote = ({ setCurrentPage, addNote }) => {
   const [title, setTitle] = useState('');
   const [desc, setDesc] = useState('');

   const onSubmit = () => {
      addNote({ title, desc });
      setTitle('');
      setDesc('');
      setCurrentPage('home');
   }

   return (
      <View style={styles.container}>
         <Text style={styles.pageTitle}>Tambahkan Note</Text>
            <CustomTextInput
               text={title}
               label="Judul"
               onChange={setTitle}
            />

         <View style={styles.spacerTop}>
            <CustomTextInput
               text={desc}
               label="Deskripsi"
               onChange={setDesc}
               multiline
               numberOfLines={5}
            />
         </View>
         <View style={styles.spacerTop}>
            <CustomButton
               backgroundColor="green"
               color="#fff"
               text="Simpan"
               width="100%"
               onPress={() => {onSubmit()}}
            />
         </View>

         <View style={styles.spacerTop}>
            <CustomButton
               backgroundColor="#DDD"
               color="#203239"
               text="Kembali ke Home"
               width="100%"
               onPress={() => {setCurrentPage('home')}}
            />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 20,
   },
   pageTitle: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 15
   },
   spacerTop: {
      marginTop: 30,
   }
})

export default AddNote;