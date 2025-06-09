
document.getElementById('startBtn').addEventListener('click', async () => {
  const startBtn = document.getElementById('startBtn');
  const downloadSpeed = document.getElementById('downloadSpeed');
  const uploadSpeed = document.getElementById('uploadSpeed');
  const statusMsg = document.getElementById('statusMessage');
  startBtn.style.display = 'none';
  statusMsg.textContent = 'Testing...';
  const download = await testSpeed('dl');
  downloadSpeed.textContent = `${download} Mbps`;
  const upload = await testSpeed('ul');
  uploadSpeed.textContent = `${upload} Mbps`;
  statusMsg.textContent = 'Test complete. Click restart to test again.';
  startBtn.style.display = 'flex';
});
async function testSpeed(type) {
  const url = type === 'dl' ? 'https://speed.cloudflare.com/__down?bytes=10000000' : 'https://speed.cloudflare.com/__up';
  const start = performance.now();
  const response = await fetch(url);
  const blob = await response.blob();
  const end = performance.now();
  const duration = (end - start) / 1000;
  const sizeMB = 10;
  return ((sizeMB * 8) / duration).toFixed(2);
}
