<template>
  <div class="tag">
    <a
      v-for="(tag, i) in Object.keys($tags._metaMap)"
      :href="$tags._metaMap[tag].path"
      :key="i"
    >
      <i class="fas fa-tags"></i>
      {{ tag }}
    </a>
  </div>
</template>

<style scoped>
.tag {
  display: flex;
  flex-direction: column;
}
</style>

