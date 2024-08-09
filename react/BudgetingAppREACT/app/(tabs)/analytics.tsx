import { Text, View } from "react-native";
import Header from '../header';


export default function analytics() {
  return (
    <View style={{ flex: 1 }}>
        <Header title="Analytics" />
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <Text>Test 3</Text>
        </View>
    </View>
  );
}