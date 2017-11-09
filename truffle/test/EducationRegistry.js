/* global artifacts contract it assert */

const { assertError } = require('./common');

const EducationRegistry = artifacts.require('EducationRegistry');

const testAddress = '0x7e8a8a78e0938cde6fd89ce47c1319b82d5e4022';
const testName = 'test_educational_institution_name';
const testSkillName = 'test_skill_name';
const testSkillTypes = [1, 2];
const testSkillType = 1;
const testStudentId = +'0914397633';

contract('EducationRegistry', (accounts) => {
  it('returns owner', () =>
    EducationRegistry.deployed()
      .then(instance => instance.owner())
      .then(owner => assert.equal(owner, accounts[0])));

  it('can\'t add education institution by not the owner', () =>
    EducationRegistry.deployed()
      .then(instance => instance.addEducationalInstitution(
        testAddress, testName, testSkillTypes, { from: accounts[1] }))
      .then(assert.fail, assertError));

  it('adds education institution', () =>
    EducationRegistry.deployed()
      .then(instance => instance.addEducationalInstitution(testAddress, testName, testSkillTypes)
        .then(() => instance.educationalInstitutions(testAddress))
        .then(([name, isDisabled]) => {
          assert.equal(name, testName);
          assert.equal(isDisabled, false);
        })
        .then(() => instance.getEducationalInstitutionSkillTypes(testAddress))
        .then(skillTypes => assert.deepEqual(skillTypes.map(i => +i), testSkillTypes))));

  it('can\'t disable education institution by not the owner', () =>
    EducationRegistry.deployed()
      .then(instance => instance.addEducationalInstitution(
        testAddress, testName, testSkillTypes, { from: accounts[1] }))
      .then(assert.fail, assertError));

  it('disables education institution', () =>
    EducationRegistry.deployed()
      .then(instance => instance.addEducationalInstitution(testAddress, testName, testSkillTypes)
        .then(() => instance.disableEducationalInstitution(testAddress))
        .then(() => instance.educationalInstitutions(testAddress))
        .then(([, isDisabled]) => assert.equal(isDisabled, true))));

  it('can\'t add skill by not the educational institution', () =>
    EducationRegistry.deployed().then(instance =>
      instance.addSkill(testStudentId, testSkillName, testSkillType, { from: accounts[1] })
        .then(assert.fail, assertError)));

  it('can\'t add skill if the educational institution is disabled', () =>
    EducationRegistry.deployed()
      .then(instance => instance.addEducationalInstitution(accounts[1], testName, testSkillTypes)
        .then(() => instance.disableEducationalInstitution(accounts[1]))
        .then(() => instance.addSkill(
          testStudentId, testSkillName, testSkillType, { from: accounts[1] })))
      .then(assert.fail, assertError));

  it('can\'t add skill if the educational institution don\'t corresponds to requested skill type', () =>
    EducationRegistry.deployed().then(instance =>
      instance.addEducationalInstitution(accounts[1], testName, [0, 2])
        .then(() => instance.addSkill(testStudentId, testSkillName, 1, { from: accounts[1] }))
        .then(assert.fail, assertError)));

  it('adding skill', () =>
    EducationRegistry.deployed().then(instance =>
      instance.addEducationalInstitution(accounts[1], testName, testSkillTypes)
        .then(() => instance.addSkill(
          testStudentId, testSkillName, testSkillType, { from: accounts[1] }))
        .then(() => Promise.all([
          instance.getStudentSkillCount(testStudentId)
            .then(skillCount => assert.equal(skillCount, 1)),
          instance.getStudentSkill(testStudentId, 0)
            .then(([skillName, skillType, eiAddress]) => {
              assert.equal(skillName, testSkillName);
              assert.equal(skillType, testSkillType);
              assert.equal(eiAddress, accounts[1]);
            }),
        ]))));
});
