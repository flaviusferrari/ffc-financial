<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">    
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @inertiaHead
  </head>
  <body>
    <div class="wrapper">
      @inertia
    </div>
  </body>
</html>