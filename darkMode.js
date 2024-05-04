const Add_Custom_Style = css => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = css;
    document.head.appendChild(styleElement);
};

const site = window.location.hostname;



const styles = `
:root {
    --background: rgba(24, 25, 26);
    --card: rgba(36, 37, 38);
    --second-card: rgba(58, 59, 60);
    --hover: rgba(90, 91, 92);
    --primary: rgba(228, 230, 235);
    --secundary: rgba(176, 179, 184);
    --disabled: rgba(255, 255, 255, 0.5);
    --round-radius: 5px;
    --scroll-height: 6px;
    --brand-color: 80, 140, 200;
    --border: 1px solid rgba(255, 255, 255, .12);
    --readme: 255, 205, 58;
    --explore: 203, 55, 56;
    --button-transparent: rgba(255, 255, 255, 0);
    --dependencies: 168, 67, 191;
    --dependencies-secundary: #3B1E3A;
    --dependents: 67, 191, 84;
    --dependents-secundary: rgba(67, 191, 84, .2);
    --versions: 67, 139, 191;
    --def-tag: #d15959;
    --string: #d7ba7d;
    --attribute: #ce9178
}
*,
body,
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box!important;
    background-color: var(--background)!important;
    color-scheme: dark!important;
    color: var(--secundary)
}
#___gatsby,
#skip-nav > div.Box-nv15kw-0.layout___StyledBox3-sc-1qhwq3g-5.embKIi.cdcKmh *,
._1066d9e7,
._38ce9a85[aria-selected=true] span,
._38ce9a85[aria-selected=true] svg,
._38ce9a85[aria-selected=true] svg > path,
._4a3f8f21 svg,
._75ce47e7 header,
._8055e658:hover,
.black,
.c37751f6 svg,
.markdown .highlight pre span,
h2 span,
header ._705cdf4f,
header ._79c95847,
header a,
li:hover #package-tab-dependencies,
li:hover #package-tab-dependencies span,
li:hover #package-tab-dependencies svg,
li:hover #package-tab-dependents span,
li:hover #package-tab-dependents svg,
li:hover #package-tab-explore span,
li:hover #package-tab-explore svg,
li:hover #package-tab-readme,
li:hover #package-tab-readme span,
li:hover #package-tab-readme svg,
li:hover #package-tab-versions span,
li:hover #package-tab-versions svg,
li > a[role=menuitem],
main#main section *,
strong {
    background-color: transparent!important
}
.hover-black:focus,
.hover-black:hover,
.white {
    color: var(--primary) !important;
}
._0b9b6c57 a,
._0edb515f,
._390acbc5,
._425fdea4,
._425fdea4:focus,
._4a5f2a79,
._581ebd89,
._59b94eb6 a,
._98714ae6,
._99e3854f,
.a0dff0b1,
.bg-white,
.black-60,
.black-70,
.black-90,
.c6c55db4,
.cd2827bb a,
.d70fa54a,
.dib.fr.mt2 a,
[role=tabpanel] button,
body,
h2,
._31dfe8f0 a,
.f4477a62,
.hover-black-80:focus,
.hover-black-80:hover {
    color: var(--secundary) !important;
}
pre {
    margin: 1em 0!important
}
.black-60 {
    color: rgba(255, 255, 255, .6);
    !important
}
.black-70 {
    color: rgba(255, 255, 255, .7);
    !important
}
.black-90,
._89d0b3e5 {
    color: rgba(255, 255, 255, .9);
    !important
}
.black,
.fDilpz.active,
.kFHbfK.active,
.markdown strong,
.yqOwb.active,
h2 span,
strong {
    color: #fff
}
#packages > span._57e26c3d.black-90.tracked-tight.fw6.mr2,
._24a1e9c7,
._4a3f8f21,
._4a3f8f21 span,
.c37751f6,
.c37751f6 span,
.nav-items__SecondLevelLink-sc-kh2ci9-2,
a.active,
h2 {
    color: var(--primary)!important
}
._24a1e9c7 {
    border: var(--border)
}
._4a3f8f21 svg,
.c37751f6 svg {
    margin-right: 10px
}
._4a3f8f21 svg > path,
.c37751f6 svg > path,
footer a[title="npm repository"] > svg > rect {
    fill: var(--primary)
}
:focus {
    outline: 0!important
}
::-moz-focus-inner {
    border: 0!important
}
._4ea0e50d,
._4ea0e50d > div,
._4ea0e50d > div > *,
.af43375d > a > svg,
.af43375d > a > svg > path,
.bg-white,
.c5b9953b,
.ef7c6e62,
header,
header span,
header ul > li {
    background-color: var(--card)!important;
    fill: var(--primary)
}
._4a5f2a79 ul ul,
._755f5b0f,
.f85080bd,
ul.pointer > li {
    border-bottom: var(--border)
}
.d767adf4 span,
.dde91b96,
._26391339 a {
    border: var(--border)!important
}
._2f299eeb,
._75ce47e7 {
    background-color: var(--background)
}
._0da775bb,
#main > div > section > div > div > button._53b86379._79c95847.c1229923 {
    background-color: var(--second-card)!important;
}
.markdown code,
.markdown pre > *,
ul[aria-label="Search results"] > li,
ul[aria-label="Search results"] > li div,
ul[aria-label="Search results"] > li p,
ul[aria-label="Search results"] > li span,
ul[aria-label="Search results"] > li strong,
ul[aria-label="Search results"] > li > div {
    background-color: var(--card)!important
}
ul.c06f4cad,
ul[aria-label="Search results"] {
    margin-top: 10px
}
ul.c06f4cad {
    border-radius: 10px
}
ul.c06f4cad,
ul[aria-label="Search results"],
ul[aria-label="Search results"] > li:first-child {
    border-top-left-radius: var(--round-radius);
    border-top-right-radius: var(--round-radius)
}
ul.c06f4cad,
ul[aria-label="Search results"],
ul[aria-label="Search results"] > li:last-child {
    border-bottom-left-radius: var(--round-radius);
    border-bottom-right-radius: var(--round-radius)
}
._8055e658.d9f99065:hover {
    background-color: rgba(var(--readme), .1)!important
}
._8055e658.undefined:hover {
    background-color: rgba(var(--explore), .1)!important
}
._8055e658.c1f85151:hover {
    background-color: rgba(var(--dependencies), .1)
}
._8055e658._7cec0316.ac5f7ef8,
._8055e658._7cec0316.ac5f7ef8:hover,
._8055e658._7cec0316:hover {
    background-color: rgba(var(--dependents), .1)
}
._8055e658.b4fcfd19:hover {
    background-color: rgba(var(--versions), .2)!important
}
._8055e658._7cec0316 {
    border-color: rgba(var(--dependents))
}
._8055e658._7cec0316 ._38ce9a85 {
    color: rgba(var(--dependents))
}
#package-tab-readme span,
#package-tab-readme svg,
#package-tab-readme svg > path {
    color: rgba(var(--readme));
    fill: rgba(var(--readme))
}
#package-tab-explore span,
#package-tab-explore svg,
#package-tab-explore svg > path {
    color: rgba(var(--explore))!important;
    fill: rgba(var(--explore))!important
}
#package-tab-dependencies span,
#package-tab-dependencies svg,
#package-tab-dependencies svg > path {
    color: rgba(var(--dependencies))!important;
    fill: rgba(var(--dependencies))!important
}
#package-tab-dependents span,
#package-tab-dependents svg,
#package-tab-dependents svg > path {
    color: rgba(var(--dependents))!important;
    fill: rgba(var(--dependents))!important
}
#package-tab-versions span,
#package-tab-versions svg,
#package-tab-versions svg > path {
    color: rgba(var(--versions))!important;
    fill: rgba(var(--versions))!important
}
.a6ff2de1 {
    display: none
}
.npm-bg-hero {
    background-image: none
}
input[type=checkbox i] {
    background-color: #1f1f1f;
    color: #000
}
._24a1e9c7,
._24a1e9c7:hover,
._59b94eb6,
._7eb68a55,
._94b965b0,
.bg-light-gray,
.fd18bd36:nth-of-type(odd),
.pa4 {
    background-color: var(--card);
    background-image: none
}
.dim {
    transition: .3s
}
.dim:focus,
.dim:hover {
    opacity: 1;
    color: var(--hover);
    border-color: var(--hover);
    transition: .3s
}
@media (max-width:60em) {
    ._4a3f8f21 {
        margin-right: -8px
    }
    #package-tab-readme:hover,
    #package-tab-readme:hover span,
    #package-tab-readme:hover svg {
        border-bottom-right-radius: 5px
    }
}
@media screen and (min-width:60em) {
    ._8055e658 {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 0
    }
}
.d767adf4 {
    margin-top: 14px
}
.d767adf4 svg {
    margin-top: 5px
}
._59b94eb6::after {
    border-bottom: 18px solid #000
}
main svg :not(.sparkline--fill):not(.sparkline--line) {
    fill: var(--secundary);
    background-color: transparent!important
}
._59b94eb6::before {
    border-bottom: 18px solid rgba(255, 255, 255, .1)!important
}
#gatsby-focus-wrapper > div > div > div.Box-nv15kw-0.Flex-arghxi-0.iUtsKT > div.Box-nv15kw-0.iiMOdu > div > div,
#gatsby-focus-wrapper > div > div > div.Box-nv15kw-0.Flex-arghxi-0.iUtsKT > div.Box-nv15kw-0.iiMOdu > div > div [role=listitem],
#gatsby-focus-wrapper > div > div > div.Box-nv15kw-0.Position-fla1y3-0.embKIi.fDNwWQ > div.Box-nv15kw-0.Flex-arghxi-0.RBCrZ > div.Box-nv15kw-0.Flex-arghxi-0.gVbUqq > div.Box-nv15kw-0.Flex-arghxi-0.hluPoi > button:nth-child(3) > div:nth-child(2) > div.Box-nv15kw-0.Position-fla1y3-0.gAPSyw.geRYAT [role=listitem],
.b--black-10,
.upaKV td,
.upaKV th,
header ._0da775bb {
    border-color: rgba(255, 255, 255, .1)!important
}
.black-50 {
    color: #aaa
}
._000ae427 {
    border-bottom: 2px rgba(var(--brand-color), .3) solid
}
._418c4939 {
    stroke: rgba(var(--brand-color));
    fill: rgba(var(--brand-color), 0.3)
}
.black-80,
a {
    color: var(--secundary)
}
.cfZKRM,
.markdown code {
    color: var(--secundary)!important
}
.markdown,
.markdown h3,
.markdown h5 {
    color: var(--primary)
}
.markdown {
    margin: 0
}
.markdown .storage {
    color: #ff69b4!important
}
.markdown .keyword {
    color: #6495ed!important;
    font-weight: 700
}
.cfZKRM,
.markdown blockquote,
.markdown pre {
    background-color: var(--card)!important;
    border: var(--border)!important;
    border-radius: var(--round-radius);
    margin-bottom: 16px
}
.markdown blockquote {
    padding-top: 16px;
    border-left: var(--second-card) solid 12px!important
}
.markdown table {
    background-color: #141414;
    border-color: #141414!important
}
.markdown thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: #181818
}
.markdown td,
.markdown th {
    border: 1px solid rgba(255, 255, 255, .1)!important
}
.markdown tr:nth-child(2n) td {
    background-color: #242424!important
}
._6d9832ac table {
    border-bottom: 1px solid rgba(255, 255, 255, .1)!important;
    border-radius: 6px
}
.markdown h2,
.markdown h4,
.markdown > h1 {
    color: var(--primary);
    border-bottom: 1px solid #343434
}
#footer *,
#tabpanel-packages > div > ul *,
.markdown .highlight,
.markdown li,
.markdown p,
header * {
    color: var(--secundary)!important;
    background-color: transparent
}
.markdown th {
    font-weight: 700;
    text-align: center
}

.markdown td,
.markdown th {
    background: #202020
}
.markdown blockquote {
    background: #efefef;
    border-left: 10px solid #cecece
}
.markdown .deep-link-icon {
    fill: #c6c6c6
}
.markdown .highlight pre {
    border: 1px solid rgba(255, 255, 255, .1)!important;
    border-radius: 6px
}
.markdown .entity.name.tag.html,
.markdown .entity.name.tag.html > span,
.markdown .punctuation.definition.tag.html,
.markdown .punctuation.definition.tag.html > span {
    color: var(--def-tag)!important
}
.markdown .entity.other.attribute-name.html,
.markdown .entity.other.attribute-name.html > span,
.markdown .pl-smi {
    color: var(--attribute)!important
}
.markdown .pl-s {
    color: var(--string)!important
}
.markdown ::-webkit-scrollbar {
    height: var(--scroll-height)
}
.markdown ::-webkit-scrollbar-thumb {
    background-color: rgba(var(--brand-color), 1);
    opacity: .6;
    border-radius: var(--round-radius)
}
footer div,
footer li,
footer span,
footer ul,
footer.cd2827bb {
    background-color: var(--card)
}
footer.cd2827bb {
    margin-top: 0;
    border-top: var(--border)
}
footer a[title=GitHub] > svg,
footer a[title=GitHub] > svg > path {
    fill: var(--primary);
    background-color: transparent
}
footer a[title="npm repository"] > svg > polygon {
    fill: var(--card)
}
.upaKV td,
.upaKV th {
    background-color: #141414!important
}
.fDevHB,
.icJRWX {
    color: #c6c6c6
}
._6d9832ac a.heading-link {
    color:var(--secundary);
}
._704c034e p, ._704c034e li {
    color: var(--secundary);
}
.pl-smi, .pl-s .pl-s1 {
    color: var(--secundary);
}
._6d9832ac h1, ._6d9832ac h2, ._6d9832ac h3, ._6d9832ac h4, ._6d9832ac h5, ._6d9832ac h6 {
    color: var(--primary);
    margin-top: 24px;
    margin-bottom: 16px;
    padding-bottom: 0px;
    padding-bottom: 0rem;
    font-weight: 600;
    line-height: 1.25;
}
.pl-s, .pl-pds, .pl-s .pl-pse .pl-s1, .pl-sr, .pl-sr .pl-cce, .pl-sr .pl-sre, .pl-sr .pl-sra {
    color: #005cc5;
}
._6d9832ac strong {
    color: var(--secundary);
    font-weight: bolder;
}
strong {
    color: var(--secundary);
}
svg[Attributes Style] {
    width: 50;
    height: 50;
    fill: white;
}
`


if (site.includes("npmjs.com")) {
    Add_Custom_Style(styles);
}
