<template>
  <div id="app">
  <el-row>
      <el-col :xs="2" :sm="4" :md="6" :lg="7" :xl="8">&nbsp;</el-col>
      <el-col :xs="20" :sm="16" :md="12" :lg="10" :xl="8" class=""><router-view /></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    async beforeCreate() {
      await this.$store.dispatch('init');
      this.$router.replace({ name: this.$store.state.education.route });
      this.$store.watch(
        state => state.education.route,
        route => this.$router.replace({ name: route }),
      );
    },
  };
</script>

<style lang="scss" scoped>
  #app {
    padding: 10px;
    .border { border: 1px solid red; }
  }
</style>
