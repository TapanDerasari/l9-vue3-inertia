<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Notifications\DatabaseNotification;

class NotificationPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return bool
     */
    public function update(User $user, DatabaseNotification $databaseNotification): bool
    {
        return $user->id === $databaseNotification->notifiable_id;
    }
}
