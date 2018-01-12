var myApp = angular.module('myApp',['ngRoute']);

     // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/books.html',
                controller  : 'BooksController'
            })

            // route for the book page
            .when('/books', {
                templateUrl : 'views/books.html',
                controller  : 'BooksController'
            })

            // route for the book details page
            .when('/book/details/:id', {
                templateUrl : 'views/book_details.html',
                controller  : 'BooksController'
            })
              // route for the add book page
            .when('/book/add', {
                templateUrl : 'views/add_book.html',
                controller  : 'BooksController'
            })
              // route for the edit book page
            .when('/book/edit/:id', {
                templateUrl : 'views/edit_book.html',
                controller  : 'BooksController'
            })
            .otherwise({
  	         redirectTo: '/'
            }); 
    });
