import React from "react";

function Header() {
    return (
        <div>

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=1890, maximum-scale=1.0" />
            <link rel="shortcut icon" type="image/png" href="https://animaproject.s3.amazonaws.com/home/favicon.png" />
            <meta name="og:type" content="website" />
            <meta name="twitter:card" content="photo" />

            <script id="s_turbo" src="https://animaapp.s3.amazonaws.com/static/turbo.es2017-umd.js"></script>
            <script id="anima-overrides-script" src="overrides.js"></script>
            <script src="https://animaapp.s3.amazonaws.com/js/timeline.js"></script>

            <script id="anime-js-script" src="https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js"
                integrity="sha256-98Q574VkbV+PkxXCKSgL6jVq9mrVbS7uCdA+vt0sLS8=" crossorigin="anonymous"></script>
            <script id="imgloaded-js-script" src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>

        </div>
    )
}

export default Header;