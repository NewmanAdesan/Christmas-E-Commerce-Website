
PAGE ANALYSIS
    figuring out the colors, font-name, font-weights, font-sizes and sectioning of the page.


PAGE NAVIGATION
    navigation constitute of three main element, 
    the nav-logo, nav-menu & nav-toggle.
    the nav-toggle is for small screen. once clicked upon the nav-menu drops down showing links "home", "share", "decorations" & "accessory"


PAGE NAVIGATION - Navigation Link Hightlighting
    when a particular section of the page comes into view during scrolling,
    its corresponding navigation link hightlights by having a dotted element appear below it.


PAGE NAVIGATION - Back to Top Button
    a button is fixed to the bottom of the page 
    which triggers an automatic scroll back to the top of the page.
    this button appears when we scroll down past 600px and disappears otherwise.


PAGE SECTION 1 (home section) - for small screen
    this section uses a grid layout having a single column (default)
    with two items, "home-image" & "home-data"


PAGE SECTION 2 (share section) - for small screen
    this section is very similar to the home section.
    it uses a grid layout having a single column (default).
    it has two items, "share-data" & "share-image"


PAGE SECTION 3 (decoration section) - for small screen
    at this section is where using grid layout for responsive design truly shines.
    using the "auto-fit" grid property, we make the number of columns dynamic, 
    making it depend on the screen size.
    using the "auto-fit" grid property, we make the number of columns changes, depending on how many items can fit.
    this makes section highly responsive.


PAGE SECTION 3 (accessory section) - for small screen
    this section uses a grid layout having two columns,
    with each taking equal fraction of space. 
    it displays five accessories in a card-like structure.
    the card containers itself uses a 1-column grid layout.
    this enables flexible styling of its content;
    "accessory-image", "accessory-name", "accessory-category",
    "accessory-price" & "an heart icon"


PAGE SECTION 4 (send section) - for small screen
    similar to the home-section & share-section, it uses a 1-column grid layout.
    it constitute "send-content" & "send-image" containers.
    the send-content container constitue a title, description and a form container.
    the form container uses a flex layout with two flex item,
    an input element & a send button element  which lie side by side.


PAGE SECTION 6 (footer section) - for small screen
    this section contains 4 element "chrismast-gift", "our-service", "our-company" & "social"
    similar to the decoration section, this section uses a dynamic column grid layout 
    by using the auto-fit grid property. 
    the items in "our-service" & "our-company" are implemented using li elements.


PAGE LAYOUT FOR EXTRA-SMALL SCREENS - <359px
    for better design, for extra small screens,
    images on the page that have specific width are made to have a width of 100%


PAGE LAYOUT FOR MEDIUM SCREENS - >576px
    the 1-column grid layout of the home-section, share-section & send-section 
    transforms into a 2-column grid layout with each item occupying equal space of the container.
    also their images are made to have a width of 100%



PAGE LAYOUT FOR LARGE SCREENS - >768px
    the navigation menu is re-styled to be an horizontal list,
    the 2-column layout of the accessory section is changed to a 3-column layout,
    the home, share & send section are given additional padding.



PAGE LAYOUT FOR EXTRA-LARGE SCREENS - >968px
    images in the home, share & send section are made to have a width of 496px
    and the grid container of these section is made to have a wider gap.


PAGE DARK-LIGHT-THEME - 
    Seamlessly toggle between light and dark themes with a single button click. 
    Connect page element colors to CSS variables, enabling swift transformation of multiple elements at once. 
    Initially, the variables point to a default color, 
    but they dynamically switch to an alternative color based on the presence of a class name on the body element.



PAGE SCROLL REVEAL ANIMATION
    we added a simple drop-down animation to the home, accessory, decoration & footer section using the ScrollReveal library.









BACK-TO-TOP FUNCTIONALITY
the button is styled, fixed on the page & position at the bottom of the page.
when user have scrolled through some distance, it appears.
most importantly the button is kept in a link tag (<a/>) which references to the top of the page.





SCROLL HIGHLIGHTING FUNCTIONALITY

The Idea
    basically the functionality is about, when a particular section comes into view, the nav link corresponding to that section highlights.


The Theory
    depending on the way a page is laid out, each section of the page is position at a particular pixel from the top of the page.
    section-1 may be 0px, if section-1 total height is 300px, section-2 will be position at 301px.

    when scrolling, a particular section comes into view.
    for a section to come into view, the scroll bar must have travel vertically the exact pixel of the section position. and for the section to be anywhere in view, the scroll bar would be within the section position & the section height in terms of pixel

    the offsetHeight property gives us the total height of a section in pixels.
    the offsetTop property gives the position of a section in pixels
    the window.pageYOffset property gives how far in pixels the scroll bar has travelled.

    if the scroll bar has travelled & is within the offsetTop & offsetHeight of a particular section element, the nav link that correspond to that element would hight.

The Hightlight
    the scrollbar tells us the section that is active.
    then to the nav-link that corresponds to that section, 
    we add a class name "active-link"

    the class name adds to the nav-link element a before element which is smoothly styled as a dot.




# Back-to-Top Functionality

The back-to-top functionality enhances user experience by providing a convenient way to return to the top of the page. 

## Functionality

- **Styled Button:** The button is styled to ensure it stands out and is easy to identify.
- **Fixed Position:** The button maintains a fixed position at the bottom of the page, regardless of scrolling.
- **Visibility:** The button appears from the bottom of the page after the user has scrolled through a certain distance.
- **Link to Top:** The button is encapsulated in an `<a>` tag that serves as a hyperlink, referencing the top of the page.


## Implementation
initially, the button is positioned below the viewport via a class name "back__to__top"
```css
.back__to__top {
    ...
    position: fixed
    bottom: -20%;
    ...
}
```
once we have scrolled through a distance of 550px, we would add a class "show__back__to__top" to the button
```css
.show__back__to__top {
    bottom: 1rem;
}
```

```javascript
let BackToTopButton = document.getElementById("back-to-top");
window.addEventListener('scroll', ()=>{
    if (this.scrollY >= 550) BackToTopButton.classList.add("show__back__to__top");
    else BackToTopButton.classList.remove("show__back__to__top");
})
```