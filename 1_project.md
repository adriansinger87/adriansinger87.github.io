---
layout: page
title: Sin.Net Project
description: Sin.Net is an open source project to build up clean architectures.
permalink: /project/
---

<h1 class="page-title">The {{ page.title | escape }}</h1>

<div class="row">
    <div class="col s12 m3 l2 center">
        <img alt="Project Sin.Net" class="z-depth-3" width="60%" src="{{ "/assets/img/sin-net.png" | relative_url }}" />
    </div>
    <div class="col s12 m9 l10">
    Sin.Net is an open source project that contains several assemblies to help you building your software with a <b>clean architecture</b> approach.
    The assemblies contain often used functionalities like reading and writing special file types e.g. CSV or JSON or access to an external infrastructure via MQTT or HTTP. You can easily exend the functions of the provided assemblies by using their interfaces. 
    <br /><br />
    The binaries are developed with <code>.NET Standard</code> so that every kind of .NET related project can use them.
    You can integrate the assemblies as <code>NuGet</code> packages, for more information please take a look into the <a target="_blank" href="https://www.nuget.org/packages?q=Sin.Net">NuGet Gallery</a>.
    If you want to look into the <code>source code</code> itself, you can find the project on <a target="_blank" href="https://github.com/sin-net/Sin.Net">GitHub - Sin.Net</a>. 
    </div>
</div>

##### Clean Architecture

The implementation of clean architecture follows mostly the ideals of <a target="_blank" href="https://www.codingflow.net/">Jason Taylor</a> - so thank you Mr.!
To give you a brief overview how it works, please look at the flow chart below.
Each `layer` represents one or more assemblies in your app. To be clear each box carries the word *layer*.
<i class="mdi mdi-emoticon-outline" style="font-size: inherit"></i><br />

<div class="mermaid hide-on-small-only">
graph RL
    A[presentation layer] --> B[infrastructure layer]
    A --> C[persistence layer]
    B --> D[application layer]
    C --> D
    D --> E[domain layer]
</div>

<div class="mermaid hide-on-med-and-up">
graph TB
    A[presentation layer] --> B[infrastructure layer]
    A --> C[persistence layer]
    B --> D[application layer]
    C --> D
    D --> E[domain layer]
</div>

Now I will state out some principles for each layer. Please note that this list has not the intention to be complete. So you might consider to check further literature or contact me in case of emergency.

<ul class="ul-md">
    <li>
        The <code>domain layer</code> holds interfaces, abstractions and implementations that are intended to be used across different applications.
        These should belong to the same application field (domain).
        In other words: If you or your company has a bunch of software that maybe interact with each other, it is a good idea to place shared definitions (and in some circumstances the implementations) in this layer.</li>
    <li>
        All definitions and implementations, that are specific for your one and only application, reside in the <code>application layer</code>.
        This layer has only one dependeny: the domain layer (like shown in the graph). That means that your domain layer should have no dependencies, except the <a target="_blank" href="https://www.nuget.org/packages/Sin.Net.Domain/">Sin.Net.Domain.dll</a>. <i class="mdi mdi-emoticon-outline" style="font-size: inherit"></i>
    </li>
    <li>
        The persistence layer and the infrastructure layer are more or less <em>one</em> outer layer that takes care of two similar tasks.<br />
        Like the names are revealing, the <code>persistence layer</code> covers all implementations to access your local system like files or databases. The interfaces that are in use here, should come from the domain or application layer.<br />
        The <code>infrastructure layer</code> implements functionality to access remote services like other web services, Email or whatsoever.
        It is recommended to split this outer layer into these two named assemblies, to ensure a high independency when developing or updating these libraries.
        And working in a team becomes also more clear.<br />
        In the Sin.Net project this layer also has a separate <a target="_blank" href="https://www.nuget.org/packages/Sin.Net.Logging/">logging assembly</a> that could be seen as a part of the persistence layer. This DLL demonstrates how to implement your own logging mechanism, or for the lazy ones, just integrate it.
    </li>
    <li>
        Last but not least the <code>presentation layer</code> depends on all layers below.
        This highest layer only plugs things together and ships your UI, so the user can interact with your system.
        This layer should be the most lightweight one, which is a good idea in the fast moving world of user interfaces.
    </li>
</ul>

<h5 class="attention">Attention Zone</h5> 

As you might see, the Sin.Net assemblies are bypassing the application layer. That is - of course - because I can't provide this layer to you. Maybe if you pay me.
<i class="mdi mdi-emoticon-outline" style="font-size: inherit"></i>
But if you decide to use the <a target="_blank" href="https://www.nuget.org/packages/Sin.Net.Domain/">Sin.Net.Domain.dll</a> it makes sense to build your upper layer's based on its interfaces and abstractions. In the best case you just use the other assemblies too and maybe extend them within your own layers. 

This could be a potentional (and most comprehensive) implementation of the Sin.Net Project.
What's also not illustrated here, is a project for unit testing your app, but you should definitely have one.

<div class="mermaid">
graph TB
    A[Your.Project.Presentation] --> B[Your.Project.Infrastructure]
    A --> D[Your.Project.Persistence]
    A --> I[Sin.Net.Logging]
    subgraph
    D --> E[Sin.Net.Persistence]
    end
    subgraph
    B --> C[Sin.Net.Infrastructure]
    end
    C --> F[Your.Project.Application]
    E --> F
    F --> G[Your.Project.Domain]
    subgraph
    G --> H[Sin.Net.Domain]
    end
</div>

##### Conclusion

Now, if you like this way of organizing your software architecture,
please take a deeper look into the videos or blog posts of <a target="_blank" href="https://www.codingflow.net/">Jason Taylor</a>, because he explains that stuff with lots more details.
And if you like to test some ready-to-go assemblies that follow these principles,
please <a target="_blank" href="https://www.nuget.org/packages?q=Sin.Net">download</a> the Sin.Net assemblies and use them according to your requirements.

---

Have a nice day!