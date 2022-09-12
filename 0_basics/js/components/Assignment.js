export default {
  template: `
    <li>
        {{assignment.name}}
        <input type="checkbox" v-model="assignment.complete"/>
    </li>
`,
  props: {
    assignment: Object,
  },
};
