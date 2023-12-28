import { Button, View, Text } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocsFromServer } from 'firebase/firestore';
import { useEffect } from 'react';

const HomeScreen = (props: { navigation: any }) => {

  useEffect(() => {
    getDocsFromServer(collection(db, 'stuff')).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }
    );
  }, []);
  
  const touchingDb = async () => {
    const doc = addDoc(collection(db, 'stuff'), { body: 'Testing' });
  };

  return (
    <View>
      Home
      {/* <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      /> */}
      <Button title="Touch Db" onPress={touchingDb} />
    </View>
  );
};

export default HomeScreen;
