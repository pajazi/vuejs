import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template: `
      <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress Assignments" ></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed" ></assignment-list>
      
        <form @submit.prevent="add">
          <div>
            <input v-model='newAssignment' placeholder="New assignment..." class="text-black mr-2" />
            <button type="submit" class="bg-white text-black p-2 rounded">Add</button>
          </div>
        </form>
      </section>
        `,
  data() {
    return {
      assignments: [
        { id: 1, name: "Finish project", complete: false },
        { id: 2, name: "Read chapter 4", complete: true },
        { id: 3, name: "Turn in homework", complete: false },
      ],

      newAssignment: "",
    };
  },
  //Cached methods: useMemo
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },

  methods: {
    add() {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1
      });
      this.newAssignment = '';
    },
  },
};
