<template>
  <div class="category">
    <a
      v-for="(category, i) in Object.keys($categories._metaMap)"
      :href="$categories._metaMap[category].path"
      :key="i"
    >
      <i class="fas fa-folder-open"></i>
      {{ category }}
    </a>
  </div>
</template>

<style scoped>
.category {
  display: flex;
  flex-direction: column;
}
</style>
