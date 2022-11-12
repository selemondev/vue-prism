<script setup>
import { ref } from "vue";
const code = ref(`<div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div>
    <img src="/mountains-1.jpg" alt="" loading="lazy">
  </div>
  <div class="col-start-3">
    <img src="/mountains-2.jpg" alt="" loading="lazy">
  </div>
  <div>
    <img src="/mountains-3.jpg" alt="" loading="lazy">
  </div>
  <div>
    <img src="/mountains-4.jpg" alt="" loading="lazy">
  </div>
  <div class="row-start-1 col-start-2 col-span-2">
    <img src="/mountains-5.jpg" alt="" loading="lazy">
  </div>
</div>`);
</script>
<template>
  <div class="max-w-4xl mx-auto mt-12 bg-gray-800 rounded-lg md:mt-20">
    <div class="py-3 border-b border-gray-500/30">
      <div class="flex space-x-1.5 px-3">
        <div class="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
        <div class="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
        <div class="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
      </div>
    </div>
    <div class="flex">
      <div class="w-full h-96 overflow-x-visible overflow-y-scroll md:w-full">
        <PrismCode>{{ code }}
        </PrismCode>
      </div>
    </div>
  </div>
</template>

<script>
import PrismCode from "./components/PrismCode.vue";

export default {
  components: {
    PrismCode,
  },
};
</script>
