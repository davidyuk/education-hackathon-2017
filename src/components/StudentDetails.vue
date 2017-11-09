<template>
  <div>
    <el-input placeholder="Серия и номер пасспорта" :maxlength="10" v-model="studentId">
      <el-button slot="append" @click="fetchStudent">Загрузить</el-button>
    </el-input>

    {{JSON.stringify(skills)}}
    <div
      v-for="skill in skills"
      :key="skill.name"
    >
      <h1 v-if="skill.heading">{{skill.heading}}</h1>
      <p v-else>
        {{skill.name}}
        <!--<br /><i>{{skill.institution.name}}</i>-->
      </p>
    </div>
  </div>
</template>

<script>
//  import skillTypeNames from '../skillTypeNames';

  export default {
    data() {
      return { studentId: '' };
    },
    computed: {
      skills() {
        return [
          ...this.$store.state.education.student.skills,
        ];
      },
    },
    methods: {
      fetchStudent() {
        this.$store.dispatch('fetchStudent', this.studentId);
      },
    },
  };
</script>
