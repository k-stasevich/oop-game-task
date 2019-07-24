export interface IWithArmorBehavior {
  armorBehavior: IArmorBehavior;
}

export interface IArmorBehavior {
  armor: number;

  getArmor(): number;
}
