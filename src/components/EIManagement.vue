<template>
  <el-col :span="12" :offset="6">
    <el-form ref="form" class="id-input-form" :model="skill" label-width="250px">

      <el-form-item label="Серия и номер паспорта студента">
        <el-input placeholder="Серия и номер паспорта студента"></el-input>
      </el-form-item>

      <el-form-item label="Вид документа">
        <el-select placeholder="Выберите вид документа" style="width: 100%">
          <el-option label="Среднее образование" value="0"></el-option>
          <el-option label="Бакалавриат" value="1"></el-option>
          <el-option label="Магистратура" value="2"></el-option>
          <el-option label="Другое..." value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Описание специальности">
        <el-input type="textarea"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">Добавить</el-button>
      </el-form-item>

    </el-form>
  </el-col>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>
