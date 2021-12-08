<template>
  <v-app>
    <v-main>
      <v-container>
        <header class="mb-10">
          <router-link to="/in" class="mr-4">India</router-link>
          <router-link to="/mx">Mexico</router-link>
        </header>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
