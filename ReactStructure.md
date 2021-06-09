<h1>Basics</h1>
<h3>React makes the modularization of code easy by introducing the component structure. With our components separated in their own files. Now what we are supposed
to do is figure out how to access the code defined in one file within a different file. 
Well, this is pretty easy to do in React!</h3>

<h2>Node Modules</h2>
<h3>NPM is short for node package manager, an online directory that contains the various already registered open-source packages. 
NPM modules consume the various functions as a third-party package when installed into an app using the NPM command npm install. To run, we use npm start.
</h3>
<h2>Export/Import Module</h2>
<h3>Export like export default Home. Similarly, import like import React from 'react' are part of the ES6 modules system.
A module is a self contained unit that can expose assets to other modules using export, and acquire assets from other modules using import.
There can be multiple named exports in one module.
</h3>
<h2>CSS Modules</h2>
<h3>A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.
That's the very simple premise of CSS Modules: each React component gets its own CSS file, which is scoped to that file and component.
<h3>
  <h1>Project</h1>
  <h3>Well, the modules I used at every stage is explained here.<br><br>
 I have 3 modules:<br>
1) Home<br>
2) My Works<br>
3) Contact Me<br>
  </h2>
  <h2>My Walk-Through</h3>
  <h3> 1) Creating a Parent-app </h3>
<b> Our 3 modules are child modules that is bought together in the App.js file. Therefore, acting as a parent app.<br>
  
  ``` 
  import Home from './components/pages/Home';
  ```  
  
  So, the parent needs to know where it's children are. So, here the child modules are imported.<br>
   
  ```
  <li className='nav-item'>
       <Link to='/' className='nav-links' onClick={closeMobileMenu}>
           Home
       </Link>
  </li>
  ```
  
  Here, the parent knows that the child module has a particular name and link as well. <br>
 
  ```
  <Route path='/' exact component={Home} />
  ```
 
  Basically, here the parent knows that it's child module also has the route attached, so it automatically render the Routes.
  </b><br>
  <h3>2) Child Modules</h3>
<b>  Every child module has a .js file attached to it. This file has the source code and working of the respective module.<br>
  It also contains all the imports required for the smooth working of that module.<br>
  
  ```
  import React from 'react';
 import '../../App.css';
 import AboutMe from '../AboutMe';
 import HeroSection from '../HeroSection';
 import Footer from '../Footer';

 function Home() {
  return (
    <>
      <Intro />
      <AboutMe />
      <Footer />
    </>
  );
 }

export default Home;
```
  
This clearly contains the imports from the files its fetching content, attributes and working from.<br>
It returns value in-order of the sub-module Intro followed by AboutMe and Footer.
Finally, the Home module is exported which is again imported my the App.js module.<br>

<i>We break the stylling to a new .css file.This contains all the stylling attributes required for the following module.
  That is again connected by importing the respective .css file in the .js file. </i> <br>
  
  <h2>3) Adding a index.js file.</h2>
 Now we need to export all these modules. In the main folder, we create an index.js file.
 This links to the App.js directly and here we export the list of modules, that is required by parent module.
  </b><br>
  
  <h2><i> That's all with the outline structure of modules in the React website.</i><br><br>
    Happy Learning!</h2>
  
 
