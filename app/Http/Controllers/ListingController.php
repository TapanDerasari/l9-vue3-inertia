<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListingController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Listing::class, 'listing');
    }

    /**
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index(Request $request)
    {
        $filters=$request->only([
            'priceFrom', 'priceTo', 'beds', 'baths', 'areaFrom', 'areaTo'
        ]);
        $listings= Listing::mostRecent()
            ->filter($filters)
            ->paginate(10)
            ->withQueryString();
        return inertia('Listing/Index',['filters'=>$filters,'listings'=>$listings]);
    }

    /**
     * Display the specified resource.
     *
     * @param  Listing  $listing
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function show(Listing $listing)
    {
//        if (Auth::user()->cannot('view',$listing)){
//            abort(403);
//        }
        //$this->authorize('view',$listing);
        $listing->load(['images']);
        return inertia('Listing/Show',['listing'=>$listing]);
    }
}
