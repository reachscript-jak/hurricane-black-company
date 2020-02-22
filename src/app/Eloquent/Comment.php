<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'body', 'name',
    ];

    public function post()
    {
        return $this->belongsTo('App\Eloquent\Post');
    }

    public function getComments($postId, $orderBy = 'ASC')
    {
        $comments = Comment::where('post_id', $postId)->orderBy('id', $orderBy)->get();
        return $comments;
    }

    public function getCommentCountByPostId($postId)
    {
        $commentCount = Comment::where('post_id', $postId)->count();
        return $commentCount;
    }
}
