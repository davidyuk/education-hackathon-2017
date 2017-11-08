pragma solidity ^0.4.15;

contract EducationRegistry {
  enum SkillType { HIGH_SCHOOL, BACHELOR, MASTER, OTHER }

  struct EducationalInstitution {
    string name;
    SkillType[] skillTypes;
    bool isDisabled;
  }

  struct Skill {
    string name;
    SkillType skillType;
    address educationalInstitution;
  }

  struct Student {
    Skill[] skills;
  }

  address owner;
  mapping(address => EducationalInstitution) public educationalInstitutions;
  mapping(uint => Student) internal students;

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  function EducationRegistry() public {
    owner = msg.sender;
  }

  function getEducationalInstitutionSkillTypes(address eiAddress) public constant returns (SkillType[]) {
    return educationalInstitutions[eiAddress].skillTypes;
  }

  function addEducationalInstitution(address eiAddress, string _name, SkillType[] _skillTypes) public onlyOwner {
    educationalInstitutions[eiAddress] =
      EducationalInstitution({ name: _name, skillTypes: _skillTypes, isDisabled: false });
  }

  function disableEducationalInstitution(address eiAddress) public onlyOwner {
    educationalInstitutions[eiAddress].isDisabled = true;
  }

  function addSkill(uint studentId, string _name, SkillType _skillType) public {
    EducationalInstitution memory ei = educationalInstitutions[msg.sender];
    require(!ei.isDisabled);
    require(bytes(ei.name).length != 0);
    bool skillTypeValid = false;
    for (uint i = 0; i < ei.skillTypes.length && !skillTypeValid; i++) {
      skillTypeValid = _skillType == ei.skillTypes[i];
    }
    require(skillTypeValid);
    students[studentId].skills.push(Skill({ name: _name, skillType: _skillType, educationalInstitution: msg.sender }));
  }

  function getStudentSkill(uint studentId, uint skillIdx) public constant returns (string, SkillType, address) {
    Skill memory skill = students[studentId].skills[skillIdx];
    return (skill.name, skill.skillType, skill.educationalInstitution);
  }

  function getStudentSkillCount(uint studentId) public constant returns (uint) {
    return students[studentId].skills.length;
  }
}
