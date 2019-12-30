---
title: Yet Another gRPC Introduction
layout: post
author: Adrian Singer
description: gRPC is a quite new framework to call other applications. Find out how to use it in a .NET environment.
image: /assets/img/posts/grpc-intro-1.jpg
categories: Web
tags: [gRPC, C#, GitHub]
commentid: -1
music-text: Disturbed - Down With The Sickness
music-href: https://www.youtube.com/watch?v=09LTT0xwdfw
---

Welcome in 2020 and congratulations, you found my first post in this year! <i class="mdi mdi-emoticon-outline" style="font-size: inherit"></i> In the last weeks of 2019 I was very busy, so I took the opportunity of the holidays to learn a bit more about a system called **[gRPC](https://grpc.io/)**. Now I want to share my first impressions and a starter demo, called [GrpcGeo](https://github.com/adriansinger87/GrpcGeo) on GitHub.

##### Remote Procedures

There is a long history of technologies to access external apps. As a student I worked with [CORBA](https://docs.oracle.com/javase/7/docs/technotes/guides/idl/corba.html) to establish communication between Java apps or implemented [sockets](https://docs.microsoft.com/en-us/windows/win32/winsock/complete-client-code) with C++. I lost focus on these technologies but back in those days it felt complicated somehow. Lateron I worked alot with [WCF](https://docs.microsoft.com/en-us/dotnet/framework/wcf/whats-wcf) or [REST-APIs](https://dotnet.microsoft.com/apps/aspnet/apis), which is technically Http + Json. 
When it comes to machine-to-machine communication, I experimented with [MQTT](http://mqtt.org/) and [OPC UA](https://github.com/OPCFoundation/UA-.NETStandard). I'm sure there are tons of other technologies out there, so if you want to mention your experiences, don't hesitate and leave a comment.

To sum things up: 
> There are good reasons fo being for the most technologies, but I see some very good advantages on gRPC for my upcomming projects.

##### What gRPC can do for you

If you want to read a "Getting Started" or what gRPC is about, I recommend the official [website](https://grpc.io/). To get a little impression, here is an (uncomplete) list of attributes:

<ul class="ul-md">
    <li><b>bi-directional calls:</b> for single and streaming data.</li>
    <li><b>language neutral:</b> C/C++, C#, Java, Go, PHP, Python, and so on.</li>
    <li><b>automatic code generation:</b> for server and client implementations.</li>
    <li><b>highly efficient:</b> because of binary data transmission on the <a href="https://http2.github.io/" target="_blank">HTTP/2 protocol</a>.</li>
</ul>

It sounds nice fo far to have a cross-platform (and cross-language) technology that is efficient and where you can use code generators to build your code. So this leads to my favourite characteristic:
> **The service definitions are contract-based and typesafe.**

That fact is, in contrast to REST-APIs, a major difference, because the HTTP + Json transfer is always **content-based** and the receiver has to deserialize and standardize the json structures manually. So when a http-endpoint changes, the error appears at runtime. When you change the service-definition in gRPC-based apps you see the change at compile time.

##### The Demo

Like mentioned before, I wrote a .NET demo for gRPC, called [GrpcGeo](https://github.com/adriansinger87/GrpcGeo) on GitHub.
The 

##### Conclusion

Finally...