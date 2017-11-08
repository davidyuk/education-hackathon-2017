/* global artifacts */

const EducationRegistry = artifacts.require('EducationRegistry');

module.exports = (deployer, environment, accounts) => {
  deployer.then(() => EducationRegistry.deployed()
    .then(instance => Promise.all([
      instance.addEducationalInstitution(accounts[4], 'Гимназия №0 г. Владивосток', [0])
        .then(() => instance.disableEducationalInstitution(accounts[4])),
      instance.addEducationalInstitution(accounts[5], 'Гимназия №1 г. Владивосток', [0]),
      instance.addEducationalInstitution(accounts[6], 'Дальневосточный федеральный университет', [1, 2]),
      instance.addEducationalInstitution(accounts[7], 'Владивостокский государственный университет экономики и сервиса', [1, 2]),
      instance.addEducationalInstitution(accounts[8], 'Автошкола КИНА', [3]),
    ])
      .then(() => Promise.all([
        instance.addSkill(914397634, 'Test 1', 0, { from: accounts[5] })
          .then(() => instance.addSkill(914397634, 'Test 2', 0, { from: accounts[5] }))
          .then(() => instance.addSkill(914397634, 'Test 3', 0, { from: accounts[5] }))
          .then(() => instance.addSkill(914397634, 'Test 4', 0, { from: accounts[5] })),
        instance.addSkill(914397635, 'Test 5', 0, { from: accounts[5] })
          .then(() => instance.addSkill(914397635, 'Test 6', 0, { from: accounts[5] }))
          .then(() => instance.addSkill(914397635, 'Test 7', 0, { from: accounts[5] }))
          .then(() => instance.addSkill(914397635, 'Test 8', 0, { from: accounts[5] })),
      ]))));
};
