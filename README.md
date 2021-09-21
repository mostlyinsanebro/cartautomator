# cartautomator

Technologies and tools used - 
This project has been created using javaScript, node.js and puppeteer-node mdule. Editor used - vs code.


What id does -
It automates the process of searching and adding the items that user wants in his amazon cart.Also, only the best items will be added to the user's cart.
The user just have to tell the script what he wants to search for in the command line of vs code.


Concepts used-
Promises have been used everywhere in this project in order to do automation.
Asevery function in puppeteer is a promise


Working Summary-

We will take the user input for what he wants to search in amazon.in in the command line of vs code and store it in a variable.
Then we will run the command in vs code

1.First the browser is opened using puppeteer.launch

2.Then a new tab will be opened in the browser using newPage() function.

3.Then google will be searched using goto() function.

4.Then we will type amazon in google search bar using type() function.

5.Then press enter and click on the first link that appears on the screen using waitForSelector() and click() functions.

6.Now amazon will be opened and type in the amazon search bar for the keyword that we took as input in the cli.

7.The page will go to the all-items page of that search item. From there click on the "4 stars or up" selector using click.

8.It will show only the top choices on the screen then.

9.Now click on n items and add them to cart using waitForSelector and click functions and also by making the using of functions() for storing redundant code.

10. Now click on cart and you will see that all n itemms have been added to the cart.

-This was the summary in brief of what this project does.
