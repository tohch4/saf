(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fab074a"],{"167f":function(t,e,a){"use strict";var s=a("e2b5"),i=a.n(s);i.a},"608c":function(t,e,a){},"651b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",{class:1==t.$vuetify.theme.dark?"blank":"grey lighten-5"},[s("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:t.snackbarSuccess,callback:function(e){t.snackbarSuccess=e},expression:"snackbarSuccess"}},[t._v("\n    Speaker Edited Successfully\n    "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbarSuccess=!1}}},[t._v("Close")])],1),s("v-container",{staticClass:"text-center",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-toolbar",{staticClass:"elevation-1"},[s("router-link",{staticClass:"ma-0  mb-0",staticStyle:{"border-radius":"5px","text-transform":"capitalize","text-decoration":"none"},attrs:{to:"/admin/dashboard/speaker/",color:1==t.$vuetify.theme.dark?"white":"black"}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left-thick")]),s("span",{class:1==t.$vuetify.theme.dark?"white--text":"black--text"},[t._v("Speakers")])],1),s("v-spacer"),!t.isLoading&&t.isSpeakerFound?s("editSpeaker",{staticClass:"mr-5",attrs:{speakerData:t.speaker},on:{showEditSuccess:t.editSuccessFunction}}):t._e(),!t.isLoading&&t.isSpeakerFound?s("removeSpeakers",{staticClass:"mr-5",attrs:{speakerData:{id:t.$route.params.id,name:t.speaker.name}}}):t._e()],1)],1)],1),t.isLoading?s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):!t.isLoading&&t.isSpeakerFound?s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"pa-1 elevation-1 py-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"3"}},[s("v-avatar",{attrs:{size:"120"}},[s("img",{attrs:{src:t.speaker.image.length>0?t.speaker.image:a("72ab"),alt:t.speaker.name}})]),s("p",{staticClass:"mt-3 mb-0  mb-0 text--black",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.speaker.name))]),s("p",{staticClass:"mt-1 mb-0  mt-0 greyText",staticStyle:{"font-size":"100%"}},[t._v(t._s(t.speaker.designation))]),s("v-chip",{staticClass:"mt-2",attrs:{href:t.speaker.company.url,target:"_blank",small:""}},[t._v(t._s(t.speaker.company.name))]),s("br"),s("br"),t.speaker.visible?s("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Visible")]):s("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Visible")])],1),s("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"9"}},[s("p",{staticClass:"mb-0"},[s("b",[t._v("Bio")])]),s("p",{staticClass:"mt-1 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.bio))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Email")])]),s("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.email))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Mobile")])]),s("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.mbnumber))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Location")])]),s("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.city)+", "+t._s(t.speaker.country))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("User ID")])]),s("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.id))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Social Links")])]),s("p",{staticClass:"mt-1 mb-0 mt-0"},[s("v-chip-group",{attrs:{column:""}},t._l(t.speaker.socialLinks,(function(e,a){return s("v-chip",{key:a,attrs:{href:e,target:"_blank"}},[t._v(t._s(a.charAt(0).toUpperCase()+a.slice(1)))])})),1)],1)])],1)],1)],1)],1):s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"elevation-1 pa-3 white"},[s("v-col",[s("h1",[t._v("User Not Found")])])],1)],1)],1)],1)],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{icon:"",dark:"",color:"red"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},s),[a("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("Remove "+t._s(t.speakerData.name))])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure?")]),a("v-card-text",[t._v("Would you like to remove "+t._s(t.speakerData.name)+"?")]),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("No")]),a("v-btn",{attrs:{color:"red darken-1",text:"",loading:t.isLoading},on:{click:function(e){return t.deleteItem(t.speakerData.id)}}},[t._v("Remove")])],1)],1)],1)},r=[],o=a("dc59"),l={props:{speakerData:{}},data:function(){return{dialog:!1,isLoading:!1}},methods:{deleteItem:function(t){var e=this;this.isLoading=!0,o["a"].firestore.collection("speakers").doc(t).delete().then((function(){e.isLoading=!1,e.dialog=!1,e.$router.push({path:"/admin/dashboard/speaker",query:{msg:"removesuccess"}})}))}}},c=l,d=a("2877"),u=a("6544"),p=a.n(u),m=a("8336"),f=a("b0af"),v=a("99d9"),h=a("169a"),b=a("132d"),g=a("3a2f"),k=Object(d["a"])(c,n,r,!1,null,null,null),y=k.exports;p()(k,{VBtn:m["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDialog:h["a"],VIcon:b["a"],VTooltip:g["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{scrollable:"",width:"1200"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{icon:"",color:"primary",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},s),[a("v-icon",[t._v("mdi-lead-pencil")])],1)]}}])},[a("span",[t._v("Edit "+t._s(t.speakerData.name)+" Details")])]),t.dialog?a("v-card",[a("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("Edit "+t._s(t.speakerData.name.split(" ")[0])+"'s Details")]),a("v-card-text",{},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-form",{attrs:{"lazy-validation":""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker Status")])]),a("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[a("v-select",{attrs:{items:t.visiblity,label:"Visiblity Status",outlined:""},model:{value:t.updatedData.visible,callback:function(e){t.$set(t.updatedData,"visible",e)},expression:"updatedData.visible"}})],1),a("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[a("v-text-field",{attrs:{disabled:"",label:"ID",type:"text",outlined:""},model:{value:t.updatedData.id,callback:function(e){t.$set(t.updatedData,"id",e)},expression:"updatedData.id"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker info")])]),a("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"8",xl:"3"}},[a("v-text-field",{attrs:{label:"Full Name",type:"text",outlined:""},model:{value:t.updatedData.name,callback:function(e){t.$set(t.updatedData,"name",e)},expression:"updatedData.name"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"4",xl:"3"}},[a("v-text-field",{attrs:{label:"Desigination",type:"text",outlined:""},model:{value:t.updatedData.designation,callback:function(e){t.$set(t.updatedData,"designation",e)},expression:"updatedData.designation"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Profile Image URL",type:"text",outlined:""},model:{value:t.updatedData.image,callback:function(e){t.$set(t.updatedData,"image",e)},expression:"updatedData.image"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-dialog",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"mt-n6",attrs:{color:"primary",loading:t.imageUploading,dark:""}},s),[t._v("Upload Image")])]}}],null,!1,3016959100),model:{value:t.dialogImageUload,callback:function(e){t.dialogImageUload=e},expression:"dialogImageUload"}},[a("v-card",[a("v-card-title",[t._v("Upload Speaker Image")]),a("v-card-text",[a("v-img",{staticClass:"mb-6",attrs:{src:t.imagePre}}),a("v-file-input",{attrs:{accept:"image/*",label:"Select Image","prepend-icon":"",outlined:""},on:{change:t.onFileChange},model:{value:t.imageUpload,callback:function(e){t.imageUpload=e},expression:"imageUpload"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogImageUload=!1}}},[t._v("Discard")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.uploadImage}},[t._v("Upload Image")])],1)],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[a("v-img",{staticClass:"mt-n7",attrs:{src:t.updatedData.image}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"10"}},[a("v-textarea",{attrs:{outlined:"",label:"Bio"},model:{value:t.updatedData.bio,callback:function(e){t.$set(t.updatedData,"bio",e)},expression:"updatedData.bio"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Personal Info")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Contact Number",type:"tel",outlined:""},model:{value:t.updatedData.mbnumber,callback:function(e){t.$set(t.updatedData,"mbnumber",e)},expression:"updatedData.mbnumber"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Email",type:"email",outlined:""},model:{value:t.updatedData.email,callback:function(e){t.$set(t.updatedData,"email",e)},expression:"updatedData.email"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Company Name",type:"text",outlined:""},model:{value:t.updatedData.company.name,callback:function(e){t.$set(t.updatedData.company,"name",e)},expression:"updatedData.company.name"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Company URL",type:"url",outlined:""},model:{value:t.updatedData.company.url,callback:function(e){t.$set(t.updatedData.company,"url",e)},expression:"updatedData.company.url"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"City",type:"text",outlined:""},model:{value:t.updatedData.city,callback:function(e){t.$set(t.updatedData,"city",e)},expression:"updatedData.city"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Country",type:"text",outlined:""},model:{value:t.updatedData.country,callback:function(e){t.$set(t.updatedData,"country",e)},expression:"updatedData.country"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Social Links")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Facebook",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.facebook,callback:function(e){t.$set(t.updatedData.socialLinks,"facebook",e)},expression:"updatedData.socialLinks.facebook"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Twitter",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.twitter,callback:function(e){t.$set(t.updatedData.socialLinks,"twitter",e)},expression:"updatedData.socialLinks.twitter"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Github",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.github,callback:function(e){t.$set(t.updatedData.socialLinks,"github",e)},expression:"updatedData.socialLinks.github"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"LinkdeIN",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.linkedin,callback:function(e){t.$set(t.updatedData.socialLinks,"linkedin",e)},expression:"updatedData.socialLinks.linkedin"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Medium",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.medium,callback:function(e){t.$set(t.updatedData.socialLinks,"medium",e)},expression:"updatedData.socialLinks.medium"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Website",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.web,callback:function(e){t.$set(t.updatedData.socialLinks,"web",e)},expression:"updatedData.socialLinks.web"}})],1)],1)],1)],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"primary",loading:t.isUpdating},on:{click:t.updateData}},[t._v("Update Details")])],1)],1):t._e()],1)},w=[],x={props:{speakerData:{}},data:function(){return{dialog:!1,visiblity:[!0,!1],imageUploading:!1,imagePre:"",dialogImageUload:!1,imageUpload:[],isUpdating:!1,updatedData:{visible:this.speakerData.visible,name:this.speakerData.name,designation:this.speakerData.designation,mbnumber:this.speakerData.mbnumber,email:this.speakerData.email,image:this.speakerData.image,bio:this.speakerData.bio,id:this.speakerData.id,city:this.speakerData.city,country:this.speakerData.country,company:{name:this.speakerData.company.name,url:this.speakerData.company.url},socialLinks:{facebook:this.speakerData.socialLinks.facebook,github:this.speakerData.socialLinks.github,linkedin:this.speakerData.socialLinks.linkedin,medium:this.speakerData.socialLinks.medium,twitter:this.speakerData.socialLinks.twitter,web:this.speakerData.socialLinks.web}}}},methods:{onFileChange:function(){var t=this,e=new FileReader;e.readAsDataURL(this.imageUpload),e.onload=function(){t.imagePre=e.result}},uploadImage:function(){var t=this;this.imageUploading=!0;var e="".concat(this.updatedData.id,".").concat(this.imageUpload.name.split(".")[1]),a=o["a"].storage.ref("speakers/"+e);a.put(this.imageUpload).then((function(){a.getDownloadURL().then((function(e){t.updatedData.image=e,t.imageUploading=!1}))})),this.dialogImageUload=!1},updateData:function(){var t=this;this.isUpdating=!0,o["a"].firestore.collection("speakers").doc(this.updatedData.id).update({visible:this.updatedData.visible,id:this.speakerData.id,name:this.updatedData.name,designation:this.updatedData.designation,mbnumber:this.updatedData.mbnumber,email:this.updatedData.email,image:this.updatedData.image,bio:this.updatedData.bio,city:this.updatedData.city,country:this.updatedData.country,company:{name:this.updatedData.company.name,url:this.updatedData.company.url},socialLinks:{facebook:this.updatedData.socialLinks.facebook,github:this.updatedData.socialLinks.github,linkedin:this.updatedData.socialLinks.linkedin,medium:this.updatedData.socialLinks.medium,twitter:this.updatedData.socialLinks.twitter,web:this.updatedData.socialLinks.web}}).then((function(){t.isUpdating=!1,t.dialog=!1,t.$emit("showEditSuccess",!0)})).catch((function(){t.isUpdating=!1}))}}},C=x,_=a("62ad"),O=a("a523"),$=a("ce7e"),S=a("23a7"),L=a("4bd4"),V=a("adda"),I=a("0fd9"),U=a("b974"),P=a("2fa4"),T=a("8654"),j=a("a844"),E=Object(d["a"])(C,D,w,!1,null,null,null),A=E.exports;p()(E,{VBtn:m["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:_["a"],VContainer:O["a"],VDialog:h["a"],VDivider:$["a"],VFileInput:S["a"],VForm:L["a"],VIcon:b["a"],VImg:V["a"],VRow:I["a"],VSelect:U["a"],VSpacer:P["a"],VTextField:T["a"],VTextarea:j["a"],VTooltip:g["a"]});var F={name:"viewSpeakers",components:{removeSpeakers:y,editSpeaker:A},data:function(){return{speaker:{},isLoading:!0,isSpeakerFound:!0,snackbarSuccess:!1}},mounted:function(){o["a"].auth.currentUser||this.$router.replace("/admin")},methods:{editSuccessFunction:function(){this.snackbarSuccess=!0,this.loadData()},loadData:function(){var t=this;this.isLoading=!0,o["a"].firestore.collection("speakers").doc(this.$route.params.id).get().then((function(e){e.exists?(t.speaker=e.data(),t.isLoading=!1):(t.isSpeakerFound=!1,t.isLoading=!1)}))}},created:function(){this.loadData()}},W=F,z=(a("167f"),a("8212")),M=a("cc20"),N=(a("8f5a"),a("7efd")),R=a("a9ad"),B=a("58df");function X(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function G(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?X(a,!0).forEach((function(e){q(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):X(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function q(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var J=Object(B["a"])(N["a"],R["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return G(G({},N["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,G({},N["a"].options.methods.genData.call(this)))}}}),H=a("a75b"),K=a("490a"),Q=a("2db4"),Y=a("71d9"),Z=Object(d["a"])(W,s,i,!1,null,null,null);e["default"]=Z.exports;p()(Z,{VAvatar:z["a"],VBtn:m["a"],VChip:M["a"],VChipGroup:J,VCol:_["a"],VContainer:O["a"],VContent:H["a"],VIcon:b["a"],VProgressCircular:K["a"],VRow:I["a"],VSnackbar:Q["a"],VSpacer:P["a"],VToolbar:Y["a"]})},"7efd":function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));a("608c");var s=a("9d26"),i=a("0789"),n=a("604c"),r=a("e4cd"),o=a("dc22"),l=a("c3f0"),c=a("58df");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m=Object(c["a"])(n["a"],r["a"]).extend({name:"base-slide-group",directives:{Resize:o["a"],Touch:l["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return u(u({},n["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing;case"mobile":return this.isMobile||this.isOverflowing;default:return!this.isMobile&&this.isOverflowing}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,a=t.wrapper;return e>Math.abs(this.scrollOffset)+a},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var a="".concat(t[0].toUpperCase()).concat(t.slice(1)),i=this["has".concat(a)];return this.showArrows||i?this.$createElement(s["a"],{props:{disabled:!i}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(i["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,a,s){var i=a?-1:1,n=i*s+("prev"===t?-1:1)*e.wrapper;return i*Math.max(Math.min(n,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,a=t.wrapper,s=e.clientWidth-a.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,a,s){var i=t.clientWidth,n=a?e.content-t.offsetLeft-i:t.offsetLeft;a&&(s=-s);var r=e.wrapper+s,o=i+n,l=.4*i;return n<s?s=Math.max(n-l,0):r<o&&(s=Math.min(s-(r-o-l),e.content-e.wrapper)),a?-s:s},calculateCenteredOffset:function(t,e,a){var s=t.offsetLeft,i=t.clientWidth;if(a){var n=e.content-s-i/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,n))}var r=s+i/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,r))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,a=e.content,s=e.wrapper;t.widths={content:a?a.clientWidth:0,wrapper:s?s.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["b"]=m.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},"8f5a":function(t,e,a){},e2b5:function(t,e,a){}}]);