"use strict";(self.webpackChunkmonaco_custom_bundle=self.webpackChunkmonaco_custom_bundle||[]).push([[354],{93065:(e,t,s)=>{e.exports=s.p+"438800ec27a052889b4d.bin"},27291:(e,t,s)=>{e.exports=s.p+"c044fc234bbafc1662f3.json"},86354:(e,t,s)=>{s.r(t),s.d(t,{default:()=>W}),s(29769);var i=s(97108),r=s(80855),n=s(5976),a=s(60520),o=s(66663),g=s(78787),c=s(33108),d=s(72042),u=s(70666),h=s(1432),l=s(73733),p=s(18352),L=s(10829),S=s(59492),v=s(51381),f=s(47313),y=s(40382),_=s(24448),w=s(26904),k=s(43702),O=s(43557);const m=`${o.zI}/vscode-regexp-languagedetection`,b=`${o.SC}/vscode-regexp-languagedetection`,I=`${o.zI}/@vscode/vscode-languagedetection`,U=`${o.SC}/@vscode/vscode-languagedetection`;let B=class e extends n.JT{static{this.enablementSettingKey="workbench.editor.languageDetection"}static{this.historyBasedEnablementConfig="workbench.editor.historyBasedLanguageDetection"}static{this.preferHistoryConfig="workbench.editor.preferHistoryBasedLanguageDetection"}static{this.workspaceOpenedLanguagesStorageKey="workbench.editor.languageDetectionOpenedLanguages.workspace"}static{this.globalOpenedLanguagesStorageKey="workbench.editor.languageDetectionOpenedLanguages.global"}constructor(e,t,s,i,r,n,a,g,c,d,u){super(),this._environmentService=e,this._configurationService=s,this._diagnosticsService=i,this._workspaceContextService=r,this._editorService=a,this._logService=d,this.hasResolvedWorkspaceLanguageIds=!1,this.workspaceLanguageIds=new Set,this.sessionOpenedLanguageIds=new Set,this.historicalGlobalOpenedLanguageIds=new k.z6(12),this.historicalWorkspaceOpenedLanguageIds=new k.z6(12),this.dirtyBiases=!0,this.langBiases={},this._languageDetectionWorkerClient=new x(n,t,g,this._environmentService.isBuilt&&!h.$L?o.Gi.asBrowserUri(`${U}/dist/lib/index.js`).toString(!0):o.Gi.asBrowserUri(`${I}/dist/lib/index.js`).toString(!0),this._environmentService.isBuilt&&!h.$L?o.Gi.asBrowserUri(`${U}/model/model.json`).toString(!0):o.Gi.asBrowserUri(`${I}/model/model.json`).toString(!0),this._environmentService.isBuilt&&!h.$L?o.Gi.asBrowserUri(`${U}/model/group1-shard1of1.bin`).toString(!0):o.Gi.asBrowserUri(`${I}/model/group1-shard1of1.bin`).toString(!0),this._environmentService.isBuilt&&!h.$L?o.Gi.asBrowserUri(`${b}/dist/index.js`).toString(!0):o.Gi.asBrowserUri(`${m}/dist/index.js`).toString(!0),u),this.initEditorOpenedListeners(c)}async resolveWorkspaceLanguageIds(){if(this.hasResolvedWorkspaceLanguageIds)return;this.hasResolvedWorkspaceLanguageIds=!0;const e=await this._diagnosticsService.getWorkspaceFileExtensions(this._workspaceContextService.getWorkspace());let t=0;for(const s of e.extensions){const e=this._languageDetectionWorkerClient.getLanguageId(s);if(e&&t<12&&(this.workspaceLanguageIds.add(e),t++,t>12))break}this.dirtyBiases=!0}isEnabledForLanguage(t){return!!t&&this._configurationService.getValue(e.enablementSettingKey,{overrideIdentifier:t})}getLanguageBiases(){if(!this.dirtyBiases)return this.langBiases;const e={};return this.sessionOpenedLanguageIds.forEach((t=>e[t]=(e[t]??0)+7)),this.workspaceLanguageIds.forEach((t=>e[t]=(e[t]??0)+5)),[...this.historicalWorkspaceOpenedLanguageIds.keys()].forEach((t=>e[t]=(e[t]??0)+3)),[...this.historicalGlobalOpenedLanguageIds.keys()].forEach((t=>e[t]=(e[t]??0)+1)),this._logService.trace("Session Languages:",JSON.stringify([...this.sessionOpenedLanguageIds])),this._logService.trace("Workspace Languages:",JSON.stringify([...this.workspaceLanguageIds])),this._logService.trace("Historical Workspace Opened Languages:",JSON.stringify([...this.historicalWorkspaceOpenedLanguageIds.keys()])),this._logService.trace("Historical Globally Opened Languages:",JSON.stringify([...this.historicalGlobalOpenedLanguageIds.keys()])),this._logService.trace("Computed Language Detection Biases:",JSON.stringify(e)),this.dirtyBiases=!1,this.langBiases=e,e}async detectLanguage(t,s){const i=this._configurationService.getValue(e.historyBasedEnablementConfig),r=this._configurationService.getValue(e.preferHistoryConfig);i&&await this.resolveWorkspaceLanguageIds();const n=i?this.getLanguageBiases():void 0;return this._languageDetectionWorkerClient.detectLanguage(t,n,r,s)}initEditorOpenedListeners(t){try{const s=JSON.parse(t.get(e.globalOpenedLanguagesStorageKey,0,"[]"));this.historicalGlobalOpenedLanguageIds.fromJSON(s)}catch(e){console.error(e)}try{const s=JSON.parse(t.get(e.workspaceOpenedLanguagesStorageKey,1,"[]"));this.historicalWorkspaceOpenedLanguageIds.fromJSON(s)}catch(e){console.error(e)}this._register(this._editorService.onDidActiveEditorChange((()=>{const s=this._editorService.activeTextEditorLanguageId;s&&this._editorService.activeEditor?.resource?.scheme!==o.lg.untitled&&(this.sessionOpenedLanguageIds.add(s),this.historicalGlobalOpenedLanguageIds.set(s,!0),this.historicalWorkspaceOpenedLanguageIds.set(s,!0),t.store(e.globalOpenedLanguagesStorageKey,JSON.stringify(this.historicalGlobalOpenedLanguageIds.toJSON()),0,1),t.store(e.workspaceOpenedLanguagesStorageKey,JSON.stringify(this.historicalWorkspaceOpenedLanguageIds.toJSON()),1,1),this.dirtyBiases=!0)})))}};B=(0,r.g)([(0,r.f)(0,g.n),(0,r.f)(1,d.O),(0,r.f)(2,c.Ui),(0,r.f)(3,f.v),(0,r.f)(4,y.ec),(0,r.f)(5,l.q),(0,r.f)(6,_.AR),(0,r.f)(7,L.bU),(0,r.f)(8,w.Uy),(0,r.f)(9,O.VZ),(0,r.f)(10,v.c_)],B);class x extends S.Q8{constructor(e,t,s,i,r,n,a,o){super(e,!0,"languageDetectionWorkerService",o),this._languageService=t,this._telemetryService=s,this._indexJsUri=i,this._modelJsonUri=r,this._weightsUri=n,this._regexpModelUri=a}_getOrCreateLanguageDetectionWorker(){return this.workerPromise||(this.workerPromise=new Promise(((e,t)=>{e(this._register(new p.PB(this._workerFactory,"vs/workbench/services/languageDetection/browser/languageDetectionSimpleWorker",new S.IC(this))))}))),this.workerPromise}_guessLanguageIdByUri(e){const t=this._languageService.guessLanguageIdByFilepathOrFirstLine(e);if(t&&"unknown"!==t)return t}async _getProxy(){return(await this._getOrCreateLanguageDetectionWorker()).getProxyObject()}async fhr(e,t){switch(e){case"getIndexJsUri":return this.getIndexJsUri();case"getModelJsonUri":return this.getModelJsonUri();case"getWeightsUri":return this.getWeightsUri();case"getRegexpModelUri":return this.getRegexpModelUri();case"getLanguageId":return this.getLanguageId(t[0]);case"sendTelemetryEvent":return this.sendTelemetryEvent(t[0],t[1],t[2]);default:return super.fhr(e,t)}}async getIndexJsUri(){return this._indexJsUri}getLanguageId(e){if(!e)return;if(this._languageService.isRegisteredLanguageId(e))return e;const t=this._guessLanguageIdByUri(u.ov.file(`file.${e}`));return t&&"unknown"!==t?t:void 0}async getModelJsonUri(){return this._modelJsonUri}async getWeightsUri(){return this._weightsUri}async getRegexpModelUri(){return this._regexpModelUri}async sendTelemetryEvent(e,t,s){this._telemetryService.publicLog2(a.xV,{languages:e.join(","),confidences:t.join(","),timeSpent:s})}async detectLanguage(e,t,s,i){const r=Date.now(),n=this._guessLanguageIdByUri(e);if(n)return n;await this._withSyncedResources([e]);const a=await(await this._getProxy()).detectLanguage(e.toString(),t,s,i),o=this.getLanguageId(a);return this._telemetryService.publicLog2("automaticlanguagedetection.perf",{timeSpent:Date.now()-r,detection:o||"unknown"}),o}}function W(){return{[a.Kt.toString()]:new i.M(B,[],!1)}}(0,s(51893).l)({"vs/../../node_modules/@vscode/vscode-languagedetection/model/model.json":new URL(s(27291),s.b).href,"vs/../../node_modules/@vscode/vscode-languagedetection/model/group1-shard1of1.bin":new URL(s(93065),s.b).href})}}]);
//# sourceMappingURL=354.bundle.js.map