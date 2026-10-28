document.addEventListener('DOMContentLoaded', function() {
  const apiKeyInput = document.getElementById('apiKey');
  const saveApiKeyButton = document.getElementById('saveApiKey');
  const saveStatus = document.getElementById('saveStatus');
  const reportBugButton = document.getElementById('reportBug');
  const goToGithubButton = document.getElementById('goToGithub');
  const feedbackButtonButton = document.getElementById('feedbackButton');

  // 讀取已設定的 DeepL API Key
  chrome.storage.sync.get(['deeplApiKey'], function(result) {
    if (result.deeplApiKey) {
      apiKeyInput.value = result.deeplApiKey;
    }
  });

  // 儲存 DeepL API Key
  saveApiKeyButton.addEventListener('click', function() {
    const key = apiKeyInput.value.trim();
    chrome.storage.sync.set({ deeplApiKey: key }, function() {
      saveStatus.textContent = '金鑰儲存成功！';
      setTimeout(() => {
        saveStatus.textContent = '';
      }, 2000);
    });
  });

  reportBugButton.addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://forms.gle/ygGLUG15bauKjpCXA' });
  });

  goToGithubButton.addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://github.com/WhitetapeOwO/Shift-One-Click-Translation' });
  });

  feedbackButtonButton.addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://forms.gle/gAwr1EcJfX1VuCA98' });
  });
});