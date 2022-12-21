var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic dHNhZGQwbTQ2ZDh2Y25ob3AwcHd5aTllcG1zcG0zcXZoMmw5cjBobTFsOWQ1a28zOW4=");
myHeaders.append("Cookie", "JSESSIONID=7928DCE812354D907797D71CF7FC75B4.worker1; _KAPTURECRM_SESSION=\"\"");

var formdata = new FormData();

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://nykaa.kapturecrm.com/get-all-faq-categories.html", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));