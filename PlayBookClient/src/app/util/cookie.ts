export function setCookie(name: string, value: string, expiresInDays: number) {
  let d = new Date();
  d.setTime(d.getTime() + (expiresInDays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  console.log("set");
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export function getCookie (name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) == 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
  return "";
}


