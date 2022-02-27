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

  // justlucdewit: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
  // 

  async mounted() {
    // Auth token (with only read public permissions)
    const authTok = "anVzdGx1Y2Rld2l0OmdocF9qdDJaOXVoQ055cnpVcWY4ZWhveENxZVNla09xdG8xcE9lZFQ=";
    
    const getBlogsEndpoint = "https://api.github.com/repos/justlucdewit/justlucdewit.github.io/git/trees/master";

    // Get list of all blog names
    let res = (await axios.get(getBlogsEndpoint, {
      headers: {
        Authorization: `Basic ${authTok}`
      }
    })).data;

    const srcFolderEndpoint = res.tree.find(x => x.path === "src").url;

    res = (await axios.get(srcFolderEndpoint, {
      headers: {
        Authorization: `Basic ${authTok}`
      }
    })).data;

    this.blogs = res;

    const blogsFolderEndpoint = res.tree.find(x => x.path === "blog").url;

    res = (await axios.get(blogsFolderEndpoint, {
      headers: {
        Authorization: `Basic ${authTok}`
      }
    })).data;

    this.blogs = res.tree.map(x => x.path);

  }
}
</script>

<style Scoped>
#blog {
  
}
</style>