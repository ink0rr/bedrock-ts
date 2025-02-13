import { LiteralUnion } from "../shared/literal_union.js";
import { MoLang } from "../shared/molang.js";

export type Geometry = {
  description?: Description;
  cape?: string;
  /**
   * Bones define the 'skeleton' of the mob: the parts that can be animated, and to which geometry and other bones are attached.
   */
  bones?: Array<Bone>;
  /**
   * Defines the model transformations for the item.
   */
  item_display_transforms?: ItemDisplayTransforms;
};
export type Description = {
  /**
   * Entity definition and Client Block definition files refer to this geometry via this identifier.
   */
  identifier?: string;
  /**
   * Assumed width in texels of the texture that will be bound to this geometry.
   */
  texture_width?: number;
  /**
   * Assumed height in texels of the texture that will be bound to this geometry.
   */
  texture_height?: number;
  /**
   * Width of the visibility bounding box (in model space units).
   */
  visible_bounds_width?: number;
  /**
   * Height of the visible bounding box (in model space units).
   */
  visible_bounds_height?: number;
  /**
   * Offset of the visibility bounding box from the entity location point (in model space units).
   */
  visible_bounds_offset?: Vector_3f;
};
export type Bone = {
  /**
   * Animation files refer to this bone via this identifier.
   */
  name?: string;
  /**
   * Bone that this bone is relative to.  If the parent bone moves, this bone will move along with it.
   */
  parent?: string;
  /**
   * The bone pivots around this point (in model space units).
   */
  pivot?: Vector_3f;
  /**
   * This is the initial rotation of the bone around the pivot, pre-animation (in degrees, x-then-y-then-z order).
   */
  rotation?: Vector_3f;
  /**
   * Mirrors the UV's of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.
   */
  mirror?: boolean;
  debug?: boolean;
  /**
   * Grow this box by this additive amount in all directions (in model space units).
   */
  inflate?: number;
  render_group_id?: number;
  cubes?: Array<Cube>;
  /**
   * A molang expression specifying the bone name of the parent skeletal hierarchy that this bone should use as the root transform.  Without this field it will look for a bone in the parent entity with the same name as this bone.  If both are missing, it will assume a local skeletal hierarchy (via the 'parent' field).  If that is also missing, it will attach to the owning entity's root transform.
   */
  binding?: MoLang;
  /**
   * This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it's relationship to the bone through the animation).
   */
  locators?: { [key: string]: Vector_3f | Locator };
  /**
   * EXPERIMENTAL - A triangle or quad mesh object.  Can be used in conjunction with cubes and texture geometry.
   */
  poly_mesh?: PolyMesh;
  /**
   * EXPERIMENTAL - Adds a mesh to the bone's geometry by converting texels in a texture into boxes
   */
  texture_meshes?: Array<TextureMesh>;
};
export type Cube = {
  /**
   * This point declares the unrotated lower corner of cube (smallest x/y/z value in model space units).
   */
  origin?: Vector_3f;
  /**
   * The cube extends this amount relative to its origin (in model space units).
   */
  size?: Vector_3f;
  /**
   * The cube is rotated by this amount (in degrees, x-then-y-then-z order) around the pivot.
   */
  rotation?: Vector_3f;
  /**
   * If this field is specified, rotation of this cube occurs around this point, otherwise its rotation is around the center of the box.  Note that in 1.12 this is flipped upside-down, but is fixed in 1.14.
   */
  pivot?: Vector_3f;
  /**
   * Grow this box by this additive amount in all directions (in model space units), this field overrides the bone's inflate field for this cube only.
   */
  inflate?: number;
  /**
   * Mirrors the UV's of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.
   */
  mirror?: boolean;
  uv?:
    | Vector_2f
    | {
        north?: Uv;
        south?: Uv;
        east?: Uv;
        west?: Uv;
        up?: Uv;
        down?: Uv;
      };
};
export type Uv = {
  /**
   * Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.
   */
  uv?: Vector_2f;
  /**
   * The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.
   */
  uv_size?: Vector_2f;
  /**
   * Specifies an optional rotation for the specified UV rect in 90-degree clockwise increments before applying it to a geometry cube face. If not specified, no rotation will be applied.
   */
  uv_rotation?: 0 | 90 | 180 | 270 | 360;
  material_instance?: string;
};
export type Locator = {
  /**
   * Position of the locator in model space.
   */
  offset?: Vector_3f;
  /**
   * Rotation of the locator in model space.
   */
  rotation?: Vector_3f;
  /**
   * Discard scale inherited from parent bone.
   */
  ignore_inherited_scale?: boolean;
};
export type PolyMesh = {
  /**
   * If true, UVs are assumed to be [0-1].  If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively.
   */
  normalized_uvs?: boolean;
  /**
   * Vertex positions for the mesh.  Can be either indexed via the 'polys' section, or be a quad-list if mapped 1-to-1 to the normals and UVs sections.
   */
  positions?: Array<Vector_3f>;
  /**
   * Vertex normals.  Can be either indexed via the 'polys' section, or be a quad-list if mapped 1-to-1 to the positions and UVs sections.
   */
  normals?: Vector_3f;
  /**
   * Vertex UVs.  Can be either indexed via the 'polys' section, or be a quad-list if mapped 1-to-1 to the positions and normals sections.
   */
  uvs?: Vector_3f;
  /**
   * Poly element indices, as an array of polygons, each an array of either three or four vertices, each an array of indices into positions, normals, and UVs (in that order).
   *
   * If not specifying vertex indices, arrays of data must be a list of tris or quads, set by making this property either 'tri_list' or 'quad_list'
   */
  polys?: Array<number> | "tri_list" | "quad_list";
};
export type TextureMesh = {
  /**
   * The friendly-named texture to use.
   */
  texture?: string;
  /**
   * The position of the pivot point after rotation (in *entity space* not texture or bone space) of the texture geometry
   */
  position?: Vector_3f;
  /**
   * The pivot point on the texture (in *texture space* not entity or bone space) of the texture geometry
   */
  local_pivot?: Vector_3f;
  /**
   * The rotation (in degrees) of the texture geometry relative to the offset
   */
  rotation?: Vector_3f;
  /**
   * The scale (in degrees) of the texture geometry relative to the offset
   */
  scale?: Vector_3f;
};
export type ItemDisplayTransforms = {
  /**
   * Display transformations for the GUI icon.
   */
  gui?: DisplayTransformation;
  /**
   * Display transformations for the first person right hand.
   */
  firstperson_righthand?: DisplayTransformation;
  /**
   * Display transformations for the first person left hand.
   */
  firstperson_lefthand?: DisplayTransformation;
  /**
   * Display transformations for the third person right hand.
   */
  thirdperson_righthand?: DisplayTransformation;
  /**
   * Display transformations for the third person left hand.
   */
  thirdperson_lefthand?: DisplayTransformation;
  /**
   * Display transformations for the item entity.
   */
  ground?: DisplayTransformation;
  /**
   * Display transformations for the item frame display.
   */
  fixed?: DisplayTransformation;
};
export type DisplayTransformation = {
  translation?: Vector_3f;
  rotation?: Vector_3f;
  scale?: Vector_3f;
};
export type Vector_2f = Array<number>;
export type Vector_3f = Array<number>;
export type Geometries = {
  format_version: LiteralUnion<"1.12.0" | "1.16.0">;
  "minecraft:geometry": Array<Geometry>;
};
