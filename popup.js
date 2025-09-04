document.getElementById('saveBtn').addEventListener('click', () => {
  const skipTime = parseInt(document.getElementById('skipTime').value);
  chrome.storage.sync.set({ skipTime: skipTime });
});
