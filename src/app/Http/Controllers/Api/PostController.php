<?php

namespace App\Http\Controllers\Api;

use App\Eloquent\Comment;
use App\Eloquent\Favorite;
use App\Eloquent\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Request as GlobalRequest;

class PostController extends Controller
{
    public function index(Request $request, Post $post)
    {
        $count = $request->input('count');
        
        $posts = $post->getPost($count , 'DESC');
        $data = [
            'posts' => $posts
        ];

        return response()->json($data, 200);
    }

    public function show(int $postId, Post $post, Comment $comment, Favorite $favorite)
    {
        $postinfo = $post->find($postId);
        $comments = $comment->getComments($postId);
        $favoriteCount = $favorite->getFavoriteCountByPostId($postId);

        $data = [
            'post' => $postinfo,
            'comments' => $comments,
            'favoriteCount' => $favoriteCount
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request, Post $post)
    {
        $newPost = $post->createPost($request->all());

        $data = [
            'post' => $newPost,
        ];

        return response()->json($data, 200);
    }

}
