const select = () => {
    /* Write queries for each of the following */

    //geet elements by id
    document.getElementsById("one");

    document.getElementByLastName("className");

    document.getElementByTagName("span");

    document.querySelector("*")

    //select all matching elements using cs selectors
    document.querySelectorALL("*")


    /* Section 1 */
    // 1. Get all seeded fruit elements
    const seeded = document.getElementsByClass("seed");
    conssole.log(seeded);
    seeded[0].innerText = "apple uses this"

    // 2. Get all seedless fruit elements
    const firstSeedless = document.querySelector(".seedless");
    console.log(firstSeedless)

    // 3. Get first seedless fruit element


    /* Section 2 */
    // 4. Get inner span with text "you"
    const youSpan = Document.querySelector("span");
    const idTwo = document.getElementsById("two");
    const twoChildren = idTwo.children;
    const wrapper = twoChildren[1];
    console.loog(wrapper)

    // 5. Get all children of element "wrapper"
    // Your code here

    // 6. Get all odd number list items in the list
    // Your code here

    // 7. Get all even number list items in the list
    // Your code here

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

    // 9. Get "Amazon" list element
    // Your code here

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
}

window.onload = select;
