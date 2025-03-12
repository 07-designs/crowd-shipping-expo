import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import MapScreen from '../screens/dashboard/MapScreen';
import DeliveriesScreen from '../screens/dashboard/DeliveriesScreen';
import PaymentsScreen from '../screens/dashboard/PaymentsScreen';

type DashboardTabParamList = {
  Dashboard: undefined;
  Map: undefined;
  Deliveries: undefined;
  Payments: undefined;
};

const Tab = createBottomTabNavigator<DashboardTabParamList>();

export default function DashboardNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4A80F0',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0',
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Deliveries"
        component={DeliveriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-shipping" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="payment" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}