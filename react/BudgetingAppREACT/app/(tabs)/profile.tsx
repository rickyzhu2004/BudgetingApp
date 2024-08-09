import { Text, View } from "react-native";
import Header from '../header';


export default function profile() {
  return (
    <View style={{ flex: 1 }}>
        <Header title="Profile" />
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <Text>Test 5</Text>
        </View>
    </View>
  );
}