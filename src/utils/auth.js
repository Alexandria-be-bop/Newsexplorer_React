const users = new Map();
let currentUser = null;

let testUser = {
  email: "test@test.test",
  password: "test",
  name: "Test",
  _id: "test_user_123",
};
users.set(testUser.email, testUser);

// Register a new user
export const register = (email, password, name) => {
  return new Promise((resolve, reject) => {
    if (users.has(email)) {
      reject(new Error("User already exists"));
    } else {
      const user = {
        _id: `user_${Date.now()}`,
        name,
        email,
      };
      users.set(email, { ...user, password });
      resolve(user);
    }
  });
};

// Authenticate user and get JWT token
export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    const user = users.get(email);
    if (user && user.password === password) {
      const token = `fake_token_${Date.now()}`;
      localStorage.setItem("jwt", token);
      currentUser = { _id: user._id, name: user.name, email: user.email };
      resolve({ token });
    } else {
      reject(new Error("Invalid credentials"));
    }
  });
};

// Check if JWT token is valid and get user info
export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    const jwt = token || localStorage.getItem("jwt");
    if (jwt && currentUser) {
      resolve({
        data: {
          _id: currentUser._id,
          name: currentUser.name,
          email: currentUser.email,
        },
      });
    } else {
      resolve({
        data: { _id: "", name: "", email: "" },
      });
    }
  });
};

// Get user info using stored token
export const getUserInfo = (token) => {
  return checkToken(token);
};

// Update user profile
export const updateProfile = ({ name, avatar }) => {
  return new Promise((resolve, reject) => {
    if (currentUser) {
      currentUser.name = name;
      if (avatar) currentUser.avatar = avatar;
      resolve({
        _id: currentUser._id,
        name: currentUser.name,
        email: currentUser.email,
        avatar: currentUser.avatar,
      });
    } else {
      reject(new Error("No authentication token found. Please log in."));
    }
  });
};
