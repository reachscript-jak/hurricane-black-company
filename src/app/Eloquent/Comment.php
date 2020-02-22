<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'body',
    ];

    public function post()
    {
        return $this->belongsTo('App\Eloquent\Post');
    }
}
