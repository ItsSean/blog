import * as express from 'express';
import { getAllPosts, getPostByID, createPost, updatePost, deletePost } from '../controllers/PostController';

export default (app) => {

    const apiRoutes = express.Router();
    const postRoutes = express.Router();

    /******************** post routes ********************/

    //append postroutes to apiroutes
    apiRoutes.use('/posts', postRoutes);

    //get all posts
    postRoutes.get('/', getAllPosts);

    //get post by id
    postRoutes.get('/:id', getPostByID);

    //create posts
    postRoutes.post('/', createPost);

    //update post by id
    postRoutes.put('/:id', updatePost);
    
    //delete post by id 
    postRoutes.delete('/:id', deletePost);
    
    
    
    /******************** append routes ********************/
    app.use('/api', apiRoutes);
}