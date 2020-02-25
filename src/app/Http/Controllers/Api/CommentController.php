<?php

namespace App\Http\Controllers\Api;

use App\Eloquent\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    /**
     * コメント内容をcommentsテーブルに保存する
     *
     * @param Request $request
     * @param Comment $comment
     * @return Response
     */
    public function store(Request $request, Comment $comment)
    {
        $newComment = $comment->createComment($request->all());

        $data = [
            'comment' => $newComment,
        ];

        return response()->json($data, 200);
    }
}
