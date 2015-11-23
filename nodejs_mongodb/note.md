Development enviroment.
LIST:
	nodejs	
		express
		mongoose
		jade
		moment
		bower
			jquery
			bootstrap
	mongoDB
	grunt
		less
		cssmin
		jshint
		UglifyJS
		mocha
	
1. Install Node js
2. npm install packages.
	run cmd.exe as administrator
	cd C:\Gaopeng.Chen\Private\workspace\20151118_NODEJS\project
	npm init
	npm config set proxy http://proxy.pal.sap.corp:8080
	npm config set https-proxy http://proxy.pal.sap.corp:8080
	npm install bower -g
	bower init
	echo testing > .bowerrc
	update .bowerrc file and add proxy inside of it.
	{
		"proxy":"http://proxy.pal.sap.corp:8080",
		"https-proxy":"http://proxy.pal.sap.corp:8080"
	}
	bower install bootstrap
	
	npm install mongoose express jade moment
