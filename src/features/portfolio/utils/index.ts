import { categories, type Category } from "./helpers/getCategories";
import works from './data/works.json';
import { type Work } from './data/types';
import { findFeaturedWork, type FindFeaturedWorkMode } from "./helpers/findFeaturedWork";

export {
	works,
	categories,
	findFeaturedWork,
	Category,
	Work,
	FindFeaturedWorkMode
}