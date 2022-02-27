<template>
  <Constraint>
    {{ blogs }}
  </Constraint>
</template>

<script>
import axios from "axios";
import Constraint from '../components/Constraint.vue';

export default {
  components: {
    Constraint
  },

  data: () => ({
    blogs: []
  }),

  async mounted() {
    const getBlogsEndpoint = "https://api.github.com/repos/justlucdewit/justlucdewit.github.io/git/trees/f1189318b7aa6a2e64a6ea5043608c86423317ce";

    // Get list of all blog names
    const blogs = (await axios.get(getBlogsEndpoint)).data;
    this.blogs = blogs.tree.map(blob => blob.path);

    
  }
}
</script>

<style Scoped>
#blog {
  
}
</style>