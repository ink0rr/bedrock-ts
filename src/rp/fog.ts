import { HexColor } from "../shared/hex_color.js";
import { FogIdentifier } from "../shared/index.js";

export type Fog = {
  format_version: "1.21.90";
  "minecraft:fog_settings": {
    description: {
      /**
       * The identifier for these fog settings. The identifier must include a namespace.
       */
      identifier: FogIdentifier;
    };
    /**
     * The distance fog settings for different camera locations.
     */
    distance?: Partial<
      Record<
        "water" | "air" | "weather" | "lava" | "lava_resistance" | "powder_snow",
        FogData & {
          /**
           * Additional fog data which will slowly transition to the distance fog of current biome.
           */
          transition_fog?: {
            /**
             * Initial fog that will slowly transition into water distance fog of the biome when player goes into water.
             */
            init_fog?: FogData;
            /**
             * The minimum progress of fog transition.
             */
            min_percent?: number;
            /**
             * The time takes to reach certain progress ('mid_percent') of fog transition.
             */
            mid_seconds?: number;
            /**
             * The progress of fog transition after 'mid_seconds' seconds.
             */
            mid_percent?: number;
            /**
             * Total amount of time takes to complete fog transition.
             */
            max_seconds?: number;
          };
        }
      >
    >;
    /**
     * The volumetric fog settings. RTX is required for volumetric fogs.
     */
    volumetric?: {
      /**
       * The coefficient settings for the volumetric fog in different blocks.
       */
      media_coefficients?: Partial<
        Record<
          "air" | "water" | "cloud",
          {
            /**
             * Proportion of light that is scattered per block.
             */
            scattering?: HexColor | [number, number, number] | number[];
            /**
             * Proportion of light that is absorbed (lost) per block.
             */
            absorption?: HexColor | [number, number, number] | number[];
          }
        >
      >;
      /**
       * The density settings for different camera locations.
       */
      density?: Partial<
        Record<
          "water" | "air" | "weather" | "lava" | "lava_resistance" | "powder_snow",
          {
            /**
             * The maximum amount of opaqueness that the ground fog will take on. A value from [0.0, 1.0].
             */
            max_density?: number;
            /**
             * The height in blocks that the ground fog will become it's maximum density.
             */
            max_density_height?: number;
            /**
             * The height in blocks that the ground fog will be completely transparent and begin to appear. This value needs to be at least 1 higher than 'max_density_height'.
             */
            zero_density_height?: number;
            /**
             * When set to true, the density will be uniform across all heights.
             */
            uniform?: boolean;
          }
        >
      >;
      henyey_greenstein_g?: {
        air?: {
          henyey_greenstein_g?: number;
        };
        water?: {
          henyey_greenstein_g?: number;
        };
      };
    };
  };
};

type FogData = {
  /**
   * The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
   */
  fog_start?: number;
  /**
   * The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
   */
  fog_end?: number;
  /**
   * The color that the fog will take on.
   */
  fog_color?: HexColor;
  /**
   * Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance.
   */
  render_distance_type?: "fixed" | "render";
};
