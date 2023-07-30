import { ICategory } from "@/types"
import Link from "next/link";
import { useRouter } from "next/router";

interface IPropType {
    categories: ICategory[];
    handleOnSearch: (query:string)=>void;
}

const Tabs = ({ categories,handleOnSearch }: IPropType) => {

    const router = useRouter();

    const isActiveLink = (category: ICategory) => {
        return category.attributes.Slug === router.query.category;
    }

    return (
        <div className="my-6 flex items-center justify-between border-b-2 border-gray-100">

            <ul className="flex items-center">
                <li className={"mr-6 pb-6 border-b-4 rounded-sm " + `${router.pathname === '/' ?
                    'border-primary text-primary' :
                    'border-white text-gray-400'
                    }`}>
                    <Link href="/">
                        Recent
                    </Link>
                </li>

                {categories.map((category) => {
                    return <li
                        key={category.id}

                        className={"mr-6 pb-6 border-b-4 rounded-sm " + `${isActiveLink(category) ?
                            'border-primary text-primary' :
                            'border-white text-gray-400'
                            }`}>

                        <Link href={`/category/${category.attributes.Slug}`}>
                            {category.attributes.Title}
                        </Link>

                    </li>
                })}

            </ul>

            <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <input
                    className="outline-none border-none focus:outline-none px-2 py-1 ml-2"
                    onChange={(e) => handleOnSearch(e.target.value)}
                    type="text"
                    placeholder="Search" />
            </div>

        </div>
    )
}

export default Tabs