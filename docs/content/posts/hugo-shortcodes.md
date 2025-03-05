---
title: "Hugo shortcodes"
description: Here is a demo of all shortcodes available in Hugo.
date: 2024-12-27
draft: false
keywords: ["gohugo", "hugo", "go", "blog"]
tags: ["hugo", "themes"]
---

## Details

{{< details summary="See the details" >}}
This is a **bold** word.
{{< /details >}}

## Highlight

{{< highlight go-html-template >}}
{{ range .Pages }}
  <h2><a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a></h2>
{{ end }}
{{< /highlight >}}

## Images

{{< figure src="https://images.unsplash.com/photo-1560032779-0a8809186efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" title="Dave Herring" >}}

{{< figure src="https://images.unsplash.com/photo-1560032779-0a8809186efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" title="Dave Herring" >}}


## Github Gist

{{< gist Exonymos 6015a8a6ece634b4f73713c9dd49ba98 >}}

## Youtube video

{{< youtube w7Ft2ymGmfc >}}

## Tweet

{{< x user="GoHugoIO" id="877500564405444608" >}}

## Vimeo

{{< vimeo id="146022717" >}}

## Instagram

{{< instagram BWNjjyYFxVx >}}