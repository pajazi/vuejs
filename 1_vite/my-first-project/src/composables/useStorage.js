import { ref, watch } from 'vue'

export function useStorage(key) {
    let storedValue = localStorage.getItem(key)

    let val = ref(storedValue)

    watch(val, () => {
        localStorage.setItem(key, val.value);
    })

    return val
}
