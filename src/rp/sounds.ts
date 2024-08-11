import { SoundDefinitionIdentifier } from "../shared/index.js";

export type Sounds = {
  individual_event_sounds?: {
    events?: Record<string, SoundObject>;
  };
  block_sounds?: Record<string, Sound<BlockSoundEvents>>;
  entity_sounds?: {
    defaults?: Sound<EntitySoundEvents>;
    entities?: Record<string, Sound<EntitySoundEvents>>;
  };
  interactive_sounds?: {
    block_sounds?: Record<string, Sound<BlockInteractiveEvents>>;
    entity_sounds?: {
      defaults?: Sound<{
        fall?: {
          default?: SoundObject;
        };
        jump?: {
          default?: SoundObject;
        };
      }>;
      entities?: Record<string, Sound>;
    };
  };
};
export type SoundObject =
  | SoundDefinitionIdentifier
  | {
      sound?: SoundDefinitionIdentifier;
      sounds?: SoundDefinitionIdentifier;
      volume?: [number, number] | number;
      pitch?: [number, number] | number;
    }
  | Record<string, SoundDefinitionIdentifier>;

type Sound<Events = Record<string, SoundObject>> = {
  volume?: [number, number] | number;
  pitch?: [number, number] | number;
  events?: Events | Record<string, SoundObject>;
};

type EntitySoundEvents = {
  "fall.big"?: SoundObject;
  "fall.small"?: SoundObject;
  splash?: SoundObject;
  swim?: SoundObject;
  fizz?: SoundObject;
  drink?: SoundObject;
  eat?: SoundObject;
  ambient?: SoundObject;
  "ambient.tame"?: SoundObject;
  flop?: SoundObject;
  hurt?: SoundObject;
  death?: SoundObject;
  "ambient.in.water"?: SoundObject;
  "hurt.in.water"?: SoundObject;
  "death.in.water"?: SoundObject;
  "ambient.in.raid"?: SoundObject;
  takeoff?: SoundObject;
  shoot?: SoundObject;
  step?: SoundObject;
  attack?: SoundObject;
  breathe?: SoundObject;
  jump?: SoundObject;
  mad?: SoundObject;
  stare?: SoundObject;
  sniff?: SoundObject;
  sleep?: SoundObject;
  spit?: SoundObject;
  warn?: SoundObject;
  scream?: SoundObject;
  charge?: SoundObject;
};

type BlockSoundEvents = {
  break?: SoundObject;
  default?: SoundObject;
  hit?: SoundObject;
  "item.use.on"?: SoundObject;
  place?: SoundObject;
  "power.off"?: SoundObject;
  "power.on"?: SoundObject;
};

type BlockInteractiveEvents = {
  fall?: SoundObject;
  jump?: SoundObject;
  land?: SoundObject;
  step?: SoundObject;
};
