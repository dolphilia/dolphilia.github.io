import{_ as i,o as a,c as e,Q as l}from"./chunks/framework.43c433ff.js";const d=JSON.parse('{"title":"HSPリファレンス","description":"","frontmatter":{},"headers":[],"relativePath":"translation/hsp/index.md","filePath":"translation/hsp/index.md","lastUpdated":1676126774000}'),r={name:"translation/hsp/index.md"},h=l('<h1 id="hspリファレンス" tabindex="-1">HSPリファレンス <a class="header-anchor" href="#hspリファレンス" aria-label="Permalink to &quot;HSPリファレンス&quot;">​</a></h1><h2 id="ショートカット" tabindex="-1">ショートカット <a class="header-anchor" href="#ショートカット" aria-label="Permalink to &quot;ショートカット&quot;">​</a></h2><ul><li><a href="#i_prep">プリプロセッサ</a></li><li><a href="#sysval">システム変数</a></li><li><a href="#i_prog">プログラム制御</a></li><li><a href="#hspdef">標準マクロ</a></li><li><a href="#ex_macro">特殊マクロ</a></li><li><a href="#i_stdfunc">基本関数</a></li><li><a href="#i_graph">画面制御</a></li><li><a href="#i_object">オブジェクト</a></li><li><a href="#i_string">文字列</a></li><li><a href="#hspmath">数学</a></li><li><a href="#i_stdio">入出力</a></li><li><a href="#i_file">ファイル</a></li><li><a href="#i_mem">メモリ</a></li><li><a href="#i_mmedia">マルチメディア</a></li><li><a href="#i_hsp3util">ユーティリティ</a></li><li><a href="#hspsock">ソケット通信</a></li><li><a href="#sprite">スプライト</a></li><li><a href="#hsp3dish">HSP3Dish</a></li><li><a href="#hgimg_common">HGIMG4共通</a></li><li><a href="#hgimg4">HGIMG4</a></li><li><a href="#obaq">OBAQ</a></li></ul><h2 id="i_prep" tabindex="-1">プリプロセッサ <a class="header-anchor" href="#i_prep" aria-label="Permalink to &quot;プリプロセッサ {#i_prep}&quot;">​</a></h2><ul><li><a href="./i_prep#addition">#addition</a></li><li><a href="./i_prep#aht">#aht</a></li><li><a href="./i_prep#ahtmes">#ahtmes</a></li><li><a href="./i_prep#bootopt">#bootopt</a></li><li><a href="./i_prep#cfunc">#cfunc</a></li><li><a href="./i_prep#cmd">#cmd</a></li><li><a href="./i_prep#cmpopt">#cmpopt</a></li><li><a href="./i_prep#comfunc">#comfunc</a></li><li><a href="./i_prep#const">#const</a></li><li><a href="./i_prep#defcfunc">#defcfunc</a></li><li><a href="./i_prep#deffunc">#deffunc</a></li><li><a href="./i_prep#define">#define</a></li><li><a href="./i_prep#else">#else</a></li><li><a href="./i_prep#endif">#endif</a></li><li><a href="./i_prep#enum">#enum</a></li><li><a href="./i_prep#epack">#epack</a></li><li><a href="./i_prep#func">#func</a></li><li><a href="./i_prep#global">#global</a></li><li><a href="./i_prep#if">#if</a></li><li><a href="./i_prep#ifdef">#ifdef</a></li><li><a href="./i_prep#ifndef">#ifndef</a></li><li><a href="./i_prep#include">#include</a></li><li><a href="./i_prep#modcfunc">#modcfunc</a></li><li><a href="./i_prep#modfunc">#modfunc</a></li><li><a href="./i_prep#modinit">#modinit</a></li><li><a href="./i_prep#modterm">#modterm</a></li><li><a href="./i_prep#module">#module</a></li><li><a href="./i_prep#pack">#pack</a></li><li><a href="./i_prep#packopt">#packopt</a></li><li><a href="./i_prep#regcmd">#regcmd</a></li><li><a href="./i_prep#runtime">#runtime</a></li><li><a href="./i_prep#undef">#undef</a></li><li><a href="./i_prep#usecom">#usecom</a></li><li><a href="./i_prep#uselib">#uselib</a></li></ul><h2 id="sysval" tabindex="-1">システム変数 <a class="header-anchor" href="#sysval" aria-label="Permalink to &quot;システム変数 {#sysval}&quot;">​</a></h2><ul><li><a href="./sysval#cnt">cnt</a></li><li><a href="./sysval#dir_cmdline">dir_cmdline</a></li><li><a href="./sysval#dir_cur">dir_cur</a></li><li><a href="./sysval#dir_desktop">dir_desktop</a></li><li><a href="./sysval#dir_exe">dir_exe</a></li><li><a href="./sysval#dir_mydoc">dir_mydoc</a></li><li><a href="./sysval#dir_sys">dir_sys</a></li><li><a href="./sysval#dir_tv">dir_tv</a></li><li><a href="./sysval#dir_win">dir_win</a></li><li><a href="./sysval#err">err</a></li><li><a href="./sysval#ginfo_accx">ginfo_accx</a></li><li><a href="./sysval#ginfo_accy">ginfo_accy</a></li><li><a href="./sysval#ginfo_accz">ginfo_accz</a></li><li><a href="./sysval#ginfo_act">ginfo_act</a></li><li><a href="./sysval#ginfo_b">ginfo_b</a></li><li><a href="./sysval#ginfo_cx">ginfo_cx</a></li><li><a href="./sysval#ginfo_cy">ginfo_cy</a></li><li><a href="./sysval#ginfo_dispx">ginfo_dispx</a></li><li><a href="./sysval#ginfo_dispy">ginfo_dispy</a></li><li><a href="./sysval#ginfo_g">ginfo_g</a></li><li><a href="./sysval#ginfo_intid">ginfo_intid</a></li><li><a href="./sysval#ginfo_mesx">ginfo_mesx</a></li><li><a href="./sysval#ginfo_mesy">ginfo_mesy</a></li><li><a href="./sysval#ginfo_mx">ginfo_mx</a></li><li><a href="./sysval#ginfo_my">ginfo_my</a></li><li><a href="./sysval#ginfo_newid">ginfo_newid</a></li><li><a href="./sysval#ginfo_paluse">ginfo_paluse</a></li><li><a href="./sysval#ginfo_r">ginfo_r</a></li><li><a href="./sysval#ginfo_sel">ginfo_sel</a></li><li><a href="./sysval#ginfo_sizex">ginfo_sizex</a></li><li><a href="./sysval#ginfo_sizey">ginfo_sizey</a></li><li><a href="./sysval#ginfo_sx">ginfo_sx</a></li><li><a href="./sysval#ginfo_sy">ginfo_sy</a></li><li><a href="./sysval#ginfo_vx">ginfo_vx</a></li><li><a href="./sysval#ginfo_vy">ginfo_vy</a></li><li><a href="./sysval#ginfo_winx">ginfo_winx</a></li><li><a href="./sysval#ginfo_winy">ginfo_winy</a></li><li><a href="./sysval#ginfo_wx1">ginfo_wx1</a></li><li><a href="./sysval#ginfo_wx2">ginfo_wx2</a></li><li><a href="./sysval#ginfo_wy1">ginfo_wy1</a></li><li><a href="./sysval#ginfo_wy2">ginfo_wy2</a></li><li><a href="./sysval#hdc">hdc</a></li><li><a href="./sysval#hinstance">hinstance</a></li><li><a href="./sysval#hspstat">hspstat</a></li><li><a href="./sysval#hspver">hspver</a></li><li><a href="./sysval#hwnd">hwnd</a></li><li><a href="./sysval#iparam">iparam</a></li><li><a href="./sysval#looplev">looplev</a></li><li><a href="./sysval#lparam">lparam</a></li><li><a href="./sysval#mousew">mousew</a></li><li><a href="./sysval#mousex">mousex</a></li><li><a href="./sysval#mousey">mousey</a></li><li><a href="./sysval#notemax">notemax</a></li><li><a href="./sysval#notesize">notesize</a></li><li><a href="./sysval#refdval">refdval</a></li><li><a href="./sysval#refstr">refstr</a></li><li><a href="./sysval#stat">stat</a></li><li><a href="./sysval#strsize">strsize</a></li><li><a href="./sysval#sublev">sublev</a></li><li><a href="./sysval#thismod">thismod</a></li><li><a href="./sysval#wparam">wparam</a></li></ul><h2 id="i_prog" tabindex="-1">プログラム制御 <a class="header-anchor" href="#i_prog" aria-label="Permalink to &quot;プログラム制御 {#i_prog}&quot;">​</a></h2><ul><li><a href="./i_prog#_break">_break</a></li><li><a href="./i_prog#_continue">_continue</a></li><li><a href="./i_prog#await">await</a></li><li><a href="./i_prog#break">break</a></li><li><a href="./i_prog#case">case</a></li><li><a href="./i_prog#continue">continue</a></li><li><a href="./i_prog#default">default</a></li><li><a href="./i_prog#do">do</a></li><li><a href="./i_prog#else">else</a></li><li><a href="./i_prog#end">end</a></li><li><a href="./i_prog#exec">exec</a></li><li><a href="./i_prog#exgoto">exgoto</a></li><li><a href="./i_prog#for">for</a></li><li><a href="./i_prog#foreach">foreach</a></li><li><a href="./i_prog#gosub">gosub</a></li><li><a href="./i_prog#goto">goto</a></li><li><a href="./i_prog#if">if</a></li><li><a href="./i_prog#loop">loop</a></li><li><a href="./i_prog#next">next</a></li><li><a href="./i_prog#on">on</a></li><li><a href="./i_prog#onclick">onclick</a></li><li><a href="./i_prog#oncmd">oncmd</a></li><li><a href="./i_prog#onerror">onerror</a></li><li><a href="./i_prog#onexit">onexit</a></li><li><a href="./i_prog#onkey">onkey</a></li><li><a href="./i_prog#repeat">repeat</a></li><li><a href="./i_prog#return">return</a></li><li><a href="./i_prog#run">run</a></li><li><a href="./i_prog#stop">stop</a></li><li><a href="./i_prog#swbreak">swbreak</a></li><li><a href="./i_prog#swend">swend</a></li><li><a href="./i_prog#switch">switch</a></li><li><a href="./i_prog#until">until</a></li><li><a href="./i_prog#wait">wait</a></li><li><a href="./i_prog#wend">wend</a></li><li><a href="./i_prog#while">while</a></li></ul><h2 id="hspdef" tabindex="-1">標準マクロ <a class="header-anchor" href="#hspdef" aria-label="Permalink to &quot;標準マクロ {#hspdef}&quot;">​</a></h2><ul><li><a href="./hspdef#M_PI">M_PI</a></li><li><a href="./hspdef#and">and</a></li><li><a href="./hspdef#deg2rad">deg2rad</a></li><li><a href="./hspdef#font_antialias">font_antialias</a></li><li><a href="./hspdef#font_bold">font_bold</a></li><li><a href="./hspdef#font_italic">font_italic</a></li><li><a href="./hspdef#font_normal">font_normal</a></li><li><a href="./hspdef#font_strikeout">font_strikeout</a></li><li><a href="./hspdef#font_underline">font_underline</a></li><li><a href="./hspdef#gmode_add">gmode_add</a></li><li><a href="./hspdef#gmode_alpha">gmode_alpha</a></li><li><a href="./hspdef#gmode_gdi">gmode_gdi</a></li><li><a href="./hspdef#gmode_mem">gmode_mem</a></li><li><a href="./hspdef#gmode_pixela">gmode_pixela</a></li><li><a href="./hspdef#gmode_rgb0">gmode_rgb0</a></li><li><a href="./hspdef#gmode_rgb0alpha">gmode_rgb0alpha</a></li><li><a href="./hspdef#gmode_sub">gmode_sub</a></li><li><a href="./hspdef#msgothic">msgothic</a></li><li><a href="./hspdef#msmincho">msmincho</a></li><li><a href="./hspdef#not">not</a></li><li><a href="./hspdef#objinfo_bmscr">objinfo_bmscr</a></li><li><a href="./hspdef#objinfo_hwnd">objinfo_hwnd</a></li><li><a href="./hspdef#objinfo_mode">objinfo_mode</a></li><li><a href="./hspdef#objmode_guifont">objmode_guifont</a></li><li><a href="./hspdef#objmode_normal">objmode_normal</a></li><li><a href="./hspdef#objmode_usecolor">objmode_usecolor</a></li><li><a href="./hspdef#objmode_usefont">objmode_usefont</a></li><li><a href="./hspdef#or">or</a></li><li><a href="./hspdef#rad2deg">rad2deg</a></li><li><a href="./hspdef#screen_fixedsize">screen_fixedsize</a></li><li><a href="./hspdef#screen_frame">screen_frame</a></li><li><a href="./hspdef#screen_hide">screen_hide</a></li><li><a href="./hspdef#screen_normal">screen_normal</a></li><li><a href="./hspdef#screen_palette">screen_palette</a></li><li><a href="./hspdef#screen_tool">screen_tool</a></li><li><a href="./hspdef#xor">xor</a></li></ul><h2 id="ex_macro" tabindex="-1">特殊マクロ <a class="header-anchor" href="#ex_macro" aria-label="Permalink to &quot;特殊マクロ {#ex_macro}&quot;">​</a></h2><ul><li><a href="./ex_macro#__date__">__date__</a></li><li><a href="./ex_macro#__file__">__file__</a></li><li><a href="./ex_macro#__hsp30__">__hsp30__</a></li><li><a href="./ex_macro#__hspver__">__hspver__</a></li><li><a href="./ex_macro#__line__">__line__</a></li><li><a href="./ex_macro#__time__">__time__</a></li><li><a href="./ex_macro#_debug">_debug</a></li></ul><h2 id="i_stdfunc" tabindex="-1">基本関数 <a class="header-anchor" href="#i_stdfunc" aria-label="Permalink to &quot;基本関数 {#i_stdfunc}&quot;">​</a></h2><ul><li><a href="./i_stdfunc#abs">abs</a></li><li><a href="./i_stdfunc#absf">absf</a></li><li><a href="./i_stdfunc#atan">atan</a></li><li><a href="./i_stdfunc#callfunc">callfunc</a></li><li><a href="./i_stdfunc#comevdisp">comevdisp</a></li><li><a href="./i_stdfunc#cos">cos</a></li><li><a href="./i_stdfunc#dirinfo">dirinfo</a></li><li><a href="./i_stdfunc#double">double</a></li><li><a href="./i_stdfunc#expf">expf</a></li><li><a href="./i_stdfunc#getease">getease</a></li><li><a href="./i_stdfunc#geteasef">geteasef</a></li><li><a href="./i_stdfunc#gettime">gettime</a></li><li><a href="./i_stdfunc#int">int</a></li><li><a href="./i_stdfunc#length">length</a></li><li><a href="./i_stdfunc#length2">length2</a></li><li><a href="./i_stdfunc#length3">length3</a></li><li><a href="./i_stdfunc#length4">length4</a></li><li><a href="./i_stdfunc#libptr">libptr</a></li><li><a href="./i_stdfunc#limit">limit</a></li><li><a href="./i_stdfunc#limitf">limitf</a></li><li><a href="./i_stdfunc#logf">logf</a></li><li><a href="./i_stdfunc#lpeek">lpeek</a></li><li><a href="./i_stdfunc#peek">peek</a></li><li><a href="./i_stdfunc#powf">powf</a></li><li><a href="./i_stdfunc#rnd">rnd</a></li><li><a href="./i_stdfunc#sin">sin</a></li><li><a href="./i_stdfunc#sqrt">sqrt</a></li><li><a href="./i_stdfunc#str">str</a></li><li><a href="./i_stdfunc#strlen">strlen</a></li><li><a href="./i_stdfunc#sysinfo">sysinfo</a></li><li><a href="./i_stdfunc#tan">tan</a></li><li><a href="./i_stdfunc#varptr">varptr</a></li><li><a href="./i_stdfunc#varsize">varsize</a></li><li><a href="./i_stdfunc#vartype">vartype</a></li><li><a href="./i_stdfunc#varuse">varuse</a></li><li><a href="./i_stdfunc#wpeek">wpeek</a></li></ul><h2 id="i_graph" tabindex="-1">画面制御 <a class="header-anchor" href="#i_graph" aria-label="Permalink to &quot;画面制御 {#i_graph}&quot;">​</a></h2><ul><li><a href="./i_graph#axobj">axobj</a></li><li><a href="./i_graph#bgscr">bgscr</a></li><li><a href="./i_graph#bmpsave">bmpsave</a></li><li><a href="./i_graph#boxf">boxf</a></li><li><a href="./i_graph#buffer">buffer</a></li><li><a href="./i_graph#celdiv">celdiv</a></li><li><a href="./i_graph#celload">celload</a></li><li><a href="./i_graph#celput">celput</a></li><li><a href="./i_graph#chgdisp">chgdisp</a></li><li><a href="./i_graph#circle">circle</a></li><li><a href="./i_graph#cls">cls</a></li><li><a href="./i_graph#color">color</a></li><li><a href="./i_graph#dialog">dialog</a></li><li><a href="./i_graph#font">font</a></li><li><a href="./i_graph#gcopy">gcopy</a></li><li><a href="./i_graph#ginfo">ginfo</a></li><li><a href="./i_graph#gmode">gmode</a></li><li><a href="./i_graph#gradf">gradf</a></li><li><a href="./i_graph#grect">grect</a></li><li><a href="./i_graph#groll">groll</a></li><li><a href="./i_graph#grotate">grotate</a></li><li><a href="./i_graph#gsel">gsel</a></li><li><a href="./i_graph#gsquare">gsquare</a></li><li><a href="./i_graph#gzoom">gzoom</a></li><li><a href="./i_graph#hsvcolor">hsvcolor</a></li><li><a href="./i_graph#line">line</a></li><li><a href="./i_graph#mes">mes</a></li><li><a href="./i_graph#objinfo">objinfo</a></li><li><a href="./i_graph#palcolor">palcolor</a></li><li><a href="./i_graph#palette">palette</a></li><li><a href="./i_graph#pget">pget</a></li><li><a href="./i_graph#picload">picload</a></li><li><a href="./i_graph#pos">pos</a></li><li><a href="./i_graph#print">print</a></li><li><a href="./i_graph#pset">pset</a></li><li><a href="./i_graph#redraw">redraw</a></li><li><a href="./i_graph#rgbcolor">rgbcolor</a></li><li><a href="./i_graph#screen">screen</a></li><li><a href="./i_graph#sendmsg">sendmsg</a></li><li><a href="./i_graph#syscolor">syscolor</a></li><li><a href="./i_graph#sysfont">sysfont</a></li><li><a href="./i_graph#title">title</a></li><li><a href="./i_graph#width">width</a></li><li><a href="./i_graph#winobj">winobj</a></li></ul><h2 id="i_object" tabindex="-1">オブジェクト <a class="header-anchor" href="#i_object" aria-label="Permalink to &quot;オブジェクト {#i_object}&quot;">​</a></h2><ul><li><a href="./i_object#button">button</a></li><li><a href="./i_object#chkbox">chkbox</a></li><li><a href="./i_object#clrobj">clrobj</a></li><li><a href="./i_object#combox">combox</a></li><li><a href="./i_object#input">input</a></li><li><a href="./i_object#layerobj">layerobj</a></li><li><a href="./i_object#listbox">listbox</a></li><li><a href="./i_object#mesbox">mesbox</a></li><li><a href="./i_object#objcolor">objcolor</a></li><li><a href="./i_object#objenable">objenable</a></li><li><a href="./i_object#objimage">objimage</a></li><li><a href="./i_object#objmode">objmode</a></li><li><a href="./i_object#objprm">objprm</a></li><li><a href="./i_object#objsel">objsel</a></li><li><a href="./i_object#objsize">objsize</a></li><li><a href="./i_object#objskip">objskip</a></li></ul><h2 id="i_string" tabindex="-1">文字列 <a class="header-anchor" href="#i_string" aria-label="Permalink to &quot;文字列 {#i_string}&quot;">​</a></h2><ul><li><a href="./i_string#cnvatos">cnvatos</a></li><li><a href="./i_string#cnvstoa">cnvstoa</a></li><li><a href="./i_string#cnvstow">cnvstow</a></li><li><a href="./i_string#cnvwtos">cnvwtos</a></li><li><a href="./i_string#getpath">getpath</a></li><li><a href="./i_string#getstr">getstr</a></li><li><a href="./i_string#instr">instr</a></li><li><a href="./i_string#noteadd">noteadd</a></li><li><a href="./i_string#notedel">notedel</a></li><li><a href="./i_string#notefind">notefind</a></li><li><a href="./i_string#noteget">noteget</a></li><li><a href="./i_string#noteinfo">noteinfo</a></li><li><a href="./i_string#noteload">noteload</a></li><li><a href="./i_string#notesave">notesave</a></li><li><a href="./i_string#notesel">notesel</a></li><li><a href="./i_string#noteunsel">noteunsel</a></li><li><a href="./i_string#split">split</a></li><li><a href="./i_string#strexchange">strexchange</a></li><li><a href="./i_string#strf">strf</a></li><li><a href="./i_string#strmid">strmid</a></li><li><a href="./i_string#strrep">strrep</a></li><li><a href="./i_string#strtrim">strtrim</a></li></ul><h2 id="hspmath" tabindex="-1">数学 <a class="header-anchor" href="#hspmath" aria-label="Permalink to &quot;数学 {#hspmath}&quot;">​</a></h2><ul><li><a href="./hspmath#DBL_DIG">DBL_DIG</a></li><li><a href="./hspmath#DBL_EPSILON">DBL_EPSILON</a></li><li><a href="./hspmath#DBL_MANT_DIG">DBL_MANT_DIG</a></li><li><a href="./hspmath#DBL_MAX">DBL_MAX</a></li><li><a href="./hspmath#DBL_MAX_10_EXP">DBL_MAX_10_EXP</a></li><li><a href="./hspmath#DBL_MAX_EXP">DBL_MAX_EXP</a></li><li><a href="./hspmath#DBL_MIN">DBL_MIN</a></li><li><a href="./hspmath#DBL_MIN_10_EXP">DBL_MIN_10_EXP</a></li><li><a href="./hspmath#DBL_MIN_EXP">DBL_MIN_EXP</a></li><li><a href="./hspmath#INT_DIGIT">INT_DIGIT</a></li><li><a href="./hspmath#INT_DIGIT10">INT_DIGIT10</a></li><li><a href="./hspmath#INT_MAX">INT_MAX</a></li><li><a href="./hspmath#INT_MIN">INT_MIN</a></li><li><a href="./hspmath#M_E">M_E</a></li><li><a href="./hspmath#M_LN10">M_LN10</a></li><li><a href="./hspmath#M_LN2">M_LN2</a></li><li><a href="./hspmath#M_LOG10E">M_LOG10E</a></li><li><a href="./hspmath#M_LOG2E">M_LOG2E</a></li><li><a href="./hspmath#M_SQRT2">M_SQRT2</a></li><li><a href="./hspmath#M_SQRT3">M_SQRT3</a></li><li><a href="./hspmath#M_SQRTPI">M_SQRTPI</a></li><li><a href="./hspmath#acos">acos</a></li><li><a href="./hspmath#acosh">acosh</a></li><li><a href="./hspmath#asin">asin</a></li><li><a href="./hspmath#asinh">asinh</a></li><li><a href="./hspmath#atanh">atanh</a></li><li><a href="./hspmath#ceil">ceil</a></li><li><a href="./hspmath#cosh">cosh</a></li><li><a href="./hspmath#distance2">distance2</a></li><li><a href="./hspmath#floor">floor</a></li><li><a href="./hspmath#fmod">fmod</a></li><li><a href="./hspmath#intf">intf</a></li><li><a href="./hspmath#isfinite">isfinite</a></li><li><a href="./hspmath#isnan">isnan</a></li><li><a href="./hspmath#log10">log10</a></li><li><a href="./hspmath#log2">log2</a></li><li><a href="./hspmath#pow">pow</a></li><li><a href="./hspmath#round">round</a></li><li><a href="./hspmath#sgn">sgn</a></li><li><a href="./hspmath#sinh">sinh</a></li><li><a href="./hspmath#tanh">tanh</a></li></ul><h2 id="i_stdio" tabindex="-1">入出力 <a class="header-anchor" href="#i_stdio" aria-label="Permalink to &quot;入出力 {#i_stdio}&quot;">​</a></h2><ul><li><a href="./i_stdio#assert">assert</a></li><li><a href="./i_stdio#getkey">getkey</a></li><li><a href="./i_stdio#logmes">logmes</a></li><li><a href="./i_stdio#mcall">mcall</a></li><li><a href="./i_stdio#mouse">mouse</a></li><li><a href="./i_stdio#randomize">randomize</a></li><li><a href="./i_stdio#setease">setease</a></li><li><a href="./i_stdio#sortget">sortget</a></li><li><a href="./i_stdio#sortnote">sortnote</a></li><li><a href="./i_stdio#sortstr">sortstr</a></li><li><a href="./i_stdio#sortval">sortval</a></li><li><a href="./i_stdio#stick">stick</a></li></ul><h2 id="i_file" tabindex="-1">ファイル <a class="header-anchor" href="#i_file" aria-label="Permalink to &quot;ファイル {#i_file}&quot;">​</a></h2><ul><li><a href="./i_file#bcopy">bcopy</a></li><li><a href="./i_file#bload">bload</a></li><li><a href="./i_file#bsave">bsave</a></li><li><a href="./i_file#chdir">chdir</a></li><li><a href="./i_file#chdpm">chdpm</a></li><li><a href="./i_file#delete">delete</a></li><li><a href="./i_file#dirlist">dirlist</a></li><li><a href="./i_file#exist">exist</a></li><li><a href="./i_file#memfile">memfile</a></li><li><a href="./i_file#mkdir">mkdir</a></li></ul><h2 id="i_mem" tabindex="-1">メモリ <a class="header-anchor" href="#i_mem" aria-label="Permalink to &quot;メモリ {#i_mem}&quot;">​</a></h2><ul><li><a href="./i_mem#alloc">alloc</a></li><li><a href="./i_mem#ddim">ddim</a></li><li><a href="./i_mem#delmod">delmod</a></li><li><a href="./i_mem#dim">dim</a></li><li><a href="./i_mem#dimtype">dimtype</a></li><li><a href="./i_mem#dup">dup</a></li><li><a href="./i_mem#dupptr">dupptr</a></li><li><a href="./i_mem#ldim">ldim</a></li><li><a href="./i_mem#lpoke">lpoke</a></li><li><a href="./i_mem#memcpy">memcpy</a></li><li><a href="./i_mem#memexpand">memexpand</a></li><li><a href="./i_mem#memset">memset</a></li><li><a href="./i_mem#mref">mref</a></li><li><a href="./i_mem#newlab">newlab</a></li><li><a href="./i_mem#newmod">newmod</a></li><li><a href="./i_mem#poke">poke</a></li><li><a href="./i_mem#sdim">sdim</a></li><li><a href="./i_mem#wpoke">wpoke</a></li></ul><h2 id="i_mmedia" tabindex="-1">マルチメディア <a class="header-anchor" href="#i_mmedia" aria-label="Permalink to &quot;マルチメディア {#i_mmedia}&quot;">​</a></h2><ul><li><a href="./i_mmedia#mci">mci</a></li><li><a href="./i_mmedia#mmload">mmload</a></li><li><a href="./i_mmedia#mmpan">mmpan</a></li><li><a href="./i_mmedia#mmplay">mmplay</a></li><li><a href="./i_mmedia#mmstat">mmstat</a></li><li><a href="./i_mmedia#mmstop">mmstop</a></li><li><a href="./i_mmedia#mmvol">mmvol</a></li></ul><h2 id="i_hsp3util" tabindex="-1">ユーティリティ <a class="header-anchor" href="#i_hsp3util" aria-label="Permalink to &quot;ユーティリティ {#i_hsp3util}&quot;">​</a></h2><ul><li><a href="./i_hsp3util#array2note">array2note</a></li><li><a href="./i_hsp3util#arrayload">arrayload</a></li><li><a href="./i_hsp3util#arraysave">arraysave</a></li><li><a href="./i_hsp3util#bmppalette">bmppalette</a></li><li><a href="./i_hsp3util#emes">emes</a></li><li><a href="./i_hsp3util#getdatestr">getdatestr</a></li><li><a href="./i_hsp3util#gettimestr">gettimestr</a></li><li><a href="./i_hsp3util#gfade">gfade</a></li><li><a href="./i_hsp3util#note2array">note2array</a></li><li><a href="./i_hsp3util#progbar">progbar</a></li><li><a href="./i_hsp3util#progbar_set">progbar_set</a></li><li><a href="./i_hsp3util#progbar_step">progbar_step</a></li><li><a href="./i_hsp3util#scrollbar">scrollbar</a></li><li><a href="./i_hsp3util#statictext">statictext</a></li><li><a href="./i_hsp3util#statictext_set">statictext_set</a></li><li><a href="./i_hsp3util#text">text</a></li><li><a href="./i_hsp3util#textmode">textmode</a></li></ul><h2 id="hspsock" tabindex="-1">ソケット通信 <a class="header-anchor" href="#hspsock" aria-label="Permalink to &quot;ソケット通信 {#hspsock}&quot;">​</a></h2><ul><li><a href="./hspsock#ipget">ipget</a></li><li><a href="./hspsock#sockcheck">sockcheck</a></li><li><a href="./hspsock#sockclose">sockclose</a></li><li><a href="./hspsock#sockget">sockget</a></li><li><a href="./hspsock#sockgetb">sockgetb</a></li><li><a href="./hspsock#sockgetc">sockgetc</a></li><li><a href="./hspsock#sockmake">sockmake</a></li><li><a href="./hspsock#sockopen">sockopen</a></li><li><a href="./hspsock#sockput">sockput</a></li><li><a href="./hspsock#sockputb">sockputb</a></li><li><a href="./hspsock#sockputc">sockputc</a></li><li><a href="./hspsock#sockwait">sockwait</a></li></ul><h2 id="sprite" tabindex="-1">スプライト <a class="header-anchor" href="#sprite" aria-label="Permalink to &quot;スプライト {#sprite}&quot;">​</a></h2><ul><li><a href="./sprite#es_adir">es_adir</a></li><li><a href="./sprite#es_aim">es_aim</a></li><li><a href="./sprite#es_ang">es_ang</a></li><li><a href="./sprite#es_apos">es_apos</a></li><li><a href="./sprite#es_area">es_area</a></li><li><a href="./sprite#es_arot">es_arot</a></li><li><a href="./sprite#es_bgmap">es_bgmap</a></li><li><a href="./sprite#es_bgmes">es_bgmes</a></li><li><a href="./sprite#es_bound">es_bound</a></li><li><a href="./sprite#es_bye">es_bye</a></li><li><a href="./sprite#es_check">es_check</a></li><li><a href="./sprite#es_chr">es_chr</a></li><li><a href="./sprite#es_clear">es_clear</a></li><li><a href="./sprite#es_cos">es_cos</a></li><li><a href="./sprite#es_dist">es_dist</a></li><li><a href="./sprite#es_draw">es_draw</a></li><li><a href="./sprite#es_effect">es_effect</a></li><li><a href="./sprite#es_exnew">es_exnew</a></li><li><a href="./sprite#es_fade">es_fade</a></li><li><a href="./sprite#es_find">es_find</a></li><li><a href="./sprite#es_flag">es_flag</a></li><li><a href="./sprite#es_get">es_get</a></li><li><a href="./sprite#es_getpos">es_getpos</a></li><li><a href="./sprite#es_gravity">es_gravity</a></li><li><a href="./sprite#es_ini">es_ini</a></li><li><a href="./sprite#es_kill">es_kill</a></li><li><a href="./sprite#es_link">es_link</a></li><li><a href="./sprite#es_modaxis">es_modaxis</a></li><li><a href="./sprite#es_move">es_move</a></li><li><a href="./sprite#es_new">es_new</a></li><li><a href="./sprite#es_offset">es_offset</a></li><li><a href="./sprite#es_opt">es_opt</a></li><li><a href="./sprite#es_pat">es_pat</a></li><li><a href="./sprite#es_patanim">es_patanim</a></li><li><a href="./sprite#es_pos">es_pos</a></li><li><a href="./sprite#es_put">es_put</a></li><li><a href="./sprite#es_putbg">es_putbg</a></li><li><a href="./sprite#es_set">es_set</a></li><li><a href="./sprite#es_setgosub">es_setgosub</a></li><li><a href="./sprite#es_setp">es_setp</a></li><li><a href="./sprite#es_setparent">es_setparent</a></li><li><a href="./sprite#es_setpri">es_setpri</a></li><li><a href="./sprite#es_setrot">es_setrot</a></li><li><a href="./sprite#es_sin">es_sin</a></li><li><a href="./sprite#es_size">es_size</a></li><li><a href="./sprite#es_type">es_type</a></li></ul><h2 id="hsp3dish" tabindex="-1">HSP3Dish <a class="header-anchor" href="#hsp3dish" aria-label="Permalink to &quot;HSP3Dish {#hsp3dish}&quot;">​</a></h2><ul><li><a href="./hsp3dish#celbitmap">celbitmap</a></li><li><a href="./hsp3dish#celputm">celputm</a></li><li><a href="./hsp3dish#devcontrol">devcontrol</a></li><li><a href="./hsp3dish#devinfo">devinfo</a></li><li><a href="./hsp3dish#devinfoi">devinfoi</a></li><li><a href="./hsp3dish#devprm">devprm</a></li><li><a href="./hsp3dish#getreq">getreq</a></li><li><a href="./hsp3dish#gfilter">gfilter</a></li><li><a href="./hsp3dish#gmulcolor">gmulcolor</a></li><li><a href="./hsp3dish#httpinfo">httpinfo</a></li><li><a href="./hsp3dish#httpload">httpload</a></li><li><a href="./hsp3dish#mtinfo">mtinfo</a></li><li><a href="./hsp3dish#mtlist">mtlist</a></li><li><a href="./hsp3dish#setcls">setcls</a></li><li><a href="./hsp3dish#setreq">setreq</a></li><li><a href="./hsp3dish#viewcalc">viewcalc</a></li></ul><h2 id="hgimg_common" tabindex="-1">HGIMG4共通 <a class="header-anchor" href="#hgimg_common" aria-label="Permalink to &quot;HGIMG4共通 {#hgimg_common}&quot;">​</a></h2><ul><li><a href="./hgimg_common#addang">addang</a></li><li><a href="./hgimg_common#addangr">addangr</a></li><li><a href="./hgimg_common#adddir">adddir</a></li><li><a href="./hgimg_common#addpos">addpos</a></li><li><a href="./hgimg_common#addscale">addscale</a></li><li><a href="./hgimg_common#addwork">addwork</a></li><li><a href="./hgimg_common#delevent">delevent</a></li><li><a href="./hgimg_common#delobj">delobj</a></li><li><a href="./hgimg_common#event_addang">event_addang</a></li><li><a href="./hgimg_common#event_addangr">event_addangr</a></li><li><a href="./hgimg_common#event_adddir">event_adddir</a></li><li><a href="./hgimg_common#event_addpos">event_addpos</a></li><li><a href="./hgimg_common#event_addscale">event_addscale</a></li><li><a href="./hgimg_common#event_addwork">event_addwork</a></li><li><a href="./hgimg_common#event_ang">event_ang</a></li><li><a href="./hgimg_common#event_angr">event_angr</a></li><li><a href="./hgimg_common#event_delobj">event_delobj</a></li><li><a href="./hgimg_common#event_dir">event_dir</a></li><li><a href="./hgimg_common#event_jump">event_jump</a></li><li><a href="./hgimg_common#event_pos">event_pos</a></li><li><a href="./hgimg_common#event_prmoff">event_prmoff</a></li><li><a href="./hgimg_common#event_prmon">event_prmon</a></li><li><a href="./hgimg_common#event_prmset">event_prmset</a></li><li><a href="./hgimg_common#event_scale">event_scale</a></li><li><a href="./hgimg_common#event_setang">event_setang</a></li><li><a href="./hgimg_common#event_setangr">event_setangr</a></li><li><a href="./hgimg_common#event_setdir">event_setdir</a></li><li><a href="./hgimg_common#event_setpos">event_setpos</a></li><li><a href="./hgimg_common#event_setscale">event_setscale</a></li><li><a href="./hgimg_common#event_setwork">event_setwork</a></li><li><a href="./hgimg_common#event_wait">event_wait</a></li><li><a href="./hgimg_common#event_work">event_work</a></li><li><a href="./hgimg_common#f2str">f2str</a></li><li><a href="./hgimg_common#fcos">fcos</a></li><li><a href="./hgimg_common#findobj">findobj</a></li><li><a href="./hgimg_common#fsin">fsin</a></li><li><a href="./hgimg_common#fsqr">fsqr</a></li><li><a href="./hgimg_common#fv2str">fv2str</a></li><li><a href="./hgimg_common#fvadd">fvadd</a></li><li><a href="./hgimg_common#fvdir">fvdir</a></li><li><a href="./hgimg_common#fvdiv">fvdiv</a></li><li><a href="./hgimg_common#fvface">fvface</a></li><li><a href="./hgimg_common#fvinner">fvinner</a></li><li><a href="./hgimg_common#fvmax">fvmax</a></li><li><a href="./hgimg_common#fvmin">fvmin</a></li><li><a href="./hgimg_common#fvmul">fvmul</a></li><li><a href="./hgimg_common#fvouter">fvouter</a></li><li><a href="./hgimg_common#fvset">fvset</a></li><li><a href="./hgimg_common#fvseti">fvseti</a></li><li><a href="./hgimg_common#fvsub">fvsub</a></li><li><a href="./hgimg_common#fvunit">fvunit</a></li><li><a href="./hgimg_common#getang">getang</a></li><li><a href="./hgimg_common#getangr">getangr</a></li><li><a href="./hgimg_common#getcoli">getcoli</a></li><li><a href="./hgimg_common#getdir">getdir</a></li><li><a href="./hgimg_common#getdiri">getdiri</a></li><li><a href="./hgimg_common#getobjcoli">getobjcoli</a></li><li><a href="./hgimg_common#getpos">getpos</a></li><li><a href="./hgimg_common#getposi">getposi</a></li><li><a href="./hgimg_common#getscale">getscale</a></li><li><a href="./hgimg_common#getscalei">getscalei</a></li><li><a href="./hgimg_common#getwork">getwork</a></li><li><a href="./hgimg_common#getworki">getworki</a></li><li><a href="./hgimg_common#newevent">newevent</a></li><li><a href="./hgimg_common#nextobj">nextobj</a></li><li><a href="./hgimg_common#objadd3">objadd3</a></li><li><a href="./hgimg_common#objadd3r">objadd3r</a></li><li><a href="./hgimg_common#objaddf3">objaddf3</a></li><li><a href="./hgimg_common#objaddfv">objaddfv</a></li><li><a href="./hgimg_common#objexist">objexist</a></li><li><a href="./hgimg_common#objgetfv">objgetfv</a></li><li><a href="./hgimg_common#objset3">objset3</a></li><li><a href="./hgimg_common#objset3r">objset3r</a></li><li><a href="./hgimg_common#objsetf3">objsetf3</a></li><li><a href="./hgimg_common#objsetfv">objsetfv</a></li><li><a href="./hgimg_common#selang">selang</a></li><li><a href="./hgimg_common#seldir">seldir</a></li><li><a href="./hgimg_common#selmoc">selmoc</a></li><li><a href="./hgimg_common#selpos">selpos</a></li><li><a href="./hgimg_common#selscale">selscale</a></li><li><a href="./hgimg_common#selwork">selwork</a></li><li><a href="./hgimg_common#setang">setang</a></li><li><a href="./hgimg_common#setangr">setangr</a></li><li><a href="./hgimg_common#setborder">setborder</a></li><li><a href="./hgimg_common#setcoli">setcoli</a></li><li><a href="./hgimg_common#setdir">setdir</a></li><li><a href="./hgimg_common#setevent">setevent</a></li><li><a href="./hgimg_common#setobjmode">setobjmode</a></li><li><a href="./hgimg_common#setobjrender">setobjrender</a></li><li><a href="./hgimg_common#setpos">setpos</a></li><li><a href="./hgimg_common#setscale">setscale</a></li><li><a href="./hgimg_common#setwork">setwork</a></li><li><a href="./hgimg_common#str2f">str2f</a></li><li><a href="./hgimg_common#str2fv">str2fv</a></li></ul><h2 id="hgimg4" tabindex="-1">HGIMG4 <a class="header-anchor" href="#hgimg4" aria-label="Permalink to &quot;HGIMG4 {#hgimg4}&quot;">​</a></h2><ul><li><a href="./hgimg4#addwork2">addwork2</a></li><li><a href="./hgimg4#event_angy">event_angy</a></li><li><a href="./hgimg4#event_angz">event_angz</a></li><li><a href="./hgimg4#event_fade">event_fade</a></li><li><a href="./hgimg4#event_setangy">event_setangy</a></li><li><a href="./hgimg4#event_setangz">event_setangz</a></li><li><a href="./hgimg4#event_suicide">event_suicide</a></li><li><a href="./hgimg4#getobjname">getobjname</a></li><li><a href="./hgimg4#getquat">getquat</a></li><li><a href="./hgimg4#getwork2">getwork2</a></li><li><a href="./hgimg4#getwork2i">getwork2i</a></li><li><a href="./hgimg4#gpact">gpact</a></li><li><a href="./hgimg4#gpaddanim">gpaddanim</a></li><li><a href="./hgimg4#gpbox">gpbox</a></li><li><a href="./hgimg4#gpcamera">gpcamera</a></li><li><a href="./hgimg4#gpclone">gpclone</a></li><li><a href="./hgimg4#gpcnvaxis">gpcnvaxis</a></li><li><a href="./hgimg4#gpcolormat">gpcolormat</a></li><li><a href="./hgimg4#gpdraw">gpdraw</a></li><li><a href="./hgimg4#gpfloor">gpfloor</a></li><li><a href="./hgimg4#gpgetanim">gpgetanim</a></li><li><a href="./hgimg4#gpgetlog">gpgetlog</a></li><li><a href="./hgimg4#gpgetmat">gpgetmat</a></li><li><a href="./hgimg4#gpgetprm">gpgetprm</a></li><li><a href="./hgimg4#gplight">gplight</a></li><li><a href="./hgimg4#gpload">gpload</a></li><li><a href="./hgimg4#gplookat">gplookat</a></li><li><a href="./hgimg4#gpmatprm">gpmatprm</a></li><li><a href="./hgimg4#gpmatprm1">gpmatprm1</a></li><li><a href="./hgimg4#gpmatprm16">gpmatprm16</a></li><li><a href="./hgimg4#gpmatprm4">gpmatprm4</a></li><li><a href="./hgimg4#gpmatprmt">gpmatprmt</a></li><li><a href="./hgimg4#gpmatstate">gpmatstate</a></li><li><a href="./hgimg4#gpmesh">gpmesh</a></li><li><a href="./hgimg4#gpmeshadd">gpmeshadd</a></li><li><a href="./hgimg4#gpmeshclear">gpmeshclear</a></li><li><a href="./hgimg4#gpmeshpolygon">gpmeshpolygon</a></li><li><a href="./hgimg4#gpnodeinfo">gpnodeinfo</a></li><li><a href="./hgimg4#gpnull">gpnull</a></li><li><a href="./hgimg4#gpobjpool">gpobjpool</a></li><li><a href="./hgimg4#gppapply">gppapply</a></li><li><a href="./hgimg4#gppbind">gppbind</a></li><li><a href="./hgimg4#gppcontact">gppcontact</a></li><li><a href="./hgimg4#gppinfo">gppinfo</a></li><li><a href="./hgimg4#gpplate">gpplate</a></li><li><a href="./hgimg4#gppostefx">gppostefx</a></li><li><a href="./hgimg4#gppraytest">gppraytest</a></li><li><a href="./hgimg4#gppset">gppset</a></li><li><a href="./hgimg4#gpreset">gpreset</a></li><li><a href="./hgimg4#gpresetlight">gpresetlight</a></li><li><a href="./hgimg4#gpscrmat">gpscrmat</a></li><li><a href="./hgimg4#gpsetanim">gpsetanim</a></li><li><a href="./hgimg4#gpsetprm">gpsetprm</a></li><li><a href="./hgimg4#gpsetprmoff">gpsetprmoff</a></li><li><a href="./hgimg4#gpsetprmon">gpsetprmon</a></li><li><a href="./hgimg4#gpspr">gpspr</a></li><li><a href="./hgimg4#gptexmat">gptexmat</a></li><li><a href="./hgimg4#gpusecamera">gpusecamera</a></li><li><a href="./hgimg4#gpuselight">gpuselight</a></li><li><a href="./hgimg4#gpusermat">gpusermat</a></li><li><a href="./hgimg4#gpusershader">gpusershader</a></li><li><a href="./hgimg4#gpusescene">gpusescene</a></li><li><a href="./hgimg4#gpviewport">gpviewport</a></li><li><a href="./hgimg4#selquat">selquat</a></li><li><a href="./hgimg4#selwork2">selwork2</a></li><li><a href="./hgimg4#setalpha">setalpha</a></li><li><a href="./hgimg4#setangy">setangy</a></li><li><a href="./hgimg4#setangz">setangz</a></li><li><a href="./hgimg4#setobjlight">setobjlight</a></li><li><a href="./hgimg4#setobjname">setobjname</a></li><li><a href="./hgimg4#setquat">setquat</a></li><li><a href="./hgimg4#setwork2">setwork2</a></li></ul><h2 id="obaq" tabindex="-1">OBAQ <a class="header-anchor" href="#obaq" aria-label="Permalink to &quot;OBAQ {#obaq}&quot;">​</a></h2><ul><li><a href="./obaq#qaddmodel">qaddmodel</a></li><li><a href="./obaq#qaddpoly">qaddpoly</a></li><li><a href="./obaq#qblast">qblast</a></li><li><a href="./obaq#qborder">qborder</a></li><li><a href="./obaq#qcnvaxis">qcnvaxis</a></li><li><a href="./obaq#qcollision">qcollision</a></li><li><a href="./obaq#qdamper">qdamper</a></li><li><a href="./obaq#qdel">qdel</a></li><li><a href="./obaq#qdraw">qdraw</a></li><li><a href="./obaq#qexec">qexec</a></li><li><a href="./obaq#qfind">qfind</a></li><li><a href="./obaq#qgetaxis">qgetaxis</a></li><li><a href="./obaq#qgetcol">qgetcol</a></li><li><a href="./obaq#qgetcol2">qgetcol2</a></li><li><a href="./obaq#qgetcol3">qgetcol3</a></li><li><a href="./obaq#qgetdamper">qgetdamper</a></li><li><a href="./obaq#qgetgroup">qgetgroup</a></li><li><a href="./obaq#qgetinertia">qgetinertia</a></li><li><a href="./obaq#qgetmat">qgetmat</a></li><li><a href="./obaq#qgetmat2">qgetmat2</a></li><li><a href="./obaq#qgetmat3">qgetmat3</a></li><li><a href="./obaq#qgetpos">qgetpos</a></li><li><a href="./obaq#qgetptr">qgetptr</a></li><li><a href="./obaq#qgetreq">qgetreq</a></li><li><a href="./obaq#qgetspeed">qgetspeed</a></li><li><a href="./obaq#qgetstat">qgetstat</a></li><li><a href="./obaq#qgettype">qgettype</a></li><li><a href="./obaq#qgetuser">qgetuser</a></li><li><a href="./obaq#qgetuser2">qgetuser2</a></li><li><a href="./obaq#qgetversion">qgetversion</a></li><li><a href="./obaq#qgetweight">qgetweight</a></li><li><a href="./obaq#qgravity">qgravity</a></li><li><a href="./obaq#qgroup">qgroup</a></li><li><a href="./obaq#qinertia">qinertia</a></li><li><a href="./obaq#qinner">qinner</a></li><li><a href="./obaq#qmat">qmat</a></li><li><a href="./obaq#qmat2">qmat2</a></li><li><a href="./obaq#qmat3">qmat3</a></li><li><a href="./obaq#qnext">qnext</a></li><li><a href="./obaq#qpos">qpos</a></li><li><a href="./obaq#qpush">qpush</a></li><li><a href="./obaq#qreset">qreset</a></li><li><a href="./obaq#qsetreq">qsetreq</a></li><li><a href="./obaq#qspeed">qspeed</a></li><li><a href="./obaq#qstat">qstat</a></li><li><a href="./obaq#qterm">qterm</a></li><li><a href="./obaq#qtype">qtype</a></li><li><a href="./obaq#quser">quser</a></li><li><a href="./obaq#quser2">quser2</a></li><li><a href="./obaq#qview">qview</a></li><li><a href="./obaq#qweight">qweight</a></li></ul>',45),s=[h];function o(t,f,g,m,_,n){return a(),e("div",null,s)}const c=i(r,[["render",o]]);export{d as __pageData,c as default};