(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},4:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(21),s=a.n(c),o=(a(26),a(12)),i=a(5),u=a(6),l=a(9),h=a(8),m=(a(4),a(11)),g=a.n(m),b=a(7),d=a.n(b),j=a(1),p=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleInputChange=function(t){e.setState({searchQuery:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleInputChange})]})})}}]),a}(r.Component),y=function(e){var t=e.image,a=e.query;e.largeImage;return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image"})})},f=function(e){var t=e.images,a=e.query;return Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(j.jsx)(y,{image:e.webformatURL,alt:a,largeImage:e.largeImageURL},e.id)}))})},O=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})},S=function(){return Object(j.jsx)("div",{className:"Loader",children:Object(j.jsx)(g.a,{type:"Circles",color:"#00BFFF",height:80,width:80,timeout:3e3})})},x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",page:1,imageArray:[],loading:!1,showModal:!1,largeSrc:""},e.updateQuery=function(t){e.setState({searchQuery:t,page:1,imageArray:[]})},e.scrollTo=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.fetchImages=function(){var t=e.state,a=t.page,r=t.searchQuery;d.a.defaults.baseURL="https://pixabay.com/api",e.setState({loading:!0}),d.a.get("/?q=".concat(r,"&page=").concat(a,"&key=").concat("19772171-226cd242ef8307a66747d7d05","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){e.setState((function(e){return{imageArray:[].concat(Object(o.a)(e.imageArray),Object(o.a)(t.data.hits)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.onClick=function(){},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&(this.fetchImages(),this.scrollTo())}},{key:"render",value:function(){var e=this.state,t=(e.searchQuery,e.imageArray),a=e.loading,r=(e.showModal,e.largeSrc,t.length>0&&!a);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{onSubmit:this.updateQuery}),a&&Object(j.jsx)(S,{}),Object(j.jsx)(f,{images:this.state.imageArray,query:this.state.searchQuery}),r&&Object(j.jsx)(O,{onClick:this.fetchImages})]})}}]),a}(r.Component);a(66);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.fc281c74.chunk.js.map