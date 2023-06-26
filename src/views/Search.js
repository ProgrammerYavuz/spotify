import categories from "data/categories"
import favoriteCategories from "data/favorite-categories"
import Title from "components/Title"
import ScrollContainer from 'react-indiana-drag-scroll'
import { useEffect, useRef, useState } from "react"
import { Icon } from "Icons"
import Category from "components/CategoryItem"
import WideCategory from "components/WideCategoryItem"


function Search() {

    const favoritesRef = useRef()
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    
    useEffect(() => {
        if (favoritesRef.current) {

            const scrollHandle = () => { 
                const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth // sonda
                const isBegin = favoritesRef.current.scrollLeft === 0 // basta
                setPrev(!isBegin) // basta degilse goster
                setNext(!isEnd) // sonda degilse goster
            }

            scrollHandle()
            favoritesRef.current.addEventListener('scroll', scrollHandle)

            return () => {
                favoritesRef?.current?.removeEventListener('scroll', scrollHandle)
            }

        }
    }, [favoritesRef])

    const slideFavoritesNext = () => { // next butonuna her tiklandiginda 250 deger saga kayacak
        favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 250
    }

    const slideFavoritesPrev = () => { // prev butonuna her tiklandiginda 250 deger sola kayacak
        favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 250
    }

    return (
        <>
            <section className="mb-8">
                <Title title="En çok dinlediğin türler" />
                <div className="relative">
                    {prev && 
                        <button className="absolute z-10 top-1/2 -left-5 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full hover:scale-106 bg-white text-black" onClick={slideFavoritesPrev}>
                            <Icon name="prev" size={16} />
                        </button> 
                    }
                    {next && 
                        <button className="absolute z-10 top-1/2 -right-5 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full hover:scale-106 bg-white text-black" onClick={slideFavoritesNext}>
                            <Icon name="next" size={16} />
                        </button>
                    }
                    <ScrollContainer innerRef={favoritesRef} className="flex overflow-x-auto gap-x-6 scroll-smooth">
                        {favoriteCategories.map((category, index) => <WideCategory category={category} key={index} />)}
                    </ScrollContainer>
                </div>
            </section>

            <section>
                <Title title="Hepsine göz at" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {categories.map((category, index) => <Category category={category} key={index} />)}
                </div>
            </section>
            
        </>
    )
}

export default Search