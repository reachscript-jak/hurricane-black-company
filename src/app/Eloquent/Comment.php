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

    public function getComments($post_id, $orderBy = 'ASC')
    {
        $comments = Comment::where('post_id', $post_id)->orderBy('id', $orderBy)->get();
        return $comments;
    }
}
