/**
 * Created by piyush0 on 02/05/17.
 */

const clientId = '2387465280';
const redirectUri = 'https://piyush0.github.io/Implicit-oneauth-sample';
const AUTHORIZATION_ENDPOINT = 'http://account.codingblocks.com/oauth/authorize';
const RESOURCE_ENDPOINT = 'https://account.codingblocks.com/api/users/me'

$(function () {
    $('#signIn').click(function () {

        let extractToken = function (hash) {
            let match = hash.match(/access_token=([\w-]+)/);
            return !!match && match[1];
        };
        let token = extractToken(document.location.hash);

        if (token) {
            $.ajax({
                url: RESOURCE_ENDPOINT
                , beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', "Bearer " + token);
                    xhr.setRequestHeader('Accept', "application/json");
                }
                , success: function (response) {
                    console.log(response);
                }
            });
        }
        else {

            let authUrl = AUTHORIZATION_ENDPOINT +
                "?response_type=token" +
                "&client_id=" + clientId +
                "&redirect_uri=" + redirectUri;

            window.location = authUrl;
        }

    })
});