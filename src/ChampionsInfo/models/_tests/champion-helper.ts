import { Champion } from '../Champion';

export const buildChampion = ({ id, name, image, info }: Champion): Champion => ({
  id: id ? id : 'irrelevant id',
  name: name ? name : 'irrelevant name',
  image: image ? image : 'irrelevant image',
  info,
});
