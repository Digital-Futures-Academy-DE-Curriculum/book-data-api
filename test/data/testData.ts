import ICategory from "../../src/models/ICategory";

const testData: Partial<ICategory>[] = [
    {
        category: "Travel",
        link: "http://books.toscrape.com/catalogue/category/books/travel_2/index.html",
        number_of_books: 11,
        books: [
            {
                _id: "672e34ec6b0fdc06d0850365",
                title: "It's Only the Himalayas",
                price: 45.17,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/27/a5/27a53d0bb95bdd88288eaf66c9230d7e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850366",
                title: "Full Moon over Noahâs Ark: An Odyssey to Mount Ararat and Beyond",
                price: 49.43,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/57/77/57770cac1628f4407636635f4b85e88c.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850367",
                title: "See America: A Celebration of Our National Parks & Treasured Sites",
                price: 48.87,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/9a/7e/9a7e63f12829df4b43b31d110bf3dc2e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850368",
                title: "Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel",
                price: 36.94,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/d5/bf/d5bf0090470b0b8ea46d9c166f7895aa.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850369",
                title: "Under the Tuscan Sun",
                price: 37.33,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/98/c2/98c2e95c5fd1a4e7cd5f2b63c52826cb.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085036a",
                title: "A Summer In Europe",
                price: 44.34,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/4e/15/4e15150388702ebca2c5a523ac270539.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085036b",
                title: "The Great Railway Bazaar",
                price: 30.54,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/76/de/76de41867f323d7f1f4fbe2fdfc1b2ba.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085036c",
                title: "A Year in Provence (Provence #1)",
                price: 56.88,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/db/46/db46159b05faa5d95262112bf9c29ddd.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085036d",
                title: "The Road to Little Dribbling: Adventures of an American in Britain (Notes From a Small Island #2)",
                price: 23.21,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/e0/4f/e04f8eda2a2fa947aec17640202d9ab0.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085036e",
                title: "Neither Here nor There: Travels in Europe",
                price: 38.95,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/06/81/0681530a7bc301caf5c3257e1b0f0750.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085036f",
                title: "1,000 Places to See Before You Die",
                price: 26.08,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/d7/0f/d70f7edd92705c45a82118c3ff6c299d.jpg",
            },
        ],
    },
    {
        category: "Mystery",
        link: "http://books.toscrape.com/catalogue/category/books/mystery_3/index.html",
        number_of_books: 32,
        books: [
            {
                _id: "672e34ec6b0fdc06d0850370",
                title: "Sharp Objects",
                price: 47.82,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/32/51/3251cf3a3412f53f339e42cac2134093.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850371",
                title: "In a Dark, Dark Wood",
                price: 19.63,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/23/85/238570a1c284e730dbc737a7e631ae2b.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850372",
                title: "The Past Never Ends",
                price: 56.5,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/89/b8/89b850edb01851a91f64ba114b96acb6.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850373",
                title: "A Murder in Time",
                price: 16.64,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/11/aa/11aaad48b5f15e262456ca65294084da.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850374",
                title: "The Murder of Roger Ackroyd (Hercule Poirot #4)",
                price: 44.1,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/29/fe/29fe70b1b2e5a9ba61d4bd331255e19e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850375",
                title: "The Last Mile (Amos Decker #2)",
                price: 54.21,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/37/f1/37f118b4a56d866e1e8b563759d6966c.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850376",
                title: "That Darkness (Gardiner and Renner #1)",
                price: 13.92,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/44/9e/449ed681142bc336646abee754e96639.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850377",
                title: "Tastes Like Fear (DI Marnie Rome #3)",
                price: 10.69,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/3c/91/3c91d97266bd6dda322089695fb46daf.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850378",
                title: "A Time of Torment (Charlie Parker #14)",
                price: 48.35,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/e8/c0/e8c0ba15066bab950ae161fd60949b9a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850379",
                title: "A Study in Scarlet (Sherlock Holmes #1)",
                price: 16.73,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/8f/a4/8fa41d6caa10e427356b8a590eb4d96b.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085037a",
                title: "Poisonous (Max Revere Novels #3)",
                price: 26.8,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/23/52/2352718971d5e166fa9541a5a7d716fa.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085037b",
                title: "Murder at the 42nd Street Library (Raymond Ambler #1)",
                price: 54.36,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/c3/8d/c38d65cd155b67ca025f0655bd1bb095.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085037c",
                title: "Most Wanted",
                price: 35.28,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/8b/bc/8bbc5ab4c3784b4d9b93eb0fd1fb6fd6.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085037d",
                title: "Hide Away (Eve Duncan #20)",
                price: 11.84,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/57/07/5707c3d5d4fd44d943d51730ba7d429a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085037e",
                title: "Boar Island (Anna Pigeon #19)",
                price: 59.48,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/d5/81/d58157866ea8f015a8e4c55b23b8c96f.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085037f",
                title: "The Widow",
                price: 27.26,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/fd/71/fd71fb07247bf911505a351c0670c6dc.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850380",
                title: "Playing with Fire",
                price: 13.71,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/90/0b/900bd2e60d56b6480a4e8eb2dddb46d6.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850381",
                title: "What Happened on Beale Street (Secrets of the South Mysteries #2)",
                price: 25.37,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/c7/ab/c7abb5e32bd37118a87523dcee0a70a6.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850382",
                title: "The Bachelor Girl's Guide to Murder (Herringford and Watts Mysteries #1)",
                price: 52.3,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/95/d7/95d7541679fcbd579b8a4f2b47231aaf.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850383",
                title: "Delivering the Truth (Quaker Midwife Mystery #1)",
                price: 20.89,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/57/31/5731a5d46c2c1e88977eb5e6d1337a2e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850384",
                title: "The Mysterious Affair at Styles (Hercule Poirot #1)",
                price: 24.8,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/32/94/3294e5eaf73a37958583483fc9a90f04.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850385",
                title: "In the Woods (Dublin Murder Squad #1)",
                price: 38.38,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/24/a1/24a175dac7cb91ff26e2d723cdc6e098.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850386",
                title: "The Silkworm (Cormoran Strike #2)",
                price: 23.05,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/3a/2c/3a2c46cd40a7ecbd7c40815d6390fb8a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850387",
                title: "The Exiled",
                price: 43.45,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/2d/1a/2d1aeb1cc8a23064164e230fa232cc04.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850388",
                title: "The Cuckoo's Calling (Cormoran Strike #1)",
                price: 19.21,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/11/81/11815f24d043f77d4f09a3522a688a5c.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850389",
                title: "Extreme Prey (Lucas Davenport #26)",
                price: 25.4,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/de/86/de86d4f1563fad2ca088922fbbb2b36a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085038a",
                title: "Career of Evil (Cormoran Strike #3)",
                price: 24.72,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/9e/ff/9eff8b66d583e8f0ba58a0bc86de40f2.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085038b",
                title: "The No. 1 Ladies' Detective Agency (No. 1 Ladies' Detective Agency #1)",
                price: 57.7,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/34/2e/342ec55d460f3dd49d77dac2bd4ff489.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085038c",
                title: "The Girl You Lost",
                price: 12.29,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/90/0d/900dba6987796f4312a6a6737b0ea94d.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085038d",
                title: "The Girl In The Ice (DCI Erika Foster #1)",
                price: 15.85,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/d8/f7/d8f77fe7f4bb8610e903741441f84702.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085038e",
                title: "Blood Defense (Samantha Brinkman #1)",
                price: 20.3,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/cb/f6/cbf6d4b61953f29d7eedd2c9e01a9d74.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085038f",
                title: "1st to Die (Women's Murder Club #1)",
                price: 53.98,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/2b/41/2b4161c5b72a4ae386b644682361b34a.jpg",
            },
        ],
    },
    {
        category: "Historical Fiction",
        link: "http://books.toscrape.com/catalogue/category/books/historical-fiction_4/index.html",
        number_of_books: 26,
        books: [
            {
                _id: "672e34ec6b0fdc06d0850390",
                title: "Tipping the Velvet",
                price: 53.74,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850391",
                title: "Forever and Forever: The Courtship of Henry Longfellow and Fanny Appleton",
                price: 29.69,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/d6/58/d658a1485b130ff26ca5fb0d5975ed2e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850392",
                title: "A Flight of Arrows (The Pathfinders #2)",
                price: 55.53,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/82/96/8296f92b70fb1dafefecda92c1d51941.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850393",
                title: "The House by the Lake",
                price: 36.95,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/0d/cb/0dcb33d60b0e79adf8ab9842e697ea2e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850394",
                title: "Mrs. Houdini",
                price: 30.25,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/0e/fe/0efe86960cdff718aed01a5c3f65b1c3.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850395",
                title: "The Marriage of Opposites",
                price: 28.08,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/0f/c2/0fc21ec3489cb23116778ee84f425eca.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850396",
                title: "Glory over Everything: Beyond The Kitchen House",
                price: 45.84,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/96/41/964194a317f8ce5ed031bf4c9ceb43ab.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850397",
                title: "Love, Lies and Spies",
                price: 20.55,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/7a/22/7a224a6e174af91950e9b124afe54e0e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850398",
                title: "A Paris Apartment",
                price: 39.01,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/16/57/16575316618bd7e922d5b0e0f87de2ca.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850399",
                title: "Lilac Girls",
                price: 17.28,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/6c/2e/6c2e764e3ea89859b52df8de4f12af7a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085039a",
                title: "The Constant Princess (The Tudor Court #1)",
                price: 16.62,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/fc/80/fc80b999ff4b8ef24b7071f62d2bf6d1.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085039b",
                title: "The Invention of Wings",
                price: 37.34,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/62/fa/62fa1e72f06f05762db5d9cedf654153.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085039c",
                title: "World Without End (The Pillars of the Earth #2)",
                price: 32.97,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/be/7c/be7ce6fbc9a8e1a5a5b5c32e73cfd78a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085039d",
                title: "The Passion of Dolssa",
                price: 28.32,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/6b/82/6b822681c4035131560d40dd3b5a6a2e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085039e",
                title: "Girl With a Pearl Earring",
                price: 26.77,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/b7/ad/b7ad37d93d8401c84d7325aa645ff6d5.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085039f",
                title: "Voyager (Outlander #3)",
                price: 21.07,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/b5/d8/b5d813da01f2ccd7bcfe34e2b875e752.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a0",
                title: "The Red Tent",
                price: 35.66,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/b2/8f/b28f211e50e74445ca071d4279d1080d.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a1",
                title: "The Last Painting of Sara de Vos",
                price: 55.55,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/bf/fd/bffd473ab232c5f35e8c81bb927f1624.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a2",
                title: "The Guernsey Literary and Potato Peel Pie Society",
                price: 49.53,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/18/f7/18f7bf6366cd7a8b947fd790d808047b.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a3",
                title: "Girl in the Blue Coat",
                price: 46.83,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/bf/7a/bf7a5bc1d1ebac5e9b6fbb147828a123.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a4",
                title: "Between Shades of Gray",
                price: 20.79,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/f9/19/f919f64fc0e3642cdc604134bfd93774.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a5",
                title: "While You Were Mine",
                price: 41.32,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/45/e8/45e87bcad554d79eadf0f89df9cac6f9.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a6",
                title: "The Secret Healer",
                price: 34.56,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/69/d2/69d225899cce0a150c605ead01e02f60.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a7",
                title: "Starlark",
                price: 25.83,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/b4/9e/b49e66e8f446d9a3dae488955f2aa487.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a8",
                title: "Lost Among the Living",
                price: 27.7,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/5a/40/5a40d914bc3491e5909f1167f9cb34f2.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503a9",
                title: "A Spy's Devotion (The Regency Spies of London #1)",
                price: 16.97,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/1b/5f/1b5ff86f3c75e51e24c573d3f8bffd8f.jpg",
            },
        ],
    },
    {
        category: "Sequential Art",
        link: "http://books.toscrape.com/catalogue/category/books/sequential-art_5/index.html",
        number_of_books: 75,
        books: [
            {
                _id: "672e34ec6b0fdc06d08503aa",
                title: "Scott Pilgrim's Precious Little Life (Scott Pilgrim #1)",
                price: 52.29,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/94/b1/94b1b8b244bce9677c2f29ccc890d4d2.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ab",
                title: "Tsubasa: WoRLD CHRoNiCLE 2 (Tsubasa WoRLD CHRoNiCLE #2)",
                price: 16.28,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/36/df/36df4caaf1420b1183a8235355d39e69.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ac",
                title: "This One Summer",
                price: 19.49,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/c4/dd/c4ddd9ced89966b0602ec85e00cd5b61.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ad",
                title: "The Nameless City (The Nameless City #1)",
                price: 38.16,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/f4/79/f479de5f305c2ac0512702cf7155bb74.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ae",
                title: "Saga, Volume 5 (Saga (Collected Editions) #5)",
                price: 51.04,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/e1/ea/e1ea6cb36e62ae6dc7b805f68ab9a700.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503af",
                title: "Rat Queens, Vol. 3: Demons (Rat Queens (Collected Editions) #11-15)",
                price: 50.4,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/f3/ef/f3efd43ae0fa85d9b325d5e8783e7af5.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b0",
                title: "Princess Jellyfish 2-in-1 Omnibus, Vol. 01 (Princess Jellyfish 2-in-1 Omnibus #1)",
                price: 13.61,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/78/0b/780b2c28122750c2c383846155815bf7.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b1",
                title: "Pop Gun War, Volume 1: Gift",
                price: 18.97,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/c8/2f/c82f629a31b3f47bdb17ac14aa51076d.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b2",
                title: "Patience",
                price: 10.16,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/01/72/01726c619a05114dca75bd840095016d.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b3",
                title: "Outcast, Vol. 1: A Darkness Surrounds Him (Outcast #1)",
                price: 15.44,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/cb/00/cb004189f548d75ad430d3ed19e6daa9.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b4",
                title: "orange: The Complete Collection 1 (orange: The Complete Collection #1)",
                price: 48.41,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/03/88/03886a8502ca54dbce0d91c2568ab69d.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b5",
                title: "Lumberjanes, Vol. 2: Friendship to the Max (Lumberjanes #5-8)",
                price: 46.91,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/d3/15/d3158e8d3546fb90cced3c1d44a92a34.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b6",
                title: "Lumberjanes, Vol. 1: Beware the Kitten Holy (Lumberjanes #1-4)",
                price: 45.61,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/7e/a0/7ea062007ef00107e3c16d336b41fab2.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b7",
                title: "Lumberjanes Vol. 3: A Terrible Plan (Lumberjanes #9-12)",
                price: 19.92,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/5f/b1/5fb1bf88dcfda795606745ce35be5975.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b8",
                title: "I Hate Fairyland, Vol. 1: Madly Ever After (I Hate Fairyland (Compilations) #1-5)",
                price: 29.17,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/aa/74/aa74004807e97a79aa084b5db329a99b.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503b9",
                title: "I am a Hero Omnibus Volume 1",
                price: 54.63,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/16/d4/16d443437126bf6d536a89312c1995a5.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ba",
                title: "Giant Days, Vol. 2 (Giant Days #5-8)",
                price: 22.11,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/90/6f/906f0168b0e155a7077625499b1737b5.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503bb",
                title: "Danganronpa Volume 1",
                price: 51.99,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/78/97/7897eea91c4a85aca58d925861d4afec.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503bc",
                title: "Codename Baboushka, Volume 1: The Conclave of Death",
                price: 36.72,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/f6/88/f688a9d6a89fdf38e4e88439ee9eda69.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503bd",
                title: "Camp Midnight",
                price: 17.08,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/dd/c9/ddc95df6754df8e71bf969c088056188.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503be",
                title: "Bitch Planet, Vol. 1: Extraordinary Machine (Bitch Planet (Collected Editions))",
                price: 37.92,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/e4/1d/e41d34204a1fffbf825d8beb3dbf4cbc.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503bf",
                title: "The Shadow Hero (The Shadow Hero)",
                price: 33.14,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/1f/62/1f621dda1b302fc16d83d94b0b5ac31c.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c0",
                title: "Fables, Vol. 1: Legends in Exile (Fables #1)",
                price: 41.62,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/51/8c/518c184a793b751b43045637c8002eb7.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c1",
                title: "Batman: The Long Halloween (Batman)",
                price: 36.5,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/78/a7/78a7f184a4d6d62412861c68f1c3ad90.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c2",
                title: "Batman: The Dark Knight Returns (Batman)",
                price: 15.38,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/be/a9/bea95dbd7b2a843519c9a1dcfc433f9b.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c3",
                title: "Wonder Woman: Earth One, Volume One (Wonder Woman: Earth One #1)",
                price: 37.34,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/19/39/19396172462f4cc0504d4e6e8b0e1647.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c4",
                title: "We Are Robin, Vol. 1: The Vigilante Business (We Are Robin #1)",
                price: 53.9,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/66/d6/66d6d2b4c0acfa8f40ad0285186ed2d8.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c5",
                title: "Through the Woods",
                price: 25.38,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/4c/af/4caf8f2a5ee8828d408cc8faadd3419c.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c6",
                title: "Superman Vol. 1: Before Truth (Superman by Gene Luen Yang #1)",
                price: 11.89,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/7e/c0/7ec0e9ca6153a23b2024b7df7407ee84.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c7",
                title: "So Cute It Hurts!!, Vol. 6 (So Cute It Hurts!! #6)",
                price: 35.43,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/b2/48/b2484d13793ff1c4271a3d4023d4d24e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c8",
                title: "Robin War",
                price: 47.82,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/45/1d/451d3543022242b8b245793e6b5c26bb.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503c9",
                title: "Red Hood/Arsenal, Vol. 1: Open for Business (Red Hood/Arsenal #1)",
                price: 25.48,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/da/78/da78757466c3b0a2c89f0ddf6b5e642f.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ca",
                title: "Naruto (3-in-1 Edition), Vol. 14: Includes Vols. 40, 41 & 42 (Naruto: Omnibus #14)",
                price: 38.39,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/c8/22/c822360ce0f91c40f7a0491c22287646.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503cb",
                title: "Lowriders to the Center of the Earth (Lowriders in Space #2)",
                price: 51.51,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/b2/97/b2978e96069dd91785e5ab0bc99c022e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503cc",
                title: "El Deafo",
                price: 57.62,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/34/eb/34eb0f1b570d4f1f6ad106652f1ac6ff.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503cd",
                title: "Batman: Europa",
                price: 32.01,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/f1/fe/f1fecf0ce9b5771e4d2c9619e8550988.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ce",
                title: "Art Ops Vol. 1",
                price: 48.8,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/0b/b4/0bb4c64f1522c033368df5567a349472.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503cf",
                title: 'Adulthood Is a Myth: A "Sarah\'s Scribbles" Collection',
                price: 10.9,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/a2/b9/a2b974e5a66e7502c77d2e4632abe033.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d0",
                title: "Fruits Basket, Vol. 9 (Fruits Basket #9)",
                price: 33.95,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/7c/ea/7cea6ff4f6f1427739b136db35fbfad4.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d1",
                title: "Roller Girl",
                price: 14.1,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/b8/bd/b8bd3e5bc547c7c851689a844c9db429.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d2",
                title: "Fruits Basket, Vol. 7 (Fruits Basket #7)",
                price: 19.57,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/b4/36/b43672509477baa090e57ebeacbb28fb.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d3",
                title: "Fruits Basket, Vol. 6 (Fruits Basket #6)",
                price: 20.96,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/94/1a/941a14dec32f0a949c38a325a715c138.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d4",
                title: "Death Note, Vol. 6: Give-and-Take (Death Note #6)",
                price: 36.39,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/07/5c/075c210f5ce43b84d29646a54529d1bd.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d5",
                title: "Fruits Basket, Vol. 5 (Fruits Basket #5)",
                price: 16.33,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/51/cf/51cf19c74f21a7043910615fefcf0847.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d6",
                title: "Death Note, Vol. 5: Whiteout (Death Note #5)",
                price: 52.41,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/4e/c1/4ec161cc09ee437c9eda6d437d232a11.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d7",
                title: "The Demon Prince of Momochi House, Vol. 4 (The Demon Prince of Momochi House #4)",
                price: 27.88,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/47/71/477173fe3000a6da4b241c2e71a21418.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d8",
                title: "Fruits Basket, Vol. 4 (Fruits Basket #4)",
                price: 50.44,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/38/79/38794d8729a111018260d931e7101de2.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503d9",
                title: "The Wicked + The Divine, Vol. 3: Commercial Suicide (The Wicked + The Divine)",
                price: 14.41,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/ee/ed/eeeddf8af9e6cc8c7f71c0e41de1b562.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503da",
                title: "The Sandman, Vol. 3: Dream Country (The Sandman (volumes) #3)",
                price: 55.55,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/bb/18/bb1845c22faea465cad3d556d22936a2.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503db",
                title: "Saga, Volume 3 (Saga (Collected Editions) #3)",
                price: 21.57,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/d8/fd/d8fd30b3e5781e880a3efe4c9495b417.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503dc",
                title: "Prodigy: The Graphic Novel (Legend: The Graphic Novel #2)",
                price: 43.63,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/c9/a5/c9a559e3ba407c1d70ebfc4e2f0d82db.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503dd",
                title: "Persepolis: The Story of a Childhood (Persepolis #1-2)",
                price: 39.13,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/14/98/14987a55d9609e706d2619814e2a8b0a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503de",
                title: "Original Fake",
                price: 31.45,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/e7/29/e72934871f9b42a807d976670a446e12.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503df",
                title: "Grayson, Vol 3: Nemesis (Grayson #3)",
                price: 42.72,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/f9/4c/f94cfc3c82abb799568d1ea029b1d3d1.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e0",
                title: "Fruits Basket, Vol. 3 (Fruits Basket #3)",
                price: 45.17,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/7b/e7/7be75475a916d6df4edebfc5fe36c3f9.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e1",
                title: "Black Butler, Vol. 1 (Black Butler #1)",
                price: 49.31,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/99/48/9948564dec3ac2f9e32419911b181e37.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e2",
                title: "Awkward",
                price: 38.02,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/41/72/417255e608c389aedfb68491dae92c9c.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e3",
                title: "The Sandman, Vol. 2: The Doll's House (The Sandman (volumes) #2)",
                price: 54.81,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/e3/ae/e3ae48fe07d77611b49b5b78d99418ae.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e4",
                title: "Saga, Volume 2 (Saga (Collected Editions) #2)",
                price: 11.75,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/1a/eb/1aeb5d30809ad96d7c323228a2bd23d3.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e5",
                title: "Fruits Basket, Vol. 2 (Fruits Basket #2)",
                price: 11.64,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/e9/fb/e9fb3236b73384253144f89b6eec6a68.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e6",
                title: "Y: The Last Man, Vol. 1: Unmanned (Y: The Last Man #1)",
                price: 18.51,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/ae/16/ae169bb5ae814e0fb900cdf9e99332a7.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e7",
                title: "The Wicked + The Divine, Vol. 1: The Faust Act (The Wicked + The Divine)",
                price: 36.52,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/64/75/64752f8cdae54b164fb81bfd81accd55.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e8",
                title: "The Sandman, Vol. 1: Preludes and Nocturnes (The Sandman (volumes) #1)",
                price: 54.12,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/56/ea/56eac75378feb4cab0dcb9d2101cf58b.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503e9",
                title: "The Complete Maus (Maus #1-2)",
                price: 10.64,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/a6/f8/a6f889e0ba02be31875d3a324090ef5e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ea",
                title: "Skip Beat!, Vol. 01 (Skip Beat! #1)",
                price: 42.12,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/6c/60/6c607509837e2b362ffd7c0e15e7b1f9.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503eb",
                title: "Saga, Volume 1 (Saga (Collected Editions) #1)",
                price: 28.48,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/c6/ca/c6cab3f679acb45fd2eba092ec9f6a2a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ec",
                title: "Rat Queens, Vol. 1: Sass & Sorcery (Rat Queens (Collected Editions) #1-5)",
                price: 46.96,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/0d/22/0d22f9ee696b7443d1573e7752645c6d.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ed",
                title: "Paper Girls, Vol. 1 (Paper Girls #1-5)",
                price: 21.71,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/87/2b/872ba3b06a97e6662770bc2152595b84.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ee",
                title: "Ouran High School Host Club, Vol. 1 (Ouran High School Host Club #1)",
                price: 29.87,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/d5/c5/d5c5a6ebf05b68bee78a38a8ea62305d.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ef",
                title: "Ms. Marvel, Vol. 1: No Normal (Ms. Marvel (2014-2015) #1)",
                price: 39.39,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/f4/96/f496db4d78639e233978ae2bee021752.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503f0",
                title: "Hawkeye, Vol. 1: My Life as a Weapon (Hawkeye #1)",
                price: 45.24,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/16/46/16460146a1a8b99c82da027368383ade.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503f1",
                title: "Giant Days, Vol. 1 (Giant Days #1-4)",
                price: 56.76,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/35/0b/350b1224dc46533851d5a34134e44842.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503f2",
                title: "Fruits Basket, Vol. 1 (Fruits Basket #1)",
                price: 40.28,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/7c/c1/7cc13a8fb238202250e87843c1a62f94.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503f3",
                title: "Bleach, Vol. 1: Strawberry and the Soul Reapers (Bleach #1)",
                price: 34.65,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/a8/38/a8383903c98af18b898b9d70d5be2c16.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503f4",
                title: "Ajin: Demi-Human, Volume 1 (Ajin: Demi-Human #1)",
                price: 57.06,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/09/7c/097cb5ecc6fb3fbe1690cf0cbdea4ac5.jpg",
            },
        ],
    },
    {
        category: "Classics",
        link: "http://books.toscrape.com/catalogue/category/books/classics_6/index.html",
        number_of_books: 19,
        books: [
            {
                _id: "672e34ec6b0fdc06d08503f5",
                title: "The Secret Garden",
                price: 15.08,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/c5/46/c5465a06182ed6ebfa40d049258a2f58.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503f6",
                title: "The Metamorphosis",
                price: 28.58,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/4a/1b/4a1b6e9c1af75db0dc34ae63344f6883.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503f7",
                title: "The Pilgrim's Progress",
                price: 50.26,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/45/bb/45bb59d19eb3aa868293d44809078418.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503f8",
                title: "The Hound of the Baskervilles (Sherlock Holmes #5)",
                price: 14.82,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/1f/b0/1fb03cdabe6001c8a2620f65e025cbd5.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503f9",
                title: "Little Women (Little Women #1)",
                price: 28.07,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/81/f5/81f559ebe403317226fa8b611e35ce8a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503fa",
                title: "Gone with the Wind",
                price: 32.49,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/27/82/2782701b5c877cb063065b9fc14c5b13.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503fb",
                title: "Candide",
                price: 58.63,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/e3/c4/e3c4aba2409bb769a6488805e3fc4709.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503fc",
                title: "Animal Farm",
                price: 57.22,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/10/db/10db56354b4550d92270c6f097d9bebc.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503fd",
                title: "Wuthering Heights",
                price: 17.73,
                star_rating: 3,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/93/4e/934e966c1ddf559d3ac2b5c1407aaf1e.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503fe",
                title: "The Picture of Dorian Gray",
                price: 29.7,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/a6/72/a67245346daa38c2b23a4fc64c6e7115.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d08503ff",
                title: "The Complete Stories and Poems (The Works of Edgar Allan Poe [Cameo Edition])",
                price: 26.78,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/42/c4/42c48f11b7e70a0f76c5ba9cb5c5018a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850400",
                title: "Beowulf",
                price: 38.35,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/dd/6e/dd6e7b84e99f3b4b5655ea0db74af2b4.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850401",
                title: "And Then There Were None",
                price: 35.01,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/21/bf/21bf2eb0bff3134837def8bd40845ba0.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850402",
                title: "The Story of Hong Gildong",
                price: 43.19,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/ab/16/ab16eb035cc58809a73c4699477de9cb.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850403",
                title: "The Little Prince",
                price: 45.42,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/c0/78/c078355608dd81c7c5e4f5e1c5f73d23.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850404",
                title: "Sense and Sensibility",
                price: 37.46,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/7d/53/7d53e2264b9647ee307259be9f73585d.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850405",
                title: "Of Mice and Men",
                price: 47.11,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/0f/ca/0fca4597765ffacdb7bd529fc5eb88fa.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850406",
                title: "Emma",
                price: 32.93,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/09/63/09638baaef52f03827c215029c632a13.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850407",
                title: "Alice in Wonderland (Alice's Adventures in Wonderland #1)",
                price: 55.53,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/96/ee/96ee77d71a31b7694dac6855f6affe4e.jpg",
            },
        ],
    },
    {
        category: "Philosophy",
        link: "http://books.toscrape.com/catalogue/category/books/philosophy_7/index.html",
        number_of_books: 11,
        books: [
            {
                _id: "672e34ec6b0fdc06d0850408",
                title: "Sophie's World",
                price: 15.94,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/65/71/6571919836ec51ed54f0050c31d8a0cd.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850409",
                title: "The Death of Humanity: and the Case for Life",
                price: 58.11,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/71/df/71df730cf38c232ee58a2e407135f055.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085040a",
                title: "The Stranger",
                price: 17.44,
                star_rating: 4,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/ea/04/ea0476a6f4c318ceccf5e2f2b39f2b15.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085040b",
                title: "Proofs of God: Classical Arguments from Tertullian to Barth",
                price: 54.21,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/3f/ef/3fef12d9da503693af12997c0ea0897f.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085040c",
                title: "Kierkegaard: A Christian Missionary to Christians",
                price: 47.13,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/05/ce/05ce699eaf78c0fae20308497c4f496a.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085040d",
                title: "At The Existentialist CafÃ©: Freedom, Being, and apricot cocktails with: Jean-Paul Sartre, Simone de Beauvoir, Albert Camus, Martin Heidegger, Edmund Husserl, Karl Jaspers, Maurice Merleau-Ponty and others",
                price: 29.93,
                star_rating: 5,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/de/76/de76d5c473c358bd41c03cf710692bfb.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085040e",
                title: "Critique of Pure Reason",
                price: 20.75,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/12/6e/126ef8f6473b81808ebbb9cff155e883.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d085040f",
                title: "Run, Spot, Run: The Ethics of Keeping Pets",
                price: 20.02,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/91/e6/91e6190dcdd7d6cdeb94a82b60917ec4.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850410",
                title: "The Nicomachean Ethics",
                price: 36.34,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/f0/aa/f0aa9ae0319b1d6e0706e6053020e696.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850411",
                title: "Meditations",
                price: 25.89,
                star_rating: 2,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/df/c9/dfc9ed72e963572d23233b3a8cb01676.jpg",
            },
            {
                _id: "672e34ec6b0fdc06d0850412",
                title: "Beyond Good and Evil",
                price: 43.38,
                star_rating: 1,
                in_stock: true,
                img_src:
                    "http://books.toscrape.com/http://books.toscrape.com/media/cache/ab/45/ab45f300aa15066ad1260d6f1398d03e.jpg",
            },
        ],
    },
];

export default testData;
