<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Oracle Girl — Prototype</title>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --pink:#E91E8C;--pink-light:#F8C8E8;--pink-pale:#FDF0F8;
  --blue:#1A3C8F;--blue-light:#4A6FD4;
  --orange:#F5821F;--green:#22A663;--amber:#F59E0B;
  --gray-50:#F9FAFB;--gray-100:#F3F4F6;--gray-200:#E5E7EB;
  --gray-300:#D1D5DB;--gray-400:#9CA3AF;--gray-500:#6B7280;
  --gray-700:#374151;--gray-900:#111827;
  --bg:#F5F4F0;--white:#FFFFFF;
  --r:12px;--rl:20px;
  --sh:0 2px 8px rgba(0,0,0,.08);--shl:0 8px 32px rgba(0,0,0,.12)
}
body{font-family:'Figtree',sans-serif;background:var(--bg);color:var(--gray-900);font-size:15px;line-height:1.5}

/* SCREENS */
.screen{display:none;min-height:100vh;flex-direction:column}
.screen.active{display:flex}

/* NAV */
nav{background:var(--white);border-bottom:1px solid var(--gray-200);padding:0 40px;height:64px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:700;color:var(--gray-900);cursor:pointer;text-decoration:none}
.nav-links{display:flex;align-items:center;gap:32px}
.nav-links span{font-size:15px;font-weight:500;color:var(--gray-700);cursor:pointer}
.nav-links span:hover{color:var(--gray-900)}
.nav-user{display:flex;align-items:center;gap:8px;cursor:pointer;position:relative}
.avatar{width:34px;height:34px;border-radius:50%;background:var(--pink-light);display:flex;align-items:center;justify-content:center}
.uname strong{display:block;font-size:14px;font-weight:600}
.uname small{font-size:12px;color:var(--gray-400)}
.dropdown{position:absolute;top:calc(100% + 8px);right:0;background:var(--white);border:1px solid var(--gray-200);border-radius:var(--r);box-shadow:var(--shl);width:200px;padding:8px 0;display:none;z-index:200}
.dropdown.open{display:block}
.dropdown a{display:block;padding:10px 16px;font-size:14px;font-weight:500;color:var(--gray-700);cursor:pointer}
.dropdown a:hover{background:var(--gray-50)}
.dropdown hr{border:none;border-top:1px solid var(--gray-200);margin:4px 0}
.dropdown a.red{color:#EF4444}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 28px;border-radius:50px;font-family:'Figtree',sans-serif;font-size:15px;font-weight:600;cursor:pointer;border:none;transition:all .15s;text-decoration:none}
.btn-pink{background:var(--pink);color:white}.btn-pink:hover{background:#D01880}
.btn-outline{background:var(--white);color:var(--gray-700);border:1.5px solid var(--gray-300)}.btn-outline:hover{background:var(--gray-50)}
.btn-sm{padding:8px 18px;font-size:13px}
.btn-ghost{background:transparent;color:var(--blue-light);font-size:14px;font-weight:500;padding:8px 4px;border:none;cursor:pointer;font-family:'Figtree',sans-serif}
.btn-red-text{background:transparent;color:#EF4444;font-size:14px;font-weight:500;padding:8px 4px;border:none;cursor:pointer;font-family:'Figtree',sans-serif}
.btn-pause{background:var(--gray-100);color:var(--gray-600);border:1px solid var(--gray-200);padding:8px 18px;border-radius:50px;font-size:13px;font-weight:600;cursor:pointer;font-family:'Figtree',sans-serif}
.btn-resume{background:#ECFDF5;color:var(--green);border:1px solid #A7F3D0;padding:8px 18px;border-radius:50px;font-size:13px;font-weight:600;cursor:pointer;font-family:'Figtree',sans-serif}

/* TAGS */
.tag{display:inline-flex;align-items:center;padding:4px 12px;border-radius:50px;font-size:12px;font-weight:500}
.tag-green{background:#ECFDF5;color:#059669;border:1px solid #A7F3D0}
.tag-amber{background:#FFF7ED;color:#D97706;border:1px solid #FDE68A}
.tag-purple{background:#F5F3FF;color:#7C3AED;border:1px solid #DDD6FE}

/* CONTENT */
.wrap{flex:1;padding:40px;max-width:1100px;margin:0 auto;width:100%}
.back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:500;color:var(--gray-500);cursor:pointer;margin-bottom:24px}
.back:hover{color:var(--gray-900)}

/* ── HOME ── */
.hero{position:relative;height:500px;border-radius:var(--rl);overflow:hidden;margin-bottom:48px;display:flex;align-items:center;justify-content:center;text-align:center}
.hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#2C2C3E,#4A3060,#2C2C3E)}
.hero-ov{position:absolute;inset:0;background:rgba(0,0,0,.35)}
.hero-txt{position:relative;z-index:1;color:white}
.hero-txt h1{font-size:42px;font-weight:700;line-height:1.2;margin-bottom:12px}
.hero-txt p{font-size:17px;opacity:.85;margin-bottom:28px;max-width:480px}
.sec-title{font-size:24px;font-weight:700;color:var(--blue);margin-bottom:24px;text-align:center}
.events-row{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px}
.events-row::-webkit-scrollbar{height:4px}.events-row::-webkit-scrollbar-thumb{background:var(--gray-300);border-radius:2px}
.ecard{flex:0 0 210px;background:var(--white);border-radius:var(--r);overflow:hidden;cursor:pointer;transition:transform .15s,box-shadow .15s;border:1px solid var(--gray-200)}
.ecard:hover{transform:translateY(-3px);box-shadow:var(--shl)}
.ecard-img{height:130px}
.ecard-body{padding:12px 14px}
.ecard-date{display:flex;align-items:baseline;gap:6px;margin-bottom:6px}
.ecard-date .mo{font-size:11px;font-weight:700;color:var(--gray-500);text-transform:uppercase}
.ecard-date .dy{font-size:22px;font-weight:700;color:var(--blue);line-height:1}
.ecard-title{font-size:14px;font-weight:600;margin-bottom:4px}
.ecard-desc{font-size:12px;color:var(--gray-500);line-height:1.4}

/* ── EVENT DETAIL ── */
.detail-grid{display:grid;grid-template-columns:1fr 330px;gap:32px;align-items:start}
.detail-img{width:100%;height:330px;border-radius:var(--rl)}
.detail-tags{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.detail-title{font-size:30px;font-weight:700;margin-bottom:12px}
.detail-desc{font-size:15px;color:var(--gray-600);line-height:1.6;margin-bottom:20px}
.detail-box{background:var(--gray-50);border-radius:var(--r);padding:20px;margin-bottom:16px}
.detail-box h3{font-size:15px;font-weight:700;margin-bottom:10px}
.detail-box p,.detail-box li{font-size:14px;color:var(--gray-600);line-height:1.6}
.detail-box ul{padding-left:18px;margin-top:8px}
.detail-box li{margin-bottom:4px}
.side-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--rl);padding:24px;position:sticky;top:80px}
.side-datebox{display:flex;align-items:flex-start;gap:16px;margin-bottom:16px}
.datebox{background:var(--gray-100);border-radius:10px;padding:8px 14px;text-align:center;min-width:56px}
.datebox .dy{font-size:26px;font-weight:800;color:var(--blue);line-height:1}
.datebox .dow{font-size:11px;font-weight:700;color:var(--gray-500);text-transform:uppercase}
.side-meta{border-top:1px solid var(--gray-200);padding-top:14px;margin-bottom:18px;font-size:13px;color:var(--gray-500)}
.side-meta-row{display:flex;gap:10px;margin-bottom:10px;align-items:flex-start}
.incl p{font-weight:600;color:var(--gray-700);font-size:14px;margin-bottom:4px}
.topic-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}

/* ── REGISTRATION ── */
.reg-grid{display:grid;grid-template-columns:1fr 310px;gap:28px;align-items:start}
.reg-h{font-size:20px;font-weight:700;color:var(--blue);margin-bottom:20px}
.rsec{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--rl);margin-bottom:14px;overflow:hidden}
.rsec-hd{display:flex;align-items:center;justify-content:space-between;padding:16px 22px;cursor:pointer}
.rsec-hd h3{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:600}
.acc{width:4px;height:18px;background:var(--orange);border-radius:2px;flex-shrink:0}
.rsec-bd{padding:0 22px 22px;border-top:1px solid var(--gray-100)}
.event-preview{display:flex;gap:14px;padding:14px 0}
.ev-thumb{width:80px;height:80px;border-radius:10px;flex-shrink:0}
.ev-info h4{font-size:15px;font-weight:600;margin-bottom:4px}
.ev-info .meta{font-size:13px;color:var(--gray-500);margin-bottom:4px;display:flex;gap:12px;flex-wrap:wrap}
.ev-info p{font-size:13px;color:var(--gray-500);line-height:1.4}
.join-opt{display:flex;align-items:center;gap:14px;padding:13px 16px;border:2px solid var(--gray-200);border-radius:var(--r);cursor:pointer;margin-bottom:10px;transition:all .12s}
.join-opt.sel{border-color:var(--pink);background:var(--pink-pale)}
.jcheck{width:20px;height:20px;border-radius:4px;border:2px solid var(--gray-300);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .12s}
.join-opt.sel .jcheck{background:var(--pink);border-color:var(--pink)}
.jcheck svg{display:none;color:white}
.join-opt.sel .jcheck svg{display:block}
.join-txt strong{display:block;font-size:14px;font-weight:600}
.join-txt span{font-size:12px;color:var(--gray-500)}
.join-note{font-size:12px;color:var(--gray-400);margin-top:6px}
.join-note a{color:var(--blue-light);cursor:pointer}
.pinfo{background:#EFF6FF;border-radius:8px;padding:12px 14px;font-size:13px;color:#1E40AF;margin:14px 0;display:flex;gap:10px;align-items:flex-start}
.pentry{display:flex;align-items:center;justify-content:space-between;padding:11px 13px;border-radius:10px;margin-bottom:8px}
.pentry.animal{background:#F0FDF4}.pentry.person{background:#F5F3FF}
.pentry-l{display:flex;align-items:center;gap:10px}
.pentry-icon{font-size:16px;width:30px;text-align:center}
.pentry-name{font-size:14px;font-weight:600}
.pentry-focus{font-size:12px;color:var(--gray-500)}
.premove{background:none;border:none;cursor:pointer;color:var(--gray-400);font-size:18px;line-height:1}
.premove:hover{color:var(--gray-700)}
.type-tabs{display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap}
.ttab{padding:7px 14px;border-radius:50px;border:1.5px solid var(--gray-200);font-size:13px;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:5px;background:var(--white);color:var(--gray-600);transition:all .12s;font-family:'Figtree',sans-serif}
.ttab.active{background:var(--pink);color:white;border-color:var(--pink)}
.pinput{width:100%;border:1.5px solid var(--gray-200);border-radius:10px;padding:10px 14px;font-family:'Figtree',sans-serif;font-size:14px;color:var(--gray-900);outline:none;margin-bottom:10px;transition:border-color .12s}
.pinput:focus{border-color:var(--blue-light)}
.padd{display:flex;align-items:center;gap:6px;padding:9px 16px;background:var(--gray-100);border:1.5px dashed var(--gray-300);border-radius:8px;font-size:13px;font-weight:500;color:var(--gray-600);cursor:pointer;font-family:'Figtree',sans-serif;transition:all .12s}
.padd:hover{background:var(--pink-pale);border-color:var(--pink);color:var(--pink)}
/* Summary sidebar */
.sum-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--rl);padding:22px;position:sticky;top:80px}
.sum-card h3{font-size:16px;font-weight:700;margin-bottom:4px}
.sum-name{font-size:16px;font-weight:700;color:var(--blue-light);margin-bottom:14px}
.sum-row{display:flex;justify-content:space-between;font-size:13px;color:var(--gray-500);margin-bottom:6px}
.sum-row strong{color:var(--gray-900);font-weight:600}
.sum-div{border:none;border-top:1px solid var(--gray-200);margin:12px 0}
.sum-total{display:flex;justify-content:space-between;font-size:16px;font-weight:700;margin-bottom:4px}
.sum-total small{display:block;font-size:11px;font-weight:400;color:var(--gray-400)}
.sum-incl-item{display:flex;align-items:center;justify-content:space-between;font-size:13px;padding:3px 0}
.sum-incl-item button{background:none;border:none;cursor:pointer;color:var(--gray-400);font-size:14px}
.don-box{border-top:1px solid var(--gray-200);padding-top:14px;margin-top:6px}
.don-box h4{font-size:15px;font-weight:600;margin-bottom:10px}
.don-row{display:flex;gap:8px;margin-bottom:8px}
.don-cur{padding:10px 12px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px;font-family:'Figtree',sans-serif;color:var(--gray-700);background:var(--white)}
.don-amt{flex:1;padding:10px 14px;border:1.5px solid var(--blue-light);border-radius:8px;font-size:14px;font-family:'Figtree',sans-serif;outline:none}
.don-note{font-size:12px;color:var(--gray-400);margin-bottom:10px}
.don-toggle-row{background:var(--gray-50);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--gray-700);margin-bottom:12px;display:flex;align-items:center;justify-content:space-between}
.toggle{width:36px;height:20px;background:var(--blue-light);border-radius:50px;position:relative;cursor:pointer;flex-shrink:0}
.toggle::after{content:'';position:absolute;width:16px;height:16px;background:white;border-radius:50%;top:2px;right:2px}

/* ── SUCCESS ── */
.success-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;text-align:center}
.success-icon{width:72px;height:72px;border-radius:50%;background:#ECFDF5;border:3px solid #6EE7B7;display:flex;align-items:center;justify-content:center;margin-bottom:24px}
.success-wrap h2{font-size:26px;font-weight:800;margin-bottom:8px}
.success-wrap p{font-size:15px;color:var(--gray-500);max-width:420px;margin-bottom:28px}

/* ── ACCOUNT ── */
.acct-sub{font-size:13px;color:var(--gray-400);margin-bottom:4px}
.acct-hi{font-size:28px;font-weight:800;margin-bottom:4px}
.acct-desc{font-size:14px;color:var(--gray-500);margin-bottom:24px}
.focus-box{background:var(--pink-pale);border:1.5px solid var(--pink-light);border-radius:var(--rl);padding:18px 20px;margin-bottom:28px}
.focus-box-hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
.focus-box-hd h3{font-size:14px;font-weight:600}
.focus-val{background:white;border-radius:8px;padding:7px 14px;font-size:14px;color:var(--gray-600);display:inline-block;margin-top:6px}
.sec-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.sec-hd h3{font-size:17px;font-weight:700;color:var(--blue)}
.sec-hd a{font-size:13px;color:var(--blue-light);font-weight:500;cursor:pointer}
.cont-row{display:flex;gap:14px;overflow-x:auto;padding-bottom:8px;margin-bottom:32px}
.cont-row::-webkit-scrollbar{height:4px}.cont-row::-webkit-scrollbar-thumb{background:var(--gray-300);border-radius:2px}
.ccard{flex:0 0 190px;background:var(--white);border:1px solid var(--gray-200);border-radius:var(--r);overflow:hidden;cursor:pointer}
.ccard:hover{box-shadow:var(--sh)}
.cthumb{height:100px;position:relative}
.cpbar{position:absolute;bottom:0;left:0;height:3px;background:var(--green)}
.cbody{padding:10px 12px}
.ctitle{font-size:13px;font-weight:600;margin-bottom:4px;line-height:1.3}
.cmeta{font-size:12px;color:var(--gray-400)}
.cmeta .pct{color:var(--green);font-weight:600}
/* Tabs */
.tabs{display:flex;gap:4px;border-bottom:2px solid var(--gray-200);margin-bottom:18px;overflow-x:auto}
.tab{padding:10px 16px;font-size:14px;font-weight:500;color:var(--gray-500);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;white-space:nowrap;transition:all .12s}
.tab.active{color:var(--blue);border-bottom-color:var(--orange);font-weight:600}
.filter-row{display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap}
.search-box{display:flex;align-items:center;gap:8px;background:var(--white);border:1.5px solid var(--gray-200);border-radius:8px;padding:8px 14px;flex:1;max-width:260px}
.search-box input{border:none;outline:none;font-family:'Figtree',sans-serif;font-size:14px;flex:1;background:transparent}
.fbtn{display:flex;align-items:center;gap:5px;padding:8px 13px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:13px;font-weight:500;color:var(--gray-600);cursor:pointer;background:var(--white);font-family:'Figtree',sans-serif}
/* My event card */
.mecard{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--rl);overflow:hidden;margin-bottom:14px}
.mec-thumb{height:150px;position:relative}
.mec-thumb .ctag{position:absolute;top:12px;left:12px;background:rgba(255,255,255,.9);border-radius:50px;padding:4px 10px;font-size:11px;font-weight:600}
.mec-thumb .ctag2{position:absolute;top:12px;left:104px;background:rgba(255,255,255,.9);border-radius:50px;padding:4px 10px;font-size:11px;font-weight:600;color:var(--blue-light)}
.mec-thumb .pbar{position:absolute;bottom:0;left:0;height:4px;background:var(--green)}
.mec-thumb .plbl{position:absolute;bottom:10px;left:12px;background:rgba(0,0,0,.6);color:white;border-radius:50px;padding:2px 8px;font-size:11px;font-weight:600}
.dot-btn{position:absolute;top:12px;right:12px;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.85);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center}
.dot-menu{position:absolute;top:48px;right:12px;background:var(--white);border:1px solid var(--gray-200);border-radius:var(--r);box-shadow:var(--shl);min-width:170px;padding:6px 0;z-index:50;display:none}
.dot-menu.open{display:block}
.dot-menu a{display:block;padding:9px 16px;font-size:13px;font-weight:500;color:var(--gray-700);cursor:pointer}
.dot-menu a:hover{background:var(--gray-50)}
.dot-menu a.red{color:#EF4444}
.mec-body{padding:14px 18px}
.mec-body h4{font-size:15px;font-weight:700;margin-bottom:5px}
.mec-meta{font-size:13px;color:var(--gray-500);margin-bottom:12px}
.mec-actions{display:flex;align-items:center;gap:10px}
.abtn{display:inline-flex;align-items:center;gap:6px;padding:8px 17px;border-radius:50px;font-size:13px;font-weight:600;cursor:pointer;border:none;font-family:'Figtree',sans-serif}
.abtn-pink{background:var(--pink);color:white}.abtn-pink:hover{background:#D01880}
.abtn-out{background:var(--white);color:var(--gray-700);border:1.5px solid var(--gray-300)}.abtn-out:hover{background:var(--gray-50)}
.part-badge{display:flex;align-items:center;gap:5px;background:var(--gray-100);border-radius:50px;padding:6px 12px;font-size:12px;color:var(--gray-600);font-weight:500;margin-left:auto}

/* ── SUBSCRIPTIONS ── */
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:28px}
.stat{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--rl);padding:18px 22px;display:flex;align-items:center;gap:14px}
.stico{width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center}
.stico-b{background:#EFF6FF;color:var(--blue-light)}
.stico-g{background:#ECFDF5;color:var(--green)}
.stico-o{background:#FFF7ED;color:var(--orange)}
.stat-val{font-size:22px;font-weight:800}
.stat-lbl{font-size:13px;color:var(--gray-500)}
.slist{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--rl);overflow:hidden;margin-bottom:28px}
.slist-hd{padding:18px 22px;border-bottom:1px solid var(--gray-200);font-size:15px;font-weight:700}
.sitem{display:flex;align-items:center;gap:18px;padding:18px 22px;border-bottom:1px solid var(--gray-100)}
.sitem:last-child{border-bottom:none}
.sico{width:36px;height:36px;border-radius:50%;background:var(--gray-100);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sinfo{flex:1}
.sinfo h4{font-size:15px;font-weight:600;margin-bottom:2px}
.sinfo .who{font-size:13px;color:var(--blue-light);font-weight:500;margin-bottom:3px}
.sinfo .smeta{font-size:12px;color:var(--gray-400)}
.sprice{text-align:right;min-width:100px}
.sprice .amt{font-size:15px;font-weight:700}
.sprice .nxt{font-size:12px;color:var(--gray-400)}
.sactions{display:flex;align-items:center;gap:8px}
.pay-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--rl);padding:20px 22px}
.pay-card h3{font-size:15px;font-weight:700;margin-bottom:14px}
.pay-method{display:flex;align-items:center;gap:14px;padding:13px 16px;border:1.5px solid var(--gray-200);border-radius:var(--r)}
.card-ico{width:44px;height:28px;background:linear-gradient(135deg,#1A3C8F,#4A6FD4);border-radius:4px;display:flex;align-items:center;justify-content:center;color:white;font-size:10px;font-weight:700;flex-shrink:0}
.pay-method-info{flex:1}
.pay-method-info strong{font-size:14px;font-weight:600;display:block}
.pay-method-info small{font-size:12px;color:var(--gray-400)}

/* ── PLAYER ── */
.player-wrap{max-width:720px;margin:0 auto}
.pcard{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--rl);overflow:hidden}
.pcard-hd{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;border-bottom:1px solid var(--gray-100);flex-wrap:wrap;gap:10px}
.pcard-hd h2{font-size:19px;font-weight:700;display:flex;align-items:center;gap:10px}
.phd-actions{display:flex;gap:8px;flex-wrap:wrap}
.pvid{background:#1A1A2E;aspect-ratio:16/9;position:relative;display:flex;align-items:flex-end}
.pvid-bg{position:absolute;inset:0;background:linear-gradient(180deg,#1e3a5f 0%,#0d1a2e 100%)}
.pcontrols{position:relative;z-index:1;width:100%;padding:16px 20px;background:linear-gradient(transparent,rgba(0,0,0,.75))}
.pprog{width:100%;height:4px;background:rgba(255,255,255,.3);border-radius:2px;margin-bottom:12px;cursor:pointer}
.pprog-fill{height:100%;width:3%;background:white;border-radius:2px}
.pctrl{display:flex;align-items:center;gap:10px}
.pbtn{background:rgba(255,255,255,.15);border:none;color:white;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:11px;font-weight:700;font-family:'Figtree',sans-serif}
.pplay{width:44px;height:44px;background:rgba(255,255,255,.9);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;flex-shrink:0}
.ptime{color:white;font-size:13px;margin-left:auto}
.psub{padding:18px 22px;background:var(--gray-50);border-top:1px solid var(--gray-200)}
.psub h4{font-size:14px;font-weight:700;margin-bottom:8px}
.psub p{font-size:14px;color:var(--gray-600);line-height:1.6}
.read-more{color:var(--blue-light);font-size:13px;cursor:pointer;display:inline-flex;align-items:center;gap:4px;margin-top:6px;font-weight:500}

/* ── MODALS ── */
.modal-ov{position:fixed;inset:0;background:rgba(0,0,0,.45);display:none;align-items:center;justify-content:center;z-index:1000}
.modal-ov.open{display:flex}
.modal{background:var(--white);border-radius:var(--rl);padding:30px;max-width:430px;width:90%;box-shadow:var(--shl)}
.modal h3{font-size:18px;font-weight:700;margin-bottom:8px}
.modal p{font-size:14px;color:var(--gray-500);margin-bottom:22px;line-height:1.5}
.modal-ico{width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.modal-ico-red{background:#FEF2F2;color:#EF4444}
.modal-ico-blue{background:#EFF6FF;color:var(--blue-light)}
.modal-actions{display:flex;gap:10px;justify-content:flex-end}

/* GRADIENT HELPERS */
.g1{background:linear-gradient(135deg,#667eea,#764ba2)}
.g2{background:linear-gradient(135deg,#2D5016,#4A7C2A)}
.g3{background:linear-gradient(135deg,#F59E0B,#EF4444)}
.g4{background:linear-gradient(135deg,#06B6D4,#3B82F6)}
.g5{background:linear-gradient(135deg,#8B5CF6,#EC4899)}
.g6{background:linear-gradient(135deg,#059669,#10B981)}

/* ICON SVG HELPER */
svg.ico{display:inline-block;vertical-align:middle}
.hidden{display:none!important}
.w-full{width:100%}
</style>
</head>
<body>

<!-- ═══════════════ HOME ═══════════════ -->
<div class="screen" id="s-home">
  <nav>
    <div class="logo" onclick="go('home')">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="8" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="3" fill="black"/></svg>
      oracle girl
    </div>
    <div class="nav-links">
      <span onclick="go('home')">Events</span>
      <span>Immediate Assistance</span>
      <span>Top-Up</span>
    </div>
    <div class="nav-user" onclick="toggleDD('dd-home')">
      <div class="avatar"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
      <div class="uname"><strong>Hi Test</strong><small>Personal account</small></div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      <div class="dropdown" id="dd-home">
        <a onclick="go('account')">My events</a>
        <a onclick="go('subscriptions')">My subscriptions</a>
        <a onclick="go('account')">Favourite list</a>
        <a onclick="go('account')">Receipts</a>
        <a onclick="go('account')">Settings</a>
        <hr>
        <a onclick="go('account')">Help centre</a>
        <a class="red">Log out</a>
      </div>
    </div>
  </nav>
  <div class="wrap">
    <div class="hero">
      <div class="hero-bg"></div><div class="hero-ov"></div>
      <div class="hero-txt">
        <h1>Embodying more<br>love on this planet</h1>
        <p>The future is positive. Dream. Rebuild your societies. Purify yourself and all beings.</p>
        <button class="btn btn-pink" onclick="go('detail')">Start here</button>
      </div>
    </div>
    <div class="sec-title">Upcoming events</div>
    <div class="events-row">
      <div class="ecard" onclick="go('detail')"><div class="ecard-img g1"></div><div class="ecard-body"><div class="ecard-date"><span class="mo">Mar</span><span class="dy">10</span></div><div class="ecard-title">Q&amp;A with Jacqueline 12</div><div class="ecard-desc">Ask Jacqueline a question. Discover deeper layers...</div></div></div>
      <div class="ecard" onclick="go('detail')"><div class="ecard-img g2"></div><div class="ecard-body"><div class="ecard-date"><span class="mo">Mar</span><span class="dy">11</span></div><div class="ecard-title">Reboot group</div><div class="ecard-desc">Embody more love on this planet...</div></div></div>
      <div class="ecard" onclick="go('detail')"><div class="ecard-img g3"></div><div class="ecard-body"><div class="ecard-date"><span class="mo">Mar</span><span class="dy">13</span></div><div class="ecard-title">Power up for Silent immersion 6</div><div class="ecard-desc">Prepare for the next Silent...</div></div></div>
      <div class="ecard" onclick="go('detail')"><div class="ecard-img g4"></div><div class="ecard-body"><div class="ecard-date"><span class="mo">Mar</span><span class="dy">15</span></div><div class="ecard-title">Sundays@7</div><div class="ecard-desc">Join me in silence without technology...</div></div></div>
      <div class="ecard" onclick="go('detail')"><div class="ecard-img g5"></div><div class="ecard-body"><div class="ecard-date"><span class="mo">Mar</span><span class="dy">17</span></div><div class="ecard-title">Reboot discovery 5</div><div class="ecard-desc">Act out of purity...</div></div></div>
      <div class="ecard" onclick="go('detail')"><div class="ecard-img g6"></div><div class="ecard-body"><div class="ecard-date"><span class="mo">Mar</span><span class="dy">26</span></div><div class="ecard-title">Deep silence; peace 16</div><div class="ecard-desc">Join me in silence...</div></div></div>
    </div>
  </div>
</div>

<!-- ═══════════════ EVENT DETAIL ═══════════════ -->
<div class="screen" id="s-detail">
  <nav>
    <div class="logo" onclick="go('home')"><svg width="34" height="34" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="8" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="3" fill="black"/></svg>oracle girl</div>
    <div class="nav-links"><span onclick="go('home')">Events</span><span>Immediate Assistance</span><span>Top-Up</span></div>
    <div class="nav-user" onclick="toggleDD('dd-detail')">
      <div class="avatar"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
      <div class="uname"><strong>Hi Test</strong><small>Personal account</small></div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      <div class="dropdown" id="dd-detail">
        <a onclick="go('account')">My events</a><a onclick="go('subscriptions')">My subscriptions</a><a onclick="go('account')">Favourite list</a><a onclick="go('account')">Receipts</a><a onclick="go('account')">Settings</a><hr><a onclick="go('account')">Help centre</a><a class="red">Log out</a>
      </div>
    </div>
  </nav>
  <div class="wrap">
    <div class="back" onclick="go('home')"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back</div>
    <div class="detail-grid">
      <div>
        <div class="detail-img g2"></div>
        <div class="detail-tags">
          <span class="tag tag-green">Starts in 3 days</span>
          <span class="tag tag-amber">All day purification</span>
          <div style="margin-left:auto;display:flex;gap:8px">
            <button style="width:34px;height:34px;border-radius:50%;border:1.5px solid var(--gray-200);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>
            <button style="width:34px;height:34px;border-radius:50%;border:1.5px solid var(--gray-200);background:white;cursor:pointer;display:flex;align-items:center;justify-content:center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
          </div>
        </div>
        <h1 class="detail-title">Reboot group</h1>
        <p class="detail-desc">Personal purifications. Embody your own purity. Plug directly into your own source connection and your own self healing ability — and nothing else. Live the positive future-now where nothing controls you and false identities, family patterns and personal issues slowly melt away.</p>
        <div class="detail-box">
          <h3>Event details</h3>
          <p>Two purification sessions take place each week on the unseen level. It's an all-day purification event. First, sign yourself up — this is essential for receiving your personal purification.<br><br>After you're signed up, you can add your Specific Focus in your Donor Account for deeper integration. You can then add someone else to the purification with their own Specific Focus, or gift this event to someone if you wish.</p>
          <h3 style="margin-top:14px">What to expect</h3>
          <ul><li>The purification works on an unseen level, no matter what you're doing.</li><li>Focused purification reaches the area of greatest need for you or those you've signed up for.</li><li>You'll receive an email with any available event materials.</li></ul>
        </div>
        <div class="topic-tags"><span class="tag tag-purple">Body &amp; self healing</span><span class="tag tag-purple">Family issues</span><span class="tag tag-purple">Community</span></div>
      </div>
      <div class="side-card">
        <div class="side-datebox">
          <div class="datebox"><div class="dow">Wed</div><div class="dy">13</div></div>
          <div><strong style="display:block;font-size:15px">Wednesday, Dec 13,</strong><span style="font-size:13px;color:var(--gray-500)">12:00 am</span></div>
        </div>
        <div class="side-meta">
          <div class="side-meta-row"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><div>Repeats every Wednesday &amp; Saturday<br><a style="color:var(--blue-light);font-size:12px;cursor:pointer">Show all events</a></div></div>
          <div class="side-meta-row"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top:2px"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg><div class="incl"><p>Included:</p>All day purification<br>Audio recording (20 min, MP3)<br>Transcript (PDF)</div></div>
        </div>
        <button class="btn btn-pink w-full" onclick="go('reg')" style="width:100%;font-size:16px;padding:14px">Join now</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════ REGISTRATION ═══════════════ -->
<div class="screen" id="s-reg">
  <nav>
    <div class="logo" onclick="go('home')"><svg width="34" height="34" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="8" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="3" fill="black"/></svg>oracle girl</div>
    <div class="nav-links"><span onclick="go('home')">Events</span><span>Immediate Assistance</span><span>Top-Up</span></div>
    <div class="nav-user" onclick="toggleDD('dd-reg')">
      <div class="avatar"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
      <div class="uname"><strong>Hi Test</strong><small>Donor</small></div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      <div class="dropdown" id="dd-reg">
        <a onclick="go('account')">My events</a><a onclick="go('subscriptions')">My subscriptions</a><a onclick="go('account')">Favourite list</a><hr><a class="red">Log out</a>
      </div>
    </div>
  </nav>
  <div class="wrap">
    <div class="back" onclick="go('detail')"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back to Event page</div>
    <div class="reg-grid">
      <div>
        <h2 class="reg-h">Complete your registration</h2>

        <!-- Event -->
        <div class="rsec">
          <div class="rsec-hd"><h3><span class="acc"></span>Event</h3></div>
          <div class="rsec-bd">
            <div class="event-preview">
              <div class="ev-thumb g2"></div>
              <div class="ev-info">
                <h4>Reboot group</h4>
                <div class="meta"><span>📅 Wed, November 13, 12:00 am</span><span>📍 All day purification</span></div>
                <p>Personal purifications. Embody your own purity. Plug directly into your own source connection and your own self healing ability — and nothing else.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- How to join -->
        <div class="rsec">
          <div class="rsec-hd" onclick="toggleSec('join-bd','join-arr')"><h3><span class="acc"></span>Choose how to join</h3><svg id="join-arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg></div>
          <div class="rsec-bd" id="join-bd">
            <div class="join-opt sel" id="j-sub" onclick="selJoin('sub')">
              <div class="jcheck"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div class="join-txt"><strong>All upcoming Reboot Group events (Recurring subscription)</strong></div>
            </div>
            <div class="join-opt" id="j-single" onclick="selJoin('single')">
              <div class="jcheck"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div class="join-txt"><strong>Choose your dates 📅</strong></div>
            </div>
            <p class="join-note">ℹ You can cancel anytime on the <a onclick="go('subscriptions')">Subscriptions</a> page.</p>
          </div>
        </div>

        <!-- Include in purification -->
        <div class="rsec">
          <div class="rsec-hd"><h3><span class="acc"></span>Include in purification <span style="font-size:13px;color:var(--gray-400)">ℹ</span></h3><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg></div>
          <div class="rsec-bd">
            <div class="pinfo"><span>ℹ</span><span>These entries are <strong>included in the purification only</strong> — they won't appear as separate events in your account. You'll see them grouped under this event.</span></div>
            <div id="p-entries">
              <div class="pentry animal" id="pe-dog">
                <div class="pentry-l"><div class="pentry-icon">🐾</div><div><div class="pentry-name">My dog Luna</div><div class="pentry-focus">Focus: healing</div></div></div>
                <button class="premove" onclick="removeEntry('pe-dog','si-dog')">×</button>
              </div>
              <div class="pentry person" id="pe-hub">
                <div class="pentry-l"><div class="pentry-icon">👤</div><div><div class="pentry-name">Snoring husband</div><div class="pentry-focus">Focus: he'd better stop it</div></div></div>
                <button class="premove" onclick="removeEntry('pe-hub','si-hub')">×</button>
              </div>
            </div>
            <div class="type-tabs">
              <button class="ttab active" onclick="setType(this,'person')">👤 Person</button>
              <button class="ttab" onclick="setType(this,'animal')">🐾 Animal</button>
              <button class="ttab" onclick="setType(this,'issue')">⚠️ Issue</button>
              <button class="ttab" onclick="setType(this,'other')">✦ Other</button>
            </div>
            <input class="pinput" id="p-name" type="text" placeholder="Name (e.g. Mom, Neighbour, teacher etc)">
            <input class="pinput" id="p-focus" type="text" placeholder="Specific focus for the entry (optional)">
            <button class="padd" onclick="addEntry()">+ Add to purification</button>
          </div>
        </div>

        <!-- Gift -->
        <div class="rsec">
          <div class="rsec-hd" onclick="toggleSec('gift-bd','gift-arr')"><h3><span class="acc"></span>Gift this event</h3><svg id="gift-arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
          <div class="rsec-bd hidden" id="gift-bd">
            <p style="font-size:14px;color:var(--gray-500);margin-bottom:12px">Send this event as a gift to someone you care about.</p>
            <input class="pinput" type="email" placeholder="Recipient's email address">
            <input class="pinput" type="text" placeholder="Personal message (optional)">
          </div>
        </div>
      </div>

      <!-- Summary sidebar -->
      <div class="sum-card">
        <h3>Summary</h3>
        <div class="sum-name">Reboot group</div>
        <div class="sum-row"><span>Date</span><strong>Wed, Nov 13, 12:00 am</strong></div>
        <div style="font-size:14px;font-weight:600;color:var(--gray-700);margin:10px 0 6px">Included in purification:</div>
        <div id="sum-entries">
          <div class="sum-incl-item"><span>Myself (always)</span></div>
          <div class="sum-incl-item" id="si-dog"><span>"My dog Luna"</span><button onclick="removeEntry('pe-dog','si-dog')">×</button></div>
          <div class="sum-incl-item" id="si-hub"><span>"Snoring husband"</span><button onclick="removeEntry('pe-hub','si-hub')">×</button></div>
        </div>
        <hr class="sum-div">
        <div class="sum-total"><span>Total</span><div style="text-align:right"><span id="total-amt">15.35 USD</span><small>(incl. processing fee)</small></div></div>
        <div class="don-box">
          <h4>Donation</h4>
          <div class="don-row">
            <select class="don-cur"><option>USD</option><option>EUR</option><option>GBP</option></select>
            <input class="don-amt" type="number" id="don-val" value="5" oninput="updateTotal()">
          </div>
          <p class="don-note">My gifts are given freely and any donation is entirely voluntary.</p>
          <div class="don-toggle-row"><span>Apply to each included entry</span><div class="toggle"></div></div>
          <p class="don-note" id="don-breakdown">5 USD × 3 = 15.00 USD</p>
          <p class="don-note" style="margin-bottom:14px">All donations are final and non-refundable.</p>
          <button class="btn btn-pink w-full" onclick="go('success')" style="width:100%">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════ SUCCESS ═══════════════ -->
<div class="screen" id="s-success">
  <nav>
    <div class="logo" onclick="go('home')"><svg width="34" height="34" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="8" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="3" fill="black"/></svg>oracle girl</div>
    <div class="nav-links"><span onclick="go('home')">Events</span><span>Immediate Assistance</span><span>Top-Up</span></div>
    <div class="nav-user"><div class="avatar"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="uname"><strong>Hi Test</strong><small>Donor</small></div></div>
  </nav>
  <div class="wrap">
    <div class="success-wrap">
      <div class="success-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#22A663" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
      <h2>You're registered! 🎉</h2>
      <p>You've been signed up for <strong>Reboot group</strong>. Your purification starts all day on Wednesday. Check your email for event materials.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
        <button class="btn btn-pink" onclick="go('account')">Go to My events</button>
        <button class="btn btn-outline" onclick="go('home')">Back to Events</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════ PERSONAL ACCOUNT ═══════════════ -->
<div class="screen" id="s-account">
  <nav>
    <div class="logo" onclick="go('home')"><svg width="34" height="34" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="8" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="3" fill="black"/></svg>oracle girl</div>
    <div class="nav-links"><span onclick="go('home')">Events</span><span>Immediate Assistance</span><span>Top-Up</span></div>
    <div class="nav-user" onclick="toggleDD('dd-acct')">
      <div class="avatar"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
      <div class="uname"><strong>Hi Test</strong><small>Personal account</small></div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      <div class="dropdown" id="dd-acct">
        <a onclick="go('account')">My events</a><a onclick="go('subscriptions')">My subscriptions</a><a onclick="go('account')">Favourite list</a><a onclick="go('account')">Receipts</a><a onclick="go('account')">Settings</a><hr><a onclick="go('account')">Help centre</a><a class="red">Log out</a>
      </div>
    </div>
  </nav>
  <div class="wrap">
    <div class="acct-sub">Personal account</div>
    <h2 class="acct-hi">Hi Test</h2>
    <h2 style="font-size:28px;font-weight:800;margin-bottom:4px">My <span style="color:var(--pink)">purif</span><span style="color:var(--orange)">ication</span> space</h2>
    <p class="acct-desc">A dedicated place for your specific focus and all your sign-ups, where you stay connected to your purifications and deepen your journey.</p>

    <div class="focus-box">
      <div class="focus-box-hd"><h3>My Specific Focus <span style="font-size:12px;color:var(--gray-400)">ℹ</span></h3><button style="background:none;border:none;cursor:pointer"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button></div>
      <div style="font-size:12px;color:var(--gray-500);margin-bottom:6px">Name what needs to shift — clearly and simply.</div>
      <span class="focus-val">area of greatest need</span>
    </div>

    <div class="sec-hd"><h3>Continue where you left off</h3><a>View all</a></div>
    <div class="cont-row">
      <div class="ccard" onclick="go('player')"><div class="cthumb g5"><div class="cpbar" style="width:15%"></div></div><div class="cbody"><div class="ctitle">Life in the heart</div><div class="cmeta"><span class="pct">15% complete</span> · 20 min</div></div></div>
      <div class="ccard" onclick="go('player')"><div class="cthumb g1"><div class="cpbar" style="width:85%"></div></div><div class="cbody"><div class="ctitle">Reboot Discovery 3: Images of honesty</div><div class="cmeta"><span class="pct">85% complete</span> · 20 min</div></div></div>
      <div class="ccard" onclick="go('player')"><div class="cthumb g4"><div class="cpbar" style="width:75%"></div></div><div class="cbody"><div class="ctitle">Apr 2024 SIR8: Initiation of nature</div><div class="cmeta"><span class="pct">75% complete</span> · 95 min</div></div></div>
      <div class="ccard" onclick="go('player')"><div class="cthumb g3"><div class="cpbar" style="width:40%"></div></div><div class="cbody"><div class="ctitle">Apr 2024 SIR8: Initiation of nature</div><div class="cmeta"><span class="pct">40% complete</span> · 95 min</div></div></div>
    </div>

    <div class="tabs">
      <div class="tab active" onclick="switchTab(this)">All my events</div>
      <div class="tab" onclick="switchTab(this)">Upcoming</div>
      <div class="tab" onclick="switchTab(this)">Reboot group</div>
      <div class="tab" onclick="switchTab(this)">Retreats</div>
      <div class="tab" onclick="switchTab(this)">Gifts</div>
    </div>
    <div class="filter-row">
      <div class="search-box"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input placeholder="Search events..."></div>
      <button class="fbtn">Type ▾</button>
      <button class="fbtn">Newest first ▾</button>
      <button class="fbtn">Recently joined ▾</button>
      <span style="font-size:13px;color:var(--gray-400);margin-left:auto">50 events</span>
    </div>

    <!-- Card 1 -->
    <div class="mecard">
      <div class="mec-thumb g5">
        <span class="ctag" style="color:#7C3AED">Reboot Group</span>
        <span class="ctag2">Recurring</span>
        <div class="pbar" style="width:15%"></div>
        <div class="plbl">15% completed</div>
        <button class="dot-btn" onclick="toggleDM('dm1',event)"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg></button>
        <div class="dot-menu" id="dm1">
          <a onclick="go('player')">▶ Watch / Listen</a>
          <a>📅 View event details</a>
          <a onclick="openModal('m-archive')">🗃 Archive event</a>
          <a class="red" onclick="openModal('m-cancel')">✕ Cancel sign-up</a>
        </div>
      </div>
      <div class="mec-body">
        <h4>Life in the heart</h4>
        <div class="mec-meta">20 min · Reboot Group · Recurring</div>
        <div class="mec-actions">
          <button class="abtn abtn-pink" onclick="go('player')"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Listen now</button>
          <div class="part-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> + 2</div>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="mecard">
      <div class="mec-thumb g2">
        <span class="ctag" style="color:#059669">Upcoming</span>
        <button class="dot-btn" onclick="toggleDM('dm2',event)"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg></button>
        <div class="dot-menu" id="dm2">
          <a>📅 View event details</a>
          <a onclick="openModal('m-archive')">🗃 Archive event</a>
          <a class="red" onclick="openModal('m-cancel')">✕ Cancel sign-up</a>
        </div>
      </div>
      <div class="mec-body">
        <h4>Reboot group — Mar 11</h4>
        <div class="mec-meta">Wednesday, Mar 11 · All day purification</div>
        <div class="mec-actions">
          <button class="abtn abtn-out"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> View details</button>
          <div class="part-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Myself</div>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="mecard">
      <div class="mec-thumb g3">
        <span class="ctag" style="color:var(--gray-600)">Past</span>
        <div class="pbar" style="width:85%"></div>
        <div class="plbl">85% completed</div>
        <button class="dot-btn" onclick="toggleDM('dm3',event)"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg></button>
        <div class="dot-menu" id="dm3">
          <a onclick="go('player')">▶ Watch / Listen</a>
          <a>⬇ Download recording</a>
          <a>📄 Download transcript</a>
          <a onclick="openModal('m-archive')">🗃 Archive event</a>
        </div>
      </div>
      <div class="mec-body">
        <h4>Reboot Discovery 3: Images of honesty</h4>
        <div class="mec-meta">20 min · Completed Feb 15</div>
        <div class="mec-actions">
          <button class="abtn abtn-pink" onclick="go('player')"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Continue</button>
          <button class="abtn abtn-out"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════ SUBSCRIPTIONS ═══════════════ -->
<div class="screen" id="s-subscriptions">
  <nav>
    <div class="logo" onclick="go('home')"><svg width="34" height="34" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="8" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="3" fill="black"/></svg>oracle girl</div>
    <div class="nav-links"><span onclick="go('home')">Events</span><span>Immediate Assistance</span><span>Top-Up</span></div>
    <div class="nav-user" onclick="toggleDD('dd-sub')">
      <div class="avatar"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
      <div class="uname"><strong>Hi Test</strong><small>Personal account</small></div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      <div class="dropdown" id="dd-sub">
        <a onclick="go('account')">My events</a><a onclick="go('subscriptions')">My subscriptions</a><a onclick="go('account')">Favourite list</a><a onclick="go('account')">Receipts</a><a onclick="go('account')">Settings</a><hr><a onclick="go('account')">Help centre</a><a class="red">Log out</a>
      </div>
    </div>
  </nav>
  <div class="wrap">
    <div style="font-size:13px;color:var(--gray-400);margin-bottom:20px">Personal account</div>
    <h1 style="font-size:28px;font-weight:800;color:var(--blue);margin-bottom:4px">My subscriptions</h1>
    <p style="font-size:14px;color:var(--gray-500);margin-bottom:26px">Manage your recurring subscriptions</p>
    <div class="stats-grid">
      <div class="stat"><div class="stico stico-b"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg></div><div><div class="stat-val">2</div><div class="stat-lbl">Active subscriptions</div></div></div>
      <div class="stat"><div class="stico stico-g"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div><div><div class="stat-val">$85/mon</div><div class="stat-lbl">Monthly total</div></div></div>
      <div class="stat"><div class="stico stico-o"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><div><div class="stat-val">Mar 1</div><div class="stat-lbl">Next donation date</div></div></div>
    </div>
    <div class="slist">
      <div class="slist-hd">My subscriptions</div>
      <div class="sitem">
        <div class="sico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg></div>
        <div class="sinfo"><h4>Reboot Group <span class="tag tag-green" style="font-size:11px;padding:2px 8px;margin-left:6px">✓ Active</span></h4><div class="who">Who is it for: Myself</div><div class="smeta">Every Wednesday &amp; Saturday · Started Sep 12, 2025 · 24 events included</div></div>
        <div class="sprice"><div class="amt">$60/month</div><div class="nxt">Next: Mar 5, 2026</div></div>
        <div class="sactions"><button class="btn-pause">Pause</button><button class="btn-ghost">Update</button><button class="btn-red-text" onclick="openModal('m-cancel-sub')">Cancel</button></div>
      </div>
      <div class="sitem">
        <div class="sico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg></div>
        <div class="sinfo"><h4>Reboot Group <span class="tag tag-green" style="font-size:11px;padding:2px 8px;margin-left:6px">✓ Active</span></h4><div class="who">Who is it for: My cat</div><div class="smeta">Every Wednesday &amp; Saturday · Started Sep 12, 2025 · 24 events included</div></div>
        <div class="sprice"><div class="amt">$60/month</div><div class="nxt">Next: Mar 5, 2026</div></div>
        <div class="sactions"><button class="btn-pause">Pause</button><button class="btn-ghost">Update</button><button class="btn-red-text" onclick="openModal('m-cancel-sub')">Cancel</button></div>
      </div>
      <div class="sitem" style="opacity:.85">
        <div class="sico" style="opacity:.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg></div>
        <div class="sinfo"><h4>Reboot Group <span class="tag tag-amber" style="font-size:11px;padding:2px 8px;margin-left:6px">⏸ Paused</span></h4><div class="who">Who is it for: My cat</div><div class="smeta">Every Wednesday &amp; Saturday · Started June 11, 2025 · 224 events included</div></div>
        <div class="sprice"><div class="amt">$10/event</div><div class="nxt" style="color:#F59E0B">Next: Paused</div></div>
        <div class="sactions"><button class="btn-resume">Resume</button><button class="btn-ghost">Update</button><button class="btn-red-text" onclick="openModal('m-cancel-sub')">Cancel</button></div>
      </div>
    </div>
    <div class="pay-card">
      <h3>Donation method</h3>
      <div class="pay-method">
        <div class="card-ico">VISA</div>
        <div class="pay-method-info"><strong>Card ending in 4242</strong><small>Expires 12/2028</small></div>
        <button class="btn btn-outline btn-sm">↗ Change</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════ PLAYER ═══════════════ -->
<div class="screen" id="s-player">
  <nav>
    <div class="logo" onclick="go('home')"><svg width="34" height="34" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="8" stroke="black" stroke-width="2.5"/><circle cx="20" cy="20" r="3" fill="black"/></svg>oracle girl</div>
    <div class="nav-links"><span onclick="go('home')">Events</span><span>My messages</span><span>Library</span><span>Top-Up</span></div>
    <div class="nav-user"><div class="avatar"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="uname"><strong>Hi Test</strong><small>Donor</small></div></div>
  </nav>
  <div class="wrap">
    <div class="back" onclick="go('account')"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back to My events</div>
    <div class="player-wrap">
      <div class="pcard">
        <div class="pcard-hd">
          <h2><span style="width:4px;height:20px;background:var(--orange);border-radius:2px;display:inline-block"></span> Deep silence; peace 15</h2>
          <div class="phd-actions">
            <button class="btn btn-outline btn-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Transcript</button>
            <button class="btn btn-outline btn-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download recording</button>
            <button style="width:32px;height:32px;border-radius:50%;border:1.5px solid var(--gray-200);background:white;cursor:pointer;display:inline-flex;align-items:center;justify-content:center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
          </div>
        </div>
        <div class="pvid">
          <div class="pvid-bg"></div>
          <div class="pcontrols">
            <div class="pprog"><div class="pprog-fill"></div></div>
            <div class="pctrl">
              <button class="pbtn">10</button>
              <button class="pplay"><svg width="14" height="14" viewBox="0 0 24 24" fill="black"><polygon points="5 3 19 12 5 21 5 3"/></svg></button>
              <button class="pbtn">10</button>
              <span class="ptime">0:05 / 2:31</span>
              <button class="pbtn" style="margin-left:8px"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>
              <button class="pbtn"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg></button>
            </div>
          </div>
        </div>
        <div class="psub">
          <h4>Subtitle</h4>
          <p>Kick out a key frequency distortion holding you back. Go deeper into the frequencies of the "The celestial gardener" Reboot group — and embody the deeper meaning behind my words.</p>
          <p style="margin-top:8px">Economic scarcity is increasingly becoming an issue. Money is running out in many arenas and society is collapsing. Unfortunately ...</p>
          <span class="read-more">Read more <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></span>
        </div>
      </div>
      <div style="background:var(--white);border:1px solid var(--gray-200);border-radius:var(--rl);padding:18px 22px;margin-top:14px;cursor:pointer;display:flex;justify-content:space-between;align-items:center">
        <h4 style="font-size:14px;font-weight:700">Important resources</h4>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:8px">
        <span class="tag tag-purple">Body &amp; self healing</span>
        <span class="tag tag-purple">Family issues</span>
        <span class="tag tag-purple">Community</span>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════ MODALS ═══════════════ -->
<div class="modal-ov" id="m-cancel">
  <div class="modal">
    <div class="modal-ico modal-ico-red"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div>
    <h3>Cancel sign-up?</h3>
    <p>You're about to cancel your sign-up for <strong>Reboot group — Mar 11</strong>. This will remove your personal purification for this session.</p>
    <div class="modal-actions">
      <button class="btn btn-outline btn-sm" onclick="closeModal('m-cancel')">Keep it</button>
      <button class="btn btn-sm" style="background:#EF4444;color:white" onclick="closeModal('m-cancel')">Yes, cancel</button>
    </div>
  </div>
</div>

<div class="modal-ov" id="m-archive">
  <div class="modal">
    <div class="modal-ico modal-ico-blue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg></div>
    <h3>Archive this event?</h3>
    <p>Archiving will hide this event from your main list. You can still find it in archived events. To cancel your subscription, go to <a style="color:var(--blue-light);cursor:pointer" onclick="closeModal('m-archive');go('subscriptions')">My Subscriptions</a>.</p>
    <div class="modal-actions">
      <button class="btn btn-outline btn-sm" onclick="closeModal('m-archive')">Cancel</button>
      <button class="btn btn-pink btn-sm" onclick="closeModal('m-archive')">Archive event</button>
    </div>
  </div>
</div>

<div class="modal-ov" id="m-cancel-sub">
  <div class="modal">
    <div class="modal-ico modal-ico-red"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div>
    <h3>Cancel subscription?</h3>
    <p>You're about to cancel your <strong>Reboot Group</strong> recurring subscription for <strong>Myself</strong> ($60/month). You'll lose access to upcoming events in this series.</p>
    <div class="modal-actions">
      <button class="btn btn-outline btn-sm" onclick="closeModal('m-cancel-sub')">Keep subscription</button>
      <button class="btn btn-sm" style="background:#EF4444;color:white" onclick="closeModal('m-cancel-sub')">Cancel subscription</button>
    </div>
  </div>
</div>

<script>
// ── Navigation ──
function go(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  var el = document.getElementById('s-' + id);
  if (el) { el.classList.add('active'); window.scrollTo(0,0); }
  closeAllDD(); closeAllDM();
}

// ── Dropdowns ──
function toggleDD(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var was = el.classList.contains('open');
  closeAllDD();
  if (!was) el.classList.add('open');
}
function closeAllDD() { document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open')); }
document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-user')) closeAllDD();
});

// ── Section toggles (registration) ──
function toggleSec(bodyId, arrowId) {
  var bd = document.getElementById(bodyId);
  var ar = document.getElementById(arrowId);
  if (!bd) return;
  bd.classList.toggle('hidden');
  if (ar) ar.style.transform = bd.classList.contains('hidden') ? '' : 'rotate(180deg)';
}

// ── Join option ──
function selJoin(type) {
  document.getElementById('j-sub').classList.toggle('sel', type==='sub');
  document.getElementById('j-single').classList.toggle('sel', type==='single');
}

// ── Purification entries ──
var purifType = 'person';
var eCount = 2;
var icons = {person:'👤',animal:'🐾',issue:'⚠️',other:'✦'};
var bgCls = {person:'person',animal:'animal',issue:'',other:''};

function setType(btn, type) {
  document.querySelectorAll('.ttab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  purifType = type;
}

function addEntry() {
  var nm = document.getElementById('p-name').value.trim();
  if (!nm) { document.getElementById('p-name').focus(); return; }
  var fc = document.getElementById('p-focus').value.trim();
  eCount++;
  var pid = 'pe-c' + eCount;
  var sid = 'si-c' + eCount;
  var div = document.createElement('div');
  div.className = 'pentry ' + (bgCls[purifType]||'');
  div.id = pid;
  div.innerHTML = '<div class="pentry-l"><div class="pentry-icon">'+icons[purifType]+'</div><div><div class="pentry-name">'+nm+'</div>'+(fc?'<div class="pentry-focus">Focus: '+fc+'</div>':'')+'</div></div><button class="premove" onclick="removeEntry(\''+pid+'\',\''+sid+'\')">×</button>';
  document.getElementById('p-entries').appendChild(div);
  var sdiv = document.createElement('div');
  sdiv.className = 'sum-incl-item'; sdiv.id = sid;
  sdiv.innerHTML = '<span>"'+nm+'"</span><button onclick="removeEntry(\''+pid+'\',\''+sid+'\')">×</button>';
  document.getElementById('sum-entries').appendChild(sdiv);
  document.getElementById('p-name').value = '';
  document.getElementById('p-focus').value = '';
  updateTotal();
}

function removeEntry(pid, sid) {
  var p = document.getElementById(pid); if (p) p.remove();
  var s = document.getElementById(sid); if (s) s.remove();
  updateTotal();
}

function updateTotal() {
  var don = parseFloat(document.getElementById('don-val').value)||0;
  var cnt = document.querySelectorAll('#p-entries .pentry').length;
  var total = don * (1 + cnt);
  var fee = (total * 0.023).toFixed(2);
  document.getElementById('total-amt').textContent = (total + parseFloat(fee)).toFixed(2) + ' USD';
  var bd = document.getElementById('don-breakdown');
  if (bd) bd.textContent = don + ' USD × ' + (1+cnt) + ' = ' + total.toFixed(2) + ' USD';
}

// ── Dot menus ──
function toggleDM(id, e) {
  if (e) e.stopPropagation();
  var el = document.getElementById(id);
  if (!el) return;
  var was = el.classList.contains('open');
  closeAllDM();
  if (!was) el.classList.add('open');
}
function closeAllDM() { document.querySelectorAll('.dot-menu').forEach(m => m.classList.remove('open')); }
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dot-btn') && !e.target.closest('.dot-menu')) closeAllDM();
});

// ── Modals ──
function openModal(id) {
  closeAllDM();
  document.getElementById(id).classList.add('open');
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-ov').forEach(function(ov) {
  ov.addEventListener('click', function(e) { if (e.target===ov) ov.classList.remove('open'); });
});

// ── Tabs ──
function switchTab(el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ── Init ──
go('home');
</script>
</body>
</html>
