<template>
  <div class="institutional-component">
    <el-form ref="form" class="id-input-form" label-width="250px">
      <el-form-item label="Серия и номер паспорта">
        <el-input placeholder="Серия и номер паспорта обучающегося" v-model="studentId" />
      </el-form-item>

      <el-form-item label="Вид документа">
        <el-select v-model="skillType" placeholder="Выберите вид документа" style="width: 100%">
          <el-option
            v-for="skillType in availableSkillTypes"
            :key="skillType.value"
            :label="skillType.name"
            :value="skillType.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Описание специальности">
        <el-input type="textarea" v-model="name" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">Добавить</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import skillTypeNames from '../skillTypeNames';

  export default {
    data() {
      return {
        skillType: [],
        name: '',
        studentId: '',
      };
    },
    computed: {
      ...mapState({
        educationalInstitution: state => state.education.educationalInstitution,
      }),
      availableSkillTypes() {
        return skillTypeNames.map((name, idx) => ({ name, value: idx }))
          .filter(({ value }) =>
            this.$store.state.education.educationalInstitution.skillTypes.includes(value));
      },
    },
    methods: {
      submit() {
        const { studentId, name, skillType } = this;
        this.$store.dispatch('addSkill', { studentId: +studentId, name, skillType });
      },
    },
  };
</script>
