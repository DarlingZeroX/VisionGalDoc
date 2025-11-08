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
<h3 id="使用安装包" tabindex="-1"><a class="header-anchor" href="#使用安装包"><span>使用安装包</span></a></h3>
<p>在<a href="https://github.com/DarlingZeroX/VisionGal" target="_blank" rel="noopener noreferrer">VisionGal Github</a> Releases页面下载最新的安装包，根据你的操作系统选择对应的安装包</p>
<h3 id="编译-visiongal-引擎" tabindex="-1"><a class="header-anchor" href="#编译-visiongal-引擎"><span>编译 VisionGal 引擎</span></a></h3>
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
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦旅 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦缘'</span><span class="token punctuation">)</span></span>
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
<li>第一行 <code v-pre>local 梦缘 = GalGame.引擎:创建人物('梦旅')</code> 是创建一个人物，用于在剧情中使用。<br>
你可以根据需要创建多个人物，用于在剧情中使用。</li>
<li>由于剧情脚本采用面向对象，创建人物都需要使用 <code v-pre>GalGame.引擎:创建人物('人物名称')</code> 方法，<br>
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
<li>很多方法都是用<code v-pre>GalGame</code>这个对象来调用的，例如：<code v-pre>GalGame.引擎:显示背景('图片/背景/教室背景.png')</code> 来显示背景图片。</li>
</ul>
<h3 id="显示背景图片" tabindex="-1"><a class="header-anchor" href="#显示背景图片"><span>显示背景图片</span></a></h3>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦缘 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦缘'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦缘<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'显示了教室背景'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>你可以使用 <code v-pre>GalGame.引擎:显示背景('背景图片路径')</code> 方法来显示游戏背景图片。
其中 <code v-pre>背景图片路径</code> 是你为背景图片指定的路径，用于在剧情中引用背景图片。</li>
<li>图片路径是相对<strong>内容浏览器根目录</strong>的相对路径。</li>
<li>推荐将图片放在 <strong>图片/背景</strong> 目录下，方便管理。</li>
</ul>
<h3 id="显示人物立绘" tabindex="-1"><a class="header-anchor" href="#显示人物立绘"><span>显示人物立绘</span></a></h3>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 旁白 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'旁白'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 缘心 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'缘心'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">--- 添加人物立绘</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/女孩2.png'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	缘心<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/男孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">	缘心<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/男孩2.png'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">-- 剧情开始    </span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    旁白<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'（放学后的教室……夕阳透过窗子，尘埃在空气里闪着光。）'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">)</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"梦女，你怎么还在这儿？不是说要和朋友一起回去的吗？"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"嗯……她们先走了。我想一个人待一会儿。"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"不过，现在你来了，也不算是一个人了呢。"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>你可以使用 <code v-pre>人物对象:添加立绘('立绘名称','图片路径')</code> 方法来添加人物立绘。
其中 <code v-pre>立绘名称</code> 是你为立绘指定的名称，用于在剧情中引用立绘。
<code v-pre>图片路径</code> 是你为立绘指定的路径，用于在剧情中引用立绘图片。</li>
<li>推荐将图片放在 <strong>图片/立绘</strong> 目录下，方便管理。</li>
<li>你可以使用 <code v-pre>人物对象:显示立绘('立绘名称')</code> 方法来显示人物立绘。
其中 <code v-pre>立绘名称</code> 是你为立绘指定的名称，用于在剧情中引用立绘。</li>
<li>立绘第一次默认显示在正中间，后续可以在<code v-pre>显示立绘</code>后使用<code v-pre>设置位置X(x)</code> 和 <code v-pre>设置位置Y(y)</code> 方法来设置立绘的位置。</li>
<li>后面的立绘默认显示在之前的立绘的位置上。</li>
</ul>
<p>运行场景后可以显示立绘了，但是显示的立绘很生硬，并且后面的立绘与前面的立绘重叠了<br>
这是因为引擎不会自动隐藏前面的立绘，也不会添加默认显示立绘的方式，这需要我们在剧情中手动添加
下面添加顺畅的显示立绘和隐藏立绘的方式</p>
<h4 id="顺畅的显示和隐藏立绘" tabindex="-1"><a class="header-anchor" href="#顺畅的显示和隐藏立绘"><span>顺畅的显示和隐藏立绘</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 旁白 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'旁白'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 缘心 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'缘心'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">--- 添加人物立绘</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/女孩2.png'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	缘心<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/男孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">	缘心<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/男孩2.png'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">-- 剧情开始    </span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    旁白<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'（放学后的教室……夕阳透过窗子，尘埃在空气里闪着光。）'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"梦女，你怎么还在这儿？不是说要和朋友一起回去的吗？"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">-- 隐藏立绘</span></span>
<span class="line">    缘心<span class="token punctuation">.</span>当前立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡出 0.6'</span><span class="token punctuation">)</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"嗯……她们先走了。我想一个人待一会儿。"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">-- 隐藏立绘</span></span>
<span class="line">    梦女<span class="token punctuation">.</span>当前立绘<span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡出 0.6'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'淡入 0.6'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"不过，现在你来了，也不算是一个人了呢。"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 旁白 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'旁白'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> 缘心 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'缘心'</span><span class="token punctuation">)</span></span>
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
<span class="line">    <span class="token comment">--- 添加人物立绘</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/女孩2.png'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">-- 添加人物立绘显示和隐藏回调</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">	梦女<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	缘心<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/男孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">	缘心<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/男孩2.png'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">-- 添加人物立绘显示和隐藏回调，当显示新立绘时</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">	缘心<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">-- 剧情开始    </span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    旁白<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'（放学后的教室……夕阳透过窗子，尘埃在空气里闪着光。）'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">)</span></span>
<span class="line">    缘心<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"梦女，你怎么还在这儿？不是说要和朋友一起回去的吗？"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势1'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>设置位置<span class="token function">X</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"嗯……她们先走了。我想一个人待一会儿。"</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'姿势2'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">"不过，现在你来了，也不算是一个人了呢。"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，当人物显示立绘时，就会自动使用淡入效果，隐藏当前立绘时，就会自动使用淡出效果。</p>
<h3 id="转场效果" tabindex="-1"><a class="header-anchor" href="#转场效果"><span>转场效果</span></a></h3>
<h4 id="推入转场" tabindex="-1"><a class="header-anchor" href="#推入转场"><span>推入转场</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景2.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'向左推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：向左推入转场'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'向右推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：向右推入转场'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'向下推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：向下推入转场'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'向上推入 2.0'</span><span class="token punctuation">)</span></span>
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
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>随着<span class="token punctuation">(</span><span class="token string">'向下滚动 1.0'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'溶解 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：溶解转场以及向下滚动'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   <span class="token comment">-- 当前测试：黑屏溶解转场</span></span>
<span class="line">	GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'屏幕'</span><span class="token punctuation">,</span><span class="token string">'淡出 1.0'</span><span class="token punctuation">)</span></span>
<span class="line">	GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'屏幕'</span><span class="token punctuation">,</span><span class="token string">'淡入 1.0'</span><span class="token punctuation">)</span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景2.png'</span><span class="token punctuation">)</span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>等待<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：黑屏溶解转场'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>你可以在显示背景后面添加 <code v-pre>:随着('向下滚动 1.0')</code> 方法来实现向下滚动效果。<br>
其中的 <code v-pre>向下滚动</code> 是滚动的类型<br>
其中的 <code v-pre>1.0</code> 是滚动时间，单位是秒。你可以根据需要调整滚动时间。</li>
<li><code v-pre>GalGame.引擎:转场命令('屏幕','淡出 1.0')</code> 是直接使用Galgame对象来进行转场，<br>
其中的 <code v-pre>屏幕</code> 是转场的目标，转场的目标有三个，分别是<strong>屏幕、前景、背景</strong>，这里是屏幕<br>
其中的 <code v-pre>淡出 1.0</code> 是转场的类型和时间，这里是淡出效果，时间是1秒</li>
<li><code v-pre>GalGame.引擎:转场命令('屏幕','淡入 1.0')</code> 会在淡出转场完成后执行</li>
<li><code v-pre>GalGame.引擎:显示背景('图片/背景/走廊背景2.png')</code> 是转场作用的目标背景</li>
<li><code v-pre>GalGame.引擎:等待(2.0)</code> 会等待2秒，确保转场完成后再执行后续代码</li>
</ul>
<h4 id="自定义转场图片" tabindex="-1"><a class="header-anchor" href="#自定义转场图片"><span>自定义转场图片</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：图片/转场/WIP_BLTR'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BRTL.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">    GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span></span>
<span class="line">    梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：图片/转场/WIP_BLTR'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>GalGame.引擎:图片转场命令('背景','图片/转场/WIP_BLTR.png','2.0')</code> 来自定义图片转场。<br>
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
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
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
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'女孩1'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'女孩1'</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在背景层进行转场，不影响立绘'</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示前景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>转场<span class="token punctuation">(</span><span class="token string">'溶解 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在前景层显示图片'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示屏幕<span class="token punctuation">(</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：在屏幕前显示立绘'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>GalGame.引擎:显示前景('图片/背景/学校操场.png'):转场('溶解 2.0')</code> 可以在前景层显示图片并进行溶解转场。</li>
<li>使用 <code v-pre>GalGame.引擎:显示屏幕('图片/立绘/女孩1.png')</code> 可以在屏幕前显示立绘。</li>
</ul>
<h4 id="在不同图层上转场" tabindex="-1"><a class="header-anchor" href="#在不同图层上转场"><span>在不同图层上转场</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
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
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'女孩1'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'女孩1'</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在背景层进行转场，不影响立绘'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'向上推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/走廊背景2.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在背景层进行转场，不影响立绘'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'前景'</span><span class="token punctuation">,</span><span class="token string">'向左推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在前景层进行转场，影响立绘'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>转场命令<span class="token punctuation">(</span><span class="token string">'屏幕'</span><span class="token punctuation">,</span><span class="token string">'向右推入 2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/学校操场.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前转场测试：在屏幕层使用转场图片进行转场，影响全屏'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>GalGame.引擎:转场命令('背景','向上推入 2.0')</code> 可以在背景层进行向上推入转场。</li>
<li>使用 <code v-pre>GalGame.引擎:转场命令('前景','向左推入 2.0')</code> 可以在前景层进行向左推入转场。</li>
<li>使用 <code v-pre>GalGame.引擎:转场命令('屏幕','向右推入 2.0')</code> 可以在屏幕层使用转场图片进行向右推入转场。</li>
</ul>
<h4 id="在图层上显示颜色" tabindex="-1"><a class="header-anchor" href="#在图层上显示颜色"><span>在图层上显示颜色</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">local</span> 梦女 <span class="token operator">=</span> GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>创建人物<span class="token punctuation">(</span><span class="token string">'梦女'</span><span class="token punctuation">)</span></span>
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
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘<span class="token punctuation">(</span><span class="token string">'女孩1'</span><span class="token punctuation">,</span><span class="token string">'图片/立绘/女孩1.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘显示回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘显示回调<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>添加立绘隐藏回调<span class="token punctuation">(</span>游戏立绘<span class="token punctuation">.</span>立绘隐藏回调<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   梦女<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'女孩1'</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span><span class="token string">'图片/背景/教室背景.png'</span><span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'测试开始'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'背景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">local</span> 红色 <span class="token operator">=</span> float4<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示背景<span class="token punctuation">(</span>红色<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：在背景层显示红色'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'前景'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">local</span> 绿色 <span class="token operator">=</span> float4<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示前景<span class="token punctuation">(</span>绿色<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：在前景层显示绿色'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>图片转场命令<span class="token punctuation">(</span><span class="token string">'屏幕'</span><span class="token punctuation">,</span><span class="token string">'图片/转场/WIP_BLTR.png'</span><span class="token punctuation">,</span><span class="token string">'2.0'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">local</span> 蓝色 <span class="token operator">=</span> float4<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>显示屏幕<span class="token punctuation">(</span>蓝色<span class="token punctuation">)</span></span>
<span class="line">   梦女<span class="token punctuation">:</span>说<span class="token punctuation">(</span><span class="token string">'当前测试：在屏幕层显示蓝色'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>float4.new(r, g, b, a)</code> 可以创建一个颜色值，<br>
其中 <code v-pre>r</code>、<code v-pre>g</code>、<code v-pre>b</code> 分别是红色、绿色、蓝色通道的取值（0.0 到 1.0）<br>
<code v-pre>a</code> 是透明度通道的取值（0.0 到 1.0）。</li>
<li>使用 <code v-pre>GalGame.引擎:显示背景(颜色)</code> 和 <code v-pre>GalGame.引擎:显示前景(颜色)</code> 以及 <code v-pre>GalGame.引擎:显示屏幕(颜色)</code> 可以在不同图层上显示不同的颜色。</li>
</ul>
<h3 id="加载剧情脚本" tabindex="-1"><a class="header-anchor" href="#加载剧情脚本"><span>加载剧情脚本</span></a></h3>
<h4 id="加载剧情脚本-1" tabindex="-1"><a class="header-anchor" href="#加载剧情脚本-1"><span>加载剧情脚本</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">   GalGame<span class="token punctuation">.</span>引擎<span class="token punctuation">:</span>加载剧情脚本<span class="token punctuation">(</span><span class="token string">'/assets/剧情脚本/Demo/走廊.lua'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动画" tabindex="-1"><a class="header-anchor" href="#动画"><span>动画</span></a></h3>
<h4 id="基本动画" tabindex="-1"><a class="header-anchor" href="#基本动画"><span>基本动画</span></a></h4>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line">   缘心<span class="token punctuation">:</span>显示立绘<span class="token punctuation">(</span><span class="token string">'疲惫'</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">:</span>开始动画<span class="token punctuation">(</span> <span class="token punctuation">{</span>位置偏移X <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1.3</span><span class="token punctuation">,</span> <span class="token string">"弹跳 inout"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">true</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">:</span>添加动画关键帧<span class="token punctuation">(</span><span class="token punctuation">{</span>位置偏移Y <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1.3</span><span class="token punctuation">,</span> <span class="token string">"弹跳 inout"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 <code v-pre>:开始动画( 动画参数, 持续时间, 动画曲线, 循环次数, 循环是否改变动画方向 )</code> 可以开始一个动画。</li>
<li>使用 <code v-pre>:添加动画关键帧( 动画参数, 持续时间, 动画曲线 )</code> 可以添加一个动画关键帧。</li>
</ul>
</div></template>


