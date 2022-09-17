<template>
  <div class="input">
    <label for="location">Location</label>
    <input type="range" name="location" id="position" @input="changeValue('position',$event)">
  </div>
  <div class="input">
    <label for="radius">Radius</label>
    <input type="range" name="radius" id="radius" @input="changeValue('radius',$event)">
  </div>
  <div class="input">
    <label for="color">Color</label>
    <input type="color" name="color" value="#2E343F">
  </div>
  <div class="container scroll">
    <div class="box" id="box"></div>
  </div>
</template>

<script setup lang="ts">
import './styles.css'
type EventType = Event & { target: HTMLInputElement }
/**
 * Log data on input
 *
 * @param {Event & { target: HTMLInputElement }} e
 */
const root = document.documentElement
function changeValue(type: string, event: Event) {
  const value = (event as EventType).target.value
  const suffix = (type != 'color' ? '%' : '');
  root.style.setProperty(`--${type}`, value + suffix)
}
</script>

<style scoped>

</style>