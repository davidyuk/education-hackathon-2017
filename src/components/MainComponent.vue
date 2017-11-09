<template>
  <div class="main">

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
  export default {
    name: 'MainComponent',
    data() {
      return {
        greeting: '',
        about: '',
        skills: [
          {
            name: 'Applied Mathematics and Computer Science',
            skillType: 'Bachelor',
            educationalInstitution: 'FEFU',
          },
          {
            name: 'Computer Science',
            skillType: 'Master',
            educationalInstitution: 'MSU',
          },
        ],
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
