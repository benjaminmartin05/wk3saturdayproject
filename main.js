var book1 = {
    name: "",
    category: "",
    picture_url: "",
    price:'',
    highlights: [""],
};

var book2 = {
    name: "",
    category: "",
    picture_url: "",
    price:'',
    highlights: [""],
};
var album1 = {
    name: "",
    category: "",
    picture_url: "",
    price:'',
    highlights: [""],
};
var album2 = {
    name: "",
    category: "",
    picture_url: "",
    price:'',
    highlights: [""],
};

//$('#book1.name').text("The Grapes of Wrath");
//$('#book2.name').text("Brave New World");
//$('#album1.name').text("Thriller");
//$('#album2.name').text("Sgt Pepper's Lonely Hearts Club Band");

function add_to_page(item) {
    
    $('#content').append($('<div id=book1>').html($('<div class=name>').text(item.name)));
    
    
}

add_to_page("The Grapes of Wrath");