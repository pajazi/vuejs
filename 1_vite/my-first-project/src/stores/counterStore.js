import { defineStore } from 'pinia'

export let useCounterStore = defineStore('counter', {
    //state
    state() {
        return {
            count: 0
        }
    },

    //methods
    actions: {
        increment() {
            this.count++;
        }
    },

    //computed
    getters: {
        remaining() {
            return 10 - this.count;
        }
    }
})
