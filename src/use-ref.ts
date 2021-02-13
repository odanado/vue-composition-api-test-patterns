import { ref } from "@nuxtjs/composition-api";

// Vue.use で composition api を有効化する必要があるが moduleNameMapper のおかげで不要っぽい

export function useRef() {
  return ref(0);
}
