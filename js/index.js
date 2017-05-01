/**
 * Created by piyush0 on 02/05/17.
 */

const clientId = '5788687999';
const redirectUri = 'http://localhost';
const AUTHORIZATION_ENDPOINT = 'http://account.codingblocks.com/oauth/authorize';

$(function () {
    $('#signIn').click(function () {

        var authUrl = AUTHORIZATION_ENDPOINT +
            "?response_type=token" +
            "&client_id=" + clientId +
            "&redirect_uri=" + redirectUri;

       window.location = authUrl;
    })
});