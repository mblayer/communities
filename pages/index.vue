<template>
  <section class="container">
    <h1 class="title">Listado de Comunidades</h1>
    <list/>
  </section>
</template>

<script>
import list from '~/components/list'

export default {
  components: {
    list
  }
}
</script>

<style lang="scss">
.container {
  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
  margin: 0 auto;
  width: 90vw;
}
.title {
  font-size: 25px;
  margin-bottom: 10vh;
}
</style>
