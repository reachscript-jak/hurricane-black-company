<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Eloquent\User::class, 3)->create()->each(function ($user) {
            factory(App\Eloquent\Post::class, 2)->create(['user_id' => $user->id])->each(function ($post){
                factory(App\Eloquent\Comment::class, 3)->create(['post_id' => $post->id]);
            });
        });
    }
}
