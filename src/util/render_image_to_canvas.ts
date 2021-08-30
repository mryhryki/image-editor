type Drawer = () => CanvasRenderingContext2D

export const buildImageToCanvasRenderer = (
  dataUrl: string,
  context: CanvasRenderingContext2D,
): Promise<Drawer> => new Promise((resolve) => {
  const image = new Image();
  image.addEventListener("load", () => {
    context.canvas.width = image.width;
    context.canvas.height = image.height;
    const drawer: Drawer = () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.drawImage(image, 0, 0);
      return context;
    };
    resolve(drawer);
  });
  image.src = dataUrl;
});