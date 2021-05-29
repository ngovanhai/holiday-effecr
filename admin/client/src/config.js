let Nameshop;
if (document.location.ancestorOrigins[0]) {
    Nameshop = document.location.ancestorOrigins[0].split("https://").join("");
}

export const rootlink = "http://apps.omegatheme.com/";
export const shop = Nameshop;
const date = new Date();
export const version = date.getTime();


const getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined
                ? true
                : decodeURIComponent(sParameterName[1]);
        }
    }
};

const getUrlParameterJson = function getUrlParameterJson() {
    var search = window.location.search.substring(1);
    if (search !== "") {
        var urlParams = JSON.parse(
            '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
            function (key, value) {
                return key === "" ? value : decodeURIComponent(value);
            }
        );
        localStorage.setItem("platform", urlParams.platform);
        localStorage.setItem("payload", urlParams.payload);
        localStorage.setItem("website_name", urlParams.website_name);
        localStorage.setItem("url_params", urlParams.urlParams);

        return JSON.stringify(urlParams);
    }
};


export const config = {
    shop: getUrlParameter("shop"),
    urlParams: getUrlParameterJson(),
    pathName: "",
    appName: "Holiday Effects",
    liveAppUrl: "https://apps.shopify.com/holiday-effects-by-omega",
};