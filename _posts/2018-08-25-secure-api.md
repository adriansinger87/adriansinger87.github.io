---
title: Secure Access of APIs
layout: post
author: Adrian Singer
description: How to implement access security of your C# APIs with Sin.Net
image: /assets/img/posts/secure-api-1.jpg
categories: Sin.Net
tags: [Sin.Net, C#, Security]
commentid: 1
music-text: Frog Leap Studios - Smack My B*#@h Up (metal cover by Leo Moracchioli)
music-href: https://youtu.be/xcvo80MFO0I
---

When you develop a software - independend of the technology you use - you should design your architecture and your functions in a secure way.

Every program has an internal Application Programming Interface (API). To get more specific: I mean the functions you write yourself and that you use at another place in your code. The call of external library functions are also an API inside your software. When a software becomes more complex, you should think about the accessibility of your API functions.
A first approach is to setup the visibility of classes, members and properties with **Access Modifiers**.
It is worth knowing the list below and how to use them correctly. 

<ul class="ul-md">
    <li>
        <a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/public">public:</a> Access is not restricted.</li>
    <li><a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/public">protected:</a>
    Access is limited to the containing class or types derived from the containing class.</li>
    <li><a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/public">internal:</a> Access is limited to the current assembly.</li>
    <li><a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/public">protected internal:</a>
    Access is limited to the current assembly or types derived from the containing class.</li>
    <li><a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/public">private:</a> Access is limited to the containing type.</li>
    <li><a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/public">private protected:</a>
    Access is limited to the containing class or types derived from the containing class within the current assembly.</li>
</ul>

Futher details can be found in the [Microsoft docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/access-modifiers).
But there is still a gap that Access Modifiers can`t close.

> What if a software has a user concept or a trial and a full feature version?In these cases your functions would need to have different reachability for the end user. 

To solve this issue, a pretty error-prone approach would be to filter all your methods within the presentation layer. It is clear that this pollutes the code of your user interface and if that layer changes all secure behavior needs to be updated too.

Another rudimentary approach is to implement If-conditions to prevent unauthorized execution of your code. An advantage is that the security methods can reside in your application layer. But it is clear that If-Conditions - even when you encapsulate that functionality - still make your business logic unclean and an evaluation at runtime involves further risks.

##### Using Sin.Net Security

The **Sin.Net project** provides features to minimize mixing security and business logic and evaluating variables at runtime.
The [Sin.Net.Domain](https://www.nuget.org/packages/Sin.Net.Domain/) package contains special security attributes so that methods can get a defined access level at design time. With a lightweight interface a prepared security check can be used.

```c#
using Sin.Net.Domain.System.Security;

namespace Your.Business
{
    public class SecureClass : ISecurable
    {
        int userSecurityLevel;

        // interface implementation
        public bool Secure([CallerMemberName] string memberName = "")
        {
            // call of an extension method
            return this.SecureAccess(userSecurityLevel, memberName);
        }

        [SecurityLevel(Level = 2, Message = "Access denied.", Throw = true)]
        public void AccessLevelTwo()
        {
            Secure();
            // your business logic
        }
    }
}
```

##### Conclusion

I ...
