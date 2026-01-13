<template><div><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h1>
<p><img src="/VisionGalDoc/icons/visiongal.png" alt="visiongal"></p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>VisionGal 是一个功能强大的视觉小说引擎，专为创建高质量视觉小说和交互式叙事体验而设计。引擎采用 C++ 开发，剧情脚本使用Lua进行编写，具有良好的跨平台性和可扩展性。</p>
<p><img src="/VisionGalDoc/screenshot/screenshot1.png" alt="screenshot1">
<img src="/VisionGalDoc/screenshot/screenshot2.png" alt="screenshot1"></p>
<h3 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点"><span>功能特点</span></a></h3>
<ul>
<li>可视化编辑器：提供完善的可视化编辑器，支持实时预览编辑效果，方便创作和管理视觉小说内容</li>
<li>自定义UI界面：全部自定义的UI界面，用类似html和css的语法来定义界面，用Lua脚本定义界面的行为</li>
<li>剧情脚本语言：支持丰富功能的剧情脚本语言,优雅的链式语法编写剧情</li>
<li>中文支持：提供完善的中文支持,包括中文语法,中文字体,中文界面等</li>
<li>MIT协议：开源的MIT协议，开发的游戏版权属于个人所有，你也可以修改引擎源代码，完全不受限制</li>
</ul>
<h2 id="快速开始-1" tabindex="-1"><a class="header-anchor" href="#快速开始-1"><span>快速开始</span></a></h2>
<h3 id="使用安装包" tabindex="-1"><a class="header-anchor" href="#使用安装包"><span>- 使用安装包</span></a></h3>
<p>在<a href="https://github.com/DarlingZeroX/VisionGal" target="_blank" rel="noopener noreferrer">VisionGal Github</a> Releases页面下载最新的安装包，根据你的操作系统选择对应的安装包</p>
<h3 id="手动编译-visiongal-引擎" tabindex="-1"><a class="header-anchor" href="#手动编译-visiongal-引擎"><span>- 手动编译 VisionGal 引擎</span></a></h3>
<p>VisionGal 引擎使用 CMake构建，库依赖使用 vcpkg 管理，所以需要使用 <a href="https://vcpkg.io/en/getting-started.html" target="_blank" rel="noopener noreferrer">vcpkg</a> 来安装依赖库</p>
<h4 id="安装依赖库" tabindex="-1"><a class="header-anchor" href="#安装依赖库"><span>安装依赖库</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">vcpkg</span> <span class="token function">install</span> freetype</span>
<span class="line"><span class="token function">vcpkg</span> <span class="token function">install</span> sdl3</span>
<span class="line"><span class="token function">vcpkg</span> <span class="token function">install</span> sdl3-image<span class="token punctuation">[</span>jpeg,png,tiff,webp<span class="token punctuation">]</span></span>
<span class="line"><span class="token function">vcpkg</span> <span class="token function">install</span> rmlui<span class="token punctuation">[</span>freetype<span class="token punctuation">]</span></span>
<span class="line"><span class="token function">vcpkg</span> <span class="token function">install</span> ffmpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装ffmpeg的时间可能会比较长，需要耐心等待，因为需要编译ffmpeg的源代码。</p>
<h4 id="构建" tabindex="-1"><a class="header-anchor" href="#构建"><span>构建</span></a></h4>
<p>安装完依赖库后，使用Git和CMake按以下命令构建VisonGal</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> clone https://github.com/DarlingZeroX/VisionGal</span>
<span class="line"><span class="token builtin class-name">cd</span> VisionGal</span>
<span class="line">cmake <span class="token parameter variable">-B</span> build <span class="token parameter variable">-S</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-DCMAKE_TOOLCHAIN_FILE</span><span class="token operator">=</span><span class="token string">"&lt;path-to-vcpkg>/scripts/buildsystems/vcpkg.cmake"</span></span>
<span class="line">cmake <span class="token parameter variable">--build</span> Build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>第三行的 <code v-pre>&lt;path-to-vcpkg&gt;</code> 替换为你实际的vcpkg安装路径</strong></em>，例如：C:\vcpkg</p>
<h4 id="编译运行引擎" tabindex="-1"><a class="header-anchor" href="#编译运行引擎"><span>编译运行引擎</span></a></h4>
<p>运行VGLauncher程序，启动编辑器启动器。</p>
<h2 id="开始使用visiongal引擎" tabindex="-1"><a class="header-anchor" href="#开始使用visiongal引擎"><span>开始使用VisionGal引擎</span></a></h2>
<h3 id="启动示例项目" tabindex="-1"><a class="header-anchor" href="#启动示例项目"><span>启动示例项目</span></a></h3>
<p>运行VGLauncher程序，启动编辑器启动器，双击示例项目，即可打开示例项目。</p>
<h3 id="运行场景" tabindex="-1"><a class="header-anchor" href="#运行场景"><span>运行场景</span></a></h3>
<p>在编辑器中，点击上方中间的三角形按钮，即可运行项目。<br>
在运行项目时，你可以在编辑器中查看项目的运行效果。</p>
<h3 id="编辑指定场景" tabindex="-1"><a class="header-anchor" href="#编辑指定场景"><span>编辑指定场景</span></a></h3>
<p>在<strong>内容浏览器</strong>中双击打开 <strong>主菜单场景</strong> 或者 <strong>游戏场景</strong> 资产文件，即可编辑指定场景。</p>
<h3 id="运行游戏剧情场景" tabindex="-1"><a class="header-anchor" href="#运行游戏剧情场景"><span>运行游戏剧情场景</span></a></h3>
<p>在<strong>内容浏览器</strong>双击打开 <strong>游戏场景</strong> 资产文件，运行场景即可查看示例剧情场景。</p>
<h3 id="运行示例剧情脚本" tabindex="-1"><a class="header-anchor" href="#运行示例剧情脚本"><span>运行示例剧情脚本</span></a></h3>
<ul>
<li>在 <strong>内容浏览器</strong> 面板根目录双击打开打开<strong>游戏场景</strong>资产文件</li>
<li>在<strong>场景浏览器</strong>中点击 <strong>Galgame引擎</strong>, 可以发现 <strong>细节</strong> 面板已经显示了一些内容。</li>
<li>在<strong>内容浏览器</strong>打开 <strong>剧情脚本</strong> 目录后，选择目录下的一个 <strong>Lua脚本</strong> 资产文件，将脚本拖放到 <strong>细节</strong> 面板的 <strong>剧情脚本</strong> 编辑区域，可以发现<strong>剧情脚本</strong>的路径已经变成了被拖动的脚本的路径。</li>
<li>然后在编辑器中<strong>运行场景</strong>，即可游玩对应示例剧情脚本场景。</li>
</ul>
<h2 id="编写剧情脚本" tabindex="-1"><a class="header-anchor" href="#编写剧情脚本"><span>编写剧情脚本</span></a></h2>
<p><strong>VisionGal引擎的脚本使用Lua语言编写，大部分剧情脚本都可以用中文语法进行编写。</strong><br>
<strong>采用面向对象以及链式调用的语法，编写起来非常方便。</strong></p>
<h3 id="创建或者编辑剧情脚本资产文件" tabindex="-1"><a class="header-anchor" href="#创建或者编辑剧情脚本资产文件"><span>创建或者编辑剧情脚本资产文件</span></a></h3>
<p>在<strong>内容浏览器</strong>打开 <strong>剧情脚本</strong> 目录后，双击打开目录下的 <strong>Lua脚本</strong> 资产文件，即可编辑示例剧情脚本。<br>
或者在<strong>内容浏览器</strong>中右键菜单创建一个新的 <strong>Galgame剧情脚本</strong> 资产文件，即可开始编写新的剧情脚本。</p>
<h3 id="基础脚本" tabindex="-1"><a class="header-anchor" href="#基础脚本"><span>基础脚本</span></a></h3>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦旅 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦缘'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'你好，Galgame'</span><span class="token punctuation">)</span></span>
<span class="line">    梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'你可以在这里添加剧情内容'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建人物" tabindex="-1"><a class="header-anchor" href="#创建人物"><span>创建人物</span></a></h4>
<ul>
<li>第一行 <code v-pre>local 梦缘 = VG:创建人物('梦旅')</code> 是创建一个人物，用于在剧情中使用。<br>
你可以根据需要创建多个人物，用于在剧情中使用。</li>
<li>由于剧情脚本采用面向对象，创建人物都需要使用 <code v-pre>VG:创建人物('人物名称')</code> 方法，<br>
其中 <code v-pre>人物名称</code> 是你为人物对象指定的名称，用于在剧情中引用人物对象。</li>
<li>人物对象创建后，会返回一个人物对象，比如上面用<code v-pre>local 梦旅 = </code> 接收了这个人物对象，可以任意命名，但推荐使用人物名称作为变量名。</li>
<li>你可以根据需要创建多个人物对象，每个人物对象都有自己的属性和方法，用于在剧情中使用。</li>
</ul>
<h4 id="编写剧情主体" tabindex="-1"><a class="header-anchor" href="#编写剧情主体"><span>编写剧情主体</span></a></h4>
<ul>
<li><strong><code v-pre>return function()</code> 和 <code v-pre>end</code> 是每个剧情脚本必须包含的部分</strong>，引擎才能运行这个剧情脚本</li>
<li><code v-pre>return function()</code> 到 <code v-pre>end</code> 之间的代码是剧情脚本的主体，你可以在其中添加剧情内容。<br>
你可以在主体中使用人物对象的方法，例如：<code v-pre>梦缘:说('你好')</code> 来让人物零在对话框显示文本。<br>
你也可以使用其他的Lua语法，例如：<code v-pre>if</code> 语句，<code v-pre>for</code> 循环，函数调用等。</li>
</ul>
<h3 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法"><span>基础语法</span></a></h3>
<ul>
<li>所有的脚本剧情都需要在 <code v-pre>return function()</code> 和 <code v-pre>end</code> 之间编写，引擎才能运行这个脚本。</li>
<li>很多语法都是采用链式调用的方式，<strong>一般在对象后面用 : 符号加上一个方法</strong>，例如：<code v-pre>梦缘:说('你好')</code> 来让人物零在对话框显示文本。</li>
<li>很多方法都是用<code v-pre>VG</code>这个对象来调用的，例如：<code v-pre>VG:显示背景('图片/背景/教室背景.png')</code> 来显示背景图片。</li>
</ul>
<h3 id="显示背景图片" tabindex="-1"><a class="header-anchor" href="#显示背景图片"><span>显示背景图片</span></a></h3>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦缘 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦缘'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦缘<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'显示了教室背景'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>你可以使用 <code v-pre>VG:显示背景('背景图片路径')</code> 方法来显示游戏背景图片。
其中 <code v-pre>背景图片路径</code> 是你为背景图片指定的路径，用于在剧情中引用背景图片。</li>
<li>图片路径是相对<strong>内容浏览器根目录</strong>的相对路径。</li>
<li>推荐将图片放在 <strong>图片/背景</strong> 目录下，方便管理。</li>
</ul>
<h3 id="显示人物立绘" tabindex="-1"><a class="header-anchor" href="#显示人物立绘"><span>显示人物立绘</span></a></h3>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 旁白 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'旁白'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 缘心 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'缘心'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">-- 剧情开始    </span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    旁白<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'（放学后的教室……夕阳透过窗子，尘埃在空气里闪着光。）'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/男孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"梦女，你怎么还在这儿？不是说要和朋友一起回去的吗？"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/男孩2.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"嗯……她们先走了。我想一个人待一会儿。"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩2.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"不过，现在你来了，也不算是一个人了呢。"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>推荐将图片放在 <strong>图片/立绘</strong> 目录下，方便管理。</li>
<li>你可以使用 <code v-pre>人物对象:显示立绘('立绘路径')</code> 方法来显示人物立绘。
其中 <code v-pre>立绘路径</code> 是立绘的资产路径。</li>
<li>立绘第一次默认显示在正中间，后续可以在<code v-pre>显示立绘</code>后使用<code v-pre>设置位置X(x)</code> 和 <code v-pre>设置位置Y(y)</code> 方法来设置立绘的位置。</li>
<li>后面的立绘默认显示在之前的立绘的位置上。</li>
</ul>
<p>运行场景后可以显示立绘了，但是显示的立绘很生硬，并且后面的立绘与前面的立绘重叠了<br>
这是因为引擎不会自动隐藏前面的立绘，也不会添加默认显示立绘的方式，这需要我们在剧情中手动添加
下面添加顺畅的显示立绘和隐藏立绘的方式</p>
<h4 id="顺畅的显示和隐藏立绘" tabindex="-1"><a class="header-anchor" href="#顺畅的显示和隐藏立绘"><span>顺畅的显示和隐藏立绘</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 旁白 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'旁白'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 缘心 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'缘心'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">-- 剧情开始    </span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    旁白<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'（放学后的教室……夕阳透过窗子，尘埃在空气里闪着光。）'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/男孩1.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"梦女，你怎么还在这儿？不是说要和朋友一起回去的吗？"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">-- 隐藏立绘</span></span>
<span class="line">    缘心<span class="token punctuation">.</span>当前立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡出 0.6'</span><span class="token punctuation">)</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/男孩2.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"嗯……她们先走了。我想一个人待一会儿。"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">-- 隐藏立绘</span></span>
<span class="line">    梦女<span class="token punctuation">.</span>当前立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡出 0.6'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩2.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"不过，现在你来了，也不算是一个人了呢。"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>你可以使用 <code v-pre>人物对象.当前立绘:随着('淡出 0.6')</code> 方法来隐藏人物立绘。
其中 <code v-pre>人物对象</code> 是你创建的人物对象，用于在剧情中引用人物。</li>
<li>你可以使用 <code v-pre>人物对象.当前立绘:随着('淡入 0.6')</code> 方法来显示人物立绘，<br>
也可以直接在<code v-pre>人物对象:显示立绘('姿势'):随着('淡入 0.6')</code> 显示立绘后追加淡入来显示立绘
其中 <code v-pre>人物对象</code> 是你创建的人物对象，用于在剧情中引用人物。</li>
</ul>
<p>引擎不会自动隐藏前面的立绘，但是我们可以在显示新的立绘前先隐藏当前的立绘，来实现顺畅的显示和隐藏立绘。
虽然这样可以顺畅的显示和隐藏立绘，但是不够简洁，因为我们需要在每个显示立绘的语句前都添加隐藏立绘的语句。</p>
<h4 id="简洁的显示人物立绘" tabindex="-1"><a class="header-anchor" href="#简洁的显示人物立绘"><span>简洁的显示人物立绘</span></a></h4>
<p>为了简化隐藏和显示人物立绘这个过程，我们可以为人物添加一个回调方法来自动淡入和淡出立绘，每当人物显示立绘时，就会使用这个。</p>
<p>我们先在剧情脚本开头添加两个函数</p>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token comment">-- 当显示新立绘时，自动对新的立绘使用淡入效果，对上一个立绘使用淡出效果</span></span>
<span class="line">游戏立绘 <span class="token operator">=</span> 游戏立绘 <span class="token keyword">or</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">--namespace</span></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡出 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在添加人物立绘后面添加回调方法</p>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token comment">-- 添加人物立绘显示和隐藏回调</span></span>
<span class="line">梦女<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">梦女<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的剧情脚本如下</p>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 旁白 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'旁白'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 缘心 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'缘心'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 当显示新立绘时，自动对新的立绘使用淡入效果，对上一个立绘使用淡出效果</span></span>
<span class="line">游戏立绘 <span class="token operator">=</span> 游戏立绘 <span class="token keyword">or</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">--namespace</span></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡出 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">-- 添加人物立绘显示和隐藏回调</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">-- 添加人物立绘显示和隐藏回调，当显示新立绘时</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">	缘心<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">-- 剧情开始    </span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    旁白<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'（放学后的教室……夕阳透过窗子，尘埃在空气里闪着光。）'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/男孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"梦女，你怎么还在这儿？不是说要和朋友一起回去的吗？"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/男孩2.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"嗯……她们先走了。我想一个人待一会儿。"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩2.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"不过，现在你来了，也不算是一个人了呢。"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，当人物显示立绘时，就会自动使用淡入效果，隐藏当前立绘时，就会自动使用淡出效果。</p>
<h3 id="转场效果" tabindex="-1"><a class="header-anchor" href="#转场效果"><span>转场效果</span></a></h3>
<h4 id="推入转场" tabindex="-1"><a class="header-anchor" href="#推入转场"><span>推入转场</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景2.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'向左推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：向左推入转场'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'向右推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：向右推入转场'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'向下推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：向下推入转场'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'向上推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：向上推入转场'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>你可以在显示背景后面添加 <code v-pre>:转场('向左推入 2.0')</code> 方法来实现向推入转场效果。<br>
其中的 <code v-pre>向左推入</code> 是转场的类型<br>
其中的 <code v-pre>2.0</code> 是转场时间，单位是秒。你可以根据需要调整转场时间。</li>
<li>目前的推入转场效果只有<strong>向左、向右、向下、向上</strong>四种。</li>
</ul>
<h4 id="溶解转场" tabindex="-1"><a class="header-anchor" href="#溶解转场"><span>溶解转场</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'向下滚动 1.0'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'溶解 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：溶解转场以及向下滚动'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   <span class="token comment">-- 当前测试：黑屏溶解转场</span></span>
<span class="line">	VG<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'屏幕'</span><span class="token punctuation">,</span><span class="token string">'淡出 1.0'</span><span class="token punctuation">)</span></span>
<span class="line">	VG<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'屏幕'</span><span class="token punctuation">,</span><span class="token string">'淡入 1.0'</span><span class="token punctuation">)</span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景2.png'</span><span class="token punctuation">)</span></span>
<span class="line">    VG<span class="token punctuation">:</span>等待<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：黑屏溶解转场'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>你可以在显示背景后面添加 <code v-pre>:随着('向下滚动 1.0')</code> 方法来实现向下滚动效果。<br>
其中的 <code v-pre>向下滚动</code> 是滚动的类型<br>
其中的 <code v-pre>1.0</code> 是滚动时间，单位是秒。你可以根据需要调整滚动时间。</li>
<li><code v-pre>VG:转场命令('屏幕','淡出 1.0')</code> 是直接使用Galgame对象来进行转场，<br>
其中的 <code v-pre>屏幕</code> 是转场的目标，转场的目标有三个，分别是<strong>屏幕、前景、背景</strong>，这里是屏幕<br>
其中的 <code v-pre>淡出 1.0</code> 是转场的类型和时间，这里是淡出效果，时间是1秒</li>
<li><code v-pre>VG:转场命令('屏幕','淡入 1.0')</code> 会在淡出转场完成后执行</li>
<li><code v-pre>VG:显示背景('图片/背景/走廊背景2.png')</code> 是转场作用的目标背景</li>
<li><code v-pre>VG:等待(2.0)</code> 会等待2秒，确保转场完成后再执行后续代码</li>
</ul>
<h4 id="自定义转场图片" tabindex="-1"><a class="header-anchor" href="#自定义转场图片"><span>自定义转场图片</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    VG<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：图片/转场/WIP_BLTR'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    VG<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BRTL.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：图片/转场/WIP_BLTR'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>VG:图片转场命令('背景','图片/转场/WIP_BLTR.png','2.0')</code> 来自定义图片转场。<br>
其中的 <code v-pre>背景</code> 是转场的目标
其中的 <code v-pre>图片/转场/WIP_BLTR.png</code> 是自定义的转场图片路径<br>
其中的 <code v-pre>2.0</code> 是转场时间，单位是秒。你可以根据需要调整转场时间。</li>
</ul>
<h3 id="图层" tabindex="-1"><a class="header-anchor" href="#图层"><span>图层</span></a></h3>
<p>目前VisionGal默认的图层有三个，分别是<strong>屏幕、前景、背景</strong></p>
<ul>
<li>屏幕图层是最前面的图层，作用在屏幕上的效果会显示在UI前面，包括游戏的UI对话框。</li>
<li>前景图层是在屏幕图层下的图层，位于中间的图层，作用在前景上的元素会显示在UI后面，一般是用于显示人物立绘。</li>
<li>背景图层是在前景图层下的图层，位于最下面的图层，一般用于显示背景图片。</li>
</ul>
<h4 id="在图层显示图片" tabindex="-1"><a class="header-anchor" href="#在图层显示图片"><span>在图层显示图片</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">游戏立绘 <span class="token operator">=</span> 游戏立绘 <span class="token keyword">or</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">--namespace</span></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡出 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   VG<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在背景层进行转场，不影响立绘'</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示前景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'溶解 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在前景层显示图片'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   VG<span class="token punctuation">:</span>显示屏幕<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：在屏幕前显示立绘'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>VG:显示前景('图片/背景/学校操场.png'):转场('溶解 2.0')</code> 可以在前景层显示图片并进行溶解转场。</li>
<li>使用 <code v-pre>VG:显示屏幕('图片/立绘/女孩1.png')</code> 可以在屏幕前显示立绘。</li>
</ul>
<h4 id="在不同图层上转场" tabindex="-1"><a class="header-anchor" href="#在不同图层上转场"><span>在不同图层上转场</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">游戏立绘 <span class="token operator">=</span> 游戏立绘 <span class="token keyword">or</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">--namespace</span></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡出 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   VG<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在背景层进行转场，不影响立绘'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   VG<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'向上推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景2.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在背景层进行转场，不影响立绘'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   VG<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'前景'</span><span class="token punctuation">,</span><span class="token string">'向左推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在前景层进行转场，影响立绘'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   VG<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'屏幕'</span><span class="token punctuation">,</span><span class="token string">'向右推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在屏幕层使用转场图片进行转场，影响全屏'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>VG:转场命令('背景','向上推入 2.0')</code> 可以在背景层进行向上推入转场。</li>
<li>使用 <code v-pre>VG:转场命令('前景','向左推入 2.0')</code> 可以在前景层进行向左推入转场。</li>
<li>使用 <code v-pre>VG:转场命令('屏幕','向右推入 2.0')</code> 可以在屏幕层使用转场图片进行向右推入转场。</li>
</ul>
<h4 id="在图层上显示颜色" tabindex="-1"><a class="header-anchor" href="#在图层上显示颜色"><span>在图层上显示颜色</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">游戏立绘 <span class="token operator">=</span> 游戏立绘 <span class="token keyword">or</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">--namespace</span></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> 游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">(</span>人物立绘<span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">return</span> 人物立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡出 0.6'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   VG<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">local</span> 红色 <span class="token operator">=</span> float4<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span>红色<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：在背景层显示红色'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   VG<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'前景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">local</span> 绿色 <span class="token operator">=</span> float4<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示前景<span class="token punctuation">(</span>绿色<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：在前景层显示绿色'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   VG<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'屏幕'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">local</span> 蓝色 <span class="token operator">=</span> float4<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>显示屏幕<span class="token punctuation">(</span>蓝色<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：在屏幕层显示蓝色'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>float4.new(r, g, b, a)</code> 可以创建一个颜色值，<br>
其中 <code v-pre>r</code>、<code v-pre>g</code>、<code v-pre>b</code> 分别是红色、绿色、蓝色通道的取值（0.0 到 1.0）<br>
<code v-pre>a</code> 是透明度通道的取值（0.0 到 1.0）。</li>
<li>使用 <code v-pre>VG:显示背景(颜色)</code> 和 <code v-pre>VG:显示前景(颜色)</code> 以及 <code v-pre>VG:显示屏幕(颜色)</code> 可以在不同图层上显示不同的颜色。</li>
</ul>
<h3 id="加载剧情脚本" tabindex="-1"><a class="header-anchor" href="#加载剧情脚本"><span>加载剧情脚本</span></a></h3>
<h4 id="加载剧情脚本-1" tabindex="-1"><a class="header-anchor" href="#加载剧情脚本-1"><span>加载剧情脚本</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">   VG<span class="token punctuation">:</span>加载剧情脚本<span class="token punctuation">(</span><span class="token string">'/assets/剧情脚本/Demo/走廊.lua'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动画" tabindex="-1"><a class="header-anchor" href="#动画"><span>动画</span></a></h3>
<h4 id="基本动画" tabindex="-1"><a class="header-anchor" href="#基本动画"><span>基本动画</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line">   缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'图片/立绘/男孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">:</span>开始动画<span class="token punctuation">(</span> <span class="token punctuation">{</span>位置偏移X <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1.3</span><span class="token punctuation">,</span> <span class="token string">"弹跳 inout"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">true</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">:</span>添加动画关键帧<span class="token punctuation">(</span><span class="token punctuation">{</span>位置偏移Y <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1.3</span><span class="token punctuation">,</span> <span class="token string">"弹跳 inout"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>:开始动画( 动画参数, 持续时间, 动画曲线, 循环次数, 循环是否改变动画方向 )</code> 可以开始一个动画。</li>
<li>使用 <code v-pre>:添加动画关键帧( 动画参数, 持续时间, 动画曲线 )</code> 可以添加一个动画关键帧。</li>
</ul>
<h3 id="剧情选择" tabindex="-1"><a class="header-anchor" href="#剧情选择"><span>剧情选择</span></a></h3>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦旅 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦旅'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'这是一个Galgame游戏脚本初始化模版'</span><span class="token punctuation">)</span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'你可以在这里添加剧情内容1'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token comment">-- 使用 `VG:剧情选择( 分支名称, 选择列表 )` 可以在脚本中实现剧情选择。</span></span>
<span class="line">   当前选择 <span class="token operator">=</span> VG<span class="token punctuation">:</span>剧情选择<span class="token punctuation">(</span><span class="token string">'分支1'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">'选择1'</span><span class="token punctuation">,</span><span class="token string">'选择2'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">if</span> 当前选择 <span class="token operator">==</span> <span class="token string">'选择1'</span> <span class="token keyword">then</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择1'</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择11'</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择111'</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择1111'</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择11111'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">elseif</span> 当前选择 <span class="token operator">==</span> <span class="token string">'选择2'</span> <span class="token keyword">then</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择2'</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择22'</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择222'</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择2222'</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'选择22222'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">end</span></span>
<span class="line">   <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>VG:剧情选择( 分支名称, 选择列表 )</code> 可以在脚本中实现剧情选择。</li>
<li><code v-pre>选择列表</code> 由多个字符串元素组成，每个元素代表一个选择选项。
例如：<code v-pre>{'选择1','选择2'}</code> 表示有两个选择选项，分别是 &quot;选择1&quot; 和 &quot;选择2&quot;。</li>
<li><code v-pre>分支名称</code> 是唯一的，用于标识不同的剧情分支。</li>
<li><code v-pre>VG:剧情选择()</code> 返回用户选择的选项。例如：如果用户选择了 &quot;选择1&quot;，则 <code v-pre>VG:剧情选择()</code> 返回 &quot;选择1&quot;。
进入 <code v-pre>if 当前选择 == '选择1' then</code> 的分支</li>
</ul>
<h3 id="全屏文字" tabindex="-1"><a class="header-anchor" href="#全屏文字"><span>全屏文字</span></a></h3>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦旅 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦旅'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'这是一个Galgame游戏脚本初始化模版'</span><span class="token punctuation">)</span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'你可以在这里添加剧情内容1'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token comment">-- 使用 `VG:全屏文字( 文字列表 )` 可以在全屏显示多行文字。</span></span>
<span class="line">   VG<span class="token punctuation">:</span>全屏文字<span class="token punctuation">(</span></span>
<span class="line">   	<span class="token punctuation">{</span></span>
<span class="line">   		<span class="token string">'11111111111111111111111111111111'</span><span class="token punctuation">,</span></span>
<span class="line">   		<span class="token string">'22222222222222222222222222222222222'</span><span class="token punctuation">,</span></span>
<span class="line">           <span class="token string">'3333333333333333333333333333333'</span><span class="token punctuation">,</span></span>
<span class="line">           <span class="token string">'44444444444444444444444444444444'</span><span class="token punctuation">,</span></span>
<span class="line">   	<span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>VG:全屏文字( 文字列表 )</code> 可以在全屏显示多行文字。</li>
<li><code v-pre>文字列表</code> 是一个字符串数组，每个元素代表一行文字。
例如：<code v-pre>{'1111','222222222222'}</code> 表示有两行文字，分别是 &quot;111111111&quot; 和 &quot;2222222222222222&quot;。</li>
</ul>
<h3 id="玩家文本输入" tabindex="-1"><a class="header-anchor" href="#玩家文本输入"><span>玩家文本输入</span></a></h3>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦旅 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦旅'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'这是一个Galgame游戏脚本初始化模版'</span><span class="token punctuation">)</span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'你可以在这里添加剧情内容'</span><span class="token punctuation">)</span></span>
<span class="line">   输入文本 <span class="token operator">=</span> VG<span class="token punctuation">:</span>获取输入<span class="token punctuation">(</span><span class="token string">'输入1'</span><span class="token punctuation">,</span><span class="token string">"输入标题"</span><span class="token punctuation">,</span><span class="token string">'按钮文本'</span><span class="token punctuation">)</span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'你输入的内容是：'</span> <span class="token operator">..</span> 输入文本<span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>VG:获取输入( 输入框名称, 输入框标题, 按钮文本 )</code> 可以获取玩家在输入框中输入的文本。</li>
<li><code v-pre>输入框名称</code> 是唯一的，用于标识不同的输入框。</li>
<li><code v-pre>输入框标题</code> 是显示在输入框上方的标题文本。</li>
<li><code v-pre>按钮文本</code> 是显示在输入框下方的按钮文本。</li>
<li><code v-pre>VG:获取输入()</code> 返回玩家在输入框中输入的文本。</li>
</ul>
<h3 id="存档数据读写" tabindex="-1"><a class="header-anchor" href="#存档数据读写"><span>存档数据读写</span></a></h3>
<h4 id="剧情脚本数据传递" tabindex="-1"><a class="header-anchor" href="#剧情脚本数据传递"><span>剧情脚本数据传递</span></a></h4>
<p>假设如下是脚本1</p>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line">   <span class="token keyword">local</span> 梦旅 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦旅'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'这是脚本数据传递1'</span><span class="token punctuation">)</span></span>
<span class="line">       梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'脚本数据传递1你可以在这里添加剧情内容'</span><span class="token punctuation">)</span></span>
<span class="line">       VG<span class="token punctuation">.</span>存档数据<span class="token punctuation">.</span>命名空间<span class="token number">1.</span>变量<span class="token number">1</span> <span class="token operator">=</span> <span class="token string">'VG.存档数据.命名空间1.变量1的值'</span></span>
<span class="line">       VG<span class="token punctuation">:</span>加载剧情脚本<span class="token punctuation">(</span><span class="token string">'/assets/剧情脚本/存档数据读写/脚本数据传递2.lua'</span><span class="token punctuation">)</span></span>
<span class="line">       <span class="token keyword">return</span></span>
<span class="line">   <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>通过 <code v-pre>VG.存档数据</code> 可以访问读取和写入存档数据</li>
<li>通过 <code v-pre>VG.存档数据.命名空间1</code> 可以访问存档数据的一个命名空间</li>
<li>通过 <code v-pre>VG.存档数据.命名空间1.变量1</code> 可以访问存档数据的命名空间1中的变量1</li>
</ul>
<p>然后在如下脚本2中可以通过 <code v-pre>VG.存档数据.命名空间1.变量1</code> 来访问和使用脚本1中传递的数据。</p>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦旅 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦旅'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'这是脚本数据传递2.lua'</span><span class="token punctuation">)</span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span>VG<span class="token punctuation">.</span>存档数据<span class="token punctuation">.</span>命名空间<span class="token number">1.</span>变量<span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里打印的就是 <code v-pre>VG.存档数据.命名空间1.变量1</code> 的值，即 <code v-pre>'VG.存档数据.命名空间1.变量1的值'</code></p>
<h4 id="读取剧情选择结果" tabindex="-1"><a class="header-anchor" href="#读取剧情选择结果"><span>读取剧情选择结果</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦旅 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦旅'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'这是一个Galgame游戏脚本初始化模版'</span><span class="token punctuation">)</span></span>
<span class="line">  梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'你可以在这里添加剧情内容1'</span><span class="token punctuation">)</span></span>
<span class="line">  VG<span class="token punctuation">:</span>剧情选择<span class="token punctuation">(</span><span class="token string">'分支1'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">'选择1'</span><span class="token punctuation">,</span><span class="token string">'选择2'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">-- 通过 VG.存档数据.  + 剧情选择这个命名空间 + 剧情选择名称  可以跨脚本读取剧情选择结果 </span></span>
<span class="line">   梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span>VG<span class="token punctuation">.</span>存档数据<span class="token punctuation">.</span>剧情选择<span class="token punctuation">.</span>分支<span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>VG.存档数据.剧情选择</code> 这个特定的命名空间可以访问读取剧情选择的结果</p>
<ul>
<li>通过 <code v-pre>VG.存档数据.剧情选择.分支1</code> 可以访问分支1的选择结果</li>
</ul>
<h4 id="读取玩家输入结果" tabindex="-1"><a class="header-anchor" href="#读取玩家输入结果"><span>读取玩家输入结果</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦旅 <span class="token operator">=</span> VG<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦旅'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'这是一个Galgame游戏脚本初始化模版'</span><span class="token punctuation">)</span></span>
<span class="line">  梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'你可以在这里添加剧情内容'</span><span class="token punctuation">)</span></span>
<span class="line">  VG<span class="token punctuation">:</span>获取输入<span class="token punctuation">(</span><span class="token string">'输入1'</span><span class="token punctuation">,</span><span class="token string">"输入标题"</span><span class="token punctuation">,</span><span class="token string">'按钮文本'</span><span class="token punctuation">)</span></span>
<span class="line">  梦旅<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'你输入的内容是：'</span> <span class="token operator">..</span> VG<span class="token punctuation">.</span>存档数据<span class="token punctuation">.</span>玩家输入<span class="token punctuation">.</span>输入<span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>VG.存档数据.玩家输入</code> 这个特定的命名空间可以访问读取玩家输入的结果</p>
<ul>
<li>通过 <code v-pre>VG.存档数据.玩家输入.输入1</code> 可以访问<code v-pre>VG:获取输入('输入1',&quot;输入标题&quot;,'按钮文本')</code>的输入结果</li>
</ul>
</div></template>


