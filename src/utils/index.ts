import { defineAsyncComponent } from 'vue';

// A helper function that takes an object of component names and their corresponding paths
// as input, and returns an object of asynchronous components.
function asyncComponents<T extends Record<string, string>>(
  components: T
): { [K in keyof T]: ReturnType<typeof defineAsyncComponent> } {
  // Use Object.entries to iterate over the component names and paths.
  return Object.entries(components).reduce((acc, [key, value]) => {
    // For each component, use defineAsyncComponent to create an asynchronous component
    // that loads the component lazily when it is needed.
    return {
      ...acc,
      [key]: defineAsyncComponent(() => import(/* @vite-ignore */`${value}`)),
    };
    // Cast the result to the correct type, which is an object with the same keys as the
    // input object, but with the values replaced by the asynchronous component types.
  }, {}) as { [K in keyof T]: ReturnType<typeof defineAsyncComponent> };
}

export default asyncComponents