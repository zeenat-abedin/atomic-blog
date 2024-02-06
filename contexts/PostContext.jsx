import { createContext, useContext } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  return <PostProvider.Context>{children}</PostProvider.Context>;
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("usePosts must be used within the Provider");
  return context;
}

export { PostProvider, usePosts };
