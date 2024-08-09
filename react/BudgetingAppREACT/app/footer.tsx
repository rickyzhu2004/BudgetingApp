import { Tabs } from 'expo-router';


function Footer() {
    return (
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name = "dashboard"/>
        <Tabs.Screen name = "transactions"/>
        <Tabs.Screen name = "analytics"/>
        <Tabs.Screen name = "settings"/>
        <Tabs.Screen name = "profile" options={{ tabBarButton: () => null }} />
      </Tabs>
    );
}

export default Footer;