(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{102:function(n,e){function o(e){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}o.keys=function(){return[]},o.resolve=o,(n.exports=o).id=102},104:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o(1),o(105);var t=o(35),l=o(41),r=o(1),a=o(105),u=(i.prototype.checkForUpdate=function(){if(this.swUpdate.isEnabled){var n=this.swUpdate.available.pipe(l.mapTo(!0),l.timeout(1e3),l.catchError(function(){return t.of(!1)}));return t.from(this.swUpdate.checkForUpdate()).pipe(l.switchMap(function(){return n}))}return t.timer(1e3).pipe(l.mapTo(!1))},i.ngInjectableDef=r.ɵɵdefineInjectable({factory:function(){return new i(r.ɵɵinject(r.ApplicationRef),r.ɵɵinject(a.SwUpdate))},token:i,providedIn:"root"}),i);function i(n,e){var o=this;this.appRef=n,this.swUpdate=e,this.swUpdate.isEnabled&&this.appRef.isStable.pipe(l.first(function(n){return!0===n}),l.switchMap(function(){return o.swUpdate.available})).subscribe(function(){o.swUpdate.activateUpdate().then(function(){return document.location.reload()})})}e.PwaService=u},106:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o(1),o(60);var t=(l.prototype.ngOnInit=function(){var e=this;this.splash=localStorage.getItem("splash"),"false"!==this.splash?(this.display=!0,this.splash=localStorage.setItem("splash","false")):this.display=!1,this.todoService.getTodos().subscribe(function(n){e.todos=n})},l.prototype.deleteTodo=function(e){this.todos=this.todos.filter(function(n){return n.id!==e.id}),this.todoService.deleteTodo(e).subscribe()},l.prototype.addTodo=function(n){var e=this;this.todoService.addTodo(n).subscribe(function(n){e.todos.push(n)})},l);function l(n){this.todoService=n}e.TodosComponent=t},111:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function t(){}e.AppComponent=t},112:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o(1),o(104),o(53);var t=(l.prototype.ngOnInit=function(){var e=this;this.pwaService.checkForUpdate().subscribe(function(n){e.show=n,e.cdr.detectChanges()})},l);function l(n,e,o,t){this.pwaService=n,this.cdr=e,this.appRef=o,this.router=t,this.show=!0}e.SplashScreenComponent=t},114:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(1),l=(o(60),o(130),r.prototype.ngOnInit=function(){},r.prototype.setClasses=function(){return{todo:!0,"is-complete":this.todo.completed}},r.prototype.onToggle=function(n){n.completed=!n.completed,this.todoService.toggleCompleted(n).subscribe(function(n){return console.log(n)})},r.prototype.onDelete=function(n){this.deleteTodo.emit(n)},r);function r(n){this.todoService=n,this.deleteTodo=new t.EventEmitter}e.TodoItemComponent=l},115:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(1),l=(r.prototype.ngOnInit=function(){},r.prototype.onSubmit=function(){var n={title:this.title,completed:!1};this.addTodo.emit(n),this.title=""},r);function r(){this.addTodo=new t.EventEmitter}e.AddTodoComponent=l},116:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o(1),o(60);var t=(l.prototype.ngOnInit=function(){},l.prototype.refreshData=function(){this.todoService.refreshData()},l);function l(n){this.todoService=n}e.HeaderComponent=t},120:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(1),l=o(19),r=o(121);t.enableProdMode(),l.platformBrowser().bootstrapModuleFactory(r.AppModuleNgFactory)},121:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(1),l=o(122),r=o(111),a=o(123),u=o(124),i=o(133),d=o(4),s=o(19),p=o(26),c=o(99),_=o(13),m=o(53),f=o(54),g=o(103),h=o(105),C=o(106),v=o(138),y=o(100),T=o(76),M=o(139),O=t.ɵcmf(l.AppModule,[r.AppComponent],function(n){return t.ɵmod([t.ɵmpd(512,t.ComponentFactoryResolver,t.ɵCodegenComponentFactoryResolver,[[8,[a.ɵangular_packages_router_router_lNgFactory,u.TodosComponentNgFactory,i.AppComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.ɵmpd(5120,t.LOCALE_ID,t.ɵangular_packages_core_core_p,[[3,t.LOCALE_ID]]),t.ɵmpd(4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d.ɵangular_packages_common_common_a]]),t.ɵmpd(5120,t.ɵangular_packages_core_core_ba,t.ɵangular_packages_core_core_r,[t.NgZone]),t.ɵmpd(5120,t.APP_ID,t.ɵangular_packages_core_core_f,[]),t.ɵmpd(5120,t.IterableDiffers,t.ɵangular_packages_core_core_n,[]),t.ɵmpd(5120,t.KeyValueDiffers,t.ɵangular_packages_core_core_o,[]),t.ɵmpd(4608,s.DomSanitizer,s.ɵDomSanitizerImpl,[d.DOCUMENT]),t.ɵmpd(6144,t.Sanitizer,null,[s.DomSanitizer]),t.ɵmpd(4608,s.HAMMER_GESTURE_CONFIG,s.HammerGestureConfig,[]),t.ɵmpd(5120,s.EVENT_MANAGER_PLUGINS,function(n,e,o,t,l,r,a,u){return[new s.ɵDomEventsPlugin(n,e,o),new s.ɵKeyEventsPlugin(t),new s.ɵHammerGesturesPlugin(l,r,a,u)]},[d.DOCUMENT,t.NgZone,t.PLATFORM_ID,d.DOCUMENT,d.DOCUMENT,s.HAMMER_GESTURE_CONFIG,t.ɵConsole,[2,s.HAMMER_LOADER]]),t.ɵmpd(4608,s.EventManager,s.EventManager,[s.EVENT_MANAGER_PLUGINS,t.NgZone]),t.ɵmpd(135680,s.ɵDomSharedStylesHost,s.ɵDomSharedStylesHost,[d.DOCUMENT]),t.ɵmpd(4608,s.ɵDomRendererFactory2,s.ɵDomRendererFactory2,[s.EventManager,s.ɵDomSharedStylesHost,t.APP_ID]),t.ɵmpd(5120,p.AnimationDriver,c.ɵangular_packages_platform_browser_animations_animations_a,[]),t.ɵmpd(5120,p.ɵAnimationStyleNormalizer,c.ɵangular_packages_platform_browser_animations_animations_b,[]),t.ɵmpd(4608,p.ɵAnimationEngine,c.ɵInjectableAnimationEngine,[d.DOCUMENT,p.AnimationDriver,p.ɵAnimationStyleNormalizer]),t.ɵmpd(5120,t.RendererFactory2,c.ɵangular_packages_platform_browser_animations_animations_c,[s.ɵDomRendererFactory2,p.ɵAnimationEngine,t.NgZone]),t.ɵmpd(6144,s.ɵSharedStylesHost,null,[s.ɵDomSharedStylesHost]),t.ɵmpd(4608,t.Testability,t.Testability,[t.NgZone]),t.ɵmpd(4608,_.AnimationBuilder,c.ɵBrowserAnimationBuilder,[t.RendererFactory2,d.DOCUMENT]),t.ɵmpd(5120,m.ActivatedRoute,m.ɵangular_packages_router_router_g,[m.Router]),t.ɵmpd(4608,m.NoPreloading,m.NoPreloading,[]),t.ɵmpd(6144,m.PreloadingStrategy,null,[m.NoPreloading]),t.ɵmpd(135680,m.RouterPreloader,m.RouterPreloader,[m.Router,t.NgModuleFactoryLoader,t.Compiler,t.Injector,m.PreloadingStrategy]),t.ɵmpd(4608,m.PreloadAllModules,m.PreloadAllModules,[]),t.ɵmpd(5120,m.ɵangular_packages_router_router_o,m.ɵangular_packages_router_router_c,[m.Router,d.ViewportScroller,m.ROUTER_CONFIGURATION]),t.ɵmpd(5120,m.ROUTER_INITIALIZER,m.ɵangular_packages_router_router_j,[m.ɵangular_packages_router_router_h]),t.ɵmpd(5120,t.APP_BOOTSTRAP_LISTENER,function(n){return[n]},[m.ROUTER_INITIALIZER]),t.ɵmpd(4608,f.HttpXsrfTokenExtractor,f.ɵangular_packages_common_http_http_g,[d.DOCUMENT,t.PLATFORM_ID,f.ɵangular_packages_common_http_http_e]),t.ɵmpd(4608,f.ɵangular_packages_common_http_http_h,f.ɵangular_packages_common_http_http_h,[f.HttpXsrfTokenExtractor,f.ɵangular_packages_common_http_http_f]),t.ɵmpd(5120,f.HTTP_INTERCEPTORS,function(n){return[n]},[f.ɵangular_packages_common_http_http_h]),t.ɵmpd(4608,f.ɵangular_packages_common_http_http_d,f.ɵangular_packages_common_http_http_d,[]),t.ɵmpd(6144,f.XhrFactory,null,[f.ɵangular_packages_common_http_http_d]),t.ɵmpd(4608,f.HttpXhrBackend,f.HttpXhrBackend,[f.XhrFactory]),t.ɵmpd(6144,f.HttpBackend,null,[f.HttpXhrBackend]),t.ɵmpd(4608,f.HttpHandler,f.ɵHttpInterceptingHandler,[f.HttpBackend,t.Injector]),t.ɵmpd(4608,f.HttpClient,f.HttpClient,[f.HttpHandler]),t.ɵmpd(4608,g.ɵangular_packages_forms_forms_o,g.ɵangular_packages_forms_forms_o,[]),t.ɵmpd(5120,h.ɵangular_packages_service_worker_service_worker_a,h.ɵangular_packages_service_worker_service_worker_d,[h.SwRegistrationOptions,t.PLATFORM_ID]),t.ɵmpd(4608,h.SwPush,h.SwPush,[h.ɵangular_packages_service_worker_service_worker_a]),t.ɵmpd(4608,h.SwUpdate,h.SwUpdate,[h.ɵangular_packages_service_worker_service_worker_a]),t.ɵmpd(1073742336,d.CommonModule,d.CommonModule,[]),t.ɵmpd(1024,t.ErrorHandler,s.ɵangular_packages_platform_browser_platform_browser_a,[]),t.ɵmpd(1024,t.NgProbeToken,function(){return[m.ɵangular_packages_router_router_b()]},[]),t.ɵmpd(512,m.ɵangular_packages_router_router_h,m.ɵangular_packages_router_router_h,[t.Injector]),t.ɵmpd(256,h.ɵangular_packages_service_worker_service_worker_b,"ngsw-worker.js",[]),t.ɵmpd(256,h.SwRegistrationOptions,{enabled:!1,registrationStrategy:"registerImmediately"},[]),t.ɵmpd(1024,t.APP_INITIALIZER,function(n,e,o,t,l,r){return[s.ɵangular_packages_platform_browser_platform_browser_j(n),m.ɵangular_packages_router_router_i(e),h.ɵangular_packages_service_worker_service_worker_c(o,t,l,r)]},[[2,t.NgProbeToken],m.ɵangular_packages_router_router_h,t.Injector,h.ɵangular_packages_service_worker_service_worker_b,h.SwRegistrationOptions,t.PLATFORM_ID]),t.ɵmpd(512,t.ApplicationInitStatus,t.ApplicationInitStatus,[[2,t.APP_INITIALIZER]]),t.ɵmpd(131584,t.ApplicationRef,t.ApplicationRef,[t.NgZone,t.ɵConsole,t.Injector,t.ErrorHandler,t.ComponentFactoryResolver,t.ApplicationInitStatus]),t.ɵmpd(1073742336,t.ApplicationModule,t.ApplicationModule,[t.ApplicationRef]),t.ɵmpd(1073742336,s.BrowserModule,s.BrowserModule,[[3,s.BrowserModule]]),t.ɵmpd(1073742336,c.BrowserAnimationsModule,c.BrowserAnimationsModule,[]),t.ɵmpd(1024,m.ɵangular_packages_router_router_a,m.ɵangular_packages_router_router_e,[[3,m.Router]]),t.ɵmpd(512,m.UrlSerializer,m.DefaultUrlSerializer,[]),t.ɵmpd(512,m.ChildrenOutletContexts,m.ChildrenOutletContexts,[]),t.ɵmpd(256,m.ROUTER_CONFIGURATION,{},[]),t.ɵmpd(1024,d.LocationStrategy,m.ɵangular_packages_router_router_d,[d.PlatformLocation,[2,d.APP_BASE_HREF],m.ROUTER_CONFIGURATION]),t.ɵmpd(512,d.Location,d.Location,[d.LocationStrategy,d.PlatformLocation]),t.ɵmpd(512,t.Compiler,t.Compiler,[]),t.ɵmpd(512,t.NgModuleFactoryLoader,t.SystemJsNgModuleLoader,[t.Compiler,[2,t.SystemJsNgModuleLoaderConfig]]),t.ɵmpd(1024,m.ROUTES,function(){return[[{path:"",component:C.TodosComponent}]]},[]),t.ɵmpd(1024,m.Router,m.ɵangular_packages_router_router_f,[t.ApplicationRef,m.UrlSerializer,m.ChildrenOutletContexts,d.Location,t.Injector,t.NgModuleFactoryLoader,t.Compiler,m.ROUTES,m.ROUTER_CONFIGURATION,[2,m.UrlHandlingStrategy],[2,m.RouteReuseStrategy]]),t.ɵmpd(1073742336,m.RouterModule,m.RouterModule,[[2,m.ɵangular_packages_router_router_a],[2,m.Router]]),t.ɵmpd(1073742336,v.AppRoutingModule,v.AppRoutingModule,[]),t.ɵmpd(1073742336,f.HttpClientXsrfModule,f.HttpClientXsrfModule,[]),t.ɵmpd(1073742336,f.HttpClientModule,f.HttpClientModule,[]),t.ɵmpd(1073742336,g.ɵangular_packages_forms_forms_d,g.ɵangular_packages_forms_forms_d,[]),t.ɵmpd(1073742336,g.FormsModule,g.FormsModule,[]),t.ɵmpd(1073742336,y.BidiModule,y.BidiModule,[]),t.ɵmpd(1073742336,T.MatCommonModule,T.MatCommonModule,[[2,T.MATERIAL_SANITY_CHECKS],[2,s.HAMMER_LOADER]]),t.ɵmpd(1073742336,M.MatIconModule,M.MatIconModule,[]),t.ɵmpd(1073742336,h.ServiceWorkerModule,h.ServiceWorkerModule,[]),t.ɵmpd(1073742336,l.AppModule,l.AppModule,[]),t.ɵmpd(256,t.ɵAPP_ROOT,!0,[]),t.ɵmpd(256,c.ANIMATION_MODULE_TYPE,"BrowserAnimations",[]),t.ɵmpd(256,f.ɵangular_packages_common_http_http_e,"XSRF-TOKEN",[]),t.ɵmpd(256,f.ɵangular_packages_common_http_http_f,"X-XSRF-TOKEN",[])])});e.AppModuleNgFactory=O},122:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function t(){}e.AppModule=t},124:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(125),l=o(1),r=o(126),a=o(112),u=o(104),i=o(53),d=o(128),s=o(114),p=o(60),c=o(4),_=o(131),m=o(115),f=o(106),g=[t.styles],h=l.ɵcrt({encapsulation:0,styles:g,data:{}});function C(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"app-splash-screen",[],null,null,null,r.View_SplashScreenComponent_0,r.RenderType_SplashScreenComponent)),l.ɵdid(1,114688,null,0,a.SplashScreenComponent,[u.PwaService,l.ChangeDetectorRef,l.ApplicationRef,i.Router],null,null)],function(n,e){n(e,1,0)},null)}function v(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"app-todo-item",[],null,[[null,"deleteTodo"]],function(n,e,o){var t=!0,l=n.component;return"deleteTodo"===e&&(t=!1!==l.deleteTodo(o)&&t),t},d.View_TodoItemComponent_0,d.RenderType_TodoItemComponent)),l.ɵdid(1,114688,null,0,s.TodoItemComponent,[p.TodoService],{todo:[0,"todo"]},{deleteTodo:"deleteTodo"})],function(n,e){n(e,1,0,e.context.$implicit)},null)}function y(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,4,"div",[["class","container-todo"]],null,null,null,null,null)),(n()(),l.ɵand(16777216,null,null,1,null,C)),l.ɵdid(2,16384,null,0,c.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l.ɵand(16777216,null,null,1,null,v)),l.ɵdid(4,278528,null,0,c.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),l.ɵeld(5,0,null,null,1,"app-add-todo",[],null,[[null,"addTodo"]],function(n,e,o){var t=!0,l=n.component;return"addTodo"===e&&(t=!1!==l.addTodo(o)&&t),t},_.View_AddTodoComponent_0,_.RenderType_AddTodoComponent)),l.ɵdid(6,114688,null,0,m.AddTodoComponent,[],null,{addTodo:"addTodo"})],function(n,e){var o=e.component;n(e,2,0,o.display),n(e,4,0,o.todos),n(e,6,0)},null)}function T(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"app-todos",[],null,null,null,y,h)),l.ɵdid(1,114688,null,0,f.TodosComponent,[p.TodoService],null,null)],function(n,e){n(e,1,0)},null)}e.RenderType_TodosComponent=h,e.View_TodosComponent_0=y,e.View_TodosComponent_Host_0=T;var M=l.ɵccf("app-todos",f.TodosComponent,T,{},{},[]);e.TodosComponentNgFactory=M},125:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=[".container-todo[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 105.5%;\n  overflow-y: auto; }"]},126:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(127),l=o(1),r=o(4),a=o(112),u=o(104),i=o(53),d=[t.styles],s=l.ɵcrt({encapsulation:0,styles:d,data:{animation:[{type:7,name:"fadeOut",definitions:[{type:1,expr:":leave",animation:[{type:11,selector:":leave",animation:{type:9,options:null},options:{optional:!0}},{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:300}],options:null}],options:{}}]}});function p(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,2,"div",[["class","splash-screen"]],[[24,"@fadeOut",0]],null,null,null,null)),(n()(),l.ɵeld(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.ɵted(-1,null,["Welcome to TODO application"]))],null,function(n,e){n(e,0,0,void 0)})}function c(n){return l.ɵvid(2,[(n()(),l.ɵand(16777216,null,null,1,null,p)),l.ɵdid(1,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,1,0,e.component.show)},null)}function _(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"app-splash-screen",[],null,null,null,c,s)),l.ɵdid(1,114688,null,0,a.SplashScreenComponent,[u.PwaService,l.ChangeDetectorRef,l.ApplicationRef,i.Router],null,null)],function(n,e){n(e,1,0)},null)}e.RenderType_SplashScreenComponent=s,e.View_SplashScreenComponent_0=c,e.View_SplashScreenComponent_Host_0=_;var m=l.ɵccf("app-splash-screen",a.SplashScreenComponent,_,{},{},[]);e.SplashScreenComponentNgFactory=m},127:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=[".splash-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 9999;\n  background: #5E83F4;\n  color: #fff; }"]},128:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(129),l=o(1),r=o(4),a=o(114),u=o(60),i=[t.styles],d=l.ɵcrt({encapsulation:0,styles:i,data:{}});function s(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,10,"div",[],null,null,null,null,null)),l.ɵprd(512,null,r.ɵNgClassImpl,r.ɵNgClassR2Impl,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l.ɵdid(2,278528,null,0,r.NgClass,[r.ɵNgClassImpl],{ngClass:[0,"ngClass"]},null),(n()(),l.ɵeld(3,0,null,null,7,"table",[],null,null,null,null,null)),(n()(),l.ɵeld(4,0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),l.ɵeld(5,0,null,null,3,"td",[["class","todo-text"]],null,null,null,null,null)),(n()(),l.ɵeld(6,0,null,null,0,"input",[["class","fa fa-circle-thin co"],["type","checkbox"]],[[8,"id",0],[8,"checked",0]],[[null,"change"]],function(n,e,o){var t=!0,l=n.component;return"change"===e&&(t=!1!==l.onToggle(l.todo)&&t),t},null,null)),(n()(),l.ɵeld(7,0,null,null,1,"label",[],[[8,"htmlFor",0]],null,null,null,null)),(n()(),l.ɵted(8,null,[" "," "])),(n()(),l.ɵeld(9,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),l.ɵeld(10,0,null,null,0,"button",[["class","fa fa-trash-o de"]],null,[[null,"click"]],function(n,e,o){var t=!0,l=n.component;return"click"===e&&(t=!1!==l.onDelete(l.todo)&&t),t},null,null))],function(n,e){n(e,2,0,e.component.setClasses())},function(n,e){var o=e.component;n(e,6,0,l.ɵinlineInterpolate(1,"",o.todo.id,""),o.todo.completed),n(e,7,0,l.ɵinlineInterpolate(1,"",o.todo.id,"")),n(e,8,0,o.todo.title)})}function p(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"app-todo-item",[],null,null,null,s,d)),l.ɵdid(1,114688,null,0,a.TodoItemComponent,[u.TodoService],null,null)],function(n,e){n(e,1,0)},null)}e.RenderType_TodoItemComponent=d,e.View_TodoItemComponent_0=s,e.View_TodoItemComponent_Host_0=p;var c=l.ɵccf("app-todo-item",a.TodoItemComponent,p,{todo:"todo"},{deleteTodo:"deleteTodo"},[]);e.TodoItemComponentNgFactory=c},129:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=['.fa[_ngcontent-%COMP%] {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.del[_ngcontent-%COMP%] {\n  background: #ff0000;\n  color: #fff;\n  border: none;\n  padding: 5px 9px;\n  border-radius: 50%;\n  cursor: pointer;\n  float: right; }\n\n.fa-trash-o[_ngcontent-%COMP%]:before {\n  content: "\\F014"; }\n\n.todo[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 10px;\n  border-bottom: 1px #ccc dotted; }\n\n.is-complete[_ngcontent-%COMP%] {\n  text-decoration: line-through; }\n\n.todo-text[_ngcontent-%COMP%] {\n  width: 400px; }']},130:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function t(n,e,o){this.id=n,this.title=e,this.completed=o}e.Todo=t},131:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(132),r=o(1),l=o(103),a=o(115),u=[t.styles],i=r.ɵcrt({encapsulation:0,styles:u,data:{}});function d(n){return r.ɵvid(0,[(n()(),r.ɵeld(0,0,null,null,12,"div",[["class","add-to-do"]],null,null,null,null,null)),(n()(),r.ɵeld(1,0,null,null,11,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,e,o){var t=!0,l=n.component;return"submit"===e&&(t=!1!==r.ɵnov(n,3).onSubmit(o)&&t),"reset"===e&&(t=!1!==r.ɵnov(n,3).onReset()&&t),"ngSubmit"===e&&(t=!1!==l.onSubmit()&&t),t},null,null)),r.ɵdid(2,16384,null,0,l.ɵangular_packages_forms_forms_z,[],null,null),r.ɵdid(3,4210688,null,0,l.NgForm,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),r.ɵprd(2048,null,l.ControlContainer,null,[l.NgForm]),r.ɵdid(5,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),r.ɵeld(6,0,null,null,0,"i",[["class","fa fa-plus-circle"]],null,null,null,null,null)),(n()(),r.ɵeld(7,0,null,null,5,"input",[["name","title"],["placeholder","Add Todo..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,e,o){var t=!0,l=n.component;return"input"===e&&(t=!1!==r.ɵnov(n,8)._handleInput(o.target.value)&&t),"blur"===e&&(t=!1!==r.ɵnov(n,8).onTouched()&&t),"compositionstart"===e&&(t=!1!==r.ɵnov(n,8)._compositionStart()&&t),"compositionend"===e&&(t=!1!==r.ɵnov(n,8)._compositionEnd(o.target.value)&&t),"ngModelChange"===e&&(t=!1!==(l.title=o)&&t),t},null,null)),r.ɵdid(8,16384,null,0,l.DefaultValueAccessor,[r.Renderer2,r.ElementRef,[2,l.COMPOSITION_BUFFER_MODE]],null,null),r.ɵprd(1024,null,l.NG_VALUE_ACCESSOR,function(n){return[n]},[l.DefaultValueAccessor]),r.ɵdid(10,671744,null,0,l.NgModel,[[2,l.ControlContainer],[8,null],[8,null],[6,l.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),r.ɵprd(2048,null,l.NgControl,null,[l.NgModel]),r.ɵdid(12,16384,null,0,l.NgControlStatus,[[4,l.NgControl]],null,null)],function(n,e){n(e,10,0,"title",e.component.title)},function(n,e){n(e,1,0,r.ɵnov(e,5).ngClassUntouched,r.ɵnov(e,5).ngClassTouched,r.ɵnov(e,5).ngClassPristine,r.ɵnov(e,5).ngClassDirty,r.ɵnov(e,5).ngClassValid,r.ɵnov(e,5).ngClassInvalid,r.ɵnov(e,5).ngClassPending),n(e,7,0,r.ɵnov(e,12).ngClassUntouched,r.ɵnov(e,12).ngClassTouched,r.ɵnov(e,12).ngClassPristine,r.ɵnov(e,12).ngClassDirty,r.ɵnov(e,12).ngClassValid,r.ɵnov(e,12).ngClassInvalid,r.ɵnov(e,12).ngClassPending)})}function s(n){return r.ɵvid(0,[(n()(),r.ɵeld(0,0,null,null,1,"app-add-todo",[],null,null,null,d,i)),r.ɵdid(1,114688,null,0,a.AddTodoComponent,[],null,null)],function(n,e){n(e,1,0)},null)}e.RenderType_AddTodoComponent=i,e.View_AddTodoComponent_0=d,e.View_AddTodoComponent_Host_0=s;var p=r.ɵccf("app-add-todo",a.AddTodoComponent,s,{},{addTodo:"addTodo"},[]);e.AddTodoComponentNgFactory=p},132:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=["@font-face {\n  font-family: 'FontAwesome';\n  src: url([object Module]);\n  src: url([object Module]?#iefix&v=4.7.0) format(\"embedded-opentype\"), url([object Module]) format(\"woff2\"), url([object Module]) format(\"woff\"), url([object Module]) format(\"truetype\"), url([object Module]#fontawesomeregular) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.add-to-do[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #4162f6;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 20px; }\n\n.fa[_ngcontent-%COMP%] {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.fa-plus-circle[_ngcontent-%COMP%]   before[_ngcontent-%COMP%] {\n  content: \"\\F055\"; }\n\n.add-to-do[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 40px;\n  color: #4162f6; }\n\n.add-to-do[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 35px;\n  width: 360px;\n  background-color: transparent;\n  border: none;\n  font-size: 20px;\n  padding-left: 50px; }\n\n.add-to-do[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: #4162f6;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 20px; }\n\n.add-to-do[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #4162f6;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 20px; }\n\n.add-to-do[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #4162f6;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 20px; }\n\n.add-to-do[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #4162f6;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 20px; }"]},133:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(134),l=o(1),r=o(135),a=o(116),u=o(60),i=o(53),d=o(111),s=[t.styles],p=l.ɵcrt({encapsulation:0,styles:s,data:{}});function c(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,3,"head",[],null,null,null,null,null)),(n()(),l.ɵeld(1,0,null,null,0,"link",[["href","../favicon.ico"],["rel","icon"],["type","image/x-icon"]],null,null,null,null,null)),(n()(),l.ɵeld(2,0,null,null,0,"link",[["href","../manifest.webmanifest"],["rel","manifest"]],null,null,null,null,null)),(n()(),l.ɵeld(3,0,null,null,0,"link",[["href","../assets/style/addtohomescreen.css"],["rel","manifest"],["type","text/css"]],null,null,null,null,null)),(n()(),l.ɵeld(4,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(n()(),l.ɵeld(5,0,null,null,1,"app-header",[],null,null,null,r.View_HeaderComponent_0,r.RenderType_HeaderComponent)),l.ɵdid(6,114688,null,0,a.HeaderComponent,[u.TodoService],null,null),(n()(),l.ɵeld(7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.ɵdid(8,212992,null,0,i.RouterOutlet,[i.ChildrenOutletContexts,l.ViewContainerRef,l.ComponentFactoryResolver,[8,null],l.ChangeDetectorRef],null,null)],function(n,e){n(e,6,0),n(e,8,0)},null)}function _(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"app-root",[],null,null,null,c,p)),l.ɵdid(1,49152,null,0,d.AppComponent,[],null,null)],null,null)}e.RenderType_AppComponent=p,e.View_AppComponent_0=c,e.View_AppComponent_Host_0=_;var m=l.ɵccf("app-root",d.AppComponent,_,{},{},[]);e.AppComponentNgFactory=m},134:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=[".container[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 380px;\n  margin: 0 auto; }"]},135:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(136),l=o(1),r=o(116),a=o(60),u=[t.styles],i=l.ɵcrt({encapsulation:0,styles:u,data:{}});function d(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"header",[["class","header"]],null,null,null,null,null)),(n()(),l.ɵeld(1,0,null,null,0,"i",[["class","fa fa-refresh"]],null,[[null,"click"]],function(n,e,o){var t=!0,l=n.component;return"click"===e&&(t=!1!==l.refreshData()&&t),t},null,null))],null,null)}function s(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"app-header",[],null,null,null,d,i)),l.ɵdid(1,114688,null,0,r.HeaderComponent,[a.TodoService],null,null)],function(n,e){n(e,1,0)},null)}e.RenderType_HeaderComponent=i,e.View_HeaderComponent_0=d,e.View_HeaderComponent_Host_0=s;var p=l.ɵccf("app-header",r.HeaderComponent,s,{},{},[]);e.HeaderComponentNgFactory=p},136:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=['.header[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 200px;\n  background-image: url("https://www.befunky.com/images/wp/wp-2016-03-blur-background-featured-1.jpg?auto=webp&format=jpg&width=880");\n  background-size: 100% 200%;\n  background-repeat: no-repeat;\n  border-radius: 15px 15px 0 0;\n  position: relative; }\n\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none; }\n\n.fa-refresh[_ngcontent-%COMP%]:before {\n  content: "\\F021"; }\n\n.fa[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 90%;\n  margin-top: 10%;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }']},138:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function t(){}o(53),o(106).TodosComponent;e.AppRoutingModule=t},60:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(35),l=o(54),r=o(1),a=o(54),u={headers:new l.HttpHeaders({"Content-Type":"application/json"})},i=(d.prototype.getTodos=function(){return this.jsonTodo=JSON.parse(localStorage.getItem("TODOS")),null==this.jsonTodo&&(this.jsonTodo=[],localStorage.setItem("TODOS",JSON.stringify(this.jsonTodo))),console.log(this.jsonTodo),t.of(this.jsonTodo)},d.prototype.deleteTodo=function(e){return this.jsonTodo=JSON.parse(localStorage.getItem("TODOS")),this.jsonTodo=this.jsonTodo.filter(function(n){return n.title!==e.title}),console.log(this.jsonTodo),localStorage.setItem("TODOS",JSON.stringify(this.jsonTodo)),window.location.reload(),t.of(e)},d.prototype.addTodo=function(n){return location.reload(),null==localStorage&&(localStorage=new Storage),this.jsonTodo.push(n),localStorage.setItem("TODOS",JSON.stringify(this.jsonTodo)),console.log(this.jsonTodo),t.of(n)},d.prototype.toggleCompleted=function(n){var e=this.todosUrl+"/"+n.id;return this.http.put(e,n,u)},d.prototype.refreshData=function(){localStorage.setItem("TODOS",JSON.stringify([])),localStorage.setItem("splash",JSON.stringify([])),location.reload()},d.ngInjectableDef=r.ɵɵdefineInjectable({factory:function(){return new d(r.ɵɵinject(a.HttpClient))},token:d,providedIn:"root"}),d);function d(n){this.http=n,this.todosUrl="http://localhost:4200",this.todoList=[],this.observableList=new t.BehaviorSubject([])}e.TodoService=i}},[[120,0,1,5]]]);