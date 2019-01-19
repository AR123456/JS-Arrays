Props and components
Props are much like attributes in HTML , they are passing info to the tag so it knows what to render

<img src="dog.jpg" alt="dog">

props are the way to get data into a component.

props and state (state is the data's home and props is how it gets to where it needs to go )

props are like an object of data passed in

numbers or anything that is not a strine are passed in as curly brackets

<Header tagline="Making this dynamic " number={5} />

Then to pass use curlys and this and dot notation
this.props.tagline

   <h3 className="tagline">
        {/* making this dynamic  */}
          <span>{this.props.tagline}</span>
        </h3>
the "this" is the component instance,whatever got passed in when it was used. there could be many of them.
".props" is an object inside of the component it contains the propertys in this case tagline

this is how data gets into the application

in react dev tools ==$r  will show up on  the end of what you have just clicked.  If you then go to the console and type $r you can see a lot of info about the element

react runs ES lint, yellow warnings you can get past
