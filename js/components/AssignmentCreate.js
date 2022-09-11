export default {
  template: `
    <form @submit.prevent="add">
        <div>
        <input v-model='newAssignment' placeholder="New assignment..." class="text-black mr-2" />
        <button type="submit" class="bg-white text-black p-2 rounded">Add</button>
        </div>
    </form>
    `,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit('add', this.newAssignment);
      this.newAssignment = "";
    },
  },
};
