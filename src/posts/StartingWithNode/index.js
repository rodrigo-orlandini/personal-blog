import React from "react";
import Gist from "react-gist";

import './styles.css';
import "../../styles/typography.css";
import "../../styles/global.css";

import FilterOption from "../../components/FilterOption";

import settings from "./settings";

import InsomniaGETRequestImage from "./images/insomnia-get-request.png";
import InsomniaPOSTRequestImage from "./images/insomnia-post-request.png";
import InsomniaPUTRequestImage from "./images/insomnia-put-request.png";
import InsomniaDELETERequestImage from "./images/insomnia-delete-request.png";

const Introducing = () => {		
    return (
        <>
            <div className="contentHeader">
                <div className="contentInfo">
                    <h2 className="generalTitle">{settings.title}</h2>
                    <p className="regular">{settings.date}</p>
                </div>

                <div className="contentTag">
                    <FilterOption 
                        isReadOnly={false}
                        text={settings.tag}
                    />
                    
                    <p>{settings.readingTime} minutes reading</p>
                </div>
            </div>

            <div className="content">
                <p className="regular">
                    &emsp;
                    NodeJS is a popular programming language created in 2009 and since then it has growing a lot. This language
                    can be used for different purposes in software development. Here, we will use it to build RESTful APIs.
                    To help us with our development experience, we will also use Express, a simple and powerful Framework for
                    NodeJS.
                </p>

                <p className="regular">
                    &emsp;
                    Assuming you already have NodeJS, a REST client installed (I'm using Insomnia) and you know 
                    what an API is, let's install Express and BodyParser as dependencies (BodyParser is a middleware responsible
                    to retrieving data from the incoming request bodies).
                </p>

                <p className="regular">
                    &emsp;
                    For that, you need to run the command below in your terminal:
                </p>

                <pre>
                    <code>
                        <span>npm install express body-parser --save</span>
                    </code>
                </pre>

                <p className="regular">
                    &emsp;
                    Now, it's all right to start our CRUD API.<br/>

                    &emsp;
                    CRUD are the four basic operations used in a database (Create, Read, Update and Delete) and based on that,
                    we will able to approach different HTTP methods in our API, however, we are going to use a local hard coded 
                    data to simulate a database.<br/>

                    &emsp;
                    Then create a new file called <i> users.js</i> and paste the content below:
                </p>

                <Gist id="c00242ef23b2d05b29af2818e10254ed"/>
                
                <p className="regular">
                    &emsp;
                    Let's starting our code by creating a file called <i>app.js</i>. Here will be our entire application. 
                    In real projects that are used in production, we only use this file as an entry point to the API.

                    First, we need to create a server using Express. I opted to choose the port 8081 to run the server, but as long as
                    you don't use a busy port, you can use any. To identify in terminal when our server is running, we'll also 
                    implement a simple callback with a message.
                </p>     

                <Gist id="7d83db06bbac61a9234a9b4c1f613c53"/>

                <p className="regular">
                    &emsp;
                    Okay, let's create our first route! Let's start with the Read functionality of a CRUD by creating a 
                    route with the GET method. Here, we just need to retrieve the users data and send the complete list in response 
                    to the request.<br/>

                    &emsp;
                    To create a GET route we need to use <i>app.get(route, callback)</i>, where our route will be <b>"/"</b> and callback a
                    function to manipulate our data. The same applies to another methods, just changing the <i>"get"</i> to the method 
                    that will be used.<br/>

                    &emsp; 
                    Finally, to return a response, Express provides us with <i>res.send()</i> and <i>res.status()</i> (to handle status code).
                </p>

                <Gist id="8a9e54f06b2e45540932077d221f2f85"/>

                <p className="regular">
                    &emsp;
                    Now, to test our first route, we should start our server locally and use our REST client to make a request on 
                    <b> http://localhost:8081</b>.
                </p>

                <p className="regular">
                    &emsp;
                    To run server, enter the command below in terminal:
                </p>

                <pre>
                    <code>
                        node app.js
                    </code>
                </pre>

                <img src={InsomniaGETRequestImage} alt="Insomnia GET request" className="singleTestImage"/>

                <p className="regular">
                    &emsp;
                    Everything is right with our reading method.<br/>

                    &emsp;
                    Before creating POST (Create functionality of CRUD), we need to configure the BodyParser in the project. 
                    To setup BodyParser as a middleware to get the data sent in the request in a JSON, Express give us <i>app.use()</i>.
                </p>

                <p className="regular">
                    &emsp;
                    With this tool added to the project, let's create our POST route.<br/>

                    &emsp;
                    Now the request will require a username and password as parameters, which must be sent in a JSON body. To retrieve
                    this data we can use <i>req.body</i>.<br/> 
                    
                    &emsp;
                    Furthermore, our API must also verify that the parameters were sent in the request before adding the new user to 
                    the data array. Otherwise, we need to return an error message with status code 400 (Bad Request).<br/>
                    
                    &emsp;
                    Checking this, we are free to register the new user and return a success message with status code 200 (Created).
                </p>
                    
                <Gist id="5c9055c20875562d365978208a77c2c3"/>
                
                <p className="regular">
                    &emsp;
                    <b>
                        I'll finish all the routes before testing, but you can open your REST client, stop reading for a while
                        and check it out.
                    </b>
                </p>

                <p className="regular">
                    &emsp;
                    Now, to create the CRUD Delete and Update functionality, we will need one more route. This route will be 
                    <b>"/:username"</b>, where username is a parameter that we will use to identify which user we should
                    update or remove.
                </p>

                <p className="regular">
                    &emsp;
                    So let's create the Delete functionality. <br/>

                    &emsp;
                    In this DELETE request we will use <i>req.params</i> to find the parameters that were sent via URL. The first
                    step is to check whether the user exists or not. Next, we need to remove the user from the users array.
                </p>

                <Gist id="294cbe3d2bb5747e5da97ffdb7c5e560"/>

                <p className="regular">
                    &emsp;
                    And finally, let's create our Update functionality in the same Delete route.<br/>

                    &emsp;
                    For that we need a PUT request. We will also use the username sent in the URL and another parameter sent via JSON,
                    called <i>newUsername</i>. <br/>

                    &emsp;
                    Here, we will check if the parameters were sent and that the user exists before trying to update his username.
                    When both claims are checked, we should find and update the username in the users array.
                </p>

                <Gist id="5fecc97e50c0187903da6aadec9a231b"/>

                <p className="regular">
                    &emsp;
                    Now, let's test all routes with a REST client, this ensure that our API is working properly.
                </p>

                <p className="regular">
                    &emsp;
                    It's <b>very</b> important to also check your API for errors.
                    <b>It must return "okay ✅" when everything is okay and return "bad ❌" when something goes wrong!</b>
                </p>

                <div className="testsImages">
                    <img src={InsomniaPOSTRequestImage} alt="Insomnia POST request"/>
                    <img src={InsomniaPUTRequestImage} alt="Insomnia PUT request"/>
                    <img src={InsomniaDELETERequestImage} alt="Insomnia DELETE request"/>
                </div>

                <p className="regular">
                    &emsp;
                    Our simple CRUD API is done!<br/>

                    &emsp;
                    If you want to check this code, you can go to my Github and see the

                    <a href="https://github.com/rodrigo-orlandini/simple-crud-express" target="_blank"> Simple CRUD Express repository</a>.
                </p>
                
                <p className="regular">
                    &emsp;
                    I hope this post has been rewarding and useful for you. <br/>

                    &emsp;
                    See you in the next post! 🙏
                </p>

            </div>
        </>
    );
}

export default Introducing;