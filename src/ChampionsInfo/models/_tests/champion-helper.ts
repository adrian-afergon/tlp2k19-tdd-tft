import { Champion } from '../Champion';

export const buildChampion = ({ id, name, image }: Champion): Champion => ({
  id: id ? id : 'irrelevant id',
  name: name ? name : 'irrelevant name',
  image: image ? image : 'irrelevant image',
});
