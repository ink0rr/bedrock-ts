// auto generated
export namespace ItemPiercingWeaponComponent {
  export type FloatRange = {
    min?: number;
    max?: number;
  };
}
export type ItemPiercingWeaponComponent = {
  /**
   * Added tolerance to the view vector raycast for detecting entity collisions.
   */
  hitbox_margin?: number;
  /**
   * Defines the range (in blocks) along the user's view vector where entities can be hit. Only targets within this distance are considered. Block collisions between the user and target block damage and its effects.
   */
  reach?: ItemPiercingWeaponComponent.FloatRange;
};
