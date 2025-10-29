// auto generated
export type BlockRedstoneProducerComponent = {
  /**
   * The strength of the redstone signal produced by this block.
   */
  power?: number;
  /**
   * The block touching this face will become strongly powered with the signal level strength of 'power'. Strongly powered blocks will power adjacent blocks. By default, the block will not strongly power any face.
   */
  strongly_powered_face?: "north" | "south" | "east" | "west" | "down" | "up";
  /**
   * The list of faces that are considered connected to the circuit. If a face is not connected, it will not provide power to the block touching that face. By default, all faces are connected.
   */
  connected_faces?: Array<"north" | "south" | "east" | "west" | "down" | "up">;
  /**
   * If true, the 'strongly_powered_face' and 'connected_faces' properties will be rotated according to the minecraft:transformation component.
   */
  transform_relative?: boolean;
};
