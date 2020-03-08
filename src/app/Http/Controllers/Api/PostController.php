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
     * @return Response
     */
    public function index(Request $request, Post $post)
    {
        $count = $request->input('count');
        $orderBy = $request->input('order_by');
        if ($orderBy === 'new') {
            $posts = $post->getAllPostsWithCommentsFavorite($count);
        } else {
            $posts = $post->getAllPostsWithCommentsFavoriteOrderByFavoriteCount($count);
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
     * @param int $postId
     * @return Response
     */
    public function show(Request $request, int $postId)
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
