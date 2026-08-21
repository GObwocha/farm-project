<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function index()
    {
        $products = Product::all();

        foreach ($products as $product){
            $product->image = asset('/api/image/' . $product->image);
        }
        return response()->json($products);
    }
}