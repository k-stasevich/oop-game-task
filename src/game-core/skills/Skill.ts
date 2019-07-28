export interface ISkill {
  init(): void;
  getName(): string;
  isActive(): boolean;
  isPassive(): boolean;
}
