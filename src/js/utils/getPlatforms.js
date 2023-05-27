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
    // new GenericObject({
    //   x: platform.width - 1,
    //   y: canvas.height / 2 - platform.height,
    //   height: platform.height,
    //   width: platform.width,
    //   image: images.platform,
    // }),
    new GenericObject({
      x: platform.width * 2 - 1 * 2,
      y: canvas.height / 2 - platform.height,
      height: platform.height,
      width: platform.width,
      image: images.platform,
    }),
    // first second level
    new GenericObject({
      x: 300,
      y: canvas.height / 2 - platform.height * 2 - 200,
      height: platform.height,
      width: platform.width,
      image: images.platform,
    }),
  ];

  return platforms;
}

export { getPlatforms1 };