<template>
  <div class="main">

    <el-form label-width="250px" class="id-input-form">
      <el-col :span="12" :offset="6">

        <el-form-item label="Серия и номер паспорта" class="input-div">
          <el-input type="text" :minlength="10" :maxlength="10" name="idInput" class="id-input" placeholder="Введите серию и номер пасспорта">
          </el-input>
        </el-form-item>

        <el-form-item label="Разрешение на выдачу документов">
          <el-switch
            v-model="isDisabled"
            active-text="Выдача разрешена"
            inactive-text="Выдача запрещена">
          </el-switch>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">Загрузить</el-button>
        </el-form-item>

      </el-col>
    </el-form>

  </div>


</template>

<script>
  export default {
    name: 'AdminComponent',
    data() {
      return {
        greeting: '',
        about: '',
        isDisabled: '',
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
