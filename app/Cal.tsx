 import { View, Text,Button, TextInput } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'




export default function Cal() 

{
const router = useRouter()
const [side, setSide] = useState(0)
const [area, setArea] = useState(0)

function calSquare(){

    var result = side * side
    setArea(result)


}



  return (
    <SafeAreaView>
      <Text>คำนวณพื้นที่สี่เหลี่ยมจัตุรัส</Text>
      <Text>ด้าน :  {side} ,พื้นที่ : {area}</Text>
      <TextInput
          style={{borderWidth:1}}
          placeholder='กรอกขนาดของด้าน'
          value={side.toString()}
          onChangeText={(e) => setSide(Number(e))}

          />
          <Button title='คำนวณ' onPress={() => calSquare()}/>
       <Button title ='กลับมาหน้าหลัก'  onPress={() => router.navigate("/") }/>
    </SafeAreaView>
  )
}
