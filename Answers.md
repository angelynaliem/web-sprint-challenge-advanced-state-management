1. What problem does the context API help solve?
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!

What problem does the context API help solve?	
It solves props drilling because we don’t need to pass props literally with context API, as everything is kept in its context provider.

2. In your own words, describe actions , reducers and the store and their role in
Redux. What does each piece do? Why is the store known as a 'single source of
truth' in a redux application?
Store holds the state of the application, action describes the changes in the state, and reducer carries out the state transition. The store is the single source of truth because that is the only place where state is kept, and there is only one entrance to it so the store knows what/when/how the state is/changed.

3. What is the difference between Application state and Component state? When
would be a good time to use one over the other?
Application state is the entire global state of our application. We use it when we want to affect the whole application. Component state is state that is only accessible within that component/child components. We use the component state when we only want changes of state for that component/its child/children.

4. Describe redux-thunk , what does it allow us to do? How does it change our
action-creators ?
Redux Thunk is a middleware used for Redux application, that comes between dispatching an action and before that action gets to the reducer. It returns functions, instead of objects from our action creators, and allows us to handle async calls better like API calls.

5. What is your favorite state management system you've learned and this sprint?
Please explain why!
Context API is simpler coding-wise so that is helpful, but it is not as comprehensive as Redux.

