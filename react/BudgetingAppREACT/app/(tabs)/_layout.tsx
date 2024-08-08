import { View, StyleSheet } from 'react-native';
import Header from '../header'; 
import Footer from '../footer'; 

export default function Layout({ }) {
  return (
    <View style={styles.container}>
      <Header/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});



