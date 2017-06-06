# 站点开发报告

 本学期web前端开发课程的期末作业我选择开发一个关于动画视频的推荐及提供播放的个人网站。虽然制作它的决定只是兴趣使然，但我在制作它的过程中遇到的许多问题及解决的过程确实给了我许多的经验与启发。

 既然选择了制作动画网站，我的初衷是离不开分享与交流的。我希望通过个人网站这个平台，能有更多的人能够感受到动画的魅力，同时也让喜欢动画的人能够通过这个平台及时地、方便地观看到最新、最及时的动画资讯与动画推荐。由于这只是个人网站，无法解决版权等问题，本站所有的视频内容均来源于其他拥有版权的网站的动画转载（如Bilibili弹幕视频网）。

 本站由主页、注册页面、视频列表页面与视频播放页面构成。在主页中，我们可以看到最新的动漫更新索引及时间表、动漫推荐及排行，方便浏览网站的人能够找到最新的、最热门的动漫资讯。注册页面提供了网站的注册服务，用户可注册后再网站上进行发表评论、发布资源等操作。而在视频列表页可以找到本站所收录的所有动画资源，为方便浏览，列表页以发布时间为顺序，以5\*3个视频简介为一页，分成了若干个页面，用户可根据需要在各页面之间自由切换。在视频播放页中，用户可以播放动画视频，浏览动画简介，还能在同一个系列的动画之中自由切换集数，享受美观便捷的视频播放服务。

 本网站兼容IE9+、Firefox、Chrome内核的浏览器，使用到涉及HTML5及CSS3的最新功能。开发工具如下：

SublimeText3       文本编辑器

GoogleChrome      Chrome浏览器

IE11              IE内核浏览器

 在网站开发的过程中我遇到了一些技术上的难点，下面我举出三个难点进行说明。

## 1、网站需要大量的大小相同的块来进行对视频的简介及预览，如何将这些块有序地排列？

使用float:left和margin等进行相应设置

部分相关代码：

.section div{

position: relative;

float: left;

border-radius: 5px;

}

.topic\_section{

margin: 10px 0 10px 5%;

left: 0;

top: -5px;

height: 150px;

width: 42.5%;

border: 1px solid gray;

border-radius: 0;

}

## 2、排行榜的制作需要排序，如何在网页上进行排序？

使用:before伪类和计数器来进行排序。

相关代码：

#rank\_list{

 height: 95%;

 width: 100%;

 counter-reset:counter;

 background: rgba(255,255,255,.5);

}

#rank\_list div:before{

 position: relative;

 display: block;

 left: 5px;

 top: 18px;

 height: 25px;

 width: 25px;

 background: #C0C0C0;

 text-align: center;

 line-height: 25px;

 border-radius: 5px;

 font-size: 13px;

 content: counter(counter);

 counter-increment: counter;

}

## 3、如何实现切换分集导航栏的切换？

使用jquery来使用click事件来修改2个div的left

代码如下

  &lt;script&gt;

   $(document).ready(function(){

    $(&quot;#front .next\_page&quot;).click(function(){

     $(&quot;#front&quot;).animate({&quot;left&quot;:&quot;-100%&quot;},1000)

     $(&quot;#after&quot;).animate({&quot;left&quot;:&quot;0%&quot;},1000)

    })

    $(&quot;#after .next\_page&quot;).click(function(){

     $(&quot;#front&quot;).animate({&quot;left&quot;:&quot;0%&quot;},1000)

     $(&quot;#after&quot;).animate({&quot;left&quot;:&quot;100%&quot;},1000)

    })

   })

  &lt;/script&gt;

在数星期的网页开发中，看到自己一行行写下的代码转换成为直观而美观的网页时，

我感到成就感十足。网页的开发，在我看来，过程虽漫长却不压抑，遇到不知如何解决的困难时虽让人抓狂，解决后的喜悦却足以让痛苦的经历变成美好的回忆。事实上，对于我来说，开发过程中最大的痛苦并不是技术上的难题，而是网站的选材与版面设计上的纠结与烦恼。如何设计才能美观，才能满足一个合格网站基本的标准？我的心里并没有底。总之，一步一个脚印，我制作的个人网站也有过数个版本，最初的版本更是在明确了作业的要求（制作大型网站模板）之后被舍弃掉，但是终究在磕磕绊绊中还是将网站完成了。虽然时间有限，我所期盼的许多效果都没有能够及时动手实现，现在的版本只能说是我最初设想的完成品的半成品——它还没有实现我所想要的诸多交互效果。这固然是我的怠惰留下的遗憾，但是最终看到作品的完成（或者说是阶段性完成），我还是感到十分欣慰。

我感到，Web开发与其说是技术，倒不如说是艺术，这个工作既不枯燥也不痛苦，反而时常伴随着灵感的闪现，发出&quot;原来这里还能这样搞&quot;的感叹，将自己的作品一步步完善，最后达到自己也没有想象到的简洁美观。在网络的普及率越来越高的今天，Web开发显然成为了越来越不可或缺的工作。我想，虽然我的所学在Web开发的世界中只是冰山一角，我也不知道将来的我能在这条路上探索多远，不过若能在这条路上继续走下去，那该会是我的幸运吧。
