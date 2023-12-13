To get content layer to work with the current version of Next.js in this repo, I had to add the following to `package.json`:

```json
 "overrides": {
    "next-contentlayer": {
      "next": "$next"
    }
  },
```

You can also install with `npm i --force`

It's probably not a good idea to install with `npm i --legacy-peer-deps`

https://github.com/contentlayerdev/contentlayer/issues/607
https://github.com/contentlayerdev/contentlayer/issues/575
