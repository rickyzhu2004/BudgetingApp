import { View, StyleSheet } from 'react-native';
import Header from '../header'; 
import Footer from '../footer'; 

export default function Layout({children}) {
  return (
    <View style={styles.container}>
      {children}
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});



