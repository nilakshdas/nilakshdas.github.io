---
layout: post
title: Add a nodejs build system to Sublime Text
summary: Run nodejs scripts directly in Sublime Text using this method.
tags: sublime-text
---

To run nodejs scripts directly in Sublime Text, you need to add a new build system by going to `Tools > Build System > New Build System...` from the Sublime Text menu.

This would open a new file *untitled.sublime-build* with the contents
<pre><code class="json">{
	"shell_cmd": "make"
}</code></pre>

You now need to change this to
<pre><code class="json">{
	"cmd": ["node", "$file"],
	"selector": "source.js"
}</code></pre>

The first line tells Sublime Text to run the *node* command on the current file and the second line instructs Sublime Text to automatically associate this build system with all *.js* files.

One thing you need to make sure here is that the node command should be loaded in your *PATH* variable.

Save this file as *nodejs.sublime-build* in the user packages folder and then you can see your new build system at `Tools > Build System > nodejs` from the menu.

Now the next time you're working on a new nodejs script, just press **ctrl+shift+b** to run the script directly in Sublime Text!