export default {
  template: `
    <div class='flex gap-2 mb-2'>
    <button 
      @click="this.$emit('update:currentTag', tag)"
      v-for="tag in tags" 
      class='border rounded p-1 text-xs'
      :class="{
        'border-blue-500 text-blue-500': tag === currentTag
      }"
    >
      {{tag}}
    </button>
  </div>
    `,

  props: {
    initialTags: Array,
    currentTag: String // default porp name when we are using v model on custom component
  }, //update:modelValue needs to be exactly like this!

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
