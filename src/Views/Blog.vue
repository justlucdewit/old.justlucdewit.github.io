<template>
  <Constraint>
    <div class="post" v-for="blog in blogs" :key="blog.fileName">
      <h1 class="blog-title">{{ blog.title }}</h1>

      <div class="blog-date">
        {{ blog.date }}
      </div>

      <div class="blog-content" v-html="md2html(blog.content)">
      </div>
    </div>
  </Constraint>
</template>

<script>
import axios from "axios";
import Constraint from '../components/Constraint.vue';
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

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
    
    const blogEndpoint = "https://raw.githubusercontent.com/justlucdewit/justlucdewit.github.io/master/src/blog/";

    // Get list of all blog names
    const blogPostNames = (await axios.get(blogEndpoint + "posts.json")).data;
    

    const that = this;
    for (const blogPostName of blogPostNames) {
      const blogNameParts = blogPostName.split('-');
      const blogTitle = blogNameParts.pop().split('.md')[0];
      const blogDate = blogNameParts.join("/");

      axios.get(blogEndpoint + blogPostName).then(x => {
        that.blogs.push({
          fileName: blogPostName,
          title: blogTitle,
          content: x.data,
          date: blogDate
        });
      });
    }
  },

  methods: {
    md2html(code) {
      return md.render(code);
    }
  }
}
</script>

<style Scoped>
.blog-title {
  margin: 0px;
}

.blog-date {
  color: #777;
  margin-bottom: 20px;
}
</style>