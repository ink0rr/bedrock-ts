// auto generated
import { GeometryIdentifier } from "../../shared/literals/geometry_identifier.js";
import { BlockMaterialInstancesComponent } from "./material_instances.js";

/**
 * The description identifier of the geometry and material used to render the item of this block.
 */
export type BlockItemVisualComponent = {
  /**
   * The 'minecraft:geometry' component that will be used for the item.
   */
  geometry?: GeometryIdentifier;
  /**
   * The 'minecraft:material_instances' component that will be used for the item.
   */
  material_instances?: Record<string, BlockMaterialInstancesComponent>;
};
