<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * @param  Request  $request
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index(Request $request): \Inertia\Response|\Inertia\ResponseFactory
    {
        return inertia('Notification/Index', [
                'notifications' => $request->user()->notifications()->paginate(10)
            ]
        );
    }
}
