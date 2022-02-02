import { canvasRGB } from "stackblur-canvas";
import { Position } from "../util/user_action_event";

export const drawMask = (context: CanvasRenderingContext2D, from: Position, to: Position): void => {
  const x = Math.min(from.x, to.x);
  const y = Math.min(from.y, to.y);
  const width = Math.abs(from.x - to.x);
  const height = Math.abs(from.y - to.y);
  console.debug(x, y, width, height)
  canvasRGB(context.canvas, x, y, width, height, 16);
};
