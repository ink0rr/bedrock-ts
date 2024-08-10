/**
 * The armor item component determines the amount of protection you have in your armor item.
 */
export type ItemArmorComponent = {
  /**
   * How much protection does the armor item have.
   */
  protection?: number;
  /**
   * Texture Type to apply for the armor. Note that Horse armor is restricted to leather, iron, gold, or diamond.
   */
  texture_type?:
    | "leather"
    | "none"
    | "chain"
    | "iron"
    | "diamond"
    | "gold"
    | "elytra"
    | "turtle"
    | "netherite";
};
