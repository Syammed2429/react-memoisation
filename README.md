https://react-memoisation.vercel.app/

# ReactMemo

React.memo is a higher order component.

If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState or useContext Hook in its implementation, it will still rerender when state or context change.

By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.

```
React.memo( Component, (prevProps,nextProps) => {
return prevProps.propname === nextProps.propname
} )
```

```
const prop = React.memo( () => compHeavyFn(val) , [val] )
function MyComponent(props) {
/* render using props */
}

function areEqual(prevProps, nextProps) {
/*
return true if passing nextProps to render would return
the same result as passing prevProps to render,
otherwise return false
_*/
}
```

```
export default React.memo(MyComponent, areEqual);
This method only exists as a performance optimization. Do not rely on it to “prevent” a render, as this can lead to bugs.
```

`Note:`

```
Unlike the shouldComponentUpdate() method on class components, the areEqual function returns true if the props are equal and false if the props are not equal. This is the inverse from shouldComponentUpdate.
```

## Performance Optimization

## useCallback

```
const fn = useCallback(()=>{
// do something
}, [deps])
```

computation heavy math operations

Returns a memoized callback.

Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).

## useMemo

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
returns a memoized value.
```

Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

Remember that the function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in useEffect, not useMemo.

If no array is provided, a new value will be computed on every render.

Note:

## useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

Other hooks:

## useRef

example

useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

```
function TextInputWithFocusButton() {
const inputEl = useRef(null);
const onButtonClick = () => {
// `current` points to the mounted text input element
inputEl.current.focus();
};
return (
<>
<input ref={inputEl} type="text" />
<button onClick={onButtonClick}>Focus the input</button>
</>
);
}
```
