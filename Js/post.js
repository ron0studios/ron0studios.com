
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

