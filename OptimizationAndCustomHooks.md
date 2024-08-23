# Step 9

Summary: in this step, we'll implement the `useRef`, `useMemo` and `useCallback` hooks into the `HackerNews` component.


## Instructions

### HackerNew.jsx

- Add `useRef` to Track Previous Articles Count:
  - Import `useRef` from React.
  - Create a reference called `prevArticlesCountRef` using `useRef` to store the previous number of articles. This variable won't lose its value if the component is re-rendered.
  - Inside `useEffect` log the previous count, and then update the reference with the current number of articles.


<details>
<summary>Solution</summary>
<br>

```js
  const prevArticlesCountRef = useRef(articles.length);
  ...
   useEffect(() => {
    dispatch(requestArticles);

    // Log the previous number of articles
    console.log(`Previous number of articles: ${prevArticlesCountRef.current}`);
    // Update the ref with the current number of articles
    prevArticlesCountRef.current = articles.length;
  }, []);
```

</details>

<br>

- Use `useMemo` to Optimize Rendering:
    - Import `useMemo` from React.
    - Wrap the mapping of articles to Card components with `useMemo`.
    - Now we'll only repeat the map if the list of articles changes, preventing unnecessary recalculations.


<details>
<summary>Solution</summary>
<br>

```js
    const articleCards = useMemo(() => {
        return articles.map((article) => <Card key={article.id} article={article} />);
    }, [articles]);
```

</details>


- Add a filter function for the user to search through the articles:
    - Initialize a state variable called `filter`
    - Add an input for the user to be able to search an article title. The input should update the `filter` state value with whatever the use types.
    - Create and memoize a `filteredArticles` variable that will filter out any articles with a title that doesn't include the value of the `filter` state variable. 
    - Update the `articleCards` mapping to map over the `filteredArticles` variable. 

<details>
<summary>Solution</summary>
<br>

```js
    const [filter, setFilter] = useState('');
    ...
    const filteredArticles = useMemo(() => {
        return articles.filter((article) =>
      article.title.toLowerCase().includes(filter.toLowerCase())
        );
    }, [articles, filter]);

    const articleCards = useMemo(() => {
        return filteredArticles.map((article) => <Card key={article.id} article={article} />);
    }, [filteredArticles]);
    ...
    return (
        <div className="news-container">
        <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />

        <input
            type="text"
            placeholder="Filter articles by title..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        />

        {loading ? <Loading /> : (
            <div>
            {articleCards}
            </div>
        )}
        </div>
    );
```

</details>

Now we're going to optimize the input handler function:
- Create a function called `handleFilterChange` that will take in the event object and update the `filter` state value.
- Now wrap `handleFilterChange` with `useCallback`. By memoizing this function, we ensure that it doesn’t get recreated on every render unless the dependencies (setFilter) change. Leave the dependency array empty so that the function will only be created once when the component first renders, and it will be reused for all subsequent renders.

<details>
<summary>Solution</summary>
<br>

```js
   const handleFilterChange = useCallback((event) => {
      setFilter(event.target.value);
    }, []);
    ...
    <input
        type="text"
        placeholder="Filter articles by title..."
        value={filter}
        onChange={handleFilterChange}
    />
```

</details>


# Step 10

Summary: we're now going to make a custom hook! This hook will give us the current width and height of the window which can then be used in any of our components for things such as custom styling. 

### **Step 1: Create the Custom Hook**

1. **Create the `useWindowDimensions.js` File:**
   - Make a `hooks` directory inside the `src` folder. Then create a file named `useWindowDimensions.js`.

2. **Import Dependencies:**
   - Import `useState` and `useEffect` from React.

3. **Define the `useWindowDimensions` Hook:**
   - Create a function named `useWindowDimensions` that will handle tracking the window size.

4. **Set Up State for Dimensions:**
   - Use `useState` to create state variables for `width` and `height`.

5. **Create a Function to Update Dimensions:**
   - Inside the hook, define a function `updateDimensions` that updates the `width` and `height` state variables based on `window.innerWidth` and `window.innerHeight`.

6. **Set Up an Effect to Track Window Resize:**
   - Use `useEffect` to add an event listener for the `resize` event on the `window`.
   - In the effect, call `updateDimensions` to initialize the state with the current window size.
   - Return a cleanup function from the effect that removes the event listener when the component using the hook unmounts.

7. **Return the Dimensions:**
   - Return an object containing `width` and `height`.

8. **Export the Custom Hook:**
   - Export the `useWindowDimensions` function as the default export.


<details>
<summary>Solution</summary>
<br>

```js
  import { useState, useEffect } from 'react';

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateDimensions = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    // Call the function to set initial dimensions
    updateDimensions();

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;

```

</details>



### **Step 2: Use the `useWindowDimensions` Hook in the HackerNews Component**

1. **Import the Custom Hook:**
   - Import `useWindowDimensions` from the `hooks` directory.

2. **Use the Hook in a Component:**
   - Call `useWindowDimensions` to get the `width` and `height` values.

3. **Render the Dimensions:**
   - Render the `height` and `width` variables in the return statement. Now open the console and adjust the screen size to see the dimension update in real time!

<details>
<summary>Solution</summary>
<br>

```js
   import useWindowDimensions from "../../hooks/useWindowDimensions.js"
   ...
   const { width, height } = useWindowDimensions()
   ...
   <div style={{color: 'black'}}>
        <p>Current window width: {width}px</p>
        <p>Current window height: {height}px</p>
    </div>
```

</details>