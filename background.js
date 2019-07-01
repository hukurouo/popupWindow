// コンテキストメニューに追加する
chrome.contextMenus.create({
  title: "ポップアウトさせる", 
  id: "popout", 
  contexts: ["all"], 
  onclick: () => {
    // 現在開いているタブのURLを変数 tab に格納する
    chrome.tabs.getSelected(tab => {
      // 現タブを閉じて、
      chrome.tabs.remove(tab.id);
      // 新たにポップアップウィンドウでURLを開く
      chrome.windows.create({
        url: tab.url,
        type: 'popup',
        // Youtubeで丁度よく窓化できるサイズ
        width: 650, height: 450,
        focused: true
      });
    });
  }
});