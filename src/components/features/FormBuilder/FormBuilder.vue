<template>
      <div>
            <component v-for="(component, i) in asyncComponentMap" :is="component" :key="`async-component-${i}`" v-bind="{text: 'red'}"></component>
      </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import asyncComponentsLoader from '@/utils';
import { componentsPaths } from "./componentsPaths";

/** import @asyncComponents using DRY principle **/
const asyncComponentMap = asyncComponentsLoader(componentsPaths);

export default defineComponent({
      data(){
            return {
                  componentsPaths,
                  asyncComponentMap: Object.keys(asyncComponentMap)
            }
      },
      components: asyncComponentMap
})
</script>