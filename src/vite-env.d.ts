/// <reference types="vite/client" />
declare module '*.vue' {
      import type { DefineComponent } from 'vue'
      const component: DefineComponent<Record<string,unknown>, Record<string,unknown>, unknown>
      export default component
}

import mitt from 'mitt';
declare module '@vue/runtime-core' {
      interface ComponentCustomProperties {
            emitter: mitt;
      }
}