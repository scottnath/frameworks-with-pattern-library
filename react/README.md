Using [Pattern Library](http://github.com/pattern-library/pattern-library) html patterns with ReactJS
---

ReactJS doesn't use external templates for HTML, but instead integrates the HTML into the code along with the javascript. Therefore conversion needs to happen, instead of direct inclusion.

## Converting HTML templates to be used with ReactJS

We can use [Wix's React Templates](https://github.com/wix/react-templates) to convert our patterns, but some changes will have to happen first

1. Double curly braces to single curly braces
  * PL templates generally follow twig/angularjs standards and use double-curly braces
  * The Wix conversion needs single curly braces
  * [show.rt](show.rt) is a copy of PL's [show template](https://github.com/pattern-library/pattern-library/blob/master/patterns/components/show/show.html) with single curly braces
2. Convert HTML file into a React js file
	* I like [gulp](http://gulpjs.org) so I used [Wix's Gulp React Templates](https://github.com/wix/gulp-react-templates)
	* They've got [other helpers](https://github.com/wix/react-templates#usage): grunt, broccoli, etc
	
	```
	var gulp = require('gulp');
	var rt = require('gulp-react-templates');

	gulp.task('rt', function() {
	  gulp.src('./templates/show.rt') // the single-curly braces version
	    .pipe(rt({modules: 'none'}))
	    .pipe(gulp.dest('./templates'));
	});
	```

	* the above gulp task converts the show.rt HTML into `./templates/show.rt.js`, which uses React's createElement function

3. Convert YAML data to JSON
	* React needs our data to be a normal object, so I converted the pattern.yml data to a json object
4. Render the template
	* see [index.html](index.html) for a working file. This is the relevant code:
	
	```
	<!-- React JS -->
  <script src="https://fb.me/react-with-addons-0.13.3.js"></script>
	<!-- Converted Pattern File -->
  <script src="templates/show.rt.js"></script>
	<!-- Pattern Data -->
  <script src="pattern.data.js"></script>
  <script type="text/javascript">
    var showArticle = React.createClass({displayName: 'CommentBox',
      render: showRT
    });
    React.render(
      React.createElement(showArticle, null),
      document.getElementById('container')
    );
  </script>
  ```