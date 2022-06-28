function createXHR(method, url) 
{
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr)
  {
     xhr.open(method, url, true);
     xhr.withCredentials = true;
  }
  else if (typeof XDomainRequest != "undefined") 
  {
     xhr = XDomainRequest();
     xhr.open(method, url);
  }
  else {
      xhr = null;
  }
  return xhr;
}

if (document.ready != 'loading')
{
  createRequest();
}
else if (document.addEventListener)
{
  document.addEventListener('DOMContentLoader', createRequest);
} 
else {
  console.log('Browser not supported');
}
function createRequest()
{
 if (_getCookie('_ib_tag') == null)
 {
   if (typeof(ibdmn) == "undefined"){ ibdmn = "interactivebrokers.com"; }
   //console.log(' IBG Domain ' + ibdmn);
   let dmn = document.getElementById('_ib_tag') && document.getElementById('_ib_tag').src.match('(\\?|\\&)?wbst=([A-Z]{2,3})')[2];
   let request = createXHR("get", "https://www."+ibdmn+"/mkt/ibgtag.php?wid="+_getCookie('web')+'&dm='+dmn);
   if (request)
   {
     request.onload = function()
     {
       //console.log(' Request Loaded');
       var j = JSON.parse(request.responseText);
       console.log(' Processed'); 
       if (j.status == 1)
       {
         console.log(' Success ');
         if (j.s_wid)
         {
           console.log(' Setting'); 
           _setCookie('web',j.s_wid, j.s_exp);
           if (typeof(Storage) !== 'undefined')
           {
             localStorage.setItem('web', j.s_wid);
           }
         }
         _setCookie('_ib_tag',1, 84600);
         if (j.s_tag && j.s_tag == 1)
         {
           //console.log("Loading FB Tag");
            _insertFBTag(); // Load one for now
         }
       }
       else {
         console.log(j.status);
       } 
     };
     request.send();
   }
 }
}
function _getCookie(name)
{
  let m = document.cookie && document.cookie.match(';?'+name+'=([^\;]+);?');
  return m != null ? m[1] : null;                  
}
function _setCookie(name, value, exp)
{
  let e = new Date(); e.setMilliseconds(e.getMilliseconds() + exp);
  document.cookie = name+'='+encodeURIComponent(value)+';expires='+e.toGMTString()+';path=/;domain='+location.hostname.replace(/.+\.([^\.]{4,})(\.[a-z]{2,3})(\.?[a-z]{0,2})?$/, "$1$2$3")+'; secure';
}
function _insertFBTag()
{
<!-- Facebook Pixel Code -->
 !function(f,b,e,v,n,t,s)
 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 n.queue=[];t=b.createElement(e);t.async=!0;
 t.src=v;s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '917285591680749');
 fbq('track', 'CompleteRegistration');
<!-- End Facebook Pixel Code -->
}