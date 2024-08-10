// auto generated
import { GeometryIdentifier } from "../../shared/literals/geometry_identifier.js";

/**
 * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
 */
export type BlockGeometryComponent =
  | GeometryIdentifier
  | "minecraft:geometry.cross"
  | "minecraft:geometry.full_block"
  | {
      /**
       * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
       */
      identifier?:
        | GeometryIdentifier
        | "minecraft:geometry.cross"
        | "minecraft:geometry.full_block";
      /**
       * A JSON object that contains a list of key/value pairs that map from bone name in a geometry file (key) to a boolean value that turns their rendering on/off (value).
       */
      bone_visibility?: {};
      /**
       * The description identifier of the culling rules to use for this block. This identifier must match an existing culling rules in any of the currently loaded resource packs.
       */
      culling?: string;
    };
