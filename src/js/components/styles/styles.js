class StylesUI {

 createstyles(){
  const style = document.createElement('style');
  style.id="main-style-ui"
  console.log(app.logo.srclogomini, "logominin")
  style.innerHTML = `
    .navbar{
      background-color: ${app.theme.headerBackground};
    }
    body{
      background-color: ${app.theme.headerBackground};
    }
    .nav-tabs {
      background-color: ${app.theme.headerBackground};
    }
    .panel-default > .panel-heading {
      background-color: ${app.theme.menuBackground} !important;
      ${app.theme.textMenuStyle}
    }
    .featureInfo h4{
      border-bottom:3px solid ${app.theme.menuBackground};
      margin:2em;
    }
    .featuresGroup {
      border-bottom: 2px solid ${app.theme.menuBackground};
    }
    .individualFeature {
      border-bottom: 1px dashed ${app.theme.menuBackground};
    }
    .nav-tabs > li.active > a {
      background-color: ${app.theme.activeLayer} !important;
    }
    .active {
      background-color: ${app.theme.activeLayer} !important;
    }
    .featureInfo h4 {
    border-bottom: 3px solid ${app.theme.menuBackground};
    }
   .featuresGroup {
    border-bottom: 2px solid ${app.theme.menuBackground};
    }
    .individualFeature {
    border-bottom: 1px dashed ${app.theme.menuBackground};
    }
    .active-layers-counter {
      background: ${app.theme.activeLayer} !important;
    }
    .panel-default > .panel-heading {
      color:${app.theme.textMenu};
    }
    .item-group-short-desc a {
      color:${app.theme.textLegendMenu};
      ${app.theme.textLegendMenuStyle}
    }
    .navbar-toggle .icon-bar {
      border: 1px solid ${app.theme.iconBar};
    }
    #sidebar-container{
      background-color:${app.theme.menuBackground};
    }
    @media (max-width: 768px) {
      #top-left-logo {
        background-repeat: no-repeat;
        background-image: url("${app.logo.srcLogoMini}");
        background-size: ${app.logo.miniHeight} ${app.logo.miniWidth};
        background-position: left 1px center;
        width: 70%;
        ${app.logo.ministyle}
      }
    }
    @media (min-width: 769px) {
      #top-left-logo {
        background-repeat: no-repeat;
        background-image: url("${app.logo.src}");
        background-size: ${app.logo.height} ${app.logo.width};
        background-position: left 1px center;
        ${app.logo.style}
      }

    }
    `;

  document.head.appendChild(style);
 }
}
