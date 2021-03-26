---
title: Create a Blog Post
---

This page will help you on how to create blog posts in Docusaurus.

## Create a Blog Post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
title: Greetings!
author: Steven Hansel
author_title: Docusaurus Contributor
author_url: https://github.com/ShinteiMai
author_image_url: https://github.com/ShinteiMai.png
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

A new blog post is now available at `http://localhost:3000/blog/greetings`.


```jsx
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Hello = () => {
  const {siteConfig} = useDocusaurusContext();
  const {title, tagline} = siteConfig;

  return <div>{`${title} · ${tagline}`}</div>;
};
```


export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


:::note
<Highlight color="#25c2a0">author:</Highlight> <Highlight color="#1877F2">YangXinHao</Highlight>
<Hello />


Write **Markdown** alongside  _JSX_!
:::
