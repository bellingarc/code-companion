const languages = [
  {
    parentName: "HTML",
    final: false,
    contents: [
      {
        contentName: "GLOBAL ATTS",
        attributes: [
          { attName: "id", code: " id=('')", final: true },
          { attName: "class", code: " class=('')", final: true },
          { attName: "style", code: " style=('')", final: true },
          { attName: "dir", code: " dir=('')", final: true },
          { attName: "draggable", code: " draggable=('')", final: true },
          { attName: "hidden", code: " hidden=('')", final: true },
          { attName: "lang", code: " lang=('')", final: true },
          {
            attName: "contenteditable",
            code: " contenteditable=('')",
            final: true,
          },
          { attName: "spellcheck", code: " spellcheck=('')", final: true },
          { attName: "translate", code: " translate=('')", final: true },
          { attName: "accesskey", code: " accesskey=('')", final: true },
          { attName: "title", code: " title=('')", final: true },
        ],
      },
      {
        contentName: "EVENT ATTS",
        final: false,
        attributes: [
          {
            attName: "Window Event Attributes",
            final: false,
            type: [
              {
                typeName: "onafterprint",
                code: " onafterprint=()",
                final: true,
              },
              {
                typeName: "onbeforeprint",
                code: " onbeforeprint=()",
                final: true,
              },
              {
                typeName: "onbeforeunload",
                code: " onbeforeunload=()",
                final: true,
              },
              { typeName: "onerror", code: " onerror=()", final: true },
              {
                typeName: "onhashchange",
                code: " onhashchange=()",
                final: true,
              },
              { typeName: "onload", code: " onload=()", final: true },
              { typeName: "onmessage", code: " onmessage=()", final: true },
              { typeName: "onoffline", code: " onoffline=()", final: true },
              { typeName: "ononline", code: " ononline=()", final: true },
              { typeName: "onpagehide", code: " onpagehide=()", final: true },
              { typeName: "onpageshow", code: " onpageshow=()", final: true },
              { typeName: "onpopstate", code: " onpopstate=()", final: true },
              //{typeName: "onresize", code: " onresize=()", final:true},
              //{typeName: "onstorage", code: " onstorage=()", final:true},
              //{typeName: "onunload", code: " onunload=()", final:true},
            ],
          },
          {
            attName: "Form Events",
            final: false,
            type: [
              { typeName: "onblur", code: " onblur=()", final: true },
              { typeName: "onchange", code: " onchange=()", final: true },
              {
                typeName: "oncontextmenu",
                code: " ononcontextmenu)",
                final: true,
              },
              { typeName: "onfocus", code: " onfocus=()", final: true },
              { typeName: "oninput", code: " oninput=()", final: true },
              { typeName: "oninvalid", code: " oninvalid=()", final: true },
              { typeName: "onreset", code: " onreset=()", final: true },
              { typeName: "onsearch", code: " onsearch=()", final: true },
              { typeName: "onselect", code: " onselect=()", final: true },
              { typeName: "onsubmit", code: " onsubmit=()", final: true },
            ],
          },
          {
            attName: "Hardware Events",
            final: false,
            type: [
              { typeName: "onkeydown", code: " onkeydown=()", final: true },
              { typeName: "onkeypress", code: " onkeypress=()", final: true },
              { typeName: "onkeyup", code: " onkeyup=()", final: true },
              { typeName: "onclick", code: " onclick=()", final: true },
              { typeName: "ondblclick", code: " ondblclick=()", final: true },
              { typeName: "onmousedown", code: " onmousedown=()", final: true },
              { typeName: "onmousemove", code: " onmousemove=()", final: true },
              { typeName: "onmouseout", code: " onmouseout=()", final: true },
              { typeName: "onmouseover", code: " onmouseover=()", final: true },
              { typeName: "onmouseup", code: " onmouseup=()", final: true },
              {
                typeName: "onmousewheel",
                code: " onmousewheel=()",
                final: true,
              },
              { typeName: "onwheel", code: " onwheel=()", final: true },
            ],
          },
          {
            attName: "Drag Events",
            final: false,
            type: [
              { typeName: "ondrag", code: " ondrag=()", final: true },
              { typeName: "ondragend", code: " ondragend=()", final: true },
              { typeName: "ondragenter", code: " ondragenter=()", final: true },
              { typeName: "ondragleave", code: " ondragleave=()", final: true },
              { typeName: "ondragover", code: " ondragover=()", final: true },
              { typeName: "ondragstart", code: " ondragstart=()", final: true },
              { typeName: "ondrop", code: " ondrop=()", final: true },
              { typeName: "onscroll", code: " onscroll=()", final: true },
            ],
          },
          {
            attName: "Clipboard Events",
            final: false,
            type: [
              { typeName: "oncopy", code: " oncopy=()", final: true },
              { typeName: "oncut", code: " oncut=()", final: true },
              { typeName: "onpaste", code: " onpaste=()", final: true },
            ],
          },
          {
            attName: "Media Events",
            final: false,
            type: [
              { typeName: "onabort", code: " onabort=''", final: true },
              { typeName: "oncanplay", code: " oncanplay=''", final: true },
              {
                typeName: "oncanplaythrough",
                code: " oncanplaythrough=''",
                final: true,
              },
              { typeName: "oncuechange", code: " oncuechange=''", final: true },
              {
                typeName: "ondurationchange",
                code: " ondurationalchange=''",
                final: true,
              },
              { typeName: "onemptied", code: " onemptied=''", final: true },
              { typeName: "onended", code: " onended=''", final: true },
              { typeName: "onerror", code: " onerror=''", final: true },
              {
                typeName: "onloadeddata",
                code: " onloadeddata=''",
                final: true,
              },
              {
                typeName: "onloadedmetadata",
                code: " onloadedmetadata=''",
                final: true,
              },
              { typeName: "onloadstart", code: " onloadstart=''", final: true },
              { typeName: "onpause", code: " onpause=''", final: true },
              { typeName: "onplay", code: " onplay=''", final: true },
              { typeName: "onplaying", code: " onplaying=''", final: true },
              { typeName: "onprogress", code: " onprogress=''", final: true },
              { typeName: "onratechange", code: " onratechange=''", final: true },
              { typeName: "onseeked", code: " onseeked=''", final: true },
              { typeName: "onseeking", code: " onseeking=''", final: true },
              { typeName: "onstalled", code: " onstalled=''", final: true },
              { typeName: "onsuspend", code: " onsuspend=''", final: true },
              { typeName: "ontimeupdate", code: " ontimeupdate=''", final: true },
              { typeName: "onvolumechange", code: " onvolumechange=''", final: true },
              { typeName: "onwaiting", code: " onwaiting=''", final: true },
            ],
          },
          {
            attName: "ontoggle",
            code: " ontoggle=()",
            final: true,
          },
        ],
      },
      {
        contentName: "Content Sectioning", final:false, attributes: [
          { attName: "address", code: "<address></address>", final: true },
          { attName: "article", code: "<article></article>", final: true },
          { attName: "aside", code: "<aside></aside>", final: true },
          { attName: "footer", code: "<footer></footer>", final: true },
          { attName: "header", code: "<header></header>", final: true },
          { attName: "h#", 
            final: false, 
            type: [
            { typeName: "h1", code: "<h1></h1>", final: true },
            { typeName: "h2", code: "<h2></h2>", final: true },
            { typeName: "h3", code: "<h3></h3>", final: true },
            { typeName: "h4", code: "<h4></h4>", final: true },
            { typeName: "h5", code: "<h5></h5>", final: true },
            { typeName: "h6", code: "<h6></h6>", final: true },
            ] 
          },
          { attName: "main", code: "<main></main>", final: true },
          { attName: "nav", code: "<nav></nav>", final: true },
          { attName: "section", code: "<section></section>", final: true },
        ],
      },
      { contentName:"Text Content", 
        final: false, 
        attributes: [
          { attName: "blockquote", 
            final:false, 
            type: [
              { typeName: "blockquote Tag", code: "<blockquote></blockquote>", final:true },
              { typeName: "cite", code: " cite=''", final: true},
            ], 
          },
          { attName: "dd", 
            type: [
              { typeName: "dd Tag", code: "<dd></dd>", final:true },
              { typeName: "nowrap", code: " nowrap= ", final: true}    
            ], 
          },
          { attName: "div Tag", code: "<div></div>", final: true }, 
          { attName: "dl Tag", code: "<dl></dl>", final: true }, 
          { attName: "dt Tag", code: "<dt></dt>", final: true }, 
          { attName: "figcaption Tag", code: "<figcaption></figcaption>", final: true }, 
          { attName: "figure Tag", code: "<figure></figure>", final: true }, 
          { attName: "hr Tag", code: "<hr></hr>", final: true }, 
          { attName: "li", 
            final: false, 
            type:[
              { typeName: "li Tag", code: "<li></li>", final: true },
              { typeName: "value", code: " value=", final: true },
            ]},
          { attName: "ol", 
            final: false, 
            type:[
              { typeName: "ol Tag", code: "<ol></ol>", final: true },
              { typeName: "reversed", code: " reversed=", final: true },
              { typeName: "start", code:  " start=''", final: true },
              { typeName: "type", code:  " type=''", final: true },
            ] 
          },
          { attName: "p", code: "<p></p>", final: true },
          { attName: "pre", code: "<pre></pre>", final: true },
          { attName: "ul", code: "<ul></ul>", final: true },
        ],
      },
      {
        contentName: "Audio/Video Methods",
        final: false,
        attributes: [
          { attName: "pause", code: ".pause()", final: true },
          { attName: "play", code: ".play()", final: true },
          { attName: "load", code: ".load()", final: true },
          { attName: "canPlayType", code: ".canPlayType()", final: true },
        ],
      },
      {
        contentName: "Audio/Video Properties",
        final: false,
        attributes: [
          { attName: "autoplay FALSE", code: " autoplay=false", final: true },
          { attName: "autoplay TRUE", code: " autoplay=true", final: true },
          { attName: "controls FALSE", code: ".controls=false", final: true },
          { attName: "controls TRUE", code: ".controls=true", final: true },
          { attName: "currentsrc", code: ".currentsrc", final: true },
          { attName: "currentTime RETURN", code: ".currentTime", final: true },
          { attName: "currentTime SET", code: ".currentTime=''", final: true },
          {
            attName: "defaultMuted RETURN ",
            code: ".defaultMuted",
            final: true,
          },
          {
            attName: "defaultMuted SET FALSE",
            code: ".defaultMuted=false",
            final: true,
          },
          {
            attName: "defaultMuted SET TRUE",
            code: ".defaultMuted=true",
            final: true,
          },
          {
            attName: "defaultPlaybackRate RETURN",
            code: ".defaultPlaybackRate",
            final: true,
          },
          {
            attName: "defaultPlaybackRate SET ",
            code: ".defaultPlaybackRate=",
            final: true,
          },
          { attName: "duration", code: ".duration", final: true },
          { attName: "ended", code: ".ended", final: true },
          { attName: "loop RETURN ", code: ".loop", final: true },
          { attName: "loop SET FALSE", code: ".loop=false", final: true },
          { attName: "loop SET TRUE", code: ".loop=true", final: true },
          { attName: "mediaGroup RETURN ", code: ".mediaGroup", final: true },
          { attName: "mediaGroup SET", code: ".mediaGroup=''", final: true },
          { attName: "muted RETURN ", code: ".muted", final: true },
          { attName: "muted SET FALSE", code: ".muted=false", final: true },
          { attName: "muted SET TRUE", code: ".muted=true", final: true },
          { attName: "networkState", code: ".networkState", final: true },
          { attName: "paused", code: ".paused", final: true },
          {
            attName: "playbackRate RETURN",
            code: ".playbackRate",
            final: true,
          },
          { attName: "playbackRate SET ", code: ".playbackRate=", final: true },
          { attName: "played", code: ".played", final: true },
          { attName: "preload RETURN", code: ".preload", final: true },
          { attName: "preload SET AUTO", code: ".preload='auto'", final: true },
          {
            attName: "preload SET METADATA",
            code: ".preload='metadata'",
            final: true,
          },
          { attName: "preload SET NONE", code: ".preload='none'", final: true },
          { attName: "readyState", code: ".readyState", final: true },
          { attName: "seekable", code: ".seekable", final: true },
          { attName: "seeking", code: ".seeking", final: true },
          { attName: "src RETURN", code: ".src", final: true },
          { attName: "src SET", code: ".src=''", final: true },
          { attName: "textTracks", code: ".textTracks", final: true },
          { attName: "volume RETURN", code: ".volume", final: true },
          { attName: "volume SET", code: ".volume=", final: true },
        ],
      },
      {
        contentName: "HTML Tag",
        final: true,
        code: "<html><html/>",
      },
      {
        contentName: "Document Metadata Tags",
        final: false,
        attributes: [
          {
            attName: "title Tag", code: "<title></title>", final: true 
          },
          {
            attName: "base",
            final: false,
            type: [
              { typeName: "base Tag", code: "<base></base>", final: true },

              { typeName: "href", code: "href=''", final: true },
              { typeName: "target", code: "target=''", final: true },
            ],
          },
          { attName: "head", code: "<head></head>", final: true },
          {
            attName: "link",
            final: false,
            type: [
              { typeName: "link Tag", code: "<link>", final: true },
              { typeName: "as", code: "as=", final: true },
              { typeName: "crossorigin", code: "crossorigin=", final: true },
              { typeName: "disabled", code: "disabled=", final: true },
              { typeName: "href", code: "href=''", final: true },
              { typeName: "hreflang", code: "hreflang=''", final: true },
              { typeName: "imagesizes", code: "imagesizes=''", final: true },
              { typeName: "imagesrcset", code: "imagesrcset=''", final: true },
              { typeName: "integrity", code: "integrity=", final: true },
              { typeName: "media", code: "media=''", final: true },
              { typeName: "prefetch", code: "prefetch=''", final: true },
              { typeName: "rel", code: "rel=''", final: true },
              { typeName: "sizes", code: "sizes=''", final: true },
              { typeName: "title", code: "title=''", final: true },
              { typeName: "type", code: "type=''", final: true },
              { typeName: "type", code: "type=''", final: true },
            ],
          },
          {
            attName: "meta",
            final: false,
            type:[
              { typeName: "meta Tag", code: "<meta>", final: true },
    
              { typeName: "charset", code: " charset=''", final: true },
              { typeName: "content", code: " content=''", final: true },
              { typeName: "http-equiv", code: " http-equiv=''", final: true },
              { typeName: "name", code: " name=''", final: true },
            ]
          },
          {
            attName: "style",
            final: false,
            type:[
              { typeName: "style Tag", code: "<style></style>", final: true},
              { typeName: "type", code: " type=''", final: true },
              { typeName: "media", code: " media=''", final: true },
              { typeName: "nonce", code: " nonce=''", final: true },
              { typeName: "title", code: " title=''", final: true },
            ]
          },
        ],
      },
      { 
      contentName: "body Tag",
      code: "<body></body>", 
      final:true 
    },
    ],
  },
  {
    parentName: "Python",
    contents: [
      {
        contentName: "xxx",
      },
    ],
  },
  {
    parentName: "JS",
    contents: [
      {
        contentName: "xxx",
      },
    ],
  },
  {
    parentName: "Java",
    contents: [
      {
        contentName: "xxx",
      },
    ],
  },
  {
    parentName: "CLI",
    contents: [
      {
        contentName: "xxx",
      },
    ],
  },
  {
    parentName: "Variables",
    contents: [
      {
        contentName: "xxx",
      },
    ],
  },
  {
    parentName: "C",
    contents: [
      {
        contentName: "xxx",
      },
    ],

  },
  {
    parentName: "C#",
    contents: [
      {
        contentName: "xxx",
      },
    ],
  },
  {
    parentName: "C++",
    contents: [
      {
        contentName: "xxx",
      },
    ],
  },
  {
    parentName: "System Controls",
    contents: [
      {
        contentName: "xxx",
      },
    ],
  },
  {
    parentName: "Boilers",
    contents: [
      {
        contentName: "Basic HTML",
        final: true,
        code: `<!doctype html>

        <html lang="en">
        <head>
          <meta charset="utf-8">
        
          <title>The HTML5 Herald</title>
          <meta name="description" content="The HTML5 Herald">
          <meta name="author" content="SitePoint">
        
          <link rel="stylesheet" href="css/styles.css?v=1.0">
        
        </head>
        
        <body>
          <script src="js/scripts.js"></script>
        </body>
        </html>`,
      },
    ],
  },
  {
    parentName: "Settings",
    contents: [
      {
        contentName: "xxx",
      },
    ],
  },
]

export default languages
