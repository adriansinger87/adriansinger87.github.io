---
title: API Documentation with DocFX
layout: post
author: Adrian Singer
description: Automated API generation for C# with DocFX
image: /assets/img/posts/documentation-1.jpg
categories: Web
tags: [DocFX, C#, Documentation]
commentid: 1
music-text: Frog Leap Studios - Hurt (cover by Leo Moracchioli)
music-href: https://youtu.be/JoeCmeD_6Pw
---

In the past days I have worked on auto generated code documentations for some of my projects.
Luckily, all of these project types are written in `C#`, therefore I needed to find only one proper tool that would fit all my projects. So it was time to find an up-to-date framework to help me out.

###### **This is the result of my [Sin.Net API Documentation](https://sin-net.github.io/Sin.Net/api/Sin.Net.Domain.Config.html).**

But first things first: It is typical for `C#` to write [XML comments](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/xmldoc/) above your classes, members and properties like seen below. Visual Studio generates them by typing `///`.

```c#
/// <summary>
/// The method description goes here.
/// </summary>
/// <param name="bar">The input parameter.</param>
/// <returns>Just returns bar.</returns>
public int Foo(int bar)
{
    return bar;
}
```

These comments can now be used to generate an API documentation with different tools.
I know some of them, but I wanted to give [DocFX](https://dotnet.github.io/docfx/) a chance.
It generates a static website with a low complexity and allows to add additional pages and apply different themes. DocFX is also maintained by Microsoft and having everything out of one box seems to be a good idea so far.
<i class="mdi mdi-emoticon-outline" style="font-size: inherit"></i>

[Getting started](https://dotnet.github.io/docfx/tutorial/docfx_getting_started.html) was quite easy:

1. I added a `.NET Standard` project have removed the existing C# file.
2. Then I added the NuGet package `docfx.console` to this project. Thereby you don't affect the rest of your solution with this dependency. You can read more about the package [here](https://www.nuget.org/packages/docfx.console/). 
3. I created the source files by running the `docfx init -q` command in the packet manger console.
4. In the next step, I moved all generated files into the empty docu-project.
I recommend to disable the build processes for Debug and Release mode for this docu-project.
5. Lastly, I adjusted the `docfx.json` to my needs and [here we are](https://sin-net.github.io/Sin.Net).

<ul class="ul-md">
    <li>
    You can find the docfx source files also in the <a target="_blank" href="https://github.com/sin-net/Sin.Net/tree/master/Sin.Net.Solution/Sin.Net.Docu">Sin.Net repository</a>.
    </li>
    <li>
    The output gets created below the root folder under <code>/docs</code> so that GitHub serves it automatically as a GitHub Page.
    </li>
</ul>

So now I only need to find the time to fill the empty holes in my docu, to apply a nice theme and to provide some useful static pages.

##### Conclusion

I <span class="attention">strongly recommend</span> that you as a programmer keep your code documentation up-to-date wheather you serve it to the outer world or not. Try it at least <i class="mdi mdi-emoticon-outline" style="font-size: inherit"></i>.

The reason should be obvoius, but to be clear: It is one of the more important duties as developer to have a consistent documentation, especially when you write code for professional apps. And your team members will thank you!
