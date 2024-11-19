# Property fair demo

Note: This project is only for the educational purpose.

In this project I have used laravel 11.x, vue 3.x and inertia Js for the fullstack development.

### Features

- Basic Laravel features: database migration, database seeds, model factories, authentication and authorization.
- Advance Laravel features like Single action controller, database and email notifications, model policies, model (scopes, accessor, mutators), route-model binding etc.
- Used Inertia JS to use server side routing and controller without creating API. for more information on how inertia js works [click here.](https://inertiajs.com/ "click here.")
- Used VueJs (vue3) to manage client side SPA.
- In VueJs we have used Vue layouts, Composables, Events, Common UI components etc
- Integrated Tailwind CSS for UI styling.
- Laravel-Vite to manage assets (CSS and JS compilation).

### Installation

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/10.x/deployment#server-requirements)

1. Clone the repository to your local machine.
2. `cd project`
3. Install all the dependencies using composer `composer install`
4. Copy the example env file and make the required configuration changes in the .env file
    
    `cp .env.example .env`

5. Generate a new application key `php artisan key:generate`

6. Run the migration and seed data `php artisan migrate --seed`

7. Create the symbolic link to storage `php artisan storage:link`

8. Run `npm install && npm run dev`

9. Run `php artisan serve`

now we can see the development server started at `http:localhost:8000/`

#### Happy Coding...
