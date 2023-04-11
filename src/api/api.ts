import axiosDefault from 'axios';
import {BASE_API_URL} from './constants';
import {StoryType, CommentType} from '@/types';

export const axios = axiosDefault.create({
  baseURL: BASE_API_URL,
});

export const fetchItem = async (id: number) => await axios.get(`item/${id}.json`);

export const fetchStories = async () => {
  const {data: storyIds} = await axios.get('beststories.json');
  //TODO
  const responsesArr = await Promise.all(storyIds.slice(0, 100).map(fetchItem));
  return Array.isArray(responsesArr) ? responsesArr.map(response => response.data as StoryType) : [];
};

export const fetchStory = async (id: number) => {
  const {data: story} = await fetchItem(id);
  return story as StoryType;
};
export const fetchComment = async (id: number) => {
  const {data: comment} = await fetchItem(id);
  return comment as CommentType;
};

export const fetchComments = async (ids: number[]) => {
  const responsesArr = await Promise.all(ids.map(fetchItem));
  return Array.isArray(responsesArr) ? responsesArr.map(response => response.data as CommentType) : [];
};
