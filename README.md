# Hexo Footer Plugin

[![npm version](https://img.shields.io/npm/v/hexo-footer-plugin.svg)](https://www.npmjs.com/package/hexo-footer-plugin)[![npm downloads](https://img.shields.io/npm/dm/hexo-footer-plugin.svg)](https://www.npmjs.com/package/hexo-footer-plugin)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Hexo plugin to add a custom footer with copyright information to posts.

![image-20240622124207339](https://img2023.cnblogs.com/blog/2233039/202406/2233039-20240622124208756-216973713.png)

## Installation

```bash
npm install hexo-footer-plugin --save
```

## **Usage**

1. Add the plugin to your Hexo project.
2. Configure the plugin in your `_config.yml` file:

```yaml
footer_plugin:
  enable: true
  copyright_owner: 'Your Name'
```

3. Run your Hexo server or generate your site:

```bash
hexo clean && hexo g && hexo s
```
