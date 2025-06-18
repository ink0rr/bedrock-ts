// auto generated
import { HexColor } from "../../shared/hex_color.js";

export namespace BlockMapColorComponent {
  export type ColorMap = {
    /**
     * The color is represented as a hex value in the format '#RRGGBB'. May also be expressed as an array of [R, G, B] from 0 to 255.
     */
    color?: HexColor | Array<number>;
    /**
     * Tint multiplied to the color. Tint method logic varies, but often refers to the 'rain' and 'temperature' of the biome the block is placed in to compute the tint.
     */
    tint_method?: string;
  };
}
/**
 * Sets the color of the block when rendered to a map. The color is represented as a hex value in the format '#RRGGBB'. May also be expressed as an array of [R, G, B] from 0 to 255. If this component is omitted, the block will not show up on the map.
 */
export type BlockMapColorComponent = BlockMapColorComponent.ColorMap | HexColor;
