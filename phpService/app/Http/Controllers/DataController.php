<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function getItems(Request $request)
    {
        $items = Item::paginate(10);
        return response()->json($items);
    }

    public function getItemById($id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['error' => 'Item not found'], 404);
        }
        return response()->json($item);
    }
}
