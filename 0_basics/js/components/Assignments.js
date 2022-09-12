import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
      <section class="flex gap-8">
        <assignment-list :assignments="filters.inProgress" title="In Progress Assignments" >
          <assignment-create @add="add"></assignment-create>
        </assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed" ></assignment-list>
      </section>
        `,

  data() {
    return {
      assignments: [],
    };
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },

  created() {
    fetch("http://localhost:3001/assignments")
      .then((r) => r.json())
      .then((assignments) => this.assignments = assignments);
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },
};