import{_ as n,c as s,o as a,a as p}from"./app.7b36c640.js";const y='{"title":"Chapter 6 - \uAC1D\uCCB4\uC640 \uC790\uB8CC\uAD6C\uC870","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC790\uB8CC \uCD94\uC0C1\uD654","slug":"\uC790\uB8CC-\uCD94\uC0C1\uD654"},{"level":2,"title":"\uC790\uB8CC/\uAC1D\uCCB4 \uBE44\uB300\uCE6D","slug":"\uC790\uB8CC-\uAC1D\uCCB4-\uBE44\uB300\uCE6D"},{"level":2,"title":"\uB514\uBBF8\uD130 \uBC95\uCE59","slug":"\uB514\uBBF8\uD130-\uBC95\uCE59"},{"level":3,"title":"\uAE30\uCC28 \uCDA9\uB3CC","slug":"\uAE30\uCC28-\uCDA9\uB3CC"},{"level":3,"title":"\uC7A1\uC885 \uAD6C\uC870","slug":"\uC7A1\uC885-\uAD6C\uC870"},{"level":3,"title":"\uAD6C\uC870\uCCB4 \uAC10\uCD94\uAE30","slug":"\uAD6C\uC870\uCCB4-\uAC10\uCD94\uAE30"},{"level":2,"title":"\uC790\uB8CC \uC804\uB2EC \uAC1D\uCCB4","slug":"\uC790\uB8CC-\uC804\uB2EC-\uAC1D\uCCB4"},{"level":3,"title":"\uD65C\uC131 \uB808\uCF54\uB4DC","slug":"\uD65C\uC131-\uB808\uCF54\uB4DC"},{"level":2,"title":"\uACB0\uB860","slug":"\uACB0\uB860"}],"relativePath":"CLEAN_CODE/Chapter_6.md"}',t={},e=p(`<h1 id="chapter-6-\uAC1D\uCCB4\uC640-\uC790\uB8CC\uAD6C\uC870" tabindex="-1">Chapter 6 - \uAC1D\uCCB4\uC640 \uC790\uB8CC\uAD6C\uC870 <a class="header-anchor" href="#chapter-6-\uAC1D\uCCB4\uC640-\uC790\uB8CC\uAD6C\uC870" aria-hidden="true">#</a></h1><hr><p>\uBCC0\uC218\uB97C \uBE44\uACF5\uAC1C(private)\uB85C \uC815\uC758\uD558\uB294 \uC774\uC720\uAC00 \uC788\uB2E4. \uB0A8\uB4E4\uC774 \uBCC0\uC218\uC5D0 \uC758\uC874\uD558\uC9C0 \uC54A\uAC8C \uB9CC\uB4E4\uACE0 \uC2F6\uC5B4\uC11C\uB2E4. \uADF8\uB807\uB2E4\uBA74 \uC5B4\uC9F8\uC11C \uC218\uB9CE\uC740 \uD504\uB85C\uADF8\uB798\uBA38\uAC00 \uC870\uD68C(get) \uD568\uC218\uC640 \uC124\uC815(set) \uD568\uC218\uB97C \uB2F9\uC5F0\uD558\uAC8C \uACF5\uAC1C(public)\uD574 \uBE44\uACF5\uAC1C \uBCC0\uC218\uB97C \uC678\uBD80\uC5D0 \uB178\uCD9C\uD560\uAE4C??</p><h2 id="\uC790\uB8CC-\uCD94\uC0C1\uD654" tabindex="-1">\uC790\uB8CC \uCD94\uC0C1\uD654 <a class="header-anchor" href="#\uC790\uB8CC-\uCD94\uC0C1\uD654" aria-hidden="true">#</a></h2><hr><p>\uC544\uB798\uC758 \uB450 \uD074\uB798\uC2A4\uB294 \uBAA8\uB450 2\uCC28\uC6D0 \uC810\uC744 \uD45C\uD604\uD55C\uB2E4. \uADF8\uB7F0\uB370 \uD55C \uD074\uB798\uC2A4\uB294 \uAD6C\uD604\uC744 \uC678\uBD80\uB85C \uB178\uCD9C\uD558\uACE0 \uB2E4\uB978 \uD074\uB798\uC2A4\uB294 \uAD6C\uD604\uC744 \uC644\uC804\uD788 \uC228\uAE34\uB2E4.</p><div class="language-java"><pre><code><span class="token comment">// 6-1 \uAD6C\uCCB4\uC801\uC778 Point \uD074\uB798\uC2A4</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> x<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 6-2 \uCD94\uC0C1\uC801\uC778 Point \uD074\uB798\uC2A4</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
	<span class="token keyword">double</span> <span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> <span class="token function">getY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">setCartesian</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">double</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> <span class="token function">getR</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> <span class="token function">getTheta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">setPolar</span><span class="token punctuation">(</span><span class="token keyword">double</span> r<span class="token punctuation">,</span> <span class="token keyword">double</span> theta<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>6-2\uB294 \uD074\uB798\uC2A4 \uBA54\uC11C\uB4DC\uAC00 \uC811\uADFC \uC815\uCC45\uC744 \uAC15\uC81C\uD55C\uB2E4. \uC88C\uD45C\uB97C \uC77D\uC744 \uB54C\uB294 \uAC01 \uAC12\uC744 \uAC1C\uBCC4\uB85C \uC77D\uC5B4\uC57C \uD558\uBA70, \uC88C\uD45C\uB97C \uC124\uC815\uD560 \uB54C\uB294 \uB450 \uAC12\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC124\uC815\uD574\uC57C \uD55C\uB2E4. \uBC18\uBA74 6-1\uC740 \uAD6C\uD604\uC744 \uB178\uCD9C\uD558\uACE0, \uAC1C\uBCC4\uC801\uC73C\uB85C \uC88C\uD45C\uAC12\uC744 \uC77D\uACE0 \uC124\uC815\uD558\uAC8C \uAC15\uC81C\uD55C\uB2E4. \uBCC0\uC218\uB97C private\uB85C \uC124\uC815\uD558\uB354\uB77C\uB3C4 \uAC01 \uAC12\uB9C8\uB2E4 \uC870\uD68C(get) \uD568\uC218\uC640 \uC124\uC815(set) \uD568\uC218\uB97C \uC81C\uACF5\uD55C\uB2E4\uBA74 \uAD6C\uD604\uC744 \uC678\uBD80\uB85C \uB178\uCD9C\uD558\uB294 \uC148\uC774\uB2E4.</p><p>\uBCC0\uC218 \uC0AC\uC774\uC5D0 \uD568\uC218\uB77C\uB294 \uAC8C\uCE35\uC744 \uB123\uB294\uB2E4\uACE0 \uAD6C\uD604\uC774 \uAC10\uCDB0\uC9C0\uB294 \uAC83\uC740 \uC544\uB2C8\uB2E4. \uCD94\uC0C1\uD654\uAC00 \uD544\uC694\uD558\uB2E4. \uCD94\uC0C1 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC81C\uACF5\uD574 \uC0AC\uC6A9\uC790\uAC00 \uAD6C\uD604\uC744 \uBAA8\uB978 \uCC44 \uC790\uB8CC\uC758 \uD575\uC2EC\uC744 \uC870\uC791\uD560 \uC218 \uC788\uC5B4\uC57C \uC9C4\uC815\uD55C \uC758\uBBF8\uC758 \uD074\uB798\uC2A4\uC774\uB2E4.</p><h2 id="\uC790\uB8CC-\uAC1D\uCCB4-\uBE44\uB300\uCE6D" tabindex="-1">\uC790\uB8CC/\uAC1D\uCCB4 \uBE44\uB300\uCE6D <a class="header-anchor" href="#\uC790\uB8CC-\uAC1D\uCCB4-\uBE44\uB300\uCE6D" aria-hidden="true">#</a></h2><hr><p>\uAC1D\uCCB4\uB294 \uCD94\uC0C1\uD654 \uB4A4\uB85C \uC790\uB8CC\uB97C \uC228\uAE34 \uCC44 \uC790\uB8CC\uB97C \uB2E4\uB8E8\uB294 \uD568\uC218\uB9CC \uACF5\uAC1C\uD55C\uB2E4. \uC790\uB8CC\uAD6C\uC870\uB294 \uC790\uB8CC\uB97C \uADF8\uB300\uB85C \uACF5\uAC1C\uD558\uBA70 \uBCC4\uB2E4\uB978 \uD568\uC218\uB97C \uC81C\uACF5\uD558\uC9C0 \uC54A\uB294\uB2E4. \uB450 \uC815\uC758\uB294 \uBCF8\uC9C8\uC801\uC73C\uB85C \uC0C1\uBC18\uB41C\uB2E4.</p><div class="language-java"><pre><code><span class="token comment">// 6-3 \uC808\uCC28\uC801\uC778 \uB3C4\uD615</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">Point</span> topLeft<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">double</span> side<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">Point</span> topLeft<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">double</span> height<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">double</span> width<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">Point</span> center<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">double</span> radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Geometry</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.141592653589793</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token class-name">Object</span> shape<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchShapeException</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shape <span class="token keyword">instanceof</span> <span class="token class-name">Square</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Square</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Square</span><span class="token punctuation">)</span>shape<span class="token punctuation">;</span>
      <span class="token keyword">return</span> s<span class="token punctuation">.</span>side <span class="token operator">*</span> s<span class="token punctuation">.</span>side<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shape <span class="token keyword">instanceof</span> <span class="token class-name">Rectangle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Rectangle</span> r <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Rectangle</span><span class="token punctuation">)</span>shape<span class="token punctuation">;</span>
      <span class="token keyword">return</span> r<span class="token punctuation">.</span>height <span class="token operator">*</span> r<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shape <span class="token keyword">instanceof</span> <span class="token class-name">Circle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Circle</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Circle</span><span class="token punctuation">)</span>shape<span class="token punctuation">;</span>
      <span class="token keyword">return</span> PI <span class="token operator">*</span> c<span class="token punctuation">.</span>radius <span class="token operator">*</span> c<span class="token punctuation">.</span>radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NoSuchShapeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 6-4 \uB2E4\uD615\uC801\uC778 \uB3C4\uD615</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Point</span> topLeft<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">double</span> side<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> side <span class="token operator">*</span> side<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Point</span> topLeft<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">double</span> height<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">double</span> width<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> height <span class="token operator">*</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Point</span> center<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">double</span> radius<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.141592653589793</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> PI <span class="token operator">*</span> radius <span class="token operator">*</span> radius<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>6-3\uC5D0\uC11C \uB9CC\uC57D Geometry \uD074\uB798\uC2A4\uC5D0 \uB458\uB798 \uAE38\uC774\uB97C \uAD6C\uD558\uB294 perimeter() \uD568\uC218\uB97C \uCD94\uAC00\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uB3C4\uD615 \uD074\uB798\uC2A4\uB294 \uC544\uBB34 \uC601\uD5A5\uB3C4 \uBC1B\uC9C0 \uC54A\uB294\uB2E4. \uBB3C\uB860 \uB3C4\uD615 \uD074\uB798\uC2A4\uC5D0 \uC758\uC874\uD558\uB294 \uB2E4\uB978 \uD074\uB798\uC2A4\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uB2E4. \uBC18\uB300\uB85C \uC0C8 \uB3C4\uD615\uC744 \uCD94\uAC00\uD558\uACE0 \uC2F6\uB2E4\uBA74 Geometry \uD074\uB798\uC2A4\uC5D0 \uC18D\uD55C \uD568\uC218\uB97C \uBAA8\uB450 \uACE0\uCCD0\uC57C \uD55C\uB2E4. \uC55E\uC11C\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uB450 \uC870\uAC74\uC740 \uC644\uC804\uD788 \uC815\uBC18\uB300\uC774\uB2E4.</p><p>\uBC18\uBA74\uC5D0 6-4 \uC5D0\uC11C\uB294 \uC0C8 \uB3C4\uD615\uC744 \uCD94\uAC00\uD574\uB3C4 \uAE30\uC874 \uD568\uC218\uC5D0\uB294 \uC544\uBB34\uB7F0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uC9C0 \uC54A\uB294\uB2E4. \uBC18\uBA74 \uC0C8 \uD568\uC218\uB97C \uCD94\uAC00\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uB3C4\uD615 \uD074\uB798\uC2A4\uB97C \uC804\uBD80 \uACE0\uCCD0\uC57C \uD55C\uB2E4.</p><p>\uC55E\uC11C \uB9D0\uD588\uB4EF\uC774, 6-3\uACFC 6-4\uB294 \uC0C1\uD638 \uBCF4\uC644\uC801\uC778 \uD2B9\uC9C8\uC774 \uC788\uB2E4. \uC0AC\uC2E4\uC0C1 \uBC18\uB300\uB2E4! \uADF8\uB798\uC11C \uAC1D\uCCB4\uC640 \uC790\uB8CC\uAD6C\uC870\uB294 \uADFC\uBCF8\uC801\uC73C\uB85C \uC591\uBD84\uB41C\uB2E4.</p><blockquote><p>(\uC790\uB8CC\uAD6C\uC870\uB97C \uC0AC\uC6A9\uD558\uB294) \uC808\uCC28\uC801\uC778 \uCF54\uB4DC\uB294 \uAE30\uC874 \uC790\uB8CC \uAD6C\uC870\uB97C \uBCC0\uACBD\uD558\uC9C0 \uC54A\uC73C\uBA74\uC11C \uC0C8 \uD568\uC218\uB97C \uCD94\uAC00\uD558\uAE30 \uC27D\uB2E4. \uBC18\uBA74, \uAC1D\uCCB4 \uC9C0\uD5A5 \uCF54\uB4DC\uB294 \uAE30\uC874 \uD568\uC218\uB97C \uBCC0\uACBD\uD558\uC9C0 \uC54A\uC73C\uBA74\uC11C \uC0C8 \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD558\uAE30 \uC27D\uB2E4.</p></blockquote><p>\uBC18\uB300\uCABD\uB3C4 \uCC38\uC774\uB2E4.</p><blockquote><p>\uC808\uCC28\uC801\uC778 \uCF54\uB4DC\uB294 \uC0C8\uB85C\uC6B4 \uC790\uB8CC \uAD6C\uC870\uB97C \uCD94\uAC00\uD558\uAE30 \uC5B4\uB835\uB2E4. \uADF8\uB7EC\uB824\uBA74 \uBAA8\uB4E0 \uD568\uC218\uB97C \uACE0\uCCD0\uC57C \uD55C\uB2E4. \uAC1D\uCCB4 \uC9C0\uD5A5 \uCF54\uB4DC\uB294 \uC0C8\uB85C\uC6B4 \uD568\uC218\uB97C \uCD94\uAC00\uD558\uAE30 \uC5B4\uB835\uB2E4. \uADF8\uB7EC\uB824\uBA74 \uBAA8\uB4E0 \uD074\uB798\uC2A4\uB97C \uACE0\uCCD0\uC57C \uD55C\uB2E4.</p></blockquote><p>\uB2E4\uC2DC \uB9D0\uD574, \uAC1D\uCCB4 \uC9C0\uD5A5 \uCF54\uB4DC\uC5D0\uC11C \uC5B4\uB824\uC6B4 \uBCC0\uACBD\uC740 \uC808\uCC28\uC801\uC778 \uCF54\uB4DC\uC5D0\uC11C \uC26C\uC6B0\uBA70, \uC808\uCC28\uC801\uC778 \uCF54\uB4DC\uC5D0\uC11C \uC5B4\uB824\uC6B4 \uBCC0\uACBD\uC740 \uAC1D\uCCB4 \uC9C0\uD5A5 \uCF54\uB4DC\uC5D0\uC11C \uC27D\uB2E4!</p><p>\uBCF5\uC7A1\uD55C \uC2DC\uC2A4\uD15C\uC744 \uC9DC\uB2E4 \uBCF4\uBA74 \uC0C8\uB85C\uC6B4 \uD568\uC218\uAC00 \uC544\uB2C8\uB77C \uC0C8\uB85C\uC6B4 \uC790\uB8CC \uD0C0\uC785\uC774 \uD544\uC694\uD55C \uACBD\uC6B0\uAC00 \uC0DD\uAE34\uB2E4. \uC774\uB54C\uB294 <strong>\uD074\uB798\uC2A4\uC640 \uAC1D\uCCB4 \uC9C0\uD5A5 \uAE30\uBC95</strong>\uC774 \uAC00\uC7A5 \uC801\uD569\uD558\uB2E4. \uBC18\uBA74, \uC0C8\uB85C\uC6B4 \uC790\uB8CC \uD0C0\uC785\uC774 \uC544\uB2C8\uB77C \uC0C8\uB85C\uC6B4 \uD568\uC218\uAC00 \uD544\uC694\uD55C \uACBD\uC6B0\uB3C4 \uC0DD\uAE34\uB2E4. \uC774\uB54C\uB294 <strong>\uC808\uCC28\uC801\uC778 \uCF54\uB4DC\uC640 \uC790\uB8CC\uAD6C\uC870</strong>\uAC00 \uC880 \uB354 \uC801\uD569\uD558\uB2E4.</p><p>\uBD84\uBCC4 \uC788\uB294 \uD504\uB85C\uADF8\uB798\uBA38\uB294 \uBAA8\uB4E0 \uAC83\uC774 \uAC1D\uCCB4\uB77C\uB294 \uC0DD\uAC01\uC774 \uBBF8\uC2E0\uC784\uC744 \uC798 \uC548\uB2E4. \uB2E8\uC21C\uD55C \uC790\uB8CC \uAD6C\uC870\uC640 \uC808\uCC28\uC801\uC778 \uCF54\uB4DC\uAC00 \uAC00\uC7A5 \uC801\uD569\uD55C \uC0C1\uD669\uB3C4 \uC788\uB2E4.</p><h2 id="\uB514\uBBF8\uD130-\uBC95\uCE59" tabindex="-1">\uB514\uBBF8\uD130 \uBC95\uCE59 <a class="header-anchor" href="#\uB514\uBBF8\uD130-\uBC95\uCE59" aria-hidden="true">#</a></h2><hr><p>\uB514\uBBF8\uD130 \uBC95\uCE59\uC774\uB780 \uBAA8\uB4C8\uC740 \uC790\uC2E0\uC774 \uC870\uC791\uD558\uB294 \uAC1D\uCCB4\uC758 \uC18D\uC0AC\uC815\uC744 \uBAB0\uB77C\uC57C \uD55C\uB2E4\uB294 \uBC95\uCE59\uC774\uB2E4. \uAC1D\uCCB4\uB294 \uC870\uD68C \uD568\uC218\uB85C \uB0B4\uBD80 \uAD6C\uC870\uB97C \uACF5\uAC1C\uD558\uBA74 \uC548 \uB41C\uB2E4\uB294 \uC758\uBBF8\uB2E4. \uADF8\uB7EC\uBA74 \uB0B4\uBD80 \uAD6C\uC870\uB97C \uB178\uCD9C\uD558\uB294 \uC148\uC774\uB2C8\uAE4C.</p><p>\uC815\uD655\uD788 \uD45C\uD604\uD558\uC790\uBA74, \uB514\uBBF8\uD130 \uBC95\uCE59\uC740 \u201C\uD074\uB798\uC2A4 C\uC758 \uBA54\uC11C\uB4DC f\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAC1D\uCCB4\uC758 \uBA54\uC11C\uB4DC\uB9CC \uD638\uCD9C\uD574\uC57C \uD55C\uB2E4&quot;\uACE0 \uC8FC\uC7A5\uD55C\uB2E4.</p><ul><li>\uD074\uB798\uC2A4 C</li><li>f\uAC00 \uC0DD\uC131\uD55C \uAC1D\uCCB4</li><li>f \uC778\uC218\uB85C \uB118\uC5B4\uC628 \uAC1D\uCCB4</li><li>C \uC778\uC2A4\uD134\uC2A4 \uBCC0\uC218\uC5D0 \uC800\uC7A5\uB41C \uAC1D\uCCB4</li></ul><h3 id="\uAE30\uCC28-\uCDA9\uB3CC" tabindex="-1">\uAE30\uCC28 \uCDA9\uB3CC <a class="header-anchor" href="#\uAE30\uCC28-\uCDA9\uB3CC" aria-hidden="true">#</a></h3><hr><div class="language-java"><pre><code><span class="token keyword">final</span> <span class="token class-name">String</span> outputDir <span class="token operator">=</span> ctxt<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getScratchDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\uC704\uC758 \uCF54\uB4DC\uB294 \uB514\uBBF8\uD130 \uBC95\uCE59\uC744 \uC5B4\uAE30\uB294 \uB4EF\uC774 \uBCF4\uC778\uB2E4. \uD754\uD788 \uC704\uC640 \uAC19\uC740 \uCF54\uB4DC\uB97C \uAE30\uCC28 \uCDA9\uB3CC\uC774\uB77C\uACE0 \uBD80\uB978\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uC870\uC7A1\uD558\uB2E4 \uC5EC\uACA8\uC9C0\uB294 \uBC29\uC2DD\uC73C\uB85C \uD53C\uD558\uB294 \uAC83\uC774 \uC88B\uB2E4. \uC704 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uB098\uB204\uB294 \uD3B8\uC774 \uC88B\uB2E4.</p><div class="language-java"><pre><code><span class="token class-name">Options</span> opts <span class="token operator">=</span> ctxt<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">File</span> scratchDir <span class="token operator">=</span> opts<span class="token punctuation">.</span><span class="token function">getScratchDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">String</span> outputDir <span class="token operator">=</span> scratchDir<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\uC704 \uC608\uC81C\uAC00 \uB514\uBBF8\uD130 \uBC95\uCE59\uC744 \uC704\uBC18\uD558\uB294\uC9C0 \uC5EC\uBD80\uB294 ctxt, Options, ScratchDir\uC774 \uAC1D\uCCB4\uC778\uC9C0 \uC544\uB2CC\uC9C0 \uC790\uB8CC \uAD6C\uC870\uC778\uC9C0\uC5D0 \uB2EC\uB838\uB2E4. \uAC1D\uCCB4\uB77C\uBA74 \uB0B4\uBD80 \uAD6C\uC870\uB97C \uC228\uACA8\uC57C \uD558\uBBC0\uB85C \uD655\uC2E4\uD788 \uB514\uBBF8\uD130 \uBC95\uCE59\uC744 \uC704\uBC18\uD55C\uB2E4. \uBC18\uBA74, \uC790\uB8CC \uAD6C\uC870\uB77C\uBA74 \uB2F9\uC5F0\uD788 \uB0B4\uBD80 \uAD6C\uC870\uB97C \uB178\uCD9C\uD558\uBBC0\uB85C \uB514\uBBF8\uD130 \uBC95\uCE59\uC774 \uC801\uC6A9\uB418\uC9C0 \uC54A\uB294\uB2E4.</p><h3 id="\uC7A1\uC885-\uAD6C\uC870" tabindex="-1">\uC7A1\uC885 \uAD6C\uC870 <a class="header-anchor" href="#\uC7A1\uC885-\uAD6C\uC870" aria-hidden="true">#</a></h3><hr><p>\uB54C\uB85C\uB294 \uC808\uBC18\uC740 \uAC1D\uCCB4, \uC808\uBC18\uC740 \uC790\uB8CC \uAD6C\uC870\uC778 \uC7A1\uC885 \uAD6C\uC870\uAC00 \uB098\uC628\uB2E4. \uC7A1\uC885 \uAD6C\uC870\uB294 \uC911\uC694\uD55C \uAE30\uB2A5\uC744 \uC218\uD589\uD558\uB294 \uD568\uC218\uB3C4 \uC788\uACE0, \uACF5\uAC1C \uBCC0\uC218\uB098 \uACF5\uAC1C \uC870\uD68C/\uC124\uC815 \uD568\uC218\uB3C4 \uC788\uB2E4. \uC774\uB7EC\uD55C \uC7A1\uC885 \uAD6C\uC870\uB294 \uC0C8\uB85C\uC6B4 \uD568\uC218\uB294 \uBB3C\uB860\uC774\uACE0 \uC0C8\uB85C\uC6B4 \uC790\uB8CC \uAD6C\uC870\uB3C4 \uCD94\uAC00\uD558\uAE30 \uC5B4\uB835\uB2E4. \uC591\uCABD \uC138\uC0C1\uC5D0\uC11C \uB2E8\uC810\uB9CC \uBAA8\uC544\uB193\uC740 \uAD6C\uC870\uB2E4. \uADF8\uB7EC\uBBC0\uB85C \uC7A1\uC885 \uAD6C\uC870\uB294 \uCD5C\uB300\uD55C \uD53C\uD558\uB294 \uAC83\uC774 \uC88B\uB2E4.</p><h3 id="\uAD6C\uC870\uCCB4-\uAC10\uCD94\uAE30" tabindex="-1">\uAD6C\uC870\uCCB4 \uAC10\uCD94\uAE30 <a class="header-anchor" href="#\uAD6C\uC870\uCCB4-\uAC10\uCD94\uAE30" aria-hidden="true">#</a></h3><hr><p>\uB9CC\uC57D ctxt, options, scrathDir\uC774 \uC9C4\uC9DC \uAC1D\uCCB4\uB77C\uBA74 \uC704\uC758 \uC608\uC81C\uCC98\uB7FC \uC904\uC904\uC774 \uC0AC\uD0D5\uC73C\uB85C \uC5EE\uC73C\uBA74 \uC548\uB41C\uB2E4. \uC704\uC758 \uC608\uC81C \uD55C\uCC38 \uC544\uB798\uB85C \uB0B4\uB824\uAC00\uBA74 \uC774\uB7F0 \uCF54\uB4DC\uAC00 \uC788\uB2E4.</p><div class="language-java"><pre><code><span class="token class-name">String</span> outFile <span class="token operator">=</span> outputDir <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> className<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token char">&#39;.&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.class&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">FileOutputStream</span> fout <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>outFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>fout<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\uCD94\uC0C1\uD654 \uC218\uC900\uC744 \uB4A4\uC11E\uC5B4 \uB193\uC544 \uB2E4\uC18C \uBD88\uD3B8\uD558\uB2E4. \uD30C\uC77C \uD655\uC7A5\uC790, \uC810, \uC2AC\uB798\uC2DC, File \uAC1D\uCCB4\uB97C \uBD80\uC8FC\uC758\uD558\uAC8C \uB4A4\uC11E\uC5B4 \uB193\uC558\uB2E4. \uC5B4\uCC0C \uB418\uC5C8\uAC70\uB098, \uC784\uC2DC \uB514\uB809\uD130\uB9AC\uC758 \uC808\uB300 \uACBD\uB85C\uB97C \uC5BB\uC73C\uB824\uB294 \uC774\uC720\uAC00 \uC784\uC2DC \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uAE30 \uC704\uD55C \uBAA9\uC801\uC774\uB77C\uB294 \uC0AC\uC2E4\uC774 \uB4DC\uB7EC\uB0AC\uB2E4.</p><p>\uADF8\uB807\uB2E4\uBA74 ctxt \uAC1D\uCCB4\uC5D0 \uC784\uC2DC \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uB824\uACE0 \uC2DC\uD0A4\uBA74 \uC5B4\uB5A8\uAE4C?</p><div class="language-java"><pre><code><span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span> ctxt<span class="token punctuation">.</span><span class="token function">createScratchFileStream</span><span class="token punctuation">(</span>classFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>ctxt\uB294 \uB0B4\uBD80 \uAD6C\uC870\uB97C \uB4DC\uB7EC\uB0B4\uC9C0 \uC54A\uACE0, \uD574\uB2F9 \uD568\uC218\uB294 \uC790\uC2E0\uC774 \uBAB0\uB77C\uC57C \uD558\uB294 \uC5EC\uB7EC \uAC1D\uCCB4\uB97C \uD0D0\uC0C9\uD560 \uD544\uC694\uAC00 \uC5C6\uB2E4. \uB530\uB77C\uC11C \uB514\uBBF8\uD130 \uBC95\uCE59\uC744 \uC704\uBC18\uD558\uC9C0 \uC54A\uB294\uB2E4.</p><h2 id="\uC790\uB8CC-\uC804\uB2EC-\uAC1D\uCCB4" tabindex="-1">\uC790\uB8CC \uC804\uB2EC \uAC1D\uCCB4 <a class="header-anchor" href="#\uC790\uB8CC-\uC804\uB2EC-\uAC1D\uCCB4" aria-hidden="true">#</a></h2><hr><p>\uC790\uB8CC \uAD6C\uC870\uCCB4\uC758 \uC804\uD615\uC801\uC778 \uD615\uD0DC\uB294 \uACF5\uAC1C \uBCC0\uC218\uB9CC \uC788\uACE0 \uD568\uC218\uAC00 \uC5C6\uB294 \uD074\uB798\uC2A4\uC774\uB2E4. \uC774\uB7F0 \uC790\uB8CC \uAD6C\uC870\uCCB4\uB97C \uB54C\uB85C\uB294 \uC790\uB8CC \uC804\uB2EC \uAC1D\uCCB4(DTO)\uB77C\uACE0 \uD55C\uB2E4.</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Address</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> street<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> streetExtra<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> city<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> zip<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>DTO\uB294 \uD2B9\uD788 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC640 \uD1B5\uC2E0\uD558\uAC70\uB098 \uC18C\uCF13\uC5D0\uC11C \uBC1B\uC740 \uBA54\uC2DC\uC9C0\uC758 \uAD6C\uBB38\uC744 \uBD84\uC11D\uD560 \uB54C \uC720\uC6A9\uD558\uB2E4.</p><p>\uC880\uB354 \uC77C\uBC18\uC801\uC778 \uD615\uD0DC\uB294 \uBE48(bean) \uAD6C\uC870\uB2E4. \uBE48\uC740 \uBE44\uACF5\uAC1C \uBCC0\uC218\uB97C \uC870\uD68C/\uC124\uC815 \uD568\uC218\uB85C \uC870\uC791\uD55C\uB2E4.</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Address</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> street<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> streetExtra<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> city<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> zip<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">Address</span><span class="token punctuation">(</span><span class="token class-name">String</span> street<span class="token punctuation">,</span> <span class="token class-name">String</span> streetExtra<span class="token punctuation">,</span>
			<span class="token class-name">String</span> city<span class="token punctuation">,</span> <span class="token class-name">String</span> state<span class="token punctuation">,</span> <span class="token class-name">String</span> zip<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>street <span class="token operator">=</span> street<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>streetExtra <span class="token operator">=</span> streetExtra<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>city <span class="token operator">=</span> city<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>zip <span class="token operator">=</span> zip<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getStreet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> street<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\uD65C\uC131-\uB808\uCF54\uB4DC" tabindex="-1">\uD65C\uC131 \uB808\uCF54\uB4DC <a class="header-anchor" href="#\uD65C\uC131-\uB808\uCF54\uB4DC" aria-hidden="true">#</a></h3><hr><p>\uD65C\uC131 \uB808\uCF54\uB4DC\uB294 DTO\uC758 \uD2B9\uC218\uD55C \uD615\uD0DC\uC774\uB2E4. \uACF5\uAC1C \uBCC0\uC218\uAC00 \uC788\uAC70\uB098 \uBE44\uACF5\uAC1C \uBCC0\uC218\uC5D0 \uC870\uD68C/\uC124\uC815 \uD568\uC218\uAC00 \uC788\uB294 \uC790\uB8CC \uAD6C\uC870\uC9C0\uB9CC, \uB300\uAC1C save\uB098 find\uC640 \uAC19\uC740 \uD0D0\uC0C9 \uD568\uC218\uB3C4 \uC81C\uACF5\uD55C\uB2E4. \uD65C\uC131 \uB808\uCF54\uB4DC\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD14C\uC774\uBE14\uC774\uB098 \uB2E4\uB978 \uC18C\uC2A4\uC5D0\uC11C \uC790\uB8CC\uB97C \uC9C1\uC811 \uBCC0\uD658\uD55C \uACB0\uACFC\uB2E4.</p><p>\uBD88\uD589\uD788\uB3C4 \uD65C\uC131 \uB808\uCF54\uB4DC\uC5D0 \uBE44\uC9C0\uB2C8\uC2A4 \uADDC\uCE59 \uBA54\uC11C\uB4DC\uB97C \uCD94\uAC00\uD574 \uC774\uB7F0 \uC790\uB8CC \uAD6C\uC870\uB97C \uAC1D\uCCB4\uB85C \uCDE8\uAE09\uD558\uB294 \uAC1C\uBC1C\uC790\uAC00 \uD754\uD558\uB2E4. \uD558\uC9C0\uB9CC \uC774\uB807\uAC8C \uD558\uBA74 \uC7A1\uC885 \uAD6C\uC870\uAC00 \uB41C\uB2E4.</p><p>\uD574\uACB0\uCC45\uC740 \uB2E8\uC21C\uD558\uB2E4. \uD65C\uC131 \uB808\uCF54\uB4DC\uB294 \uC790\uB8CC \uAD6C\uC870\uB85C \uCDE8\uAE09\uD558\uBA74 \uB41C\uB2E4. \uBE44\uC988\uB2C8\uC2A4 \uADDC\uCE59\uC744 \uB2F4\uC73C\uBA74\uC11C \uB0B4\uBD80 \uAD6C\uC870\uB97C \uC228\uAE30\uB294 \uAC1D\uCCB4\uB294 \uB530\uB85C \uC0DD\uC131\uD55C\uB2E4.</p><h2 id="\uACB0\uB860" tabindex="-1">\uACB0\uB860 <a class="header-anchor" href="#\uACB0\uB860" aria-hidden="true">#</a></h2><hr><p>\uAC1D\uCCB4\uB294 \uB3D9\uC791\uC744 \uACF5\uAC1C\uD558\uACE0 \uC790\uB8CC\uB97C \uC228\uAE34\uB2E4. \uADF8\uB798\uC11C \uAE30\uC874 \uB3D9\uC791\uC744 \uBCC0\uACBD\uD558\uC9C0 \uC54A\uC73C\uBA74\uC11C \uC0C8 \uAC1D\uCCB4 \uD0C0\uC785\uC744 \uCD94\uAC00\uD558\uAE30\uB294 \uC26C\uC6B4 \uBC18\uBA74, \uAE30\uC874 \uAC1D\uCCB4\uC5D0 \uC0C8 \uB3D9\uC791\uC744 \uCD94\uAC00\uD558\uAE30\uB294 \uC5B4\uB835\uB2E4.</p><p>\uC790\uB8CC \uAD6C\uC870\uB294 \uBCC4\uB2E4\uB978 \uB3D9\uC791 \uC5C6\uC774 \uC790\uB8CC\uB97C \uB178\uCD95\uD55C\uB2E4. \uADF8\uB798\uC11C \uAE30\uC874 \uC790\uB8CC \uAD6C\uC870\uC5D0 \uC0C8 \uB3D9\uC791\uC744 \uCD94\uAC00\uD558\uAE30\uB294 \uC26C\uC6B0\uB098, \uAE30\uC874 \uD568\uC218\uC5D0 \uC0C8 \uC790\uB8CC \uAD6C\uC870\uB97C \uCD94\uAC00\uD558\uAE30\uB294 \uC5B4\uB835\uB2E4.</p>`,60),o=[e];function c(l,u,k,i,r,d){return a(),s("div",null,o)}var w=n(t,[["render",c]]);export{y as __pageData,w as default};