import { createContext, useReducer, PropsWithChildren } from "react";
import { type Work, categories } from "../utils";

type PortfolioStateType = {
	activeCategory: string, 
	featuredWork: Work | null,
}

type PortfolioContextType = PortfolioStateType & { 
	updateFeaturedWork: (work: Work | null) => void,
	selectCategory: (category: string) => void
}

const initialState = {
	activeCategory: categories[0].category, 
	featuredWork: null,
}

export const PortfolioContext = createContext<PortfolioContextType>({ 
	...initialState, 
	selectCategory: () => null, 
	updateFeaturedWork: () => null 
})

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
			return { ...state, activeCategory: action.payload }
		case PortfolioActionTypes.SET_FEATURED_WORK:
			return { ...state, featuredWork: action.payload }
		case PortfolioActionTypes.REMOVE_FEATURED_WORK:
			return { ...state, featuredWork: null }
		default:
			return state
	}
}

export const PortfolioContextProvider = ({ children }: PropsWithChildren) => {
	const [store, dispatch] = useReducer(reducer, initialState)

	const selectCategory = (category: string) => {
		if (category !== store.activeCategory) dispatch({ type: PortfolioActionTypes.SELECT_CATEGORY, payload: category })
	}

	const updateFeaturedWork = (work: Work | null) => {
		if (!work) {
			dispatch({ type: PortfolioActionTypes.REMOVE_FEATURED_WORK })
		} else if (!store.featuredWork) {
			dispatch({ type: PortfolioActionTypes.SET_FEATURED_WORK, payload: work })
		} else if (work.id !== store.featuredWork.id) {
			dispatch({ type: PortfolioActionTypes.SET_FEATURED_WORK, payload: work })
		}
	}

	return <PortfolioContext.Provider value={{ ...store, selectCategory, updateFeaturedWork }}>{children}</PortfolioContext.Provider>
}