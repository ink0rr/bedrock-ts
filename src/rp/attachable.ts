import {
  AnimationIdentifier,
  LiteralUnion,
  ParticleIdentifier,
  RenderControllerIdentifier,
  SoundDefinitionIdentifier,
  TexturePath,
  TrimPalette,
} from "../shared/index.js";
import { GeometryIdentifier } from "../shared/literals/geometry_identifier.js";
import { ItemIdentifier } from "../shared/literals/item_identifier.js";
import { Material } from "../shared/material.js";
import { MoLang } from "../shared/molang.js";
import { StringOrRecord } from "../shared/string_or_record.js";

export type Attachable = {
  format_version?: string;
  "minecraft:attachable": {
    description: {
      identifier: string;
      /**
       * Sets an item identifier with a Molang script to decide when to render the attachable.
       */
      item?: ItemIdentifier;
      /**
       * Defines the materials used in the attachable.
       */
      materials: Record<LiteralUnion<"default">, Material>;
      /**
       * Defines the textures used in the attachable.
       */
      textures: Record<LiteralUnion<"default">, TexturePath> & TrimPalette<TexturePath>;
      /**
       * Defines the geometries used in the attachable.
       */
      geometry: Record<LiteralUnion<"default">, GeometryIdentifier>;
      queryable_geometry?: GeometryIdentifier;
      scripts?: {
        /**
         * Sets up the parent bone for the attachable.
         */
        parent_setup?: string;
        /**
         * Pre-computes any expensive and complex values you may want to reuse in your scripts, long-living index variable updates, or generally any one-off computation per render tick.
         */
        pre_animation?: Array<string>;
        animate?: StringOrRecord[];
        /**
         * Bones and effects will still be updated if the entity is off screen if this expression returns anything other than 0.0.
         */
        should_update_bones_and_effects_offscreen?: MoLang;
        /**
         * Effects will still be updated if the entity is off screen if this expression or 'should_update_bones_and_effects_offscreen' returns anything other than 0.0.
         */
        should_update_effects_offscreen?: MoLang;
      };
      animations?: Record<string, AnimationIdentifier>;
      /**
       * Defines the sounds to be played on the attachable.
       */
      sound_effects?: Record<string, SoundDefinitionIdentifier>;
      /**
       * Defines the particles to be played on the attachable.
       */
      particle_effects?: Record<string, ParticleIdentifier>;
      /**
       * Defines the attachable's particle emitters.
       */
      particle_emitters?: Record<string, ParticleIdentifier>;
      /**
       * References all render controllers used to render the attachable.
       */
      render_controllers: Array<
        Partial<Record<RenderControllerIdentifier, MoLang>> | RenderControllerIdentifier
      >;
    };
  };
};
