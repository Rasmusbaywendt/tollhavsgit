function copyToClipboard() {
  var copyText = document.getElementById("content").value;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Kopieret til udklipsfolderen");
  });
}

function myFunction1() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
