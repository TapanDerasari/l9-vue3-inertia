<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use App\Models\ListingImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RealtorListingImageController extends Controller
{
    /**
     * @param  Listing  $listing
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function create(Listing $listing)
    {
        $listing->load(['images']);
        return inertia(
            'Realtor/ListingImage/Create',
            ['listing' => $listing]
        );
    }

    /**
     * @param  Listing  $listing
     * @param  Request  $request
     */
    public function store(Listing $listing, Request $request)
    {
        if ($request->hasFile('images')) {
            $request->validate([
                'images.*' => 'mimes:jpg,png,jpeg,webp|max:5000'
            ], [
                'images.*.mimes' => 'The file should be in one of the formats: jpg, png, jpeg, webp'
            ]);
            foreach ($request->file('images') as $file) {
                $path = $file->store('images', 'public');
                $listing->images()->save(new ListingImage([
                    'filename' => $path
                ]));
            }
        }
        return redirect()->back()->with('success', 'Images uploaded!');
    }

    /**
     * @param  Listing  $listing
     * @param  ListingImage  $image
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Listing $listing, ListingImage $image)
    {
        Storage::disk('public')->delete($image->filename);
        $image->delete();

        return back()->with('success', 'Image was deleted!');
    }
}
