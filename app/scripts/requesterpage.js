document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

async function renderApp() {
  let _client = await app.initialized();
  window['client'] = _client;
  client.events.on('app.activated', renderSidebar);
  return;
}

function renderSidebar() {
  const dataMethBtn = document.querySelector('.btn-requester-page');
  dataMethBtn.addEventListener('fwClick', function getTktDetails() {
    /** ~ playground start of ticket details page ~ */
    /** ~  end ~ */
  });
}
