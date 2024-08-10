// auto generated
export type ParticleEmitterLifetimeEventsComponent = {
  /**
   * Fires when the emitter is created
   */
  creation_event?: Array<string> | string;
  /**
   * Fires when the emitter expires (does not wait for particles to expire too).
   */
  expiration_event?: Array<string> | string;
  /**
   * A series of times, e.g. 0.0 or 1.0, that trigger the event these get fired on every loop the emitter goes through.
   */
  timeline?: { [key: string]: Array<Array<string> | string> };
  /**
   * A series of distances, e.g. 0.0 or 1.0, that trigger the event. These get fired when the emitter has moved by the specified input.
   */
  travel_distance_events?: { [key: string]: Array<Array<string> | string> };
  /**
   * A series of events that occur at set intervals. These get fired every time the emitter has moved the specified input distance from the last time it was fired.
   */
  looping_travel_distance_events?: Array<Record<string, never>>;
};
