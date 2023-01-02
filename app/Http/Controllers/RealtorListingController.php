<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RealtorListingController extends Controller
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
        $filters = [
            'deleted' => $request->boolean('deleted'),
            ...$request->only(['by', 'order'])//like calling array_merge()
        ];
        return inertia('Realtor/Index', [
            'filters' => $filters,
            'listings' => Auth::user()->listings()
                ->withCount('images')
                ->filter($filters)
                ->paginate(10)->withQueryString()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function create()
    {
        //$this->authorize('create',Listing::class);
        return inertia('Realtor/Create');
    }

    /**
     * @param  Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'beds' => 'required|integer|min:0|max:20',
            'baths' => 'required|integer|min:0|max:20',
            'area' => 'required|integer|min:15|max:1500',
            'city' => 'required',
            'code' => 'required',
            'street' => 'required',
            'street_nr' => 'required|min:1|max:1000',
            'price' => 'required|integer|min:1|max:20000000',
        ]);
        $request->user()->listings()->create($data);

        return redirect()->route('listing.index')->with('success', 'Listing was created!');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Listing  $listing
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function edit(Listing $listing)
    {
        return inertia('Realtor/Edit', ['listing' => $listing]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Listing  $listing
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Listing $listing)
    {
        $listing->update(
            $request->validate([
                'beds' => 'required|integer|min:0|max:20',
                'baths' => 'required|integer|min:0|max:20',
                'area' => 'required|integer|min:15|max:1500',
                'city' => 'required',
                'code' => 'required',
                'street' => 'required',
                'street_nr' => 'required|min:1|max:1000',
                'price' => 'required|integer|min:1|max:20000000',
            ])
        );

        return redirect()->route('listing.index')->with('success', 'Listing was changed!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Listing  $listing
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Listing $listing)
    {
        $listing->deleteOrFail();
        return redirect()->back()->with('success', 'Listing was deleted!');
    }

    /**
     * @param  Listing  $listing
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Listing $listing)
    {
        $listing->restore();
        return redirect()->back()->with('success', 'Listing was restored!');
    }
}
