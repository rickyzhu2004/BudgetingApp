import { Text, View } from "react-native";
import Header from '../header';


export default function transactions() {
  return (
    <View style={{ flex: 1 }}>
        <Header title="Transactions" />
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <Text>Test 2</Text>
        </View>
    </View>
  );
}