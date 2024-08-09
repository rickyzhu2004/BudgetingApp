import { Text, View } from "react-native";
import Header from '../header';


export default function dashboard() {
  return (
    <View style={{ flex: 1 }}>
        <Header title="Dashboard" />
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <Text>Test 1</Text>
        </View>
    </View>
  );
}