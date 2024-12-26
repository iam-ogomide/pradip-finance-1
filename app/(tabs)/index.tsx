import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NetflixIcon } from '@/constants/Icons'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'
import Header from '@/components/Header'
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from '@/components/ExpenseBlock'
import ExpensList from '@/data/expenses.json';

const Page = () => {

  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: "47%",
    },
    {
      value: 40,
      color: Colors.blue,
      text: "40%",
    },
    {
      value: 16,
      color: Colors.white,
      text: "16%",
    },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
  ];


  return (
    <>
      <Stack.Screen
        options={{ 
          header: () => <Header />,
        }}
      />
      <View style={[styles.container, { paddingTop: 80 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
          <View style={{ gap: 10 }}>
            <Text style={{ color: Colors.white, fontSize: 18 }}>
              My <Text style={{ fontWeight: 700 }}>Expenses</Text>
            </Text>

            <Text
              style={{ color: Colors.white, fontSize: 38, fontWeight: 700 }}
            >
              $1476.<Text style={{ fontSize: 22, fontWeight: 400 }}>00</Text>
            </Text>
          </View>


          {/* PIE CHART  */}
          <View style={{paddingVertical:20 , alignItems:'center'}}>
          <PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          semiCircle
          focusOnPress
          radius={70}
          innerRadius={55}
          innerCircleColor={Colors.black}
          centerLabelComponent={() => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                  47%
                </Text>
                 
              </View>
            );
          }}
        />
          </View>
          </View>


          {/* Expenses Block  */}
          <ExpenseBlock expensList={ExpensList}/>
        </ScrollView>
      </View>
    </>
  );
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.black,
    paddingHorizontal:20
  }
})