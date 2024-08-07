export type BlockState = {
  ageBit?: boolean;
  age?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  attatchedBit?: boolean;
  attatchment?: "hanging" | "multiple" | "side" | "standing";
  allowUnderwaterBit?: boolean;
  portalAxis?: "unknown" | "x" | "z";
  biteCounter?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  bambooLeafSize?: "large_leaves" | "no_leaves" | "small_leaves";
  bambooStalkThickness?: "thick" | "thin";
  brewingStandSlotABit?: boolean;
  brewingStandSlotBBit?: boolean;
  brewingStandSlotCBit?: boolean;
  buttonPressedBit?: boolean;
  cauldronLiquid?: "water" | "lava";
  color?:
    | "white"
    | "orange"
    | "magenta"
    | "light_blue"
    | "yellow"
    | "lime"
    | "pink"
    | "gray"
    | "silver"
    | "cyan"
    | "purple"
    | "blue"
    | "brown"
    | "green"
    | "red"
    | "black";
  conditionalBit?: boolean;
  coralColor?: "blue" | "pink" | "purple" | "red" | "yellow";
  coveredBit?: boolean;
  composterFillLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  chiselType?: "default" | "chiseled" | "lines" | "smooth";
  clusterAmount?: 0 | 1 | 2 | 3;
  crackedState?: "cracked" | "max_cracked" | "no_cracks";
  damage?: "undamaged" | "slightly_damaged" | "very_damaged" | "broken";
  deadBit?: boolean;
  dirtType?: "normal" | "coarse";
  disarmedBit?: boolean;
  dragDown?: boolean;
  doorHingeBit?: boolean;
  upperBlockBit?: boolean;
  direction?: 0 | 1 | 2 | 3;
  doubleFlowerType?: "fern" | "grass" | "paeonia" | "rose" | "sunflower" | "syringia";
  endPortalEyeBit?: boolean;
  explodeBit?: boolean;
  extinguished?: boolean;
  facingDirection?: 0 | 1 | 2 | 3 | 4 | 5;
  facingBit?: 0 | 1 | 2 | 3;
  fillLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  flowerType?:
    | "allium"
    | "cornflower"
    | "houstonia"
    | "lily_Of_the_valley"
    | "orchid"
    | "oxeye"
    | "poppy"
    | "tulip_orange"
    | "tulip_pink"
    | "tulip_red"
    | "tulip_white";
  growth?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  groundSignDirection?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  hanging?: boolean;
  headPieceBit?: boolean;
  headBit?: boolean;
  height?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  hugeMushroomBit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  infiniburnBit?: boolean;
  inWallBit?: boolean;
  liquidDepth?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  leverDirection?:
    | "down_east_west"
    | "down_north_south"
    | "east"
    | "north"
    | "south"
    | "up_east_west"
    | "up_north_south"
    | "west";
  moisturizedAmount?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  mode?: "corner" | "data" | "export" | "invalid" | "load" | "save";
  noDropBit?: boolean;
  newLeafType?: "acacia" | "dark_oak";
  newLogType?: "acacia" | "dark_oak";
  occupiedBit?: boolean;
  openBit?: boolean;
  oldLeafType?: "oak" | "spruce" | "birch" | "jungle";
  oldLogType?: "oak" | "spruce" | "birch" | "jungle";
  outputSubtractBit?: boolean;
  outputLitBit?: boolean;
  persistentBit?: boolean;
  powererBit?: boolean;
  pillarAxis?: "x" | "y" | "z";
  railDataBit?: boolean;
  railDirection?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  redstoneSignal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  repeaterDelay?: 0 | 1 | 2 | 3;
  sandStoneType?: "default" | "heiroglyphs" | "cut" | "smooth";
  stoneType?:
    | "andesite"
    | "andesite_smooth"
    | "stone"
    | "granite"
    | "granite_smooth"
    | "diorite"
    | "diorite_smooth";
  stability?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  stabilityCheck?: boolean;
  saplingType?: "acacia" | "birch" | "dark_oak" | "jungle" | "oak" | "spruce";
  sandType?: "normal" | "red";
  seaGrassType?: "default" | "double_bot" | "double_top";
  stoneSlabType?:
    | "brick"
    | "cobblestone"
    | "nether_brick"
    | "quartz"
    | "sandstone"
    | "smooth_stone"
    | "stone_brick"
    | "wood";
  stoneSlabType_2?:
    | "mossy_cobblestone"
    | "prismarine_brick"
    | "prismarine_drk"
    | "prismarine_rough"
    | "purpur"
    | "red_nether_brick"
    | "red_sandstone"
    | "smooth_sandstone";
  stoneSlabType_3?:
    | "andesite"
    | "diorite"
    | "end_stone_brick"
    | "granite"
    | "polished_diorite"
    | "polished_andesite"
    | "polished_granite"
    | "smooth_red_sandstone";
  stoneSlabType_4?:
    | "cut_red_sandstone"
    | "cut_sandstone"
    | "mossy_stone_brick"
    | "smooth_quartz"
    | "stone";
  structureVoidType?: "air" | "void";
  strippedBit?: boolean;
  suspendedBit?: boolean;
  tallGrassType?: "default" | "tall" | "fern" | "snow";
  toggleBit?: boolean;
  triggeredBit?: boolean;
  torchFacingDirection?: "top" | "east" | "north" | "south" | "unknown" | "west";
  topSlotBit?: boolean;
  tutleEggCount?: "one_egg" | "two_egg" | "three_egg" | "four_egg";
  updateBit?: boolean;
  upsdideDownBit?: boolean;
  woodType?: "acacia" | "birch" | "dark_oak" | "jungle" | "oak" | "spruce";
  vineDirectionBits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  weirdoDirection?: 0 | 1 | 2 | 3;
  wallBlockType?:
    | "andesite"
    | "brick"
    | "cobblestone"
    | "diorite"
    | "end_brick"
    | "granite"
    | "mossy_cobblestone"
    | "mossy_stone_brick"
    | "nether_brick"
    | "prismarine"
    | "red_nether_brick"
    | "red_sandstone"
    | "sandstone"
    | "stone_brick";
};
