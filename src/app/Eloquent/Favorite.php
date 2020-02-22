<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    protected $fillable = [
    ];

    public function post()
    {
        return $this->belongsTo('App\Eloquent\Post');
    }

    public function getFavoriteCount($postId)
    {
        $count = Favorite::where('post_id', $postId)->count();
        return $count;
    }
}
