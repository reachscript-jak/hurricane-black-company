<?php

namespace App\Http\Controllers\Api;

use App\Eloquent\Comment;
use App\Eloquent\Favorite;
use App\Eloquent\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{

    /**
     * スレッド一覧を表示する
     * 
     * @param Request $request
     * @param Post $post
     * @param Comment $comment
     * @param Favorite $favorite
     * @return Response
     */
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

    /**
     * スレッド詳細を取得する
     * 
     * @param Request $request
     * @param $postId
     * @return Response
     */
    public function show(Request $request, $postId)
    {
        /** @var Post $postInfo */
        $postInfo = Post::find($postId);
        $comments = $postInfo->comments()->get();
        $favoriteCount = $postInfo->favorites()->count();

        $data = [
            'post' => $postInfo,
            'comments' => $comments,
            'favoriteCount' => $favoriteCount
        ];

        return response()->json($data, 200);
    }
    
    /**
     * スレッド投稿内容をpostテーブルに保存する
     * 
     * @param Request $request
     * @param Post $post
     * @return Response
     */
    public function store(Request $request, Post $post)
    {
        $newPost = $post->createPost($request->all());

        $data = [
            'post' => $newPost,
        ];

        return response()->json($data, 200);
    }

    /**
     * スレッド内容更新
     * 
     * @param Request $request
     * @param int $postId
     * @return Response
     */
    public function update(Request $request, int $postId)
    {
        $post = Post::find($postId);
        $post->fill($request->all())->save();   

        $data = [];

        return response()->json($data, 200);
    }

}
