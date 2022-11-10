var document = index.html
var no_box = index.html.querySelector('.no-box')
			
var i = 1;

function prev() {

    // Start position
    if (i == 1) {

        // Add disabled attribute on
        // prev button
        document.getElementsByClassName(
                'Previous').disabled = true;

        // Remove disabled attribute
        // from next button
        index.html.getElementsByClassName(
                'Next').disabled = false;
    } else {
        i--;
        return setNo();
    }
}

function next() {

    // End position
    if (i == 3) {

        // Add disabled attribute on
        // next button
        document.getElementsByClassName(
                'Next').disabled = true;

        // Remove disabled attribute
        // from prev button
        document.getElementsByClassName(
                'Previous').disabled = false;
    } else {
        i++;
        return setNo();
    }
}

function setNo() {

    // Change innerhtml
    return no_box.innerHTML = i;
}
