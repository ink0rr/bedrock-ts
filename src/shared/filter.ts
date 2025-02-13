import { Abilities } from "./abilities.js";
import { BiomeTags } from "./biome_tags.js";
import { DamageSource } from "./damage_source.js";
import { Difficulty } from "./difficulty.js";
import { GameRule } from "./game_rule.js";
import { LiteralUnion } from "./literal_union.js";
import { ItemIdentifier } from "./literals/item_identifier.js";
import { SpellEffects } from "./spell_effects.js";
import { TemperatureTypes } from "./temperature_types.js";
import { TypeFamily } from "./type_family.js";

export type Filters = Filter | Filter[];

export type Filter = FilterProps & Partial<FilterTest>;

type FilterProps = {
  all_of?: Filter[];
  any_of?: Filter[];
  none_of?: Filter[];
  operator?: FilterOperator;
  subject?: FilterSubject;
};

export type FilterDomain = LiteralUnion<
  "any" | "armor" | "feet" | "hand" | "head" | "leg" | "torso"
>;

export type FilterOperator = "!=" | "<" | "<=" | "<>" | "=" | "==" | ">" | ">=" | "equals" | "not";

export type FilterSubject =
  | "baby"
  | "block"
  | "damager"
  | "holder"
  | "other"
  | "parent"
  | "player"
  | "self"
  | "target";

export type FilterTest =
  | ActorHealth
  | AllSlotsEmpty
  | AnySlotEmpty
  | BoolProperty
  | ClockTime
  | DistanceToNearestPlayer
  | EnumProperty
  | FloatProperty
  | HasAbility
  | HasBiomeTag
  | HasComponent
  | HasContainerOpen
  | HasDamage
  | HasEquipment
  | HasDamagedEquipment
  | HasMobEffect
  | HasNametag
  | HasProperty
  | HasRangedWeapon
  | HasSilkTouch
  | HasTag
  | HasTarget
  | HasTradeSupply
  | HourlyClockTime
  | InBlock
  | InCaravan
  | InClouds
  | InContactWithWater
  | InLava
  | InNether
  | InOverworld
  | InWaterOrRain
  | InWater
  | InactivityTimer
  | IntProperty
  | IsAltitude
  | IsAvoidingMobs
  | IsBiome
  | IsBlock
  | IsBrightness
  | IsClimbing
  | IsColor
  | IsDaytime
  | IsDifficulty
  | IsFamily
  | IsGameRule
  | IsHumid
  | IsImmobile
  | IsInVillage
  | IsLeashed
  | IsLeashedTo
  | IsMarkVariant
  | IsMissingHealth
  | IsMoving
  | IsOwner
  | IsPanicking
  | IsPersistent
  | IsRaider
  | IsRiding
  | IsSkinId
  | IsSleeping
  | IsSneakHeld
  | IsSneaking
  | IsSnowCovered
  | IsSprinting
  | IsSitting
  | IsTarget
  | IsTemperatureType
  | IsTemperatureValue
  | IsUnderground
  | IsUnderwater
  | IsVariant
  | IsVisible
  | IsWaterlogged
  | LightLevel
  | MoonIntensity
  | MoonPhase
  | OnFire
  | OnGround
  | OnHotBlock
  | OnLadder
  | RandomChance
  | RiderCount
  | SurfaceMob
  | TakingFireDamage
  | TargetDistance
  | Trusts
  | WasLastHurtBy
  | WeatherAtPosition
  | Weather
  | HomeDistance
  | IsBoundToCreakingHeart;

type ActorHealth = {
  test: "actor_health";
  value?: number;
};

type AllSlotsEmpty = {
  test: "all_slots_empty";
  value?: FilterDomain;
};

type AnySlotEmpty = {
  test: "any_slot_empty";
  value?: FilterDomain;
};

type BoolProperty = {
  test: "bool_property";
  domain?: string;
  value?: boolean;
};

type ClockTime = {
  test: "clock_time";
  value?: number;
};

type DistanceToNearestPlayer = {
  test: "distance_to_nearest_player";
  value?: number;
};

type EnumProperty = {
  test: "enum_property";
  domain?: string;
  value?: string;
};

type FloatProperty = {
  test: "float_property";
  domain?: string;
  value?: number;
};

type HasAbility = {
  test: "has_ability";
  value?: Abilities;
};

type HasBiomeTag = {
  test: "has_biome_tag";
  value?: BiomeTags;
};

type HasComponent = {
  test: "has_component";
  // TODO: Add component type
  value?: string;
};

type HasContainerOpen = {
  test: "has_container_open";
  value?: boolean;
};

type HasDamage = {
  test: "has_damage";
  value?: DamageSource;
};

type HasEquipment = {
  test: "has_equipment";
  domain?: FilterDomain;
  value?: ItemIdentifier;
};

type HasDamagedEquipment = {
  test: "has_damaged_equipment";
  domain?: FilterDomain;
  value?: ItemIdentifier;
};

type HasMobEffect = {
  test: "has_mob_effect";
  value?: SpellEffects;
};

type HasNametag = {
  test: "has_nametag";
  value?: string;
};

type HasProperty = {
  test: "has_property";
  // TODO: Add property type
  value?: string;
};

type HasRangedWeapon = {
  test: "has_ranged_weapon";
  value?: boolean;
};

type HasSilkTouch = {
  test: "has_silk_touch";
  value?: boolean;
};

type HasTag = {
  test: "has_tag";
  value?: string;
};

type HasTarget = {
  test: "has_target";
  value?: boolean;
};

type HasTradeSupply = {
  test: "has_trade_supply";
  value?: boolean;
};

type HourlyClockTime = {
  test: "hourly_clock_time";
  value?: number;
};

type InBlock = {
  test: "in_block";
  value?: string;
};

type InCaravan = {
  test: "in_caravan";
  value?: boolean;
};

type InClouds = {
  test: "in_clouds";
  value?: boolean;
};

type InContactWithWater = {
  test: "in_contact_with_water";
  value?: boolean;
};

type InLava = {
  test: "in_lava";
  value?: boolean;
};

type InNether = {
  test: "in_nether";
  value?: boolean;
};

type InOverworld = {
  test: "in_overworld";
  value?: boolean;
};

type InWaterOrRain = {
  test: "in_water_or_rain";
  value?: boolean;
};

type InWater = {
  test: "in_water";
  value?: boolean;
};

type InactivityTimer = {
  test: "inactivity_timer";
  value?: number;
};

type IntProperty = {
  test: "int_property";
  domain?: string;
  value?: number;
};

type IsAltitude = {
  test: "is_altitude";
  value?: number;
};

type IsAvoidingMobs = {
  test: "is_avoiding_mobs";
  value?: boolean;
};

type IsBiome = {
  test: "is_biome";
  value?: BiomeTags;
};

type IsBlock = {
  test: "is_block";
  value?: string;
};

type IsBrightness = {
  test: "is_brightness";
  value?: number;
};

type IsClimbing = {
  test: "is_climbing";
  value?: boolean;
};

type IsColor = {
  test: "is_color";
  // TODO: Add color type
  value?: string;
};

type IsDaytime = {
  test: "is_daytime";
  value?: boolean;
};

type IsDifficulty = {
  test: "is_difficulty";
  value?: Difficulty;
};

type IsFamily = {
  test: "is_family";
  value?: TypeFamily;
};

type IsGameRule = {
  test: "is_game_rule";
  value?: GameRule;
};

type IsHumid = {
  test: "is_humid";
  value?: boolean;
};

type IsImmobile = {
  test: "is_immobile";
  value?: boolean;
};

type IsInVillage = {
  test: "is_in_village";
  value?: boolean;
};

type IsLeashed = {
  test: "is_leashed";
  value?: boolean;
};

type IsLeashedTo = {
  test: "is_leashed_to";
  value?: string;
};

type IsMarkVariant = {
  test: "is_mark_variant";
  value?: boolean;
};

type IsMissingHealth = {
  test: "is_missing_health";
  value?: number;
};

type IsMoving = {
  test: "is_moving";
  value?: boolean;
};

type IsOwner = {
  test: "is_owner";
  value?: boolean;
};

type IsPanicking = {
  test: "is_panicking";
  value?: boolean;
};

type IsPersistent = {
  test: "is_persistent";
  value?: boolean;
};

type IsRaider = {
  test: "is_raider";
  value?: boolean;
};

type IsRiding = {
  test: "is_riding";
  value?: boolean;
};

type IsSkinId = {
  test: "is_skin_id";
  value?: number;
};

type IsSleeping = {
  test: "is_sleeping";
  value?: boolean;
};

type IsSneakHeld = {
  test: "is_sneak_held";
  value?: boolean;
};

type IsSneaking = {
  test: "is_sneaking";
  value?: boolean;
};

type IsSnowCovered = {
  test: "is_snow_covered";
  value?: boolean;
};

type IsSprinting = {
  test: "is_sprinting";
  value?: boolean;
};

type IsSitting = {
  test: "is_sitting";
  value?: boolean;
};

type IsTarget = {
  test: "is_target";
  value?: boolean;
};

type IsTemperatureType = {
  test: "is_temperature_type";
  value?: TemperatureTypes;
};

type IsTemperatureValue = {
  test: "is_temperature_value";
  value?: number;
};

type IsUnderground = {
  test: "is_underground";
  value?: boolean;
};

type IsUnderwater = {
  test: "is_underwater";
  value?: boolean;
};

type IsVariant = {
  test: "is_variant";
  value?: number;
};

type IsVisible = {
  test: "is_visible";
  value?: boolean;
};

type IsWaterlogged = {
  test: "is_waterlogged";
  value?: boolean;
};

type LightLevel = {
  test: "light_level";
  value?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
};

type MoonIntensity = {
  test: "moon_intensity";
  value?: number;
};

type MoonPhase = {
  test: "moon_phase";
  value?: number;
};

type OnFire = {
  test: "on_fire";
  value?: boolean;
};

type OnGround = {
  test: "on_ground";
  value?: boolean;
};

type OnHotBlock = {
  test: "on_hot_block";
  value?: boolean;
};

type OnLadder = {
  test: "on_ladder";
  value?: boolean;
};

type RandomChance = {
  test: "random_chance";
  value?: number;
};

type RiderCount = {
  test: "rider_count";
  value?: number;
};

type SurfaceMob = {
  test: "surface_mob";
  value?: boolean;
};

type TakingFireDamage = {
  test: "taking_fire_damage";
  value?: boolean;
};

type TargetDistance = {
  test: "target_distance";
  value?: number;
};

type Trusts = {
  test: "trusts";
  value?: string;
};

type WasLastHurtBy = {
  test: "was_last_hurt_by";
  value?: boolean;
};

type WeatherAtPosition = {
  test: "weather_at_position";
  value?: string;
};

type Weather = {
  test: "weather";
  value?: string;
};

type HomeDistance = {
  test: "home_distance";
  value?: number;
};

type IsBoundToCreakingHeart = {
  test: "is_bound_to_creaking_heart";
  value?: boolean;
};
