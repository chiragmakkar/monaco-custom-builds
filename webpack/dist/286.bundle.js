(self.webpackChunkmonaco_custom_bundle=self.webpackChunkmonaco_custom_bundle||[]).push([[286],{12286:function(t){var e;e=()=>(()=>{"use strict";var t={};return(()=>{var e=t;function s(t,e,s){return Math.max(e,Math.min(t,s))}Object.defineProperty(e,"__esModule",{value:!0}),e.HTMLSerializeHandler=e.SerializeAddon=void 0;class i{constructor(t){this._buffer=t}serialize(t){const e=this._buffer.getNullCell(),s=this._buffer.getNullCell();let i=e;const r=t.start.x,l=t.end.x,o=t.start.y,n=t.end.y;this._beforeSerialize(l-r,r,l);for(let h=r;h<=l;h++){const r=this._buffer.getLine(h);if(r){const l=h!==t.start.x?0:o,u=h!==t.end.x?r.length:n;for(let t=l;t<u;t++){const l=r.getCell(t,i===e?s:e);l?(this._nextCell(l,i,h,t),i=l):console.warn(`Can't get cell at row=${h}, col=${t}`)}}this._rowEnd(h,h===l)}return this._afterSerialize(),this._serializeString()}_nextCell(t,e,s,i){}_rowEnd(t,e){}_beforeSerialize(t,e,s){}_afterSerialize(){}_serializeString(){return""}}function r(t,e){return t.getFgColorMode()===e.getFgColorMode()&&t.getFgColor()===e.getFgColor()}function l(t,e){return t.getBgColorMode()===e.getBgColorMode()&&t.getBgColor()===e.getBgColor()}function o(t,e){return t.isInverse()===e.isInverse()&&t.isBold()===e.isBold()&&t.isUnderline()===e.isUnderline()&&t.isOverline()===e.isOverline()&&t.isBlink()===e.isBlink()&&t.isInvisible()===e.isInvisible()&&t.isItalic()===e.isItalic()&&t.isDim()===e.isDim()&&t.isStrikethrough()===e.isStrikethrough()}class n extends i{constructor(t,e){super(t),this._terminal=e,this._rowIndex=0,this._allRows=new Array,this._allRowSeparators=new Array,this._currentRow="",this._nullCellCount=0,this._cursorStyle=this._buffer.getNullCell(),this._cursorStyleRow=0,this._cursorStyleCol=0,this._backgroundCell=this._buffer.getNullCell(),this._firstRow=0,this._lastCursorRow=0,this._lastCursorCol=0,this._lastContentCursorRow=0,this._lastContentCursorCol=0,this._thisRowLastChar=this._buffer.getNullCell(),this._thisRowLastSecondChar=this._buffer.getNullCell(),this._nextRowFirstChar=this._buffer.getNullCell()}_beforeSerialize(t,e,s){this._allRows=new Array(t),this._lastContentCursorRow=e,this._lastCursorRow=e,this._firstRow=e}_rowEnd(t,e){var s;this._nullCellCount>0&&!l(this._cursorStyle,this._backgroundCell)&&(this._currentRow+=`[${this._nullCellCount}X`);let i="";if(!e){t-this._firstRow>=this._terminal.rows&&(null===(s=this._buffer.getLine(this._cursorStyleRow))||void 0===s||s.getCell(this._cursorStyleCol,this._backgroundCell));const e=this._buffer.getLine(t),r=this._buffer.getLine(t+1);if(r.isWrapped){i="";const s=e.getCell(e.length-1,this._thisRowLastChar),o=e.getCell(e.length-2,this._thisRowLastSecondChar),n=r.getCell(0,this._nextRowFirstChar),h=n.getWidth()>1;let u=!1;(n.getChars()&&h?this._nullCellCount<=1:this._nullCellCount<=0)&&((s.getChars()||0===s.getWidth())&&l(s,n)&&(u=!0),h&&(o.getChars()||0===o.getWidth())&&l(s,n)&&l(o,n)&&(u=!0)),u||(i="-".repeat(this._nullCellCount+1),i+="[1D[1X",this._nullCellCount>0&&(i+="[A",i+=`[${e.length-this._nullCellCount}C`,i+=`[${this._nullCellCount}X`,i+=`[${e.length-this._nullCellCount}D`,i+="[B"),this._lastContentCursorRow=t+1,this._lastContentCursorCol=0,this._lastCursorRow=t+1,this._lastCursorCol=0)}else i="\r\n",this._lastCursorRow=t+1,this._lastCursorCol=0}this._allRows[this._rowIndex]=this._currentRow,this._allRowSeparators[this._rowIndex++]=i,this._currentRow="",this._nullCellCount=0}_diffStyle(t,e){const s=[],i=!r(t,e),n=!l(t,e),h=!o(t,e);if(i||n||h)if(t.isAttributeDefault())e.isAttributeDefault()||s.push(0);else{if(i){const e=t.getFgColor();t.isFgRGB()?s.push(38,2,e>>>16&255,e>>>8&255,255&e):t.isFgPalette()?e>=16?s.push(38,5,e):s.push(8&e?90+(7&e):30+(7&e)):s.push(39)}if(n){const e=t.getBgColor();t.isBgRGB()?s.push(48,2,e>>>16&255,e>>>8&255,255&e):t.isBgPalette()?e>=16?s.push(48,5,e):s.push(8&e?100+(7&e):40+(7&e)):s.push(49)}h&&(t.isInverse()!==e.isInverse()&&s.push(t.isInverse()?7:27),t.isBold()!==e.isBold()&&s.push(t.isBold()?1:22),t.isUnderline()!==e.isUnderline()&&s.push(t.isUnderline()?4:24),t.isOverline()!==e.isOverline()&&s.push(t.isOverline()?53:55),t.isBlink()!==e.isBlink()&&s.push(t.isBlink()?5:25),t.isInvisible()!==e.isInvisible()&&s.push(t.isInvisible()?8:28),t.isItalic()!==e.isItalic()&&s.push(t.isItalic()?3:23),t.isDim()!==e.isDim()&&s.push(t.isDim()?2:22),t.isStrikethrough()!==e.isStrikethrough()&&s.push(t.isStrikethrough()?9:29))}return s}_nextCell(t,e,s,i){if(0===t.getWidth())return;const r=""===t.getChars(),o=this._diffStyle(t,this._cursorStyle);if(r?!l(this._cursorStyle,t):o.length>0){this._nullCellCount>0&&(l(this._cursorStyle,this._backgroundCell)||(this._currentRow+=`[${this._nullCellCount}X`),this._currentRow+=`[${this._nullCellCount}C`,this._nullCellCount=0),this._lastContentCursorRow=this._lastCursorRow=s,this._lastContentCursorCol=this._lastCursorCol=i,this._currentRow+=`[${o.join(";")}m`;const t=this._buffer.getLine(s);void 0!==t&&(t.getCell(i,this._cursorStyle),this._cursorStyleRow=s,this._cursorStyleCol=i)}r?this._nullCellCount+=t.getWidth():(this._nullCellCount>0&&(l(this._cursorStyle,this._backgroundCell)||(this._currentRow+=`[${this._nullCellCount}X`),this._currentRow+=`[${this._nullCellCount}C`,this._nullCellCount=0),this._currentRow+=t.getChars(),this._lastContentCursorRow=this._lastCursorRow=s,this._lastContentCursorCol=this._lastCursorCol=i+t.getWidth())}_serializeString(){let t=this._allRows.length;this._buffer.length-this._firstRow<=this._terminal.rows&&(t=this._lastContentCursorRow+1-this._firstRow,this._lastCursorCol=this._lastContentCursorCol,this._lastCursorRow=this._lastContentCursorRow);let e="";for(let s=0;s<t;s++)e+=this._allRows[s],s+1<t&&(e+=this._allRowSeparators[s]);const s=this._buffer.baseY+this._buffer.cursorY,i=this._buffer.cursorX;var r;(s!==this._lastCursorRow||i!==this._lastCursorCol)&&((r=s-this._lastCursorRow)>0?e+=`[${r}B`:r<0&&(e+=`[${-r}A`),(t=>{t>0?e+=`[${t}C`:t<0&&(e+=`[${-t}D`)})(i-this._lastCursorCol));const l=this._terminal._core._inputHandler._curAttrData,o=this._diffStyle(l,this._cursorStyle);return o.length>0&&(e+=`[${o.join(";")}m`),e}}e.SerializeAddon=class{constructor(){}activate(t){this._terminal=t}_serializeBuffer(t,e,i){const r=e.length,l=new n(e,t),o=void 0===i?r:s(i+t.rows,0,r);return l.serialize({start:{x:r-o,y:0},end:{x:r-1,y:t.cols}})}_serializeBufferAsHTML(t,e){var i,r;const l=t.buffer.active,o=new h(l,t,e);if(null===(i=e.onlySelection)||void 0===i||!i){const i=l.length,r=e.scrollback,n=void 0===r?i:s(r+t.rows,0,i);return o.serialize({start:{x:i-n,y:0},end:{x:i-1,y:t.cols}})}const n=null===(r=this._terminal)||void 0===r?void 0:r.getSelectionPosition();return void 0!==n?o.serialize({start:{x:n.start.y,y:n.start.x},end:{x:n.end.y,y:n.end.x}}):""}_serializeModes(t){let e="";const s=t.modes;if(s.applicationCursorKeysMode&&(e+="[?1h"),s.applicationKeypadMode&&(e+="[?66h"),s.bracketedPasteMode&&(e+="[?2004h"),s.insertMode&&(e+="[4h"),s.originMode&&(e+="[?6h"),s.reverseWraparoundMode&&(e+="[?45h"),s.sendFocusMode&&(e+="[?1004h"),!1===s.wraparoundMode&&(e+="[?7l"),"none"!==s.mouseTrackingMode)switch(s.mouseTrackingMode){case"x10":e+="[?9h";break;case"vt200":e+="[?1000h";break;case"drag":e+="[?1002h";break;case"any":e+="[?1003h"}return e}serialize(t){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");let e=this._serializeBuffer(this._terminal,this._terminal.buffer.normal,null==t?void 0:t.scrollback);return(null==t?void 0:t.excludeAltBuffer)||"alternate"!==this._terminal.buffer.active.type||(e+=`[?1049h[H${this._serializeBuffer(this._terminal,this._terminal.buffer.alternate,void 0)}`),(null==t?void 0:t.excludeModes)||(e+=this._serializeModes(this._terminal)),e}serializeAsHTML(t){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");return this._serializeBufferAsHTML(this._terminal,t||{})}dispose(){}};class h extends i{constructor(t,e,s){super(t),this._terminal=e,this._options=s,this._currentRow="",this._htmlContent="",this._colors=e._core._themeService.colors}_padStart(t,e,s){return e>>=0,s=null!=s?s:" ",t.length>e?t:((e-=t.length)>s.length&&(s+=s.repeat(e/s.length)),s.slice(0,e)+t)}_beforeSerialize(t,e,s){var i,r,l,o,n;this._htmlContent+="<html><body>\x3c!--StartFragment--\x3e<pre>";let h="#000000",u="#ffffff";null!==(i=this._options.includeGlobalBackground)&&void 0!==i&&i&&(h=null!==(l=null===(r=this._terminal.options.theme)||void 0===r?void 0:r.foreground)&&void 0!==l?l:"#ffffff",u=null!==(n=null===(o=this._terminal.options.theme)||void 0===o?void 0:o.background)&&void 0!==n?n:"#000000");const a=[];a.push("color: "+h+";"),a.push("background-color: "+u+";"),a.push("font-family: "+this._terminal.options.fontFamily+";"),a.push("font-size: "+this._terminal.options.fontSize+"px;"),this._htmlContent+="<div style='"+a.join(" ")+"'>"}_afterSerialize(){this._htmlContent+="</div>",this._htmlContent+="</pre>\x3c!--EndFragment--\x3e</body></html>"}_rowEnd(t,e){this._htmlContent+="<div><span>"+this._currentRow+"</span></div>",this._currentRow=""}_getHexColor(t,e){const s=e?t.getFgColor():t.getBgColor();return(e?t.isFgRGB():t.isBgRGB())?[s>>16&255,s>>8&255,255&s].map((t=>this._padStart(t.toString(16),2,"0"))).join(""):(e?t.isFgPalette():t.isBgPalette())?this._colors.ansi[s].css:void 0}_diffStyle(t,e){const s=[],i=!r(t,e),n=!l(t,e),h=!o(t,e);if(i||n||h){const e=this._getHexColor(t,!0);e&&s.push("color: "+e+";");const i=this._getHexColor(t,!1);return i&&s.push("background-color: "+i+";"),t.isInverse()&&s.push("color: #000000; background-color: #BFBFBF;"),t.isBold()&&s.push("font-weight: bold;"),t.isUnderline()&&t.isOverline()?s.push("text-decoration: overline underline;"):t.isUnderline()?s.push("text-decoration: underline;"):t.isOverline()&&s.push("text-decoration: overline;"),t.isBlink()&&s.push("text-decoration: blink;"),t.isInvisible()&&s.push("visibility: hidden;"),t.isItalic()&&s.push("font-style: italic;"),t.isDim()&&s.push("opacity: 0.5;"),t.isStrikethrough()&&s.push("text-decoration: line-through;"),s}}_nextCell(t,e,s,i){if(0===t.getWidth())return;const r=""===t.getChars(),l=this._diffStyle(t,e);l&&(this._currentRow+=0===l.length?"</span><span>":"</span><span style='"+l.join(" ")+"'>"),this._currentRow+=r?" ":t.getChars()}_serializeString(){return this._htmlContent}}e.HTMLSerializeHandler=h})(),t})(),t.exports=e()}}]);
//# sourceMappingURL=286.bundle.js.map