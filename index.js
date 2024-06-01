var wheather = prompt("hot , cold , rainy , cloudy ,windy");

if (wheather == "hot") {

         document.write("<div class='card mx-auto a' style='width: 18rem; '>" +
        "<img src='./Images/hot.webp' class='card-img-top e' alt='...'>" +
        "<div class='card-body'>" +
        " <h5 class='card-title'>" +"It's Really Hot" + "</h5>" +
        "<p class='card-text'> " + "Every one needs fan" + "</p>" +
        "</div>" +
        "</div>");
} else if (wheather == "cold") {
    document.write("<div class='card mx-auto a' style='width: 18rem; '>" +
        "<img src='./Images/cold.gif' class='card-img-top e' alt='...'>" +
        "<div class='card-body'>" +
        " <h5 class='card-title'>" + "Cold" + "</h5>" +
        "<p class='card-text'> " + "Every one needs fan" + "</p>" +
        "</div>" +
        "</div>");
} else if (wheather == "cloudy") {
    document.write("<div class='card mx-auto a' style='width: 18rem; '>" +
        "<img src='./Images/cloudy.gif' class='card-img-top e' alt='...'>" +
        "<div class='card-body'>" +
        " <h5 class='card-title'>" + "Cloudy" + "</h5>" +
        "<p class='card-text'> " + "Every one needs fan" + "</p>" +
        "</div>" +
        "</div>");
} else if (wheather == "rainy") {
    document.write("<div class='card mx-auto a' style='width: 18rem; '>" +
        "<img src='./Images/rainy.gif' class='card-img-top e' alt='...'>" +
        "<div class='card-body'>" +
        " <h5 class='card-title'>" + "Rainy" + "</h5>" +
        "<p class='card-text'> " + "Every one needs fan" + "</p>" +
        "</div>" +
        "</div>");
} else if (wheather == "windy") {
    document.write("<div class='card mx-auto a' style='width: 18rem; '>" +
        "<img src='./Images/windy.gif' class='card-img-top e' alt='...'>" +
        "<div class='card-body'>" +
        " <h5 class='card-title'>" + "Windy" + "</h5>" +
        "<p class='card-text'> " + "Every one needs fan" + "</p>" +
        "</div>" +
        "</div>");
}
else {
    document.write("<div class='card mx-auto a' style='width: 18rem; '>" +
    "<img src='./Images/not.gif' class='card-img-top e' alt='...'>" +
    "<div class='card-body'>" +
    " <h5 class='card-title'>" + "Unavailible" + "</h5>" +
    "<p class='card-text'> " + "Blaa Blaaa Blaaa" + "</p>" +
    "</div>" +
    "</div>");
}
