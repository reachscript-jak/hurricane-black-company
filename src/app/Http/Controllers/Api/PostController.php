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
        return response()->json($posts, 200);
    }

    public function show(int $postId, Post $postObject, Comment $comment, Favorite $favorite)
    {
        $post = $postObject->find($postId);
        $comments = $comment->getComments($postId);
        $favoriteCount = $favorite->getFavoriteCount($postId);

        $data = [
            'post' => $post,
            'comments' => $comments,
            'favoriteCount' => $favoriteCount
        ];

        return response()->json($data, 200);
    }
}
