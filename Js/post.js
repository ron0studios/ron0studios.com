
function closeNav() {
  document.documentElement.style.setProperty('--RIGHT_PANEL_WIDTH', '0px');
  document.documentElement.style.setProperty('--ROT_AMOUNT', '0deg');
}

function openNav() {
	document.documentElement.style.setProperty('--RIGHT_PANEL_WIDTH', '500px');
	document.documentElement.style.setProperty('--ROT_AMOUNT', '90deg');
}

function buttonclick() {
	if(getComputedStyle(document.documentElement).getPropertyValue('--RIGHT_PANEL_WIDTH') == '0px')
	{
		openNav();
	}
	else
	{
		closeNav();
	}
}

wpac_init = window.wpac_init || [];
wpac_init.push({widget: 'Comment', id: 22165});
(function() {
    if ('WIDGETPACK_LOADED' in window) return;
    WIDGETPACK_LOADED = true;
    var mc = document.createElement('script');
    mc.type = 'text/javascript';
    mc.async = true;
    mc.src = 'https://embed.widgetpack.com/widget.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
})();