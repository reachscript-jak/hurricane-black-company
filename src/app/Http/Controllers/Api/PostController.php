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
    // スレッド一覧を表示する
    public function index(Request $request, Post $post, Comment $comment, Favorite $favorite)
    {
        $count = $request->input('count');
        $posts = $post->getPosts($count, 'DESC');
        foreach ($posts as $post){
            $commentCount = $comment->getCommentCountByPostId($post->id);
            $post['comment_count'] = $commentCount;
            $favoriteCount = $favorite->getFavoriteCountByPostId($post->id);
            $post['favorite_count'] = $favoriteCount;
        }

        $data = [
            'posts' => $posts
        ];

        return response()->json($data, 200);
    }

    // スレッド詳細を取得する
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

    // スレッド投稿内容をpostテーブルに保存する
    public function store(Request $request, Post $post)
    {
        $newPost = $post->createPost($request->all());

        $data = [
            'post' => $newPost,
        ];

        return response()->json($data, 200);
    }

    // スレッド内容更新
    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $post->fill($request->all())->save();   

        $data = [];

        return response()->json($data, 200);
    }

}
