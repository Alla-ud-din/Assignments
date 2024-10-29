// Task 3: Social Media Platform
// Develop a TypeScript application for a social media platform. Define the following types and interfaces:
// Define an interface Profile with properties like id, username, bio, and an array of Posts.
// Create a type Like that represents an object with user (of type User) and timestamp.
// Define an interface Comment with properties like id, user (of type User), content, and timestamp.
// Implement a function that finds the most liked post and the user who posted it

// Define an interface for User
interface User {
    id: number;
    username: string;
    bio: string;
}
  
// Define an interface for Profile
interface Profile {
    id: number;
    username: string;
    bio: string;
    posts: Post[];
}
  
// Create a type for Like
type Like = {
    user: User;
    timestamp: Date;
};
  
// Define an interface for Comment
interface Comment {
    id: number;
    user: User;
    content: string;
    timestamp: Date;
}
  
// Define an interface for Post
interface Post {
    id: number;
    content: string;
    user: User;
    likes: Like[];
    comments: Comment[];
}
  
// Implement a function to find the most liked post and the user who posted it
function findMostLikedPost(profiles: Profile[]): { post: Post | null; user: User | null } {
let mostLikedPost: Post | null = null;
let mostLikesCount = 0;
let userWhoPostedIt: User | null = null;
  
// Iterate through the user's posts
for (const profile of profiles) {
    for (const post of profile.posts) {
      const likesCount = post.likes.length;
      if (likesCount > mostLikesCount) {
        mostLikedPost = post;
        mostLikesCount = likesCount;
        userWhoPostedIt = post.user;
      }
    }
  }
  
    return { post: mostLikedPost, user: userWhoPostedIt };
  }
  
  // Example usage
  const user1: User = { id: 123, username: "Ali", bio: "Student" };
  const user2: User = { id: 456, username: "Muazam", bio: "Student" };
  const user3: User = { id: 789, username: "Mukaram", bio: "Toddler" };
  
  const post1: Post = {
    id: user1.id,
    content: "Pakistan will win the world cup",
    user: user1,
    likes: [{ user: user1, timestamp: new Date() }],
    comments: [],
  };
  
  const post2: Post = {
    id: user2.id,
    content: "India is favourite",
    user: user2,
    likes: [{ user: user1, timestamp: new Date() }, { user: user2, timestamp: new Date() }],
    comments: [],
  };
  
  const user1Profile: Profile = { id: user1.id, username: user1.username, bio: "Student", posts: [post1] };
  const user2Profile: Profile = { id: user2.id, username: user2.username, bio: "Student", posts: [post2] };
  const user3Profile: Profile = { id: user3.id, username: user3.username, bio: "Student", posts: [] };
  const allProfile : Profile[] = [user1Profile, user2Profile, user3Profile]

  const mostLikedPostResult = findMostLikedPost(allProfile);
  console.log("Most Liked Post:", mostLikedPostResult.post);
  console.log("Posted by User:", mostLikedPostResult.user);
  