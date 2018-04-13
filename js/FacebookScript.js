// Load the SDK Asynchronously
(function (d) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

// Init the SDK upon load
window.fbAsyncInit = function () {
    FB.init({
        appId: '1420280761574575', // App ID
        channelUrl: '//' + window.location.hostname + '/channel', // Path to your Channel File
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true  // parse XFBML
    });

    // listen for and handle auth.statusChange events
    FB.Event.subscribe('auth.statusChange', function (response) {
        if (response.authResponse) {
            // user has auth'd your app and is logged into Facebook
            FB.api('/me', function (me) {
                if (me.name) {
                    document.getElementById('auth-displayname').innerHTML = me.name;
                    updateUserInfo(response);
                }
            })
            document.getElementById('auth-loggedout').style.display = 'none';
            document.getElementById('auth-loggedin').style.display = 'block';
        } else {
            // user has not auth'd your app, or is not logged into Facebook
            document.getElementById('auth-loggedout').style.display = 'block';
            document.getElementById('auth-loggedin').style.display = 'none';
        }
    });
    $("#auth-loginlink").click(function () {
        FB.login(function () {
            getUserFriends();
        }, {redirect_uri: 'brideprice.com.ng', scope: 'user_friends, friends_photos, read_friendlists'});
    });
    $("#auth-logoutlink").click(function () {
        FB.logout(function () {
            window.location = "#forfriend"
        });
    });
}

//function updateUserInfo(response) {
//    FB.api('/me', function (response) {
//        document.getElementById('user-info').innerHTML = '<img src="https://graph.facebook.com/%27%20+%20response.id%20+%20%27/picture">' + response.name;
//    });
//}

function getUserFriends() {
    FB.api('/v2.0/me/taggable_friends', function (response) {
        console.log('Got friends: ', response);

        if (!response.error) {
            $('#categorieslist').empty();
            var markup = '';

            var friends = response.data;
            friends = friends.sort(function(a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            //for (var i = 0; i < friends.length && i < 25; i++) {
			for (var i = 0; i < friends.length && i < 500; i++) {
                var friend = friends[i];
                //thumnail :  friend['picture']['data']['url']
                //name: friend.name

                markup += '<li class="friend-list"> <a href="#pagetwo" id="'+ friend.id +'"> <img src="'+ friend['picture']['data']['url'] +'" class="ui-li-icon">' + friend.name+ '</a> </li>';
            }
            $("#categorieslist").html(markup);
            $("#categorieslist").listview("refresh");
            //document.getElementById('user-friends').innerHTML = markup;
        }
    });
}