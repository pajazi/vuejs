export default {
  template: `
            <button :class="{
                'px-5 py-2 rounded': true,
                'bg-gray-200': type === 'muted',
                'bg-blue-200': type === 'primary', 
                'bg-purple-200': type === 'secondary',
                'is-loading': processing   
            }" 
                    :disabled="processing"
            >
                <slot />
            </button>
        `,

  props: {
    type: {
      type: String, //type of the prop
      default: "primary", //default value for the prop
    },

    processing: {
      type: Boolean,
      default: false,
    },
  },
};
