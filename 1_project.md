---
layout: page
title: Projects
description: Sin.Net is an open source project to build up clean architectures.
permalink: /project/
---

<h1 class="page-title">The {{ page.title | escape }}</h1>

<div class="row">
    <div class="col s12 m3 l2 center">
        <img alt="Project Sin.Net" class="z-depth-3" width="60%" src="{{ "https://raw.githubusercontent.com/telescope-dotnet/telescope/main/images/logo-nuget.png" }}" />
    </div>
    <div class="col s12 m9 l10">
    <a href="https://github.com/telescope-dotnet/telescope" target="_blank">TeleScope</a> is an open source project that contains several assemblies to help you building your software with a <b>clean architecture</b> approach.
    The assemblies contain often used functionalities like reading and writing files types e.g. CSV or JSON or access to an external infrastructure via MQTT or HTTP. You can easily exend the functions of the provided assemblies by using their interfaces and abstractions. 
    <br /><br />
    The binaries are developed with <code>.NET Standard</code> so that every kind of .NET related project can use them.
    You can integrate the assemblies as <code>NuGet</code> packages, for more information please take a look into the <a target="_blank" href="https://www.nuget.org/profiles/telescope-dotnet">NuGet Gallery</a>.
    If you want to look into the <code>source code</code> itself, you will find the project on GitHub. 
    </div>
</div>

<div class="row center">
      <div class="col s12 m4 l3 offset-l1">
        <a target="_blank" href="https://github.com/telescope-dotnet/telescope" class="btn waves-effect waves-light truncate">
          <i class="mdi mdi-github-circle left"></i>GitHub</a>
      </div>
      <div class="col s12 m4 l3">
        <a target="_blank" href="https://telescope-dotnet.github.io/telescope/" class="btn waves-effect waves-light truncate">
          <i class="mdi mdi-library-books left"></i> Documentation</a>
      </div>
      <div class="col s12 m4 l3">
        <a target="_blank" href="https://github.com/telescope-dotnet/telescope/archive/main.zip" class="btn waves-effect waves-light truncate">
      <i class="mdi mdi-download left"></i>Download .zip</a>
  </div>
</div>

##### Clean Architecture

The implementation of clean architecture follows the ideals of <a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" target="_blank">Uncle Bob</a> and <a target="_blank" href="https://www.codingflow.net/">Jason Taylor</a> - so thank you both!

To give you a brief overview how it works, please look at the flow chart below.
Each `layer` represents one or more assemblies in your app. To be clear each box carries the word *layer*. :grin:

<div class="mermaid hide-on-small-only">
graph RL
    A[presentation layer] --> B[infrastructure layer]
    B --> C[application layer]
    C --> D[entity layer]
</div>

<div class="mermaid hide-on-med-and-up">
graph TB
    A[presentation layer] --> B[infrastructure layer]
    B --> C[application layer]
    C --> D[entity layer]
</div>

Now I will state out some principles for each layer. Please note that this list has not the intention to be complete. So you might consider to check further literature or contact me in case of emergency.

<ul class="ul-md">
    <li>
        The <code>entity layer</code>, also known as domain or abstraction layer, holds interfaces, abstractions and implementations that are intended to be used across different applications. These should belong to the same application field. In addition the entities should have <b>no external dependencies</b>.<br />
        In other words:If you or your company has a bunch of applications that maybe interact with each other, it is a good idea to place shared definitions (and in some circumstances the implementations) in this layer.</li>
    <li>
        The <code>application layer</code> holds all definitions and implementations, that are specific for your <b>awesome application</b>. This layer has only dependencies to the entities and abtractions your need to build your specific business logic. So no entities should be present that you don't use. 
    </li>
    <li>
        The <code>infrastructure layer</code> provides logic for infrastructure and persistence concerns, so here are multiple similar tasks combined into one logical layer.<br />
        Like the names are revealing, the persistence layer covers all implementations to access your local system like files or databases. The interfaces that are in use here, should come from the entity or application layer.<br />
        The infrastructure implementations are used to access remote services like other web servers, Email or whatsoever.
        It is recommended to split this outer layer into separate named assemblies, to ensure a high independency when developing or updating these libraries. Working in a team becomes also more clear when you follow that approach.<br />
    </li>
    <li>
        Last but not least the <code>presentation layer</code> depends on all layers below.
        This highest layer only plugs things together and ships your UI, so the user can interact with your system.
        This layer should be the most lightweight one, which is a good idea in the fast moving world of user interfaces.
    </li>
</ul>

##### Conclusion

Now, if you like this way of organizing your software architecture,
please take a deeper look into the videos or blog posts of <a target="_blank" href="https://www.codingflow.net/">Jason Taylor</a>, because he explains that stuff with lots more details.
And if you like to test some ready-to-go assemblies that follow these principles,
please <a target="_blank" href="https://www.nuget.org/profiles/telescope-dotnet">download</a> the Sin.Net assemblies and use them according to your requirements.

---

Have a nice day!