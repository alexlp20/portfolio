<script setup>
import { ref, onMounted } from 'vue';

// Reference to the canvas element
const canvasRef = ref(null);

// Function to get the canvas context
const getContext = () => canvasRef.value.getContext('2d');

// Function to draw something on the canvas
const drawOnCanvas = () => {
  // TODO: canvas stuff
};

// Call the drawOnCanvas function when the component is mounted
onMounted(() => {
  drawOnCanvas();
});
</script>

<template>
  <div class="rounded-lg shadow-lg p-4">
    <canvas ref="canvas" class="rounded-lg" width="400" height="300"></canvas>
  </div>
</template>


<style scoped>
/* Add any additional CSS styles here */
</style>

