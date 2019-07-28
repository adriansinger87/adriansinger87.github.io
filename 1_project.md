---
layout: page
title: Project
permalink: /project/
---

<h1 class="page-title">The {{ page.title | escape }} Sin.Net</h1>

<div class="row">
    <div class="col s12 m3 l2 center">
        <img alt="Project Sin.Net" class="z-depth-3" width="60%" src="{{ "/assets/img/sin-net.png" | relative_url }}" />
    </div>
    <div class="col s12 m9 l10">
    Sin.Net is an open source project that contains several assemblies to help you building your software with a <b>clean architecture</b> approach.
    The assemblies contain often used functionalities like reading and writing special file types e.g. CSV or JSON or access to an infrastructure layer via MQTT or HTTP. You can easily exend the functions of the provided assemblies by using their interfaces. 
    <br /><br />
    The binaries are developed with <code>.NET Standard</code> so that every kind of .NET related project can use them.
    You can integrate the assemblies as <code>NuGet</code> packages, for more information please take a look into the <a target="_blank" href="https://www.nuget.org/packages?q=Sin.Net">NuGet Gallery</a>.
    If you want to look into the <code>source code</code> itself, you can find the project on <a target="_blank" href="https://github.com/sin-net/Sin.Net">GitHub - Sin.Net</a>. 
    </div>
</div>

##### Clean Architecture

The implementation of clean architecture follows mostly the ideals of <a target="_blank" href="https://www.codingflow.net/">Jason Taylor</a>.
