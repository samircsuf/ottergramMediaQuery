var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    var thisLink = links[i];

    thisLink.addEventListener('click', function(event) {
        event.preventDefault();
    });
}
