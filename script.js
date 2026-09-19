/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId) {

    /* Get all pages */
    const pages = document.querySelectorAll(".page");


    /* Hide all pages */
    pages.forEach(function(page) {

        page.classList.remove("active-page");

    });


    /* Show selected page */
    const selectedPage = document.getElementById(pageId);


    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    /* Get all navigation buttons */
    const navButtons = document.querySelectorAll(".nav-button");


    /* Remove active status */
    navButtons.forEach(function(button) {

        button.classList.remove("active");

    });


    /* Add active status to selected navigation button */
    const selectedNav =
        document.getElementById(pageId + "-nav");


    if (selectedNav) {

        selectedNav.classList.add("active");

    }


    /* Scroll to top */
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}