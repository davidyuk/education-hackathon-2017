/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Web3 from 'web3';

import EducationRegistryMeta from '../../../truffle/build/contracts/EducationRegistry.json';

const web3 = new Web3();
let educationRegistry;

export default {
  state: () => ({
    route: 'student-details',
    account: null,
    student: {
      skills: [],
    },
    educationalInstitution: {
      name: '',
      isDisabled: false,
      skillTypes: [],
    },
  }),

  mutations: {
    setRoute(state, route) {
      state.route = route;
    },
    setAccount(state, account) {
      state.account = account;
    },
    setSkills(state, skills) {
      Vue.set(state.student, 'skills', skills);
    },
    setEducationalInstitution(state, educationalInstitution) {
      state.educationalInstitution = educationalInstitution;
    },
  },

  actions: {
    async init({ state, commit }) {
      window.addEventListener('load', async () => {
        if (window.parent.web3) {
          web3.setProvider(window.parent.web3.currentProvider);
        }

        const networkId = await web3.eth.net.getId();
        educationRegistry = new web3.eth.Contract(EducationRegistryMeta.abi,
          EducationRegistryMeta.networks[networkId].address);
        const owner = await educationRegistry.methods.owner().call();

        setInterval(() => {
          web3.eth.getAccounts(async (error, accounts) => {
            const account = accounts[0];
            if (account === state.account) return;
            if (error || !account) {
              commit('setAccount', null);
              commit('setRoute', 'student-details');
            } else {
              commit('setAccount', account);
              if (owner === account) commit('setRoute', 'ei-management');
              else {
                const { name, isDisabled } = await educationRegistry.methods
                  .educationalInstitutions(account).call();
                if (name) {
                  const skillTypes = await educationRegistry.methods
                    .getEducationalInstitutionSkillTypes(account).call();
                  commit('setEducationalInstitution', { name, isDisabled, skillTypes });
                  commit('setRoute', 'new-skill');
                } else {
                  commit('setRoute', 'student-details');
                }
              }
            }
          });
        }, 500);
      });
    },
    async fetchStudent({ commit }, studentId) {
      const skillCount = +(await educationRegistry.methods.getStudentSkillCount(studentId).call());
      const skills =
        await Promise.all(new Array(skillCount).fill()
          .map((_, idx) =>
            educationRegistry.methods.getStudentSkill(studentId, idx).call()
              .then(res => Object.values(res))
              .then(async (res) => {
                const { name, isDisabled } = await educationRegistry.methods
                  .educationalInstitutions(res[2]).call();
                return { name: res[0], skillType: res[1], institution: { name, isDisabled } };
              })));
      commit('setSkills', skills);
    },
    addSkill({ state }, { studentId, name, type }) {
      educationRegistry.methods.addSkill(studentId, name, type).send({ from: state.account });
    },
    addEducationalInstitution({ state }, { address, name, skillTypes }) {
      educationRegistry.methods
        .addEducationalInstitution(address, name, skillTypes).send({ from: state.account });
    },
    disableEducationalInstitution({ state }, address) {
      educationRegistry.methods
        .disableEducationalInstitution(address).send({ from: state.account });
    },
  },
};
