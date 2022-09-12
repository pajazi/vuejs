export default {
  template: `
    <section class="w-60 bg-gray-700 p-4 border border-gray-600 rounded-lg">
        <h2 v-if="$slots.heading" class="font-bold mb-2">
            <slot name="heading" />
        </h2>

        <slot />
    </section>
    `,
    props: {
        heading: String
    }
};
