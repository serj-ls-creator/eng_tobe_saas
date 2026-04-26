import { z } from "zod";
export const COMP_NAME = "EnglishToBe";

export const CompositionProps = z.object({
  title: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "English to be - Mobile Learning",
};

export const DURATION_IN_FRAMES = 150; // 5 seconds at 30fps
export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1920; // Portrait mode for mobile
export const VIDEO_FPS = 30;
