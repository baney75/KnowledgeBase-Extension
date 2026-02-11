// Offscreen document for MV3 clipboard operations (service workers can't access the Clipboard API).
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (!request || request.action !== 'copyToClipboard') return false;
  const text = typeof request.text === 'string' ? request.text : '';
  (async () => {
    if (!text) {
      sendResponse({ success: false, error: 'Missing text.' });
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      sendResponse({ success: true });
    } catch (error) {
      sendResponse({ success: false, error: (error && error.message) || 'Clipboard write failed.' });
    }
  })();
  return true;
});
