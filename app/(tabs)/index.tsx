import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NetflixIcon } from '@/constants/Icons'

const Page = () => {
  return (
    <View>
      <Text>Page</Text>
      <NetflixIcon width={22} height={22} color={'#000'} />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})