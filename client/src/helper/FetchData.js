import { get, post, del, put } from "./axios";
import {
  Login,
  Signup,
  getUsers,
  getAllBlog,
  postBlog,
  deleteBlog,
  updateBlog,
  Logout,
  getblog,
  Search,
  deleteUser,
  getAllComment,
  addComment,
  getCommentbyId,
  deleteComment,
  reply,
  getAllCmt,
} from "./UrlHelper.js";

export const postLogin = (username, password) =>
  post(Login, { username, password });
export const postSignup = (data) => post(Signup, data);
export const postLogout = () => post(Logout);

export const getAllUser = () => get(getUsers);
export const DeleteUser = (id) => del(`${deleteUser}/${id}`);

export const getBlogAll = () => get(getAllBlog);
export const CreatetBlog = (data) => post(postBlog, data);
export const DeleteBlog = (id) => del(`${deleteBlog}/${id}`);
export const BlogUpdate = (id, body) => post(updateBlog,id,body);
export const getBlog = (id) => get(`${getblog}/${ id }`);
export const SearchBlog = (params) => get(Search, { params });

export const getCommentAll = () => get(getAllComment);
export const CreateComment = (data) => post(addComment, data);
export const getComment = (id) => get(`${getCommentbyId}/${id}`);
export const DeleteComment = (id) => del(`${deleteComment}/${id}`);
export const RepllyComment = (data) => post(reply,data)
export const getAllCmts = () => get(getAllCmt)
