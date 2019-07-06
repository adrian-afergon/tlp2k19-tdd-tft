import * as React from 'react';
import './Image.scss';

type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const Image: React.FC<ImageProps> = (props) => (
  <img {...props} />
);

Image.displayName = 'Image';
