<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /** @var \Illuminate\Support\Collection $users */
        $users = factory(App\Eloquent\User::class, 3)->create()->each(function ($u) {
            $u->posts()->saveMany(factory(App\Eloquent\Post::class, 20)->make());
        });
    }
}
