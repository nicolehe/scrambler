console.log("helloooo world");


// shuffle
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// get all image urls
var imageUrls = [];
$('img').each(function() {
    image = $(this)[0].src;
    imageUrls.push(image);
});

// replace each image url with a random one from the page
$('img').each(function() {
    randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    $(this)[0].src = randomImage;
});

// shuffle text
$('p, h1, h2, h3, li').each(function() {
    var text = $(this).text().trim();
    if (text !== "") {
        var splitted = text.split(" ");
        var shuffled = shuffle(splitted).join(" ");
        $(this).text(shuffled);
    }
});
