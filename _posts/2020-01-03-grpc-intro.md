---
title: Yet Another gRPC Introduction
layout: post
author: Adrian Singer
description: gRPC is a quite new framework to execute functions of external applications. Find out how to use it in .NET.
image: /assets/img/posts/grpc-intro-1.jpg
categories: Web
tags: [gRPC, C#, GitHub]
commentid: 6
music-text: System Of A Down - Aerials
music-href: https://www.youtube.com/watch?v=L-iepu3EtyE
---

Welcome in 2020, I wish you a happy new year! You found my first post of this year. <i class="mdi mdi-emoticon-outline" style="font-size: inherit"></i> In the last weeks of 2019 I was very busy, so I took the opportunity of the holidays to learn a bit more about a system called **[gRPC](https://grpc.io/)**. Now I want to share my first impressions and my starter demo, called [GrpcGeo](https://github.com/adriansinger87/GrpcGeo) on GitHub.

##### Remote Procedures

There is a long history of technologies to access external apps. As a student I worked with [CORBA](https://docs.oracle.com/javase/7/docs/technotes/guides/idl/corba.html) to establish communication between Java apps or implemented [sockets](https://docs.microsoft.com/en-us/windows/win32/winsock/complete-client-code) with C++. I lost focus on these technologies but back in those days it felt complicated somehow. Lateron I worked alot with [WCF](https://docs.microsoft.com/en-us/dotnet/framework/wcf/whats-wcf) or [REST-APIs](https://dotnet.microsoft.com/apps/aspnet/apis). The last one is technically HTTP + Json which is widely used worldwide. 
When it comes to machine-to-machine communication, I experimented with [MQTT](http://mqtt.org/) and [OPC UA](https://github.com/OPCFoundation/UA-.NETStandard). I'm sure there are tons of other technologies out there, so if you want to mention your experiences, don't hesitate and leave a comment. <i class="mdi mdi-message-text-outline" style="font-size: inherit"></i> 

To sum things up: 
> There are good reasons fo being for the most technologies, but I see some advantages on gRPC for my upcomming projects.

##### What gRPC can do for you

If you want to read a "Getting Started" or what gRPC is about, I recommend the official [website](https://grpc.io/). To get a little impression, here is an (uncomplete) list of attributes:

<ul class="ul-md">
    <li><b>service contracts:</b> are describd with <a href="https://github.com/protocolbuffers/protobuf" target="_blank">protobuf</a>.</li>
    <li><b>bi-directional calls:</b> for single and streaming data.</li>
    <li><b>language neutral:</b> C/C++, C#, Java, Go, PHP, Python, and so on.</li>
    <li><b>automatic code generation:</b> for server and client implementations.</li>
    <li><b>highly efficient:</b> because of binary data transmission on the <a href="https://http2.github.io/" target="_blank">HTTP/2 protocol</a>.</li>
    <li><b>authentication:</b> with SSL/TLS, Token-based authentication or an external authentication API.</li>
</ul>

It sounds nice so far to have a cross-platform (and cross-language) technology that is efficient and where you can use code generators to build your code. This leads to my favourite characteristic:
> **The service definitions are contract-based and typesafe.**

That fact is, in comparison to REST-APIs, a major difference, because the HTTP + Json transfer is always **content-based** and the receiver has to deserialize and standardize the json structures manually. So when a HTTP endpoint changes, the error appears at runtime. When you change the service-definition in gRPC-based apps you see the change at compile time.

##### The Demo

Like I mentioned before, I wrote a .NET demo for gRPC, called [GrpcGeo](https://github.com/adriansinger87/GrpcGeo) on GitHub.
The gRPC client app sends an IP address to a server and receives geo information back.
So the idea behind the communication is slightly more suitable for daily use, compared to a hello world demo.
In terms of simplicity, the backend of the server just calls a REST-API, but this is not the point of the demo. <i class="mdi mdi-emoticon-outline" style="font-size: inherit"></i>

The repository consists of two .NET Core console applications, the `GrpcGeo.Server` and the `GrpcGeo.Client` assembly. The .NET Standard project named `GrpcGeo.Domain` owns the protobuf service definitions and references to three Nuget packages, which are listed below.

<blockquote>
  <div class="mermaid">
  graph LR
      A[GrpcGeo.Server] --> D[GrpcGeo.Domain]
      B[GrpcGeo.Client] --> D
  </div>
  Nuget references:
  <ul class="ul-md">
      <li><a href="https://www.nuget.org/packages/Google.Protobuf/" target="_blank">Google.Protobuf</a></li>
      <li><a href="https://www.nuget.org/packages/Grpc/" target="_blank">Grpc</a></li>
      <li><a href="https://www.nuget.org/packages/Grpc.Tools/" target="_blank">Grpc.Tools</a></li>
  </ul>
</blockquote>

These Nuget packages bring (among other things) a compiler to generate C# classes. When you build the .NET Standard assembly, a server stub, the client code and the data models are compiled. The following example shows the protobuf service, called `IpLocator` with a `Find` method. The parameters of the function and the return values are also defined. The data models `LocationRequest` and `LocationDetails` are containing typed properties. The numbers on the right side of the equal sign are indices, needed for the binary transmission.

``` java
// the service definition
service IpLocator {
  // a remote procedure call
  rpc Find (LocationRequest) returns (LocationDetails) {}
}

// the data model of the caller
message LocationRequest {
  string ip = 1;
  string app = 2;
}

// the response data
message LocationDetails {
  string country = 1;
  string city = 2;
  double longitude = 3;
  double latitude = 4;
}
```

###### The gRPC Server
The implementation of the server code is really straight foward. You can find the [IpGeoServer.cs](https://github.com/adriansinger87/GrpcGeo/blob/master/GrpcGeo.Server/IpGeoServer.cs) as full working source code on GitHub. I created a separate server class that implements the generated base class `IpLocatorBase` of the service definition. The server class encapsulates the gRPC logic, so its usage looks really simple, like seen in the [Program.cs](https://github.com/adriansinger87/GrpcGeo/blob/master/GrpcGeo.Server/Program.cs). This separation is important to apply a clean architecture approach.

###### The gRPC Client
The client code is even simpler, because there is only the [Program.cs](https://github.com/adriansinger87/GrpcGeo/blob/master/GrpcGeo.Client/Program.cs) file. You just have to instanciate a ready-to-go `IpLocatorClient` and hand over a `Channel` object. Since that point you can call the `Find` method with the necessary parameters. The respond is the data object of type `LocationDetails`. So a gRPC function call could also have been a local one, from the perspective of the client application.

##### Conclusion

In a more and more connected world, easy to use and easy maintainable technologies are very important for data exchange.
In my opinion, the gRPC framework is a very promising candidate for that requirement.
In a real world szenario a [security or authentication mechanism](https://www.grpc.io/docs/guides/auth/) is recommended.

The gRPC framework is quite new to me, but I guess, I will continue to work with that technology and share my further experiences.
Lastly, I would recommend to install protobuf-plugins for [Visual Studio](https://marketplace.visualstudio.com/items?itemName=mreu.ProtobufLanguageService) or [VS Code](https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3) to get syntax highlighting and things like that.

