// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleParticleMotionCollisionComponent = {
  /**
   * Enables motion collision on the particle. Evaluates every frame
   */
  enabled?: MoLang;
  /**
   * Triggers expiration on contact if true
   */
  expire_on_contact?: boolean;
  /**
   * Alters the speed of the particle when it has collided useful for emulating friction/drag when colliding, e.g a particle that hits the ground would slow to a stop. This drag slows down the particle by this amount in blocks/sec when in contact
   */
  collision_drag?: number;
  /**
   * Used for bouncing/not-bouncing. Set to 0.0 to not bounce, 1.0 to bounce back up to original hight and in-between to lose speed after bouncing.  Set to >1.0 to gain energy on each bounce
   */
  coefficient_of_restitution?: number;
  /**
   * Used to minimize interpenetration of particles with the environment, note that this must be less than or equal to 1/2 block
   */
  collision_radius?: number;
  events?: Array<{
    /**
     * Triggers the specified event if the conditions are met
     */
    event?: string;
    /**
     * Optional minimum speed for event triggering
     */
    min_speed?: number;
  }>;
};
