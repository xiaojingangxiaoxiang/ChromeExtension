let color = '#f2adad';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onInstalled.addListener((_reason) => {
  chrome.tabs.create({
    url: 'https://space.bilibili.com/703007996?spm_id_from=333.337.0.0'
  });
});
