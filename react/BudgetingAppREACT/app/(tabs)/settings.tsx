import { Text, View } from "react-native";
import Header from '../header';


export default function settings() {
  return (
    <View style={{ flex: 1 }}>
        <Header title="Settings" />
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <Text>Test 4</Text>
        </View>
    </View>
  );
}