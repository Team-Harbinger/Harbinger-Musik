(this["webpackJsonpharbinger-musik"]=this["webpackJsonpharbinger-musik"]||[]).push([[0],{15:function(e,a,t){e.exports={"flex-row-container":"Home_flex-row-container__2k-Je","flex-column-container":"Home_flex-column-container__27PKE",home:"Home_home__jdz0q","discover-genres":"Home_discover-genres__3SKW6","genre-list":"Home_genre-list__3fW-7",genre:"Home_genre__wEBTK","genre-image-description":"Home_genre-image-description__3Ue0r","genre-image":"Home_genre-image__3qGvj"}},17:function(e,a,t){e.exports={"navbar-items":"Navbar_navbar-items__70VGF","navbar-logo":"Navbar_navbar-logo__3wZXt","nav-menu":"Navbar_nav-menu__3tHHj","nav-links":"Navbar_nav-links__23WZe","nav-links-mobile":"Navbar_nav-links-mobile__w0ZRq","navbar-margin":"Navbar_navbar-margin__3PJkA"}},19:function(e,a,t){e.exports={About:"About_About__2TjXP","About-header":"About_About-header__Vyk-n","About-body":"About_About-body__1Q2x0","About-link":"About_About-link__1nXqG"}},2:function(e,a,t){e.exports={row:"Song_row__2xJnX",col:"Song_col__3TrkM","Song-details":"Song_Song-details__iucP5",image:"Song_image__1wEWy","song-info":"Song_song-info__1vPkZ","flex-row-container":"Song_flex-row-container__33GHZ","flex-row-item":"Song_flex-row-item__1SA3D","Song-album":"Song_Song-album__1I2wy","song-list":"Song_song-list__3P72T","song-name-row":"Song_song-name-row__3D5WR","song-name-col":"Song_song-name-col__2BPrN","song-page-track-name":"Song_song-page-track-name__3-5Ac","play-button":"Song_play-button__16lKD",song:"Song_song__3R4Qw"}},20:function(e,a,t){e.exports={"play-button-image":"AudioPlayer_play-button-image__IVv1n",rotate:"AudioPlayer_rotate__3AHwX",rotation:"AudioPlayer_rotation__3Dnf8"}},23:function(e,a,t){e.exports={"search-container":"Searchbar_search-container__Gcwf_","search-icon":"Searchbar_search-icon__sWxUU"}},3:function(e,a,t){e.exports={row:"Genre_row__1kXEt",column:"Genre_column__3B62k","flex-row-container":"Genre_flex-row-container__2igjd","genre-name":"Genre_genre-name__1PaQj","genre-header":"Genre_genre-header__31wcn","genre-details-container":"Genre_genre-details-container__2zloV","genre-details-items":"Genre_genre-details-items__1oQ4x","description-col":"Genre_description-col__3k_F4","image-col":"Genre_image-col__Y2aNo","genre-description":"Genre_genre-description__15nYB","Song-album":"Genre_Song-album__WefG8","song-list-container":"Genre_song-list-container__3d3yX",song:"Genre_song__3xjhM","song-image-container":"Genre_song-image-container__18XFf",overlay:"Genre_overlay__1Ecrr",image:"Genre_image__URkZh",icon:"Genre_icon__315Nf","song-name":"Genre_song-name__Ma0Kt","track-index":"Genre_track-index__18BNY","track-name-and-artist":"Genre_track-name-and-artist__MaTXx","link-to-track":"Genre_link-to-track__36e-y","artist-name":"Genre_artist-name__1tM5_"}},33:function(e,a,t){},34:function(e,a,t){e.exports={App:"App_App__21rgV","App-logo":"App_App-logo__36mcg","App-logo-spin":"App_App-logo-spin__3YADu","App-header":"App_App-header__1WOsS","App-link":"App_App-link__1oMV4"}},4:function(e,a,t){e.exports={"flex-column-container":"SearchPage_flex-column-container__3ePuK","flex-row-container":"SearchPage_flex-row-container__larsu","search-page":"SearchPage_search-page__3fJnf","top-matching-songs":"SearchPage_top-matching-songs__2kW7e","track-list":"SearchPage_track-list__2zZ5b",track:"SearchPage_track__3rHKz","track-image":"SearchPage_track-image__pfJGl","track-info-wrapper":"SearchPage_track-info-wrapper__18Ffs","track-info":"SearchPage_track-info__1Iz9P","track-order":"SearchPage_track-order__1LYik","track-name-and-artist":"SearchPage_track-name-and-artist___vsCe","link-to-track":"SearchPage_link-to-track__2Gn5A","track-name":"SearchPage_track-name__2BMTL","track-artist":"SearchPage_track-artist__3BjoL"}},42:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(27),s=t.n(r),o=(t(33),t(13)),i=(t(34),[{title:"Home",url:"/",cName:"nav-links"},{title:"About",url:"/about",cName:"nav-links"}]),l=t(17),g=t.n(l),u=t.p+"static/media/applogo.554586c0.svg",m=t(7),d=t(23),p=t.n(d),j=t.p+"static/media/searchicon.54a088fc.svg",h=t(0);var b=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),c=t[0],r=t[1];function s(a){void 0===a.key?(console.log("click"),""===c&&(console.log("nothing in searchbar, don't search"),a.preventDefault()),console.log("submit")):"Enter"===a.key&&""!==c&&(window.location.href=e.APP_BASENAME+"/search?query="+c+"&type=track")}return Object(h.jsxs)("div",{id:"".concat(p.a["search-container"]),children:[Object(h.jsx)("input",{type:"text",placeholder:"Search for a song",name:"search",onChange:function(e){r(e.target.value)},onKeyPress:s,value:c}),Object(h.jsx)("a",{href:e.APP_BASENAME+"/search?query="+c+"&type=track",onClick:s,children:Object(h.jsx)("button",{type:"submit",children:Object(h.jsx)("img",{src:j,id:"".concat(p.a["search-icon"]),alt:"search icon (click to search)"})})})]})},_=t(12);var f=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("nav",{className:g.a["navbar-items"],children:[Object(h.jsx)("ul",{className:g.a["nav-menu"],children:i.map((function(e,a){return Object(h.jsx)("li",{children:Object(h.jsx)(_.b,{to:e.url,className:g.a[e.cName],children:e.title})},a)}))}),Object(h.jsx)("img",{src:u,className:g.a["navbar-logo"],alt:"Harbinger Musik Logo",width:"70",height:"70"}),Object(h.jsx)(b,{APP_BASENAME:e.APP_BASENAME})]}),Object(h.jsx)("div",{className:g.a["navbar-margin"],children:"Margin"})]})},x=t(15),v=t.n(x),k={Pop:t.p+"static/media/napster-pop-image.c9784c02.jpg",Rock:t.p+"static/media/napster-rock-image.af4faa25.jpg",Alternative:t.p+"static/media/napster-alternative-image.c5b419a0.jpg",Blues:t.p+"static/media/napster-blues-image.a2e5e18a.jpg",Children:t.p+"static/media/napster-children-image.8ccb04fc.jpg","Christian/Gospel":t.p+"static/media/napster-christian-image.075622b1.jpg",Classical:t.p+"static/media/napster-classical-image.df8e57f1.jpg","Comedy/Spoken Word":t.p+"static/media/napster-comedy-image.00bfc75b.jpg",Country:t.p+"static/media/napster-country-image.9063a4b8.jpg",Electronic:t.p+"static/media/napster-electronic-image.68169a97.jpg",Folk:t.p+"static/media/napster-folk-image.98439986.jpg",Jazz:t.p+"static/media/napster-jazz-image.b4328145.jpg",Latin:t.p+"static/media/napster-latin-image.8e1fe868.jpg",Metal:t.p+"static/media/napster-metal-image.8bb577fd.jpg","New Age":t.p+"static/media/napster-new-age-image.5ac8360d.jpg",Oldies:t.p+"static/media/napster-oldies-image.2344922e.jpg","Rap/Hip-Hop":t.p+"static/media/napster-rap-image.41f14ce3.jpg",Reggae:t.p+"static/media/napster-reggae-image.01179a7b.jpg","Soul/R&B":t.p+"static/media/napster-rnb-image.276ce507.jpg",Soundtracks:t.p+"static/media/napster-soundtracks-image.80d92259.jpg","Vocal/Easy Listening":t.p+"static/media/napster-vocal-image.caf3aaf8.jpg",World:t.p+"static/media/napster-world-image.436193d7.jpg"},O=t(8),A=t.n(O),N=t(14);function S(){return(S=Object(N.a)(A.a.mark((function e(a){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.napster.com/v2.2/genres?apikey="+a);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){return S.apply(this,arguments)};var P=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),c=t[0],r=t[1];if(console.log(e.NAPSTER_API_KEY),console.log(e.APP_BASENAME),!c.length){var s=[];E(e.NAPSTER_API_KEY).then((function(e){e.genres.forEach((function(e){s.push({genreName:e.name,genreShortcutName:e.shortcut,genreID:e.id,genreImageSrc:k[e.name]})})),console.log(s),r(s)})).catch((function(e){console.log("Error: unable to fetch genre data")}))}var o=[];return c.forEach((function(e){o.push(Object(h.jsx)("div",{className:"".concat(v.a.genre),children:Object(h.jsxs)(_.b,{to:"/genre/"+e.genreShortcutName,children:[Object(h.jsx)("img",{src:e.genreImageSrc,alt:"Image Representing "+e.genreName,className:"".concat(v.a["genre-image"])}),Object(h.jsx)("span",{className:"".concat(v.a["genre-image-description"]),children:e.genreName})]})},e.genreName))})),Object(h.jsx)("div",{id:"".concat(v.a.home),children:Object(h.jsxs)("div",{id:"".concat(v.a["discover-genres"]),className:"".concat(v.a["flex-column-container"]),children:[Object(h.jsx)("h2",{children:"Discover Music"}),Object(h.jsx)("div",{id:"".concat(v.a["genre-list"]),className:"".concat(v.a["flex-row-container"]),children:o})]})})},w=t(19),y=t.n(w);var I=function(e){return Object(h.jsxs)("div",{className:"".concat(y.a.About),children:[Object(h.jsx)("header",{className:"".concat(y.a["About-header"]),children:Object(h.jsx)("p",{children:"About"})}),Object(h.jsxs)("div",{className:"".concat(y.a["About-body"]),children:["This product uses the NAPSTER PLATFORM but is not endorsed, certified, or otherwise approved by Napster \xae.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"We are a team of aspiring software engineers who are using this project to learn the frontend framework React. Harbinger Musik uses the Napster API to fetch and display data such as genres, playlists, song names, and playable song previews.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{className:"".concat(y.a["About-link"]),target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Team-Harbinger/Harbinger-Musik",children:"GitHub Link"})]})]})},D=t(4),R=t.n(D);function T(){return(T=Object(N.a)(A.a.mark((function e(a,t){var n,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.napster.com/v2.2/search?apikey=".concat(t,"&").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e,a){return T.apply(this,arguments)};var G=function(e){var a=Object(n.useState)({actualTrackData:[],isDataRetrieved:!1}),t=Object(m.a)(a,2),c=t[0],r=t[1];if(!c.isDataRetrieved){var s=e.location.search.split("?")[1],o=[];M(s,e.NAPSTER_API_KEY).then((function(e){console.log("track data: ",e.search.data.tracks);var a=1;e.search.data.tracks.forEach((function(e){o.push({trackImageSrc:"https://api.napster.com/imageserver/v2/albums/"+e.albumId+"/images/500x500.jpg",trackID:e.id,trackShortcut:e.shortcut,trackName:e.name,trackArtist:e.artistName,trackOrder:a}),a++})),console.log("final tracks data: ",o),r({actualTrackData:o,isDataRetrieved:!0})}))}var i=[];return c.isDataRetrieved&&c.actualTrackData.length&&c.actualTrackData.forEach((function(e){i.push(Object(h.jsxs)("div",{className:"".concat(R.a.track," ").concat(R.a["flex-row-container"]),children:[Object(h.jsx)("img",{src:e.trackImageSrc,alt:"Album cover of "+e.trackName,className:R.a["track-image"]}),Object(h.jsx)("div",{className:"".concat(R.a["track-info-wrapper"]," ").concat(R.a["flex-row-container"]),children:Object(h.jsxs)("div",{className:"".concat(R.a["track-info"]," ").concat(R.a["flex-row-container"]),children:[Object(h.jsx)("div",{className:"".concat(R.a["track-order"]),children:Object(h.jsx)("span",{children:"".concat(e.trackOrder+".")})}),Object(h.jsxs)("div",{className:"".concat(R.a["track-name-and-artist"]," ").concat(R.a["flex-column-container"]),children:[Object(h.jsx)(_.b,{to:"/song/"+e.trackShortcut,className:"".concat(R.a["link-to-track"]),children:Object(h.jsx)("span",{className:"".concat(R.a["track-name"]),children:e.trackName})}),Object(h.jsx)("span",{className:"".concat(R.a["track-artist"]),children:e.trackArtist})]})]})})]}))})),Object(h.jsx)("div",{id:R.a["search-page"],children:Object(h.jsx)("div",{className:R.a["flex-column-container"],children:c.isDataRetrieved?Object(h.jsxs)("div",{id:R.a["top-matching-songs"],className:R.a["flex-column-container"],children:[Object(h.jsx)("h2",{children:"Top Matching Songs"}),c.actualTrackData.length?Object(h.jsx)("div",{id:R.a["track-list"],className:R.a["flex-column-container"],children:i}):Object(h.jsx)("h3",{children:"No songs found!"})]}):Object(h.jsxs)("div",{id:R.a["top-matching-songs"],className:R.a["flex-column-container"],children:[Object(h.jsx)("h2",{children:"Top Matching Songs"}),Object(h.jsx)("span",{children:"Loading..."})]})})})},C=t(3),Y=t.n(C),B=t(20),L=t.n(B),H=t.p+"static/media/stop_button.5dfba6db.svg";var K=function(e){var a=Object(n.useState)(0),t=Object(m.a)(a,2),c=t[0],r=t[1],s=Object(n.useRef)();function o(e){switch(e){case 0:s.current.pause(),s.current.currentTime=0;break;case 2:s.current.play();break;default:console.log("Error: playbackAction took on an impossible value")}}Object(n.useEffect)((function(){s.current.onplaying=function(){r(2)},s.current.onended=function(){r(0)},s.current.onerror=function(){r(3)},3!==c&&0===e.audioPlayerStatus&&0!==c&&(r(0),o(0))}),[e.audioPlayerStatus]);var i=null;if(3!==c)switch(c){case 0:i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAObSURBVHhe7dxJbhQxFMbxzkwY0kECBXEExJoVXIEbcpvkBCy4AkKwCPMQhu+13xOVTqVT5bJdHr6f1DLuHfzruTohqa3lcvl3seb8/PwBlg9uRyn1BjEIs6V/pES2de2lsV66HaWwcUK6MC3PsZy5HcWycUK6EO5U40kYimTwhKzDxLzAcup2FIp3EIMwT7C8cTuaanIQgzAPsbx3O/IVLIjhR+VpggcxDOMnWhDDMONED2IYZphkQQzDbDb4C8NQ9AJ46na0LvmEdGFaTrC8czsSswYxPMb+yyKIYZjMgpiWw2QZxLQYJusgpqUwRQQxLYQpKoipOUyRQUyNYYoOYmoKk/xbJzHUcFGZKiakq/RpqS6IKTVMtUFMaWGqD2JKCdNMEJN7mOaCmFzDVPGx10euF2KzE9KV07Q0OyFdclHqhSn/HrPG4YT0wMTsYvntdmmlmpCfuhYBF+mFXqh77p10OCEDYGIOsCS5qBhkBITZx/LL7eLgTX0EXLwyJXfxinaUcUI8YVruYfmBV9CJYZCJNIxMTpB7DIMEgjBLLJ/x+rN6wxODBIYwx7K43XgMEgnCHGH55HbDMUhkCCOfyr643c34sTcyXPByX3mM1+HqjRtwQhLCtEgYub98Xb3Rg0FmgDCPsMjkXDnKeGTNAEPwFsszt7uMQebzWtdLGGQGOLLkP8F6H0PCe0hCGmIjBklgSAjDIBGNCWF4D4kAIU58YggGCUxDeD8MgUdWIL4TsY5BJgoVwjCIp9AhDIOMFCuEYZCBYocw/JQ1QKoYghOyQcoQhkF6zBHCMEjHnCEMg0AOIUzTN3WE2M4phmgyCCLsaIjsTofmgmiIST/uGVMzQXI8nvpUf1OXEFiK+TtWOyEIsacTUdQFV10QRNjXEBfunbJUc2RJCCxRf/8vheInBCEOdSKKjyGKDoIQO1i+u10dijyyNES2X0tMUdSEIMSuHk9VxhBFBEGE2xpiluePpJR1EES4oyG+uXfql+U9REJgufa3jGqW1YQgxLFORJMxRDZBEEKeH+L9+921mP3I0hBFfpsjhtmCMES/5EcWQiz1PsEYPZIG0RAf3Y76JDmyNAQNEDUIQ4wX5chCiAPG8BN0QiQElqIeCZubIEEYIpxJRxZCHOnRxBiBeAfREKOfmEabjT6yNARFMjgIQ6Rx45GFELcYI51rgyCC/XiNPL2ZErlyZEkILFX9aE1pXmmU+25L81ks/gEaG7ZQEmZpMAAAAABJRU5ErkJggg==";break;case 1:i=u;break;case 2:i=H;break;default:console.log("Error: audio player state took on an impossible value")}return Object(h.jsxs)("div",{children:[Object(h.jsx)("audio",{id:e.previewProp,ref:s,src:e.previewProp}),3!==c?Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{onClick:function(){return function(){switch(c){case 0:r(1),e.onClickHandler(e.previewProp),o(2);break;case 1:case 2:r(0),o(0);break;default:console.log("Error: audio player state took on an impossible value")}}()},src:i,alt:"Play Button",className:"".concat(1===c?L.a.rotate:""," ").concat(L.a["play-button-image"])}),Object(h.jsx)("div",{className:L.a.powered,children:"Powered by Napster"})]}):Object(h.jsx)("span",{children:"Sorry, this track is unavailable."})]})};function Q(e){var a=document.createElement("DIV");return a.innerHTML=e,a.textContent||a.innerText||""}var F=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),c=t[0],r=t[1],s=Object(n.useState)([]),o=Object(m.a)(s,2),i=o[0],l=o[1],g=Object(n.useState)(null),u=Object(m.a)(g,2),d=u[0],p=u[1];function j(e){p(e)}var b=e.location.pathname.split("/")[2],f=null;if(!c.length){var x={genreImageSrc:null,genreName:null,albumIds:null,genreDescription:null},v=[];fetch("https://api.napster.com/v2.2/genres/"+b+"?apikey="+e.NAPSTER_API_KEY).then((function(e){return console.log("Tracks API fetched success"),e.json()})).then((function(e){f=e.genres[0].id,x.genreName=e.genres[0].name,x.genreDescription=e.genres[0].description})).then((function(a){return x.genreImageSrc=k[x.genreName],r([x]),fetch("https://api.napster.com/v2.2/genres/"+f+"/tracks/top?apikey="+e.NAPSTER_API_KEY)})).then((function(e){return console.log("Top Tracks API fetched successfully :O"),e.json()})).then((function(e){var a=1;e.tracks.forEach((function(e){v.push({albumIds:e.albumId,songImageSrc:"https://api.napster.com/imageserver/v2/albums/"+e.albumId+"/images/500x500.jpg",songName:e.name,artistName:e.artistName,trackID:e.id,trackShortcut:e.shortcut,trackIndex:a,trackPreviewSrc:e.previewURL}),a++})),console.log("songlist: :",v),l(v)})).catch((function(e){console.log(e)}))}var O=[];c.forEach((function(e){O.push(Object(h.jsx)("h2",{className:"".concat(Y.a["genre-header"]),children:e.genreName}))}));var A=[];c.forEach((function(e){console.log("updated genre details"),A.push(Object(h.jsxs)("div",{className:"".concat(Y.a["genre-details-items"]," ").concat(Y.a.row),children:[Object(h.jsx)("img",{src:e.genreImageSrc,alt:"Image Representing "+e.genreName,className:"".concat(Y.a["image-col"]," ").concat(Y.a["description-col"])}),Object(h.jsx)("div",{className:"".concat(Y.a["genre-description"]," ").concat(Y.a["description-col"]),children:Object(h.jsx)("p",{children:Q(e.genreDescription)})})]}))}));var N=[];return i.forEach((function(e){console.log("updated song list"),N.push(Object(h.jsxs)("div",{className:"".concat(Y.a.song," ").concat(Y.a.row),children:[Object(h.jsx)("div",{className:"".concat(Y.a["song-image"]," ").concat(Y.a.column),children:Object(h.jsxs)("div",{className:"".concat(Y.a["song-image-container"]),children:[Object(h.jsx)("img",{src:e.songImageSrc,alt:"Image Representing "+e.songName,className:"".concat(Y.a.image," ").concat(Y.a.column)}),Object(h.jsx)("div",{className:"".concat(Y.a.overlay),children:Object(h.jsx)("div",{className:"".concat(Y.a.icon),children:Object(h.jsx)(K,{previewProp:e.trackPreviewSrc,onClickHandler:j,audioPlayerStatus:e.trackPreviewSrc===d?1:0})})})]})}),Object(h.jsxs)("div",{className:"".concat(Y.a["song-name"]," ").concat(Y.a.column),children:[Object(h.jsx)("div",{className:"".concat(Y.a["track-index"]),children:e.trackIndex+"."}),Object(h.jsxs)("div",{className:"".concat(Y.a["track-name-and-artist"]),children:[Object(h.jsx)(_.b,{to:"/song/"+e.trackShortcut,className:"".concat(Y.a["link-to-track"]),children:e.songName}),Object(h.jsx)("div",{className:"".concat(Y.a["artist-name"]),children:e.artistName})]})]})]}))})),Object(h.jsxs)("div",{className:"".concat(Y.a.Genre),children:[Object(h.jsx)("div",{className:"".concat(Y.a["genre-name"]," ").concat(Y.a.row),children:O}),Object(h.jsx)("div",{className:"".concat(Y.a["genre-details-container"]," ").concat(Y.a["flex-row-item"]),children:A}),Object(h.jsxs)("div",{className:"".concat(Y.a["Song-album"]),children:[Object(h.jsx)("h2",{children:"Top Songs"}),Object(h.jsx)("div",{className:"".concat(Y.a["song-list-container"]),children:N})]})]})},U=t(2),J=t.n(U),X=t.p+"static/media/song-details-album-image-placeholder.b8fd6f41.gif";function V(e,a){return Z.apply(this,arguments)}function Z(){return(Z=Object(N.a)(A.a.mark((function e(a,t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.napster.com/v2.2/tracks/".concat(a,"?apikey=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,a){return W.apply(this,arguments)}function W(){return(W=Object(N.a)(A.a.mark((function e(a,t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.napster.com/v2.2/albums/".concat(a,"?apikey=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return $.apply(this,arguments)}function $(){return($=Object(N.a)(A.a.mark((function e(a){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=function(e){var a=Object(n.useState)({actualSongDetailsData:[],isSongDetailsDataRetrieved:!1}),t=Object(m.a)(a,2),c=t[0],r=t[1],s=Object(n.useState)({actualSongListData:[],isSongListDataRetrieved:!1}),o=Object(m.a)(s,2),i=o[0],l=o[1],g=Object(n.useState)(null),u=Object(m.a)(g,2),d=u[0],p=u[1];function j(e){p(e)}var b=e.location.pathname.slice(6,e.location.pathname.length),_={songImageSrc:null,songName:null,artistName:null,released:null,label:null,tracks:null};function f(e){return x.apply(this,arguments)}function x(){return(x=Object(N.a)(A.a.mark((function a(t){var n;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,V(t,e.NAPSTER_API_KEY).then((function(a){return _.songName=a.tracks[0].name,_.artistName=a.tracks[0].artistName,z(a.tracks[0].albumId,e.NAPSTER_API_KEY)})).then((function(a){_.released=new Date(a.albums[0].released).toDateString(),_.label=a.albums[0].label,_.tracks=a.albums[0].links.tracks.href+"?apikey="+e.NAPSTER_API_KEY,n=a.albums[0].links.images.href+"?apikey="+e.NAPSTER_API_KEY}));case 2:return a.abrupt("return",q(n));case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}if(!c.isSongDetailsDataRetrieved){var v=[];f(b).then((function(e){return console.log(e),_.songImageSrc=e.images[0].url,r({actualSongDetailsData:[_],isSongDetailsDataRetrieved:!0}),q(_.tracks)})).then((function(e){console.log(e),e.tracks.forEach((function(e){v.push({trackName:e.name,trackIndex:e.index,trackPreviewSrc:e.previewURL,trackShortcut:e.shortcut})})),l({actualSongListData:v,isSongListDataRetrieved:!0})})).catch((function(e){console.log(e)}))}var k=[];c.isSongDetailsDataRetrieved&&c.actualSongDetailsData.length&&c.actualSongDetailsData.forEach((function(e){k.push(Object(h.jsxs)("div",{className:"".concat(J.a["Song-details"]," ").concat(J.a.row),children:[Object(h.jsx)("img",{src:e.songImageSrc,alt:"Image Representing "+e.songName,className:"".concat(J.a.image," ").concat(J.a.col)}),Object(h.jsxs)("div",{className:"".concat(J.a["song-info"]," ").concat(J.a.col),children:[Object(h.jsx)("p",{children:"SONG"}),Object(h.jsx)("p",{children:e.songName}),Object(h.jsx)("p",{children:e.artistName}),Object(h.jsxs)("p",{children:["Released: ",e.released]}),Object(h.jsxs)("p",{children:["Label: ",e.label]})]})]}))}));var O=[];return i.isSongListDataRetrieved&&i.actualSongListData.length&&i.actualSongListData.forEach((function(e){O.push(Object(h.jsxs)("div",{className:"".concat(J.a.song," ").concat(J.a.row),children:[Object(h.jsx)("div",{className:"".concat(J.a["play-button"]," ").concat(J.a.col),onClick:function(){return a=e.trackShortcut,console.log("updateSongDetails("+a+")"),void f(a).then((function(e){_.songImageSrc=e.images[0].url,r({actualSongDetailsData:[_],isSongDetailsDataRetrieved:!0})})).catch((function(e){console.log("updateSongDetails() error: "),console.log(e)}));var a},children:Object(h.jsx)(K,{previewProp:e.trackPreviewSrc,onClickHandler:j,audioPlayerStatus:e.trackPreviewSrc===d?1:0})}),Object(h.jsxs)("div",{className:"".concat(J.a["song-name-row"]," ").concat(J.a.col),children:[Object(h.jsx)("span",{className:J.a["song-name-col"],children:e.trackIndex+"."}),Object(h.jsx)("span",{className:"".concat(J.a["song-name-col"]," ").concat(J.a["song-page-track-name"]),children:e.trackName})]})]}))})),Object(h.jsxs)("div",{className:J.a.Song,children:[c.isSongDetailsDataRetrieved?k:Object(h.jsxs)("div",{className:"".concat(J.a["Song-details"]," ").concat(J.a.row),children:[Object(h.jsx)("img",{src:X,alt:"Loading",className:"".concat(J.a.image," ").concat(J.a.col)}),Object(h.jsxs)("div",{className:"".concat(J.a["song-info"]," ").concat(J.a.col),children:[Object(h.jsx)("h2",{children:"Song Details"}),Object(h.jsx)("span",{children:"Loading..."})]})]}),Object(h.jsxs)("div",{className:J.a["Song-album"],children:[Object(h.jsx)("h2",{className:J.a["album-header"],children:"Songs"}),Object(h.jsxs)("div",{className:"".concat(J.a["song-list-container"]," ").concat(J.a["flex-row-container"]),children:[Object(h.jsx)("div",{className:J.a["flex-row-item"]}),Object(h.jsx)("div",{className:"".concat(J.a["song-list"]," ").concat(J.a["flex-row-item"]),children:i.isSongListDataRetrieved?O:Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"Loading..."})})}),Object(h.jsx)("div",{className:J.a["flex-row-item"]})]})]})]})},ae=t(5);var te=function(){var e="/Harbinger-Musik",a="NWM4ZmY2NmItY2Q2ZS00YmE2LTlkZTMtYzQxMTdhOTIyYTFm";return Object(h.jsxs)(_.a,{basename:"/Harbinger-Musik",children:[Object(h.jsx)(f,{APP_BASENAME:e,NAPSTER_API_KEY:a}),Object(h.jsxs)(ae.c,{children:[Object(h.jsx)(ae.a,{path:"/",exact:!0,render:function(t){return Object(h.jsx)(P,Object(o.a)(Object(o.a)({},t),{},{APP_BASENAME:e,NAPSTER_API_KEY:a}))}}),Object(h.jsx)(ae.a,{path:"/about",render:function(t){return Object(h.jsx)(I,Object(o.a)(Object(o.a)({},t),{},{APP_BASENAME:e,NAPSTER_API_KEY:a}))}}),Object(h.jsx)(ae.a,{path:"/search",render:function(t){return Object(h.jsx)(G,Object(o.a)(Object(o.a)({},t),{},{APP_BASENAME:e,NAPSTER_API_KEY:a}))}}),Object(h.jsx)(ae.a,{path:"/genre",render:function(t){return Object(h.jsx)(F,Object(o.a)(Object(o.a)({},t),{},{APP_BASENAME:e,NAPSTER_API_KEY:a}))}}),Object(h.jsx)(ae.a,{path:"/song",render:function(t){return Object(h.jsx)(ee,Object(o.a)(Object(o.a)({},t),{},{APP_BASENAME:e,NAPSTER_API_KEY:a}))}})]})]})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(te,{})}),document.getElementById("root")),ne()}},[[42,1,2]]]);
//# sourceMappingURL=main.4130cef5.chunk.js.map