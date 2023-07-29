import { type FindFeaturedWorkMode, categories, findFeaturedWork } from "../utils";
import { PropsWithChildren, createContext, useReducer } from "react";
import type { Work } from "@data/types/works.type";

type PortfolioStateType = {
	activeCategory: string, 
	featuredWork: Work | null,
}

type PortfolioContextType = PortfolioStateType & { 
	updateFeaturedWork: (work: Work | null) => void,
	selectCategory: (category: string) => void,
	changeFeaturedWork: (mode: FindFeaturedWorkMode) => void
}

const initialState = {
	activeCategory: categories[0].category, 
	featuredWork: null,
};

export const PortfolioContext = createContext<PortfolioContextType>({ 
	...initialState, 
	selectCategory: () => null, 
	updateFeaturedWork: () => null,
	changeFeaturedWork: () => null
});

enum PortfolioActionTypes {
	SELECT_CATEGORY = "SELECT_CATEGORY",
	SET_FEATURED_WORK = "SET_FEATURED_WORK",
	REMOVE_FEATURED_WORK = "REMOVE_FEATURED_WORK"
}

type PortfolioAction = { type: PortfolioActionTypes.SELECT_CATEGORY, payload: string } 
	| { type: PortfolioActionTypes.SET_FEATURED_WORK, payload: Work }
	| { type: PortfolioActionTypes.REMOVE_FEATURED_WORK }

const reducer = (state: PortfolioStateType, action: PortfolioAction): PortfolioStateType => {
	switch (action.type) {
		case PortfolioActionTypes.SELECT_CATEGORY:
			return { ...state, activeCategory: action.payload };
		case PortfolioActionTypes.SET_FEATURED_WORK:
			return { ...state, featuredWork: action.payload };
		case PortfolioActionTypes.REMOVE_FEATURED_WORK:
			return { ...state, featuredWork: null };
		default:
			return state;
	}
};

export const PortfolioContextProvider = ({ children }: PropsWithChildren) => {
	const [store, dispatch] = useReducer(reducer, initialState);

	const selectCategory = (category: string) => {
		if (category !== store.activeCategory) dispatch({ type: PortfolioActionTypes.SELECT_CATEGORY, payload: category });
	};

	const updateFeaturedWork = (work: Work | null) => {
		if (!work) {
			dispatch({ type: PortfolioActionTypes.REMOVE_FEATURED_WORK });
		} else if (!store.featuredWork) {
			dispatch({ type: PortfolioActionTypes.SET_FEATURED_WORK, payload: work });
		} else if (work.id !== store.featuredWork.id) {
			dispatch({ type: PortfolioActionTypes.SET_FEATURED_WORK, payload: work });
		}
	};

	const changeFeaturedWork = (mode: FindFeaturedWorkMode) => {
		if (!store.featuredWork) return;

		const newWork = findFeaturedWork(store.featuredWork.id, mode);

		if (newWork) dispatch({ type: PortfolioActionTypes.SET_FEATURED_WORK, payload: newWork });
	};

	return <PortfolioContext.Provider value={{ ...store, selectCategory, updateFeaturedWork, changeFeaturedWork }}>{children}</PortfolioContext.Provider>;
};