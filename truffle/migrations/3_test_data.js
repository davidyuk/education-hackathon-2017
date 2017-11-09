/* global artifacts */

const EducationRegistry = artifacts.require('EducationRegistry');

module.exports = (deployer, environment, accounts) => {
  deployer.then(() => EducationRegistry.deployed()
    .then(instance => Promise.all([
      instance.addEducationalInstitution(accounts[9], 'Центр дополнительного образования "Вектор"', [3])
      .then(() => instance.disableEducationalInstitution(accounts[9])),
      instance.addEducationalInstitution(accounts[4], 'Шахматный клуб "Росток"', [3]),
        // .then(() => instance.disableEducationalInstitution(accounts[4])),
      instance.addEducationalInstitution(accounts[5], 'Гимназия №1 г. Владивосток', [0]),
      instance.addEducationalInstitution(accounts[6], 'Дальневосточный федеральный университет', [1, 2, 3]),
      instance.addEducationalInstitution(accounts[7], 'Владивостокский государственный университет экономики и сервиса', [1, 2, 3]),
      instance.addEducationalInstitution(accounts[8], 'Автошкола КИНА', [3]),
    ])
      .then(() => Promise.all([
        instance.addSkill(914397634, 'Обладатель 1-го юношеского разряда по шахматам.', 3, { from: accounts[4] })
          .then(() => instance.addSkill(914397634, 'Выпускник физ-мат класса.', 0, { from: accounts[5] }))
          .then(() => instance.addSkill(914397634, 'Выпускник по специальности Прикладная Математика и Информатика.', 1, { from: accounts[6] }))
          .then(() => instance.addSkill(914397634, 'Выпускник курсов по Менеджменту.', 3, { from: accounts[7] }))
          .then(() => instance.addSkill(914397634, 'Выпускник по специальности Биология, спеализация: микробиология.', 1, { from: accounts[6] })),
        instance.addSkill(914397635, 'Выпускник гуманитарного класса.', 0, { from: accounts[5] })
          .then(() => instance.addSkill(914397635, 'Выпускник по специальности Восточная Философия.', 1, { from: accounts[6] }))
          .then(() => instance.addSkill(914397635, 'Права категории "Б"', 3, { from: accounts[8] }))
          .then(() => instance.addSkill(914397635, 'Выпускник курсов по Английскому. Сдан IELTS на балл 6.5.', 3, { from: accounts[7] }))
          .then(() => instance.addSkill(914397635, 'Выпускник по специальности Политология.', 2, { from: accounts[7] })),
      ]))));
};
