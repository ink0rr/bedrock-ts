import { SoundPath } from "../shared/index.js";

export type SoundDefinition = {
  format_version: string;
  sound_definitions: {
    [key: string]: {
      __use_legacy_max_distance?: boolean | string;
      category?:
        | "ambient"
        | "weather"
        | "block"
        | "hostile"
        | "player"
        | "neutral"
        | "bucket"
        | "record"
        | "ui"
        | "music";
      min_distance?: number | null;
      max_distance?: number | null;
      subtitle?: string;
      sounds?: Array<
        | {
            name?: SoundPath;
            stream?: boolean;
            load_on_low_memory?: boolean;
            volume?: number;
            pitch?: number;
          }
        | SoundPath
      >;
    };
  };
};
