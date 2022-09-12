import Assignments from "./Assignments.js";
import Panel from './Panel.js';

export default {
  components: { Assignments, Panel },
  template: `
      <div class="grid gap-6">
        <assignments></assignments>
        <panel>
          <template v-slot:heading>
            Heading
          </template>

          <tempalte v-slot:default>        
            Default Tag
          </template>
        </panel>
      </div>
    `,
};
