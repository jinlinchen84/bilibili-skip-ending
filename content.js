function monitorVideo() {
  const video = document.querySelector('video');
  if (!video) return;

  chrome.storage.sync.get('skipTime', (data) => {
    const skipTime = data.skipTime || 30; // 默认跳过30秒
    video.addEventListener('timeupdate', () => {
      if (video.duration - video.currentTime <= skipTime) {
        video.currentTime = video.duration; // 自动跳到视频结尾
      }
    });
  });
}

setInterval(monitorVideo, 2000); // 定期检查有没有视频元素
