/*This js file provides the resources(images that are displayed on the canvas) to the game
at each animation frame*/

/* Everything has been enclosed inside a function and then called directly in the js file 
itself*
*/
let resource=(function () {
    
    var resourceCache = {};
    // To store the images urls
    var readyCallbacks = [];
    // To store the callback functions when all the images are loaded
    

    /*
        This function takes an array or a single url of an image and checks if it is an
        array or a single image : if it is a array we use forEach loop to traverse and simultaneously give the individual url to the _load function otherwise it gives the single url directly to the _load function  
    */
    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {

            urlOrArr.forEach(function (url) {
                _load(url);
            });
        } else {

            _load(urlOrArr);
        }
    }

    /*
     This function fetches the url from the load function and stores them in the resourceCache array and if it exists in the resourceCache return the resourceCache url to the function load , else create an image variable and store the img in the variable from the resourceCache.    
    */
    function _load(url) {
        if (resourceCache[url]) {

            return resourceCache[url];
        } else {

            var img = new Image();
            img.onload = function () {

                resourceCache[url] = img;

                /*
                    This if condition checks if the resourceCache is ready and if it is ready then create a callback function to the current function 
                    and store in the readyCallbacks array.
                
                */
                if (isReady()) {
                    readyCallbacks.forEach(
                        function (func) 
                        { 
                            func(); 
                        });
                }
            };
            
            img.src = url;
        }
    }

    // Fetches the url of the image  from the motion.js file (rowImages array)  and then returns the image if present from the resourceCache object. 
    function get(url) {
        return resourceCache[url];
    }

    // Checks if all the resources are present in resourceCache to load on the screen.
    function isReady() {
        var ready = true;
        for (let k in resourceCache) {
            if ( !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    // When resources are ready then the onReady function creates an array of Callback functions for each onload function to continuously provide the resources and also calls the init function.

    function onReady(func) {
        readyCallbacks.push(func);
    }
    

    window.Resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})(this);
