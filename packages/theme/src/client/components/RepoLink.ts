import { defineComponent, h } from "vue";
import NavLink from "./NavLink.vue";
import { useNavbarRepo } from "../composables";

import type { VNode } from "vue";

export default defineComponent({
  name: "RepoLink",

  components: { NavLink },

  setup() {
    const repo = useNavbarRepo();

    return (): VNode | null =>
      repo.value
        ? h(
            "div",
            { class: "nav-links" },
            h(
              "div",
              { class: "nav-item" },
              h(NavLink, {
                class: "repo-link",
                item: repo.value,
              })
            )
          )
        : null;
  },
});
