import { LiteralUnion } from "../shared/literal_union.js";

export type TerrainTexture = {
  resource_pack_name: LiteralUnion<"pack.name">;
  texture_name: LiteralUnion<"atlas.terrain">;
  padding: number;
  num_mip_levels: number;
  texture_data: Record<
    string,
    {
      textures: TerrainTextureData | Array<TerrainTextureData> | string;
    }
  >;
};

export type TerrainTextureData = {
  path?: string;
  overlay_color?: string;
  tint_color?: string;
  pbr_emissive?: number;
  variations?: Array<Omit<TerrainTextureData, "variations"> & { weight?: number }>;
};
