import { MoLang } from "../shared/molang.js";

export type RenderControllers = {
  format_version?: string;
  render_controllers?: Record<string, RenderController>;
};

export type RenderController = {
  rebuild_animation_matrices?: boolean;
  light_color_multiplier?: number;
  ignore_lighting?: boolean;
  filter_lighting?: boolean;
  color?: RenderController.Color;
  overlay_color?: RenderController.Color;
  is_hurt_color?: RenderController.Color;
  on_fire_color?: RenderController.Color;
  uv_anim?: {
    offset?: [MoLang, MoLang];
    scale?: [MoLang, MoLang];
  };
  arrays?: {
    textures?: Record<string, Array<string>>;
    geometries?: Record<string, Array<string>>;
    materials?: Record<string, Array<string>>;
  };
  geometry?: string;
  part_visibility?: Array<Record<string, MoLang>>;
  materials?: Array<Record<string, MoLang>>;
  textures?: Array<string>;
};

export namespace RenderController {
  export type Color = {
    r?: MoLang;
    g?: MoLang;
    b?: MoLang;
    a?: MoLang;
  };
}
