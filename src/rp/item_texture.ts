export type ItemTexture = {
  resource_pack_name: "pack.name";
  texture_data: Record<string, ItemTextureData>;
  texture_name: "atlas.items";
};

export type ItemTextureData = {
  textures: string;
};
