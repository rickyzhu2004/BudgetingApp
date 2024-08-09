import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

function Header() {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Ionicons.Button
          name="person-circle-outline"
          size={48}
          onPress={() => router.push("/(tabs)/profile")}
          backgroundColor="transparent"
        />
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'transparent',
  },
  header: {
    paddingTop: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
  },
  headerTextContainer: {
    paddingTop: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    color: 'black',
  },
});

export default Header;