<template>
  <div>
    <p v-for="(post, i) in posts" :key="i">
      <a :href="post.path">{{ post.title }}</a>
    </p>
  </div>
</template>

<script>
  export default {
    computed: {
      posts() {
        return this.$site.pages
          .filter((page) => page.path.startsWith('/posts/'))
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          );
      },
    },
  };
</script>
