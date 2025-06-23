import {
  LiteralUnion,
  MoLang,
  ParticleIdentifier,
  SoundEvent,
  TexturePath,
} from "../shared/index.js";
import { ParticleComponents } from "./particle_components/index.js";

export type Particle = {
  format_version: string;
  particle_effect: {
    description: ParticleDescription;
    curves?: { [key: string]: ParticleCurve };
    events?: { [key: string]: ParticleEvent };
    components?: ParticleComponents;
  };
};

export type ParticleDescription = {
  identifier: string;
  basic_render_parameters: {
    texture: TexturePath;
    material: "particles_alpha" | "particles_blend" | "particles_add";
  };
};

export type ParticleCurve = {
  type?: "linear" | "bezier" | "catmull_rom" | "bezier_chain";
  nodes?:
    | Array<
        | LiteralUnion<
            | "variable.particle_lifetime"
            | "variable.particle_age"
            | "variable.particle_random_1"
            | "variable.particle_random_2"
            | "variable.particle_random_3"
            | "variable.particle_random_4"
            | "variable.emitter_lifetime"
            | "variable.emitter_age"
            | "variable.emitter_random_1"
            | "variable.emitter_random_2"
            | "variable.emitter_random_3"
            | "variable.emitter_random_4"
            | "variable.entity_scale"
          >
        | number
      >
    | {
        [key: string]: {
          value?: number;
          slope?: number;
        };
      };
  input?: MoLang;
  horizontal_range?: MoLang;
};

export type ParticleEvent = {
  sequence?: Array<ParticleEvent>;
  randomize?: Array<
    {
      weight?: number;
    } & ParticleEvent
  >;
  particle_effect?: {
    effect?: ParticleIdentifier;
    type?: "emitter" | "emitter_bound" | "particle" | "particle_with_velocity";
    pre_effect_expression?: MoLang;
  };
  sound_effect?: {
    event_name?: SoundEvent;
  };
  components?: ParticleComponents;
};
