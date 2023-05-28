import GenericObject from "../classes/GenericObject";
import images from '../images';

const getPlatforms1 = ({ canvas }) => {
  const platform = {
    height: 100,
    width: 100 * images.platform.width / images.platform.height
  }
  
  const platforms = [
    new GenericObject({
      x: 0,
      y: canvas.height / 2 - platform.height,
      height: platform.height,
      width: platform.width,
      image: images.platform,
    }),
    new GenericObject({
      x: platform.width - 1,
      y: canvas.height / 2 - platform.height,
      height: platform.height,
      width: platform.width,
      image: images.platform,
    }),
    new GenericObject({
      x: platform.width * 3 - 1 * 3,
      y: canvas.height / 2 - platform.height,
      height: platform.height,
      width: platform.width,
      image: images.platform,
    }),

    // second level. First one
    new GenericObject({
      x: 600,
      y: canvas.height / 2 - 400,
      height: 100,
      width: platform.width,
      image: images.platform,
    }),
  ];

  return platforms;
}

export { getPlatforms1 };