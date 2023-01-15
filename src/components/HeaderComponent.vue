<template>
  <header>
    <router-link to="/"
      ><h1 class="cursor-pointer text-7xl">
        <slot></slot></h1
    ></router-link>
  </header>
</template>

<style lang="scss" scoped>
h1 {
  line-height: 3.2rem;
}
</style>
