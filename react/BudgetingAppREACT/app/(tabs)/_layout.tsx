import { Tabs } from 'expo-router';

export default function footer() {
  return (
    <Tabs>
      <Tabs.Screen name = "dashboard" />
      <Tabs.Screen name = "analytics" />
    </Tabs>
  );
}