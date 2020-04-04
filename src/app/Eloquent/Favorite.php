<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    protected $fillable = [
        'post_id',
    ];

    public function post()
    {
        return $this->belongsTo('App\Eloquent\Post');
    }

    public function getFavoriteCountByPostId($postId)
    {
        $count = Favorite::where('post_id', $postId)->count();
        return $count;
    }

    public function createFavorite(array $request)
    {
        return Favorite::create($request);
    }

    public function deleteFavorite(array $request)
    {
        Favorite::where('post_id', $request)->orderby('id', 'asc')->first()->delete();
    }
}
