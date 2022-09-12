import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
  components: {
    Assignment,
    AssignmentTags,
    Panel
  },
  template: `
        <panel v-if="assignments.length">
          <template #heading>
            {{title}}
            ({{assignments.length}})
          </template>

          <assignment-tags 
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
          />

          <ul>
             <assignment 
                  v-for="assignment in filteredAssignments" 
                  :assignment="assignment"
                  :key="assignment.id"
              >
              </assignment>
          </ul>

          <div class='mt-2 flex'>
            <slot></slot>
          </div>
      </panel>
    `,
  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
