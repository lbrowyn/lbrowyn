function showHideBeta()
{
 var url = 'https://download2.interactivebrokers.com/installers/main.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'callback',
  success: function(r) {
   var data = r['hideBeta'] || '';
   if(data != '')
   {
    if(data == 'true')
    {
     $('li.twsBeta').hide();
    }
   }
  }
 });
}
function showHideIbgBeta()
{
 var url = 'https://download2.interactivebrokers.com/installers/ibgateway/main.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'ibgateway_callback',
  success: function(r) {
   var data = r['hideBeta'] || '';
   if(data != '')
   {
    if(data == 'true')
    {
     $('li.ibgBeta').hide();
    }
   }
  }
 });
}

function getStableIbgData()
{
 var info = 'N/A';
 var url = 'https://download2.interactivebrokers.com/installers/ibgateway/stable-standalone/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'ibgatewaystable_callback',
  success: function(r) {
   info = r["buildVersion"];
   $('span.stableIbgBuildVersion').text(info);
  }
 });
}
function getLatestIbgData()
{
 var info = 'N/A';
 var url = 'https://download2.interactivebrokers.com/installers/ibgateway/latest-standalone/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'ibgatewaylatest_callback',
  success: function(r) {
   info = r["buildVersion"];
   $('span.latestIbgBuildVersion').text(info);
  }
 });
}
function getStableTwsData()
{
 var info = 'N/A';
 var url = 'https://download2.interactivebrokers.com/installers/tws/stable/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'twsstableupdatable_callback',
  success: function(r) {
   info = r["buildVersion"];
   $('span.stableBuildVersion').text(info);
  }
 });
}
function getLatestTwsData()
{
 var info = 'N/A';
 var url = 'https://download2.interactivebrokers.com/installers/tws/latest/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'twslatestupdatable_callback',
  success: function(r) {
   info = r["buildVersion"];
   $('span.latestBuildVersion').text(info);
  }
 });
}
function getLatestStandaloneTwsData()
{
 var info = 'N/A';
 var url = 'https://download2.interactivebrokers.com/installers/tws/latest-standalone/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'twslatest_callback',
  success: function(r) {
   info = r["buildVersion"];
   $('span.latestStandaloneBuildVersion').text(info);
  }
 });
}
function getStableStandaloneTwsData()
{
 var info = 'N/A';
 var url = 'https://download2.interactivebrokers.com/installers/tws/stable-standalone/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'twsstable_callback',
  success: function(r) {
   info = r["buildVersion"];
   $('span.stableStandaloneBuildVersion').text(info);
  }
 });
}
function getLatestWBTwsData(wbid)
{
 var info = 'N/A';
 wbidl = wbid.toLowerCase();
 var url = 'https://download2.interactivebrokers.com/installers/'+wbidl+'/'+wbidl+'/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: wbidl+'_callback',
  success: function(r) {
   info = r["buildVersion"];
   $('span.'+wbid+'latestBuildVersion').text(info);
  }
 });
}
function getAlphaTwsData()
{
 var info = 'N/A';
 var url = 'https://download2.interactivebrokers.com/installers/tws/alpha/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'twsalphaupdatable_callback',
  success: function(r) {
   info = r["buildVersion"];
   if(info == 'none')
   {
    $('div#alpha-none').show();
   } else {
    $('span.alphaBuildVersion').text(info);
    $('div#alpha-vers').show();
   }
  }
 });
}
function getBetaTwsData()
{
 var info = 'N/A';
 var url = 'https://download2.interactivebrokers.com/installers/tws/beta/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'twsbetaupdatable_callback',
  success: function(r) {
   info = r["buildVersion"];
   $('span.betaBuildVersion').text(info);
  }
 });
}
function getNightlyTwsData()
{
 var info = 'N/A';
 var url = 'https://download2.interactivebrokers.com/installers/tws/nightly/version.json';
 $.ajax({
  url: url,
  dataType: 'jsonp',
  jsonpCallback: 'twsnightlyupdatable_callback',
  success: function(r) {
   info = r["buildVersion"];
   $('span.nightlyBuildVersion').text(info);
  }
 });
}
$(function() {
 getAlphaTwsData();
 getBetaTwsData();
 getLatestTwsData();
 getLatestStandaloneTwsData();
 getStableStandaloneTwsData()
 getStableTwsData();
});