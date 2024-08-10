// auto generated
/**
 * Defines the entity as a dweller in a village.
 */
export type EntityDwellerComponent = {
  dwelling_type?: "village";
  dweller_role?: "hostile" | "inhabitant" | "defender" | "passive";
  update_interval_base?: number;
  update_interval_variant?: number;
  can_find_poi?: boolean;
  can_migrate?: boolean;
  first_founding_reward?: number;
  preferred_profession?:
    | "farmer"
    | "fisherman"
    | "shepard"
    | "fletcher"
    | "librarian"
    | "cartographer"
    | "cleric"
    | "shepherd"
    | "armorer"
    | "weaponsmith"
    | "toolsmith"
    | "butcher"
    | "leatherworker"
    | "mason";
};
