/*
    2016 - Ajay Ramesh
    ajayramesh@berkeley.edu
    ajayramesh.com

    Do whatever you want with it, happy hacking :)
*/


// Build stop words Map

// Store #doc1, #doc2, and #compare-btn as objects

const compButton = {
    showPercentage: function(p) {
        // Disable the button and show the percentage P

    },
    showCompare: function() {
        // Enable the button and show the word "Compare" 
    }
}

// Detect a change in either document and re-enable the button
// 

doc1.onkeyup = compButton.showCompare;
doc2.onkeyup = compButton.showCompare;
compBtn.onclick = compare;

function compare() {

    // Clean the contents of doc1 and doc2

    // Construct the word vectors for cleaned documents

    // Get the cosine of the angle between the vectors

    // Show the similarity on the button

}