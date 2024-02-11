document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("urlInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("searchButton").click();
        }
    });

    document.getElementById("searchButton").onclick = function (event) {
        event.preventDefault();

        let url = document.getElementById("urlInput").value;
        let searchUrl = "https://duckduckgo.com/?q=";

        if (!url.includes(".")) {
            url = searchUrl + encodeURIComponent(url);
        } else {
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
        }

        var win = window.open();
        var encUrl = `${__uv$config.prefix}${__uv$config.encodeUrl(url)}`;
        var iframe = win.document.createElement("iframe");
        iframe.style.position = "absolute";
        iframe.style.left = "0";
        iframe.style.top = "0";
        iframe.style.width = "100vw";
        iframe.style.height = "100vh";
        iframe.style.border = "none";
        iframe.style.margin = "0";
        iframe.style.padding = "0";
        iframe.src = encUrl;
        win.document.body.appendChild(iframe);
        win.document.body.style.overflow = "hidden";
    };
});
