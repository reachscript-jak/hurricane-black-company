<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Eloquent\Favorite;
use App\Eloquent\Post;
use Faker\Generator as Faker;

$factory->define(Favorite::class, function (Faker $faker) {
    return [];
});

$factory->state(Favorite::class, 'with_author', function (Faker $faker) {
    return [
        'post_id' => factory(Post::class)->create()->id,
    ];
});
