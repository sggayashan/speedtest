
// Simplified real test script using XHR to LibreSpeed public server
function startTest() {
  document.getElementById("download").textContent = "Download: Testing...";
  document.getElementById("upload").textContent = "Upload: Testing...";
  document.getElementById("ping").textContent = "Ping: Testing...";

  let downloadStart = new Date().getTime();
  fetch(settings.download_Url + "?r=" + Math.random())
    .then(response => response.blob())
    .then(() => {
      let downloadEnd = new Date().getTime();
      let duration = (downloadEnd - downloadStart) / 1000;
      let bitsLoaded = 10 * 1024 * 1024 * 8; // simulate 10MB
      let speedBps = bitsLoaded / duration;
      let speedMbps = (speedBps / 1024 / 1024).toFixed(2);
      document.getElementById("download").textContent = "Download: " + speedMbps + " Mbps";
    });

  let uploadStart = new Date().getTime();
  fetch(settings.upload_Url + "?r=" + Math.random(), {
    method: "POST",
    body: new Blob([new ArrayBuffer(2 * 1024 * 1024)])
  })
    .then(() => {
      let uploadEnd = new Date().getTime();
      let duration = (uploadEnd - uploadStart) / 1000;
      let bitsSent = 2 * 1024 * 1024 * 8;
      let speedBps = bitsSent / duration;
      let speedMbps = (speedBps / 1024 / 1024).toFixed(2);
      document.getElementById("upload").textContent = "Upload: " + speedMbps + " Mbps";
    });

  let pingStart = new Date().getTime();
  fetch(settings.ping_Url + "?r=" + Math.random())
    .then(() => {
      let pingEnd = new Date().getTime();
      let latency = pingEnd - pingStart;
      document.getElementById("ping").textContent = "Ping: " + latency + " ms";
    });
}
