import Track from './track'
interface Album {
  name:string;
  releaseDate:string;
  coverImage:string;
  traks: Track[];
}

export default Album
