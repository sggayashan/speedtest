
let s = new Speedtest(); // use real LibreSpeed JS backend
s.onupdate = data => {
    if (data.testState === 1) document.getElementById("downloadSpeed").innerText = data.dlStatus + " Mbps";
    if (data.testState === 3) document.getElementById("uploadSpeed").innerText = data.ulStatus + " Mbps";
};
document.getElementById("startBtn").onclick = () => s.start();
