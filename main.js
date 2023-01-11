const divElement = document.getElementById("video-test");

const script = document.createElement("script");
script.setAttribute("type", "application/ld+json");
script.textContent = `{
  "name": "RiPanel_shop_en",
  "description": "en",
  "thumbnailUrl": "https://asset-out-cdn.video-cdn.net/public/videos/DE2XELasswcndSx5XfTYzH/thumbnails/active?quality=1080p&cache-buster=befe9c&file-name=1130543.3000.1080p.JPEG",
  "uploadDate": "2022-05-03T10:04:21.789Z",
  "contentUrl": "https://vod.video-cdn.net/C9uqM6HVCPTnmpvPPZQpD3/DE2XELasswcndSx5XfTYzH.aaa,2356,1656,3656,596,828,.mp4.csmil/master.m3u8?set-cc-attribute=cc&hdnea=exp=1671620606~acl=/C9uqM6HVCPTnmpvPPZQpD3/DE2XELasswcndSx5XfTYzH.aaa,2356,1656,3656,596,828,.mp4.csmil/*~hmac=bb0f946d0325a0f1441f340097ecf1f65525f001af3bb5260b2bc2545516fd05",
  "duration": "PT2M25.48S",
  "@context": "https://schema.org",
  "@type": "VideoObject"
}`;
document.head.appendChild(script);

divElement.appendChild(script);
