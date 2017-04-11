var request = require('request');
const token = require('./token');


var GITHUB_USER = "";
var GITHUB_TOKEN = "";

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + 
repoOwner + '/' + repoName + '/contributors';


}
