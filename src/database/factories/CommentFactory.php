<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Eloquent\Post;
use App\Eloquent\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'body' => $faker->sentence,
        'name' => $faker->name,
    ];
});

$factory->state(Comment::class, 'with_author', function (Faker $faker) {
    return [
        'post_id' => factory(Post::class)->create()->id,
    ];
});
