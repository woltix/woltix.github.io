---
title: Website Integration
nav_order: 2
---
# Website Integration

Pageclip provides an HTTPS endpoint that will accept form data for each site and form. After you  
 have created a site in Pageclip, it will show you the code to place on your website.  

**Step 1:** You place a script tag before the </body> tag. This script provides the Pageclip global. By  
 default this script will look for all form.pageclip-form elements on the page, and wrap them.

![Website Integration]( /assets/images/web-integration-img.svg)

**Step 2:** Next, you add the stylesheet to the <head>. It provides a loading spinner on the submit button  
 and a 'thank you' message shown to the user after they have submitted the form. Feel free  
  to override it with your own styling.

## What data is saved?  
Returns a JSON object with the form name, data type of data, and an Array of Items. At this time,  
 GET returns all items in a form.  
 
1. formName (optional); when formName is omitted, it will retrieve items from the default  
 form.
 
2. Query parameters (optional)  
* dataType - csv or json (default)
* archived - true or false. When false, it will return only unarchived items; when true,  
 it will return archived items. By default it will return all items.  
 
3. formName (optional); when formName is omitted, it will retrieve items from the default  
 form.  
 
4. Query parameters (optional)  
dataType - csv or json (default)

Next, you add the stylesheet to the <head>. It provides a loading spinner on the submit button and  
 a 'thank you' message shown to the user after they have submitted the form. Feel free to override  
  it with your own styling.

## Special fields  

Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias distinctio ducimus est sed.  
 At autem consectetur corporis eum, minima nostrum recusandae? Adipisci alias assumenda commodi, ducimus ea modi  
  nobis nulla officiis quasi quos recusandae sapiente sequi similique veniam voluptas.

## Bare minimum integration  

Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias distinctio ducimus est sed.  
 At autem consectetur corporis eum, minima nostrum recusandae? Adipisci alias assumenda commodi, ducimus ea modi  
  nobis nulla officiis quasi quos recusandae sapiente sequi similique veniam voluptas.  
  
## Using the loading spinner  

Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias distinctio ducimus est sed.  
 At autem consectetur corporis eum, minima nostrum recusandae? Adipisci alias assumenda commodi, ducimus ea modi  
  nobis nulla officiis quasi quos recusandae sapiente sequi similique veniam voluptas.

## Form Validation  

Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias distinctio ducimus est sed.  
 At autem consectetur corporis eum, minima nostrum recusandae? Adipisci alias assumenda commodi, ducimus ea modi  
  nobis nulla officiis quasi quos recusandae sapiente sequi similique veniam voluptas.

## Saving data to a specific form  

Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias distinctio ducimus est sed.  
 At autem consectetur corporis eum, minima nostrum recusandae? Adipisci alias assumenda commodi, ducimus ea modi  
  nobis nulla officiis quasi quos recusandae sapiente sequi similique veniam voluptas.

## Advanced integration (pageclip.js)  

Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias distinctio ducimus est sed.  
 At autem consectetur corporis eum, minima nostrum recusandae? Adipisci alias assumenda commodi, ducimus ea modi  
  nobis nulla officiis quasi quos recusandae sapiente sequi similique veniam voluptas.

