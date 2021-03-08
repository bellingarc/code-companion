const languages = [
  {
    parentName: "HTML",
    final:false,
    contents: [
      {
        contentName: "ARBITRARY TAG WITH GLOBAL ATTS",
        attributes: [
          { attName: "id", code: " id=('')", final:true },
          { attName: "class", code: " class=('')", final:true },
          { attName: "style", code: " style=('')", final:true },
          { attName: "dir", code: " dir=('')", final:true },
          { attName: "draggable", code: " draggable=('')", final:true },
          { attName: "hidden", code: " hidden=('')", final:true },
          { attName: "lang", code: " lang=('')", final:true },
          { attName: "contenteditable", code: " contenteditable=('')", final:true },
          { attName: "spellcheck", code: " spellcheck=('')", final:true },
          { attName: "translate", code: " translate=('')", final:true },
          { attName: "accesskey", code: " accesskey=('')", final:true },
          { attName: "title", code: " title=('')", final:true },
        ],
      },
      {
        contentName: "ARBITRARY TAG WITH EVENT ATTS",
        final:false,
        attributes: [
          { attName: "Window Event Attributes",
          final: false,
          type:[
            {typeName: "onafterprint", code: " onafterprint=()", final:true},
            {typeName: "onbeforeprint", code: " onbeforeprint=()", final:true},
            {typeName: "onbeforeunload", code: " onbeforeunload=()", final:true},
            {typeName: "onerror", code: " onerror=()", final:true},
            {typeName: "onhashchange", code: " onhashchange=()", final:true},
            {typeName: "onload", code: " onload=()", final:true},
            {typeName: "onmessage", code: " onmessage=()", final:true},
            {typeName: "onoffline", code: " onoffline=()", final:true},
            {typeName: "ononline", code: " ononline=()", final:true},
            {typeName: "onpagehide", code: " onpagehide=()", final:true},
            {typeName: "onpageshow", code: " onpageshow=()", final:true},
            {typeName: "onpopstate", code: " onpopstate=()", final:true},
            //{typeName: "onresize", code: " onresize=()", final:true},
            //{typeName: "onstorage", code: " onstorage=()", final:true},
            //{typeName: "onunload", code: " onunload=()", final:true},
          ]},{
            attName: "Form Events",
            final: false,
            type:[
              {typeName:"onblur", code: " onblur=()", final:true},
              {typeName:"onchange", code: " onchange=()", final:true},
              {typeName:"oncontextmenu", code: " ononcontextmenu)", final:true},
              {typeName:"onfocus", code: " onfocus=()", final:true},
              {typeName:"oninput", code: " oninput=()", final:true},
              {typeName:"oninvalid", code: " oninvalid=()", final:true},
              {typeName:"onreset", code: " onreset=()", final:true},
              {typeName:"onsearch", code: " onsearch=()", final:true},
              {typeName:"onselect", code: " onselect=()", final:true},
              {typeName:"onsubmit", code: " onsubmit=()", final:true},
            ]
          },
          {
            attName: "Hardware Events",
            final: false,
            type:[
              {typeName:"onkeydown", code: " onkeydown=()", final:true},
              {typeName:"onkeypress", code: " onkeypress=()", final:true},
              {typeName:"onkeyup", code: " onkeyup=()", final:true},
              {typeName:"onclick", code: " onclick=()", final:true},
              {typeName:"ondblclick", code: " ondblclick=()", final:true},
              {typeName:"onmousedown", code: " onmousedown=()", final:true},
              {typeName:"onmousemove", code: " onmousemove=()", final:true},
              {typeName:"onmouseout", code: " onmouseout=()", final:true},
              {typeName:"onmouseover", code: " onmouseover=()", final:true},
              {typeName:"onmouseup", code: " onmouseup=()", final:true},
              {typeName:"onmousewheel", code: " onmousewheel=()", final:true},
              {typeName:"onwheel", code: " onwheel=()", final:true},
            ],
        },
        {
          attName: "Drag Events",
          final: false,
          type:[
            {typeName:"ondrag", code: " ondrag=()", final:true},
            {typeName:"ondragend", code: " ondragend=()", final:true},
            {typeName:"ondragenter", code: " ondragenter=()", final:true},
            {typeName:"ondragleave", code: " ondragleave=()", final:true},
            {typeName:"ondragover", code: " ondragover=()", final:true},
            {typeName:"ondragstart", code: " ondragstart=()", final:true},
            {typeName:"ondrop", code: " ondrop=()", final:true},
            {typeName:"onscroll", code: " onscroll=()", final:true},
          ],
        },
      {
        contentName: "Break",
        final: true,
        code: "<br/>",
      }
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
        contentName: "xxx",
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
];
export default languages