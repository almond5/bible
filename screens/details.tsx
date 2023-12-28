import { View, Text, Button } from 'react-native';

const DetailsScreen = (props: {navigation: any}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
