import {environment} from "../../environments/environment";

const  {API} = environment;

export const urls = {
  users: `${API}/users`,
  posts: `${API}/posts`,
  comments: `${API}/comments`,
  photos: `${API}/photos`,
  albums: `${API}/albums`,
  todos: `${API}/todos`,
}
