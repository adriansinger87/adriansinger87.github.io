---
title: Secure Access of APIs
layout: post
author: Adrian Singer
description: How to implement access security of your C# APIs with Sin.Net
image: /assets/img/posts/secure-api-1.jpg
categories: Sin.Net
tags: [Sin.Net, C#, Security]
commentid: 3
music-text: Frog Leap Studios - Smack My B*#@h Up (metal cover by Leo Moracchioli)
music-href: https://youtu.be/xcvo80MFO0I
---

When you develop a software - independend of the technology you use - you should design your architecture and your functions in a secure way.

Every program has an internal Application Programming Interface (API).
To get more specific: I mean the functions you write yourself and that you use at another place in your code.
The call of external library functions are also an API inside of your software.
At each reliable and professional application, you should think about the accessibility of your API functions.
A first step is to setup the visibility of classes, members and properties with **Access Modifiers**.
It is worth knowing them and how to use them correctly.

For `C#`, the Access Modifiers look like this: 
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

> What if a software has a user concept or a trial and a full feature version? 
> In these cases your functions would need to have different reachability for the end user. 

To solve this issue, a pretty error-prone approach would be to filter all your methods within the presentation layer. It is clear that this pollutes the code of your user interface and if that layer changes, all secure behavior needs to be updated too.

Another rudimentary approach is to implement If-conditions to prevent unauthorized execution of your code.
An advantage is that the security methods can reside in your application layer.
But it is clear that If-conditions - even when you encapsulate that functionality - still make your business logic unclean and an evaluation at runtime involves further risks.

##### Using Sin.Net Security

The **Sin.Net project** provides features to minimize mixing security and business logic and evaluating variables at runtime.
The [Sin.Net.Domain](https://www.nuget.org/packages/Sin.Net.Domain/) package contains a `SecurityLevel` attribute so that methods can get a defined access level at design time.

This Attribute provides the following properties:
<ul class="ul-md">
    <li><b>Level</b> - This integer sets your minimal security level. The built-in enum <code>SecurityLevels</code> can be used for predefined levels.
    The provided range is Guest (0), User (1), Expert (2) and Admin (3).</li>
    <li><b>Message</b> - If this string is present, it will be used in the exception message or for logging mechanism in case a violation occured. If the string is not set a standard message will be used instead.</li>
    <li><b>Throw</b> - By default this bool is set to true and it will fire a <code>MethodAccessException</code>.</li>
</ul>

The next thing is to add the interface `ISecurable` to the class, where you want security features.
The `Secure` method, that needs to be implemented from that interface, don't need your own logic at all, although it would be possible of course.
Instead you can use an extension method, called `SecureAccess`.
This method extends the `object` class and investigates the properties of the SecurityLevel attribute of the calling member.

The SecurityLevel attribute can be applied to methods and properties. <span class="attention">But be carefull with properties</span>, because you can't set separate security levels for getter and setter. 
Lastly, you just have to call the Secure method everywhere, where a SecurityLevel is applied.
If you decide not to throw an exception when a violation occures, you should check the return value. 

The code below shows a full example.

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

I don't know if the presented approach is the best way to secure unwanted execution of methods and properties. - What do you think? Leave me a comment with your opinion.

But in fact, the example leaves a pretty lightweight and declarative footprint in your business logic.
On the other hand, you still need some kind of roles and permissions, indicated in the code with the variable `userSecurityLevel`.
Here, you could use or exend the provided user model within the `Sin.Net.Domain.System.UserManagement` namespace.
The class `User` contains just three properties and the enum of type SecurityLevels is already included. 
