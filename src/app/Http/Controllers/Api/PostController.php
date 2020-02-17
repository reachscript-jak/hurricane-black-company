<?php

namespace App\Http\Controllers\Api;

use App\Eloquent\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }
}
