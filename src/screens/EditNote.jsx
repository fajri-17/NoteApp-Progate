import { Text, View } from "react-native"
import CustomButton from "../components/customButton";

const EditNote = ({ setCurrentPage }) => {
   return (
      <View>
         <Text>Edit Note</Text>
         <CustomButton
            backgroundColor="#DDD"
            color="#203239"
            text="Batal"
            width="100%"
            onPress={() => {setCurrentPage('home')}}
         />
      </View>
   )
}

export default EditNote;