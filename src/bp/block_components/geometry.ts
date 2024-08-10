import { GeometryIdentifier } from "../../shared/literals/geometry_identifier.js";

/**
 * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
 */
export type BlockGeometryComponent =
  | GeometryIdentifier
  | {
      /**
       * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
       */
      identifier?: GeometryIdentifier;
      /**
       * A JSON object that contains a list of key/value pairs that map from bone name in a geometry file (key) to a boolean value that turns their rendering on/off (value).
       */
      bone_visibility?: {};
    };
