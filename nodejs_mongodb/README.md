# Reference
- imooc: 
    - http://www.imooc.com/learn/75
    - http://www.imooc.com/learn/348
- source code:
    - http://www.imlwj.com/blog/?p=55
- demo code: 
    - https://github.com/fafrifa/movie_demo


# Development enviroment.
- nodejs	
    - express
    - mongoose
    - jade
    - moment
    - node-inspector
    - bower
        - jquery
        - bootstrap
- mongoDB
- grunt
    - less
    - cssmin
    - jshint
    - UglifyJS
    - mocha
	

# Steps
- Install Node js
- npm install packages.
	- run cmd.exe as administrator
	- cd C:\Gaopeng.Chen\Private\workspace\20151118_NODEJS\project
	- npm init
	- npm config set proxy http://proxy.pal.sap.corp:8080
	- npm config set https-proxy http://proxy.pal.sap.corp:8080
	- npm install bower -g
	- bower init
	- echo testing > .bowerrc
	- update .bowerrc file and add proxy inside of it.

    ```
	{
		"proxy":"http://proxy.pal.sap.corp:8080",
		"https-proxy":"http://proxy.pal.sap.corp:8080"
	}
    ``` 

	- bower install bootstrap
	- npm install mongoose express jade moment
- [Install Mongo on windows](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)
- `mongo --port 3000` to start mongo operation
- Install node-inspector by npm install node-inspector
    - Require .net framework 2.0 and python
    - Start Running by debug mode: **node-debug app.js**







Following is the sample
----

# (GitHub-Flavored) Markdown Editor

Basic useful feature list:

 * Ctrl+S / Cmd+S to save the file
 * Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML
 * Drag and drop a file into here to load it
 * File contents are saved in the URL so you can share files


I'm no good at writing sample / filler text, so go write something yourself.

Look, a list!

 * foo
 * bar
 * baz

And here's some code! :+1:

```javascript
$(function(){
  $('div').html('I am a div.');
});
```

This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.


Props to Mr. Doob and his [code editor](http://mrdoob.com/projects/code-editor/), from which
the inspiration to this, and some handy implementation hints, came.

### Stuff used to make this:

 * [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown parsing
 * [CodeMirror](http://codemirror.net/) for the awesome syntax-highlighted editor
 * [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for syntax highlighting in output code blocks
 * [js-deflate](https://github.com/dankogai/js-deflate) for gzipping of data to make it fit in URLs



