<?php

namespace App\Http\Controllers\Api;

use App\Eloquent\Favorite;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FavoriteController extends Controller
{
    /**
     * ヒドイイネをFavoriteテーブルに保存
     *
     * @param  Request  $request
     * @param  Favorite $favorite
     * @return Response
     */
    public function store(Request $request, Favorite $favorite)
    {
        $newFavorite = $favorite->createFavorite($request->all());

        $data = [
            'post' => $newFavorite,
        ];

        return response()->json($data, 200);
    }

    /**
     * ヒドイイネをFavoriteテーブルにから削除
     *
     * @param  Request  $request
     * @param  Favorite $favorite
     * @return Response
     */
    public function destroy(Request $request, Favorite $favorite)
     {
        $unFavorite = $favorite->deleteFavorite($request->all());

        $data = [
            'post' => $unFavorite,
        ];

        return response()->json($data, 200);
     }

}
