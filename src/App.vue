<template>
  <Header></Header>
  <div><router-view></router-view></div>
</template>

<script>
import Header from "./components/Hedaer.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped></style>
