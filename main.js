/*


//$('#book1.name').text("The Grapes of Wrath");
//$('#book2.name').text("Brave New World");
//$('#album1.name').text("Thriller");
//$('#album2.name').text("Sgt Pepper's Lonely Hearts Club Band");

function add_to_page(item_name, item_price, item_category, item_image, item_highlights) {
    
        $('<div id=book1>').html($('<div class=name>').text(item_name)));
        $('#content').append($('<div id=book1>').html($('<div class=price>').text(item_price)));
        $('#content').append($('<div id=book1>').html($('<div class=category>').text(item_category)));
        $('#content').append($('<div id=book1>').html($('<div class=picture>').text(item_image)));
        $('#content').append($('<div id=book1>').html($('<div class=highlights>').text(item_highlights)));
};

//for (var i = 0; i < myArray.length; i++){
    //return add_to_page(myArray[i].name, myArray[i].price, myArray[i].category, myArray[i].picture_url, myArray[i].highlights);
//}

add_to_page(book1.name, book1.price, book1.category, book1.picture_url, book1.highlights);
add_to_page(book2.name, book2.price, book2.category, book2.picture_url, book2.highlights);
add_to_page(album1.name, album1.price, album1.category, album1.picture_url, album1.highlights);
add_to_page(album2.name, album2.price, album2.category, album2.picture_url, album2.highlights);

*/
var book1 = {
    name: "The Grapes of Wrath",
    category: "historical fiction",
    picture_url: 'http://ia.media-imdb.com/images/M/MV5BMzgzNjcxNjg2M15BMl5BanBnXkFtZTcwMjQxNDQ3Mg@@._V1_SX640_SY720_.jpg',
    price: 19.99,
    highlights: ["Won Pulitzer Prize in 1939"]
};

var book2 = {
    name: "Brave New World",
    category: "Dystopian fiction",
    picture_url: "http://www.huxley.net/huxley2.jpg",
    price: 20.00,
    highlights: ["Aldous Huxley wrote it."]
};

var album1 = {
    name: "Thriller",
    category: "whatever MJ does",
    picture_url: "https://upload.wikimedia.org/wikipedia/en/5/50/Michael_Jackson's_Thriller_title_card.jpg",
    price:9.99,
    highlights: ["Best selling album of all time"],
};

var album2 = {
    name: "Sgt Pepper",
    category: "Beatles",
    picture_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRvfM-V_td8uVNtwgZMGm5JEJEYTbD3f2yoPj0gSk5jFFn8aZb7",
    price:7.99,
    highlights: ["good album"]
};

var myArray = [book1, book2, album1, album2];


function add_to_page(item_name, item_price, item_category, item_image, item_highlights) {
    
        $('#content').append($('<div id=book1>').html($('<div class=name>').text(item_name)));
        $('#content').append($('<div id=book1>').html($('<div class=price>').text(item_price)));
        $('#content').append($('<div id=book1>').html($('<div class=category>').text(item_category)));
        $('#content').append($('<div id=book1>').html($('<img class=picture>').attr('src', 'item_image')));
        //attempting to get our images to showcase, changed from div to  img and text to attr
        $('#content').append($('<div id=book1>').html($('<div class=highlights>').text(item_highlights)));
};

for (var i = 0; i < myArray.length; i++){
    add_to_page(myArray[i].name, myArray[i].price, myArray[i].category, myArray[i].picture_url, myArray[i].highlights);
}





