var videos = [
    "wTu00FCLgPs",
    "SDNcJL90Y9A",
    "UNwGVgfkcgI",
    "dhzxQCTCI3E",
    "SvfhoWIPoVw",
    "7MFJ7ie_yGU",
];

var titles = [
    "Hark! The Herald Angels Sing",
    "Frosty The Snowman",
    "Silver Bells",
    "Chestnuts Roasting On An Open Fire",
    "White Christmas",
    "Baby It's Cold Outside",
    ]; 
        
window.onload = function () {
    var playerDiv = document.getElementById("random_player");
    var player = document.createElement("IFRAME");
    var index = Math.floor(Math.random() * videos.length);
    var videoUrl = 'http://www.youtube.com/embed/' + videos[index] + '?autoplay=1&iv_load_policy=3';
    player.setAttribute('width', '640');
    player.setAttribute('height', '390');
    player.setAttribute('src', videoUrl);
    player.setAttribute('id', 'video');
    playerDiv.appendChild(player);
  var titleDiv = document.getElementById("titles");
    titleDiv.innerHTML = '<p>' + titles[index] + '</p>';
        
};
