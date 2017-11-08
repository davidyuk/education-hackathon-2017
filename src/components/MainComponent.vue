<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
    <p>{{ about }}</p>
    <el-form :inline="true" class="id-input-form">
      <el-row>
          <el-form-item class="input-div">
            <el-input type="text" :minlength="10" :maxlength="10" name="idInput" class="id-input" placeholder="Введите серию и номер пасспорта">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">Загрузить</el-button>
          </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import ElCol from 'element-ui/packages/col/src/col';
  import ElInput from '../../node_modules/element-ui/packages/input/src/input';
  import ElButton from '../../node_modules/element-ui/packages/button/src/button';
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item';
  import ElForm from '../../node_modules/element-ui/packages/form/src/form';

  export default {
    components: {
      ElForm,
      ElFormItem,
      ElButton,
      ElCol,
      ElInput },
    name: 'MainComponent',
    data() {
      return {
        greeting: '',
        about: '',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2, p {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
