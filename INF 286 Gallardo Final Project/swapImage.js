const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    const caption = $("#caption"); // add caption
    const mainImage = $("#main_image"); // add main image

    // get all the <a> tags
    const imageLinks = $("#softball-images").querySelectorAll("a");

    // processing all links
    for(let link of imageLinks){

        // 1. preload the image
        const image = new Image();
        image.src = link.href;

        // 2. attach the event handler
        link.addEventListener("click", evt => {
            // 3. update the caption and image
            mainImage.src = link.href;
            mainImage.alt = link.title;
            caption.textContent = link.title;

            // 4. cancel event default action
            evt.preventDefault();
        });
    }

    // set the focus
    imageLinks[0].focus();
});