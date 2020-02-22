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
}
