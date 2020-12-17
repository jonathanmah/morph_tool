# morph tool

### Web Server Configuration
Configuration for the web server is located at /etc/nginx/site-enabled/ngvsmap on the VM.
Currently hosted on port 8085.

### Main Files
Most of the files in this project directory are required modules for running js9. The two files that create the morphtool contents are **js9.html** and **main.css**.

Some more information on using JS9 can be found here: https://js9.si.edu/js9/help/webpage.html and https://js9.si.edu/js9/help/publicapi.html

### Current Progress

Currently users are able to search for a galaxy and select buttons to create a classification code. A valid galaxy that was searched for will display it's corresponding measured properties. Additionally the JS9 API has been set up which allows FITS/JPG files to be displayed in the panels. Currently a sample galaxy is being loaded into the displays from the project directory.

### TO DO
Two issues exist currently with retrieving the galaxy images from VOSpace due to a cross origin resource sharing error. There was an attempt to bypass this error by writing a node proxy server located on the virtual machine located ~/www/voproxy/server.js but it doesn't work. If I got the GET requests working for the FITS files on VOSpace I was trying to read each reponse body into a file in a temporary directory on the VM and then load them into each JS9 display from this directory and clear the directory once a user switches galaxies or logs off.

Another existing issue is submitting the classification code to the cadc-tap datatable. There are authentication errors when sending POST request to the cfht.ngvsMorph table. I'm pretty sure this has to do with cadc-tap permissions set on table/schema but I haven't been able to get it working. 
