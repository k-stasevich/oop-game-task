import { ISkill } from './../../skills/Skill';
import { ISkillsBehavior } from '../SkillsBehavior/ISkillsBehavior';

export class SkillsBehavior implements ISkillsBehavior {
  skills: ISkill[];

  initSkills(skills: ISkill[]) {
    this.skills = skills;

    skills.forEach(skill => {
      skill.init();
    });
  }

  getSkills() {
    return this.skills;
  }
}
