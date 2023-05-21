## Chef's Toybox

## Live Website link: https://assignment-11-client-a222c.web.app


### Features:

1.User Authentication:
The application allows users to access the home page and view the All Toys section without requiring login. However, to view the details of a specific toy or add a toy to their collection, users need to be authenticated. If an unauthenticated user attempts to access these private routes, they will be redirected to the login page with an alert prompting them to log in.

2.Navbar:
The application features a navigation bar that includes a logo and the website name. The navbar also provides links to various sections of the website, such as Home, Blogs, All Toys, My Toys, Add a Toy, and the user's profile image with a tooltip displaying their name. The login and logout options are conditionally displayed based on the user's authentication status.

3.Footer:
The footer of the website includes a logo and the website name. It also contains contact information and links to follow the website on various social media platforms.

4.Home Page:
The home page of the application comprises a slider, a gallery section with scroll animations (utilizing AOS library), a category section where action figure toys are categorized. Each categorized action figure toy has a "View Details" button that allows authenticated users to view the detailed information of the toy. Additionally, there is a popular toys section and a banner section with scroll animations (using AOS library).

5.Add a Toy:
Authenticated users have the ability to add a new toy to the collection by accessing the "Add a Toy" feature.

6.My Toys:
Authenticated users can view a list of toys that they have added to their collection in the "My Toys" section. They cannot view toys added by other users. Within this section, users have the option to sort the toys by price (ascending or descending) using a dropdown button. Furthermore, users can update and delete the information of the toys they have added.

7.All Toys:
The "All Toys" section displays a tabular representation of all toys added by all users. A search option is available to filter the toys based on user-defined criteria. Additionally, users can choose a limit for the number of toys displayed, with a default value of 20.

8.CRUD Options and Sweet Alert:
The application incorporates Sweet Alert for a visually appealing user experience when performing Create, Read, Update, and Delete (CRUD) operations on the toys.

9.Blogs:
The "Blogs" section consists of a collection of questions and answers related to the topic of interest.

