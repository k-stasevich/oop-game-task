export interface ISkill {
  init(): void;
  getName(): string;
  isActive(): boolean;
  isPassive(): boolean;
}

export abstract class Skill implements ISkill {
  init() {}

  getName() {
    return 'Not implemented';
  }

  isActive() {
    return false;
  }

  isPassive() {
    return false;
  }
}
