/* global artifacts */

const EducationRegistry = artifacts.require('EducationRegistry');

module.exports = (deployer) => {
  deployer.deploy(EducationRegistry);
};
