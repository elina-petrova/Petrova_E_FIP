
//Using AJAX to load the images on the main portfolio gallery
//make the request when you choose the project and load the image

//Using AJAX to load the images on indivial progect pages
//make the request when you scroll down


(() => {
    fetch('./data/projectsData.json')
        .then(res => res.json())
        .then(data => {
        console.log(data);

        //call the function here

        })
        .catch ((err) => {
            console.log(err);
         })
})();