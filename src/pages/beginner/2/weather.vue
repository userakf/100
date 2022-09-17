<template>
  <div>
    <input @keydown.enter="handleClick" text-black v-model="inputVal" type="text" py-1 px-2 mr-2 rounded
      placeholder="Search for a city">
    <button border py-1 px-2 rounded @click="handleClick">SUBMIT</button>
  </div>
  <div rounded bg-white text-black p-5 text-left>
    <h2 text-xl>
      <span>{{ weather.name }}</span>
      <sup></sup>
    </h2>
    <div text-5xl v-if="temp">{{ temp }} <sup text-xs>°C</sup></div>
  </div>
</template>

<script setup lang="ts">
import { useWeather } from './hooks/useWeather'
import type { Weather } from './hooks/useWeather'
const inputVal = $ref('')
let weather = $ref<Weather>({})
async function handleClick() {
  clean()
  const { getWeather } = useWeather(inputVal)
  const { data } = await getWeather()
  weather = data
}
const temp = computed(() => Math.round(weather?.main?.temp!))
function clean() {
  
}
</script>

<style scoped>

</style>