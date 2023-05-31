import { createContext, useState, Dispatch, PropsWithChildren } from "react";
import { categories } from "../utils";

type CategoryContext = { activeCategory: string, setActivCategory: Dispatch<string> }
export const CategoryContext = createContext<CategoryContext>({ activeCategory: '', setActivCategory: () => null })
 
export const CategoryContextProvider = ({ children }: PropsWithChildren) => {
	const [activeCategory, setActiveCategory] = useState<string>(categories[0].category);

	const selectCategory = (role: string) => {
		if (role !== activeCategory) setActiveCategory(role)
	}

	return <CategoryContext.Provider value={{ activeCategory, setActivCategory: selectCategory }}>{children}</CategoryContext.Provider>
}
