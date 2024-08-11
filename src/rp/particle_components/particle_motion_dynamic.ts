// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleParticleMotionDynamicComponent = {
  /**
   * The linear acceleration applied to the particle, defaults to [0, 0, 0]. Units are blocks/sec/sec. An example would be gravity which is [0, -9.8, 0]. Evaluated every frame
   */
  linear_acceleration?: Array<MoLang>;
  /**
   * Using the equation: acceleration = -linear_drag_coefficient*velocity where velocity is the current direction times speed. Think of this as air-drag. The higher the value, the more drag. Evaluated every frame
   */
  linear_drag_coefficient?: MoLang;
  /**
   * Acceleration applies to the rotation speed of the particle, think of a disc spinning up or a smoke puff that starts rotating but slows down over time. Evaluated every frame. Acceleration is in degrees/sec/sec
   */
  rotating_acceleration?: MoLang;
  /**
   * Drag applied to retard rotation equation is rotation_acceleration += -rotation_rate*rotation_drag_coefficient. Useful to slow a rotation, or to limit the rotation acceleration. Think of a disc that speeds up (acceleration) but reaches a terminal speed (drag). Another use is if you have a particle growing in size, having the rotation slow down due to drag can add 'weight' to the particle's motion
   */
  rotation_drag_coefficient?: MoLang;
};
