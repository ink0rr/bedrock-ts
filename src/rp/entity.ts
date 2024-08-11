import { HexColor } from "../shared/hex_color.js";
import { LiteralUnion } from "../shared/literal_union.js";
import { AnimationIdentifier } from "../shared/literals/animation_identifier.js";
import { EntityTexturePath } from "../shared/literals/entity_texture_path.js";
import { GeometryIdentifier } from "../shared/literals/geometry_identifier.js";
import { ItemIcon } from "../shared/literals/item_icon.js";
import { ParticleIdentifier } from "../shared/literals/particle_identifier.js";
import { RenderControllerIdentifier } from "../shared/literals/render_controller_identifier.js";
import { SoundDefinitionIdentifier } from "../shared/literals/sound_definition_identifier.js";
import { Material } from "../shared/material.js";
import { MoLang } from "../shared/molang.js";
import { StringOrRecord } from "../shared/string_or_record.js";

export type ClientEntity = {
  format_version: string;
  /**
   * The resource description of the entity.
   */
  "minecraft:client_entity"?: {
    description?: {
      identifier: string;
      /**
       * Engine version for which the top resource pack was built. If a definition's min_engine_version is newer than that pack's engine version then the definition is not parsed. Multiple definition files may use the same identifier, in which case only one of those definitions will be loaded. The definition with the same or closest and not greater min_engine_version, as compared to the top resource pack's engine version, will be parsed; all other definitions with the same identifier will not be parsed.
       */
      min_engine_version?: string;
      /**
       * Whether to enable attachables on the entity.
       */
      enable_attachables?: boolean;
      hide_armor?: boolean;
      /**
       * Defines the spawn egg texture/color for the entity.
       */
      spawn_egg?: {
        /**
         * Texture to use for the spawn egg.
         */
        texture?: ItemIcon;
        /**
         * The texture index to use.
         */
        texture_index?: number;
        /**
         * The base color of the spawn egg.
         */
        base_color?: HexColor;
        /**
         * The overlay color of the spawn egg.
         */
        overlay_color?: HexColor;
      };
      /**
       * Defines the materials used in the entity.
       */
      materials: Record<LiteralUnion<"default">, Material>;
      /**
       * Defines the textures used in the entity.
       */
      textures: Record<LiteralUnion<"default">, EntityTexturePath>;
      /**
       * Defines the geometries used in the entity.
       */
      geometry: Record<LiteralUnion<"default">, GeometryIdentifier>;
      queryable_geometry?: GeometryIdentifier;
      /**
       * Defines animations and animation controllers to be used in this entity.
       */
      animations?: Record<string, AnimationIdentifier>;
      /**
       * Calculates variables to be used on the entity pre-animation and can run animations.
       */
      scripts?: {
        /**
         * Sets the scale of the mobs geometry.
         */
        scale?: MoLang;
        /**
         * Initializes variables.
         */
        initialize?: Array<MoLang>;
        /**
         * Pre-computes any expensive and complex values you may want to reuse in your scripts, long-living index variable updates, or generally any one-off computation per render tick.
         */
        pre_animation?: Array<MoLang>;
        parent_setup?: MoLang;
        /**
         * Runs animations and animation controllers that are defines under 'animations'
         */
        animate?: StringOrRecord[];
        /**
         * A list of variables that need certain settings applied to them.
         */
        variables?: Record<string, "public">;
        /**
         * Bones and effects will still be updated if the entity is off screen if this expression returns anything other than 0.0.
         */
        should_update_bones_and_effects_offscreen?: MoLang;
        /**
         * Effects will still be updated if the entity is off screen if this expression or 'should_update_bones_and_effects_offscreen' returns anything other than 0.0.
         */
        should_update_effects_offscreen?: MoLang;
      };
      /**
       * Defines the sounds to be played on the entity.
       */
      sound_effects?: Record<string, SoundDefinitionIdentifier>;
      /**
       * References all render controllers used to render the entity.
       */
      render_controllers: Array<
        Partial<Record<RenderControllerIdentifier, MoLang>> | RenderControllerIdentifier
      >;
      /**
       * Defines the particles to be played on the entity.
       */
      particle_effects?: Record<string, ParticleIdentifier>;
      /**
       * Defines the entity's particle emitters.
       */
      particle_emitters?: Record<string, ParticleIdentifier>;
      /**
       * This determines if the item held by an entity should render fully lit up (if true), or depending on surrounding lighting.
       */
      held_item_ignores_lighting?: boolean;
    };
  };
};
