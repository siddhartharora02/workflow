<template>
  <div id="app">
    <header>
      <router-link to="/in" style="margin-right: 15px">India</router-link>
      <router-link to="/mx">Mexico</router-link>
    </header>
    <router-view/>
  </div>
</template>
<style lang="scss">
.d-flex {
  display: flex;
}
</style>
