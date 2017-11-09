<template>
  <div class="main">

    <el-form label-width="250px" class="id-input-form">
      <el-col :span="12" :offset="6">

        <el-form-item label="Название образовательного учереждения" class="input-div">
          <el-input type="text" class="id-input" placeholder="Введите серию и номер пасспорта">
          </el-input>
        </el-form-item>

        <el-form-item label="Виды выдаваемых сертификатов">
          <el-select v-model="educationalInstitution.skillTypes" multiple placeholder="Выберите виды выдаваемых сертификатов" style="width: 100%">
            <el-option
              v-for="item in skillTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
    name: 'AddInstitutionComponent',
    data() {
      return {
        greeting: '',
        about: '',
        isDisabled: '',
        educationalInstitution: {
          name: '',
          skillTypes: [],
        },
        skillTypes: [
          {
            value: '0',
            label: 'Среднее образование',
          },
          {
            value: '1',
            label: 'Бакалавриат',
          },
          {
            value: '2',
            label: 'Магистратура',
          },
          {
            value: '3',
            label: 'Другие виды образования',
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
