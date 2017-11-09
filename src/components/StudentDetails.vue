<template>
  <div class="student-details">
    <el-input placeholder="Серия и номер пасспорта" :maxlength="10" v-model="studentId">
      <el-button slot="append" @click="fetchStudent">Загрузить</el-button>
    </el-input>

    <div
      v-for="skill in skills"
      :key="skill.name"
      class="item"
    >
      <h2 v-if="skill.heading">{{skill.heading}}</h2>
      <template v-else>
        {{skill.name}}
        <i>{{skill.institution.name}}</i>
      </template>
    </div>
  </div>
</template>

<script>
  import skillTypeNames from '../skillTypeNames';

  export default {
    data() {
      return { studentId: '' };
    },
    computed: {
      skills() {
        return [
          ...skillTypeNames.map((name, idx) => ({ heading: name, skillType: idx })),
          ...this.$store.state.education.student.skills,
        ]
          .sort((a, b) => a.skillType - b.skillType) //  || !!a.heading - !!b.heading
          .filter((skill, idx, array) => !skill.heading ||
            (array[idx + 1] && array[idx + 1].skillType === skill.skillType));
      },
    },
    methods: {
      fetchStudent() {
        this.$store.dispatch('fetchStudent', this.studentId);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .student-details {
    .item {
      margin: .9em 0;

      h2 { margin: 0; font-size: 1.3em; }
      i { display: block; }
    }
  }
</style>
