//script.js
// $(document).ready(function() {
//  $('#fullpage').fullpage();
// });

$(document).ready(function() {
 $('#fullpage').fullpage({
    verticalCentered: false,
    anchors: ['top', '1st', '2nd', 'last'],
    menu: '#global-menu',
    scrollOverflow : true,
});
});