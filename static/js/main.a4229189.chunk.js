(this.webpackJsonpbookshelf=this.webpackJsonpbookshelf||[]).push([[0],{28:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),o=c(20),s=c.n(o),r=c(9),i=c(8),l=c(3),j=(c(28),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2?arguments[2]:void 0,n=Object(a.useState)(null),o=Object(r.a)(n,2),s=o[0],i=o[1],l=Object(a.useState)(!0),j=Object(r.a)(l,2),b=j[0],d=j[1],h=Object(a.useState)(null),u=Object(r.a)(h,2),O=u[0],x=u[1];return Object(a.useEffect)((function(){var c=new AbortController;return setTimeout((function(){fetch(e,t).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){d(!1),i(e),x(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(d(!1),x(e.message))}))})),function(){return c.abort()}}),[e,c]),{data:s,isPending:b,error:O}}),b=c(10),d=(c(16),c(21),"https://reactnd-books-api.udacity.com"),h=localStorage.token;h||(h=localStorage.token=Math.random().toString(36).substr(-8));var u={Accept:"application/json",Authorization:h},O=c(1),x=function(e){var t=e.book,c=(e.shelf,e.setShelf,Object(a.useState)(!1)),n=Object(r.a)(c,2),o=n[0],s=n[1],i=Object(a.useContext)(T),l=i.data.books,j={};l.map((function(e){return j[e.id]=e.shelf}));var h=Object(a.useState)(j[t.id]),x=Object(r.a)(h,2),f=x[0],m=x[1],k=function(e){(function(e,t){return fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)(Object(b.a)({},u),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))})(t,e).then((function(){m(e),s(!o),i.setBookStat(!i.bookStat)}))};return Object(O.jsxs)("div",{className:"book-card",children:[t.imageLinks&&Object(O.jsx)("img",{src:t.imageLinks.smallThumbnail,alt:"".concat(t.title)}),!t.imageLinks&&Object(O.jsx)("img",{alt:"not found"}),Object(O.jsxs)("select",{name:"shelf-status",id:"book-shelf",className:"shelf-status",onChange:function(e){k(e.target.value)},value:f,children:[Object(O.jsx)("option",{value:"none",children:"none"}),Object(O.jsx)("option",{value:"read",children:"read"}),Object(O.jsx)("option",{value:"currentlyReading",children:"reading"}),Object(O.jsx)("option",{value:"wantToRead",children:"want to read"})]}),Object(O.jsx)("h3",{className:"book-title",children:t.title}),t.authors&&t.authors.map((function(e){return Object(O.jsx)("span",{className:"book-author",children:e},t.id+e)}))]})},f=function(e){return Object(O.jsxs)("div",{className:"shelf",children:[Object(O.jsx)("h1",{className:"shelf-title",children:e.title}),e.isloading?Object(O.jsx)("h3",{children:"loading..."}):Object(O.jsxs)("div",{className:"books-container",children:[""===e.books&&Object(O.jsx)("h3",{children:"No books found"}),e.books.error&&Object(O.jsx)("h3",{children:"No books found"}),"empty query"!==e.books.error&&e.books.map((function(e){return Object(O.jsx)(x,{book:e},e.id)}))]})]})},m=c(12),k=function(){var e=Object(a.useContext)(T),t=e.data,c=e.isLoading,n=e.error;return Object(O.jsxs)("main",{className:"container",children:[n&&Object(O.jsx)("h1",{children:n}),c&&Object(O.jsxs)("div",{className:"icon-holder",children:[Object(O.jsx)(m.b,{className:"search-icon"}),Object(O.jsx)("h2",{className:"loading",children:"Loading ..."})]}),t&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{title:"Reading",books:t.books.filter((function(e){return"currentlyReading"===e.shelf})),isloading:c}),Object(O.jsx)(f,{title:"Read",books:t.books.filter((function(e){return"read"===e.shelf})),isloading:c}),Object(O.jsx)(f,{title:"To Read",books:t.books.filter((function(e){return"wantToRead"===e.shelf})),isloading:c})]}),Object(O.jsx)("div",{className:"add-book",children:Object(O.jsx)(i.b,{to:"/search",className:"link",children:"+"})})]})},g=function(){return Object(O.jsx)("header",{className:"header",children:Object(O.jsx)("h1",{className:"logo",children:Object(O.jsx)(i.b,{to:"/",className:"link",children:"BookShelf"})})})},p=c(18),N=function(e){var t=e.token,c=Object(a.useState)(" "),n=Object(r.a)(c,2),o=n[0],s=n[1],l={Accept:"application/json",Authorization:t},d={method:"POST",headers:Object(b.a)(Object(b.a)({},l),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:o})},h=j("".concat("https://reactnd-books-api.udacity.com","/search"),d,o),u=h.data,x=h.isPending,k=h.error;return Object(O.jsxs)("main",{className:"container",children:[Object(O.jsxs)("div",{className:"search-container",children:[Object(O.jsx)(i.b,{to:"/bookshelf-react/",className:"back-link",children:Object(O.jsx)(p.a,{})}),Object(O.jsx)("input",{type:"text",className:"search-bar",placeholder:"search",onKeyUp:function(e){!function(e){console.log(e.target.value),""===e.target.value?s(" "):s(e.target.value)}(e)}})]})," "===o&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{style:{textAlign:"center",fontWeight:400},children:"Type something to search"}),Object(O.jsx)("div",{className:"icon-holder",children:Object(O.jsx)(m.b,{className:"search-icon"})})]}),k&&Object(O.jsx)("h1",{children:k}),u&&" "!==o&&Object(O.jsx)(f,{title:"Search Results",books:u.books,isloading:x}),Object(O.jsx)("div",{className:"add-book",children:Object(O.jsx)(i.b,{to:"/",className:"link",children:Object(O.jsx)(p.b,{})})})]})},v=function(){return Object(O.jsxs)("div",{className:"not-found",children:[Object(O.jsx)("h1",{className:"error-404",children:"404"}),Object(O.jsx)("h1",{className:"text",children:"Page Not Found"}),Object(O.jsx)(i.b,{to:"/",className:"link",children:"Back to Home Page"})]})},S=c(19),y=function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsxs)("span",{children:["Made with love ",Object(O.jsx)(m.a,{className:"icon"})," and some React"," ",Object(O.jsx)(S.b,{className:"react-icon icon"})," by"," ",Object(O.jsxs)("a",{href:"https://github.com/dacitto",className:"github-link",target:"_blank",rel:"noreferrer",children:["Salah Eddine Daci ",Object(O.jsx)(S.a,{className:"icon"})]})]})})},T=n.a.createContext();var A=function(){var e=localStorage.token;e||(e=localStorage.token=Math.random().toString(36).substr(-8));var t=Object(a.useState)(!1),c=Object(r.a)(t,2),n=c[0],o=c[1],s=j("https://reactnd-books-api.udacity.com/books",{headers:{Accept:"application/json",Authorization:e}},n),b=s.data,d=s.isPending,h=s.error;return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(T.Provider,{value:{data:b,isLoading:d,error:h,bookStat:n,setBookStat:o},children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,children:Object(O.jsx)(k,{})}),Object(O.jsx)(l.a,{path:"/Search",exact:!0,children:Object(O.jsx)(N,{token:e})}),Object(O.jsx)(l.a,{children:Object(O.jsx)(v,{})})]})}),Object(O.jsx)(y,{})]})};s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a4229189.chunk.js.map