const EURO = "€";
const VEGAN = "VE";
const VEGERTARIAN = "V";

const full_menu = {
    "Antipasti": [
        {
            "name": "Caprese",
            "price": "6.00",
            "description": "Fresh vine ripened tomato slices with mozzarella cheese and basil leaves, doused with balsamic vinegar & olive oil",
            "vegetarian": true,
            "vegan": false

        },
        {
            "name": "Burschetta",
            "price": "6.00",
            "description": "Grilled bread rubbed with garlic and topped with olive oil and salt. Includes toppings of tomato",
            "vegetarian": true,
            "vegan": true
        },
        {
            "name": "Caesar Salad",
            "price": "8.50",
            "description": "Crispy grean leaves, panchetta & croutons tossed in our homemade dressing topped with fresh parmesan. roasted.",
            "vegetarian": false,
            "vegan": false
        },
        {
            "name": "Calamari Fresca",
            "price": "6.00",
            "description": "Fresh pan-fried calamari,fresh garlic lightly tossed in herbs.",
            "vegetarian": false
        }
    ],
    "Pizza": [
        {
            "name": "Margherita",
            "price": "10.00",
            "description": "San Marzano tomato sauce with fresh mozzarella and basil",
            "vegetarian": true,
            "vegan": false,
            "gluten-free": false,
            "amount": 0

        },
        {
            "name": "Florentine",
            "price": "14.00",
            "description": "Tender roast chicken, spinach and cherry tomato in a ricotta cream sauce",
            "vegetarian": false,
            "vegan": false,
            "gluten-free": false
        },
        {
            "name": "Vegetariana",
            "price": "11.00",
            "description": "Loaded with red onion, tomato, bell pepper, mushrooms, and black olives, with tomato sauce and fresh mozzarella",
            "vegetarian": true,
            "vegan": false,
            "gluten-free": false
        }
    ],
    "Pasta": [
        {
            "name": "Spaghetti Pomodoro",
            "price": "11.00",
            "description": "Simple and delicious, with house-made tomato-basil marinara, dizzled with Tuscan olive oil",
            "vegetarian": true,
            "vegan": false,
            "gluten-free": false
        },
        {
            "name": "Fettuccine Carbonara",
            "price": "14.00",
            "description": "Pancetta bacon with shallots in a parmasean cream sauce over fettuccine",
            "vegetarian": false,
            "vegan": false,
            "gluten-free": false
        },
        {
            "name": "Tortellini Alla Panna",
            "price": "14.00",
            "description": "Veal Tortellini with bacon, mushrooms, wine, cream & parmesan cheese",
            "vegetarian": false,
            "vegan": false,
            "gluten-free": false
        },
        {
            "name": "Spaghetti Puttanesca Carbonara",
            "price": "14.00",
            "description": "Spaghetti in Napoli & cream sauce with ham, mushrooms, and chilli",
            "vegetarian": false,
            "vegan": false,
            "gluten-free": false,
            "amount": 0
        }
    ]
};
