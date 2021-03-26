---
title: Getting Started
slug: /
---


```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```


## Step 1: Generate a new Docusaurus site

If you haven't already, generate a new Docusaurus site using the classic template:

```shell
npx @docusaurus/init@latest init my-website classic
```

## Step 2: Start your Docusaurus site

Run the development server in the newly created `my-website` folder:

```shell
cd my-website

npx docusaurus start
```

Open `docs/getting-started.md` and edit some lines. The site reloads automatically and display your changes.

## That's it!

Congratulations! You've successfully run and modified your Docusaurus project.
