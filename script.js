// Select all anchor tags with the class "nav-link"
document.querySelectorAll('a.nav-link').forEach(anchor => {
    
    // Add a click event listener to each anchor tag
    anchor.addEventListener('click', function (e) {
        
        // Prevent the default behavior of anchor links (which jumps instantly)
        e.preventDefault();
        
        // Get the target section's ID by removing the '#' from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        
        // Scroll smoothly to the target section using the scrollIntoView method
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth' // Enables smooth scrolling animation
        });
    });
});