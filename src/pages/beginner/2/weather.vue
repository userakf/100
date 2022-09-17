<template>
  <div>
    <input v-model="inputVal" type="text" py-1 px-2 mr-2 rounded placeholder="Search for a city">
    <button border py-1 px-2 rounded @click="handleClick">SUBMIT</button>
  </div>
  <div>
    <p v-if="wname">name: {{ wname }}</p>
    <p v-if="temp > -1">temp: {{ temp }} °C</p>
  </div>
</template>

<script setup lang="ts">
import { useWeather } from './hooks/useWeather'
const inputVal = $ref('')
let wname = $ref('')
let temp = $ref(-1)
async function handleClick() {
  const { getWeather } = useWeather(inputVal)
  const { name,main } = await getWeather()
  wname = name!
  temp = Math.round(main.temp)
}
</script>

<style scoped>

</style>