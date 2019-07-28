import { ISkill } from './../../skills/Skill';

export interface IWithSkillsBehavior {
  skillsBehavior: ISkillsBehavior;
}

export interface ISkillsBehavior {
  skills: ISkill[];

  initSkills(skills: ISkill[]): void;

  getSkills(): ISkill[];
}
