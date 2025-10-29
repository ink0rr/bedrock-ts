// auto generated
import { GeometryIdentifier } from "../../shared/literals/geometry_identifier.js";
import { BlockMaterialInstancesComponent } from "./material_instances.js";

/**
 * Defines which geometry and material_instances to use when the block is embedded into another block, eg. into a Flowerpot
 */
export type BlockEmbeddedVisualComponent = {
  /**
   * The 'minecraft:geometry' component that will be used for the embedded visual.
   */
  geometry?: GeometryIdentifier;
  /**
   * The 'minecraft:material_instances' component that will be used for the embedded visual.
   */
  material_instances?: Record<string, BlockMaterialInstancesComponent>;
};
