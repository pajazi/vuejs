import { reactive } from 'vue'

export let state = reactive({ name: 'My First Quiz', questions: [] })

//Different ways to manage state in the application
//props
//provide inject
//global store -> reactive