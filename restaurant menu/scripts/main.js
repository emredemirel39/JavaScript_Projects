const menu = [
    {
      description:
        "These mini cheeseburgers are served on a fresh baked pretzel bun with lettuce, tomato, avocado, and your choice of cheese. ",
      imageURL: "https://resize.hswstatic.com/w_907/gif/cheeseburger-1.jpg",
      title: "Mini Cheeseburgers",
      category: "Starters",
      id: 2,
      price: 8,
    },
    {
      description:
        "Large mushroom caps are filled a savory cream cheese, bacon and panko breadcrumb stuffing, topped with cheddar cheese. ",
      imageURL:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2021/Stuffed-Mushrooms-7.jpeg?w=1920&auto=compress%2Cformat&fit=crop&dm=1636398464&s=d62bc531fb0ff5b813b86dcf3fbfdee1",
      title: "Panko Stuffed Mushrooms",
      category: "Starters",
      id: 10,
      price: 7,
    },
    {
      description:
        "Our New York Style Cheesecake is rich, smooth, and creamy. Available in various flavors, and with seasonal ",
      imageURL:
        "https://laurenslatest.com/wp-content/uploads/2020/02/cheesecake-recipe-5.jpg",
      title: "Cheesecake",
      category: "Desserts",
      id: 14,
      price: 9,
    },
    {
      description:
        "This platter is perfect for sharing! Enjoy our spicy buffalo wings, traditional nachos, and cheese quesadillas served with freshly made guacamole dip.",
      imageURL:
      "https://www.mamalatinatips.com/wp-content/uploads/2018/09/mexican-platter-top-h-mlt.jpg",
      title: "Fiesta Family Platter",
      category: "Entrees",
      id: 9,
      price: 16,
    },
    {
      description:
        "This classic cheese tortellini is cooked in a sundried tomato sauce. Served with bruschetta topped with a tomato and basil marinara.",
      imageURL:
        "https://aprettylifeinthesuburbs.com/wp-content/uploads/2015/05/Bruschetta-Pasta-Salad-1.jpg",
      title: "Tomato Bruschetta Tortellini",
      category: "Entrees",
      id: 12,
      price: 14,
    },
    {
      description:
        "Elegantly crafted creamy vanilla custard with a caramelized crunchy layer on top. Served with seasonal fruit.",
      imageURL: "https://www.yogurt-land.com/assets/584.png",
      title: "Creame Brallace",
      category: "Desserts",
      id: 13,
      price: 9,
    },
    {
      description:
        "Made with local granny smith apples to bring you the freshest classic apple pie available.",
      imageURL:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545039107.jpeg",
      title: "Apple Pie",
      category: "Desserts",
      id: 15,
      price: 5,
    },
    {
      description:
        "Our thin crust pizzas are made fresh daily and topped with your choices of fresh meats, veggies, cheese, and sauce. Price includes two toppings. Add $1 for each additional topping.",
      imageURL:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/91/f8/f9/topp-t-handcrafted-pizza.jpg",
      title: "Handcrafted Pizza",
      category: "Entrees",
      id: 16,
      price: 10,
    },
    {
      description:
        "Our barbecued skewers include tofu, cherry tomatoes, bell peppers, and zucchini marinated in a ginger sesame sauce and charbroiled. Served with steamed rice.",
      imageURL:
        "https://www.lastingredient.com/wp-content/uploads/2019/08/barbecue-tofu-veggie-skewers5.jpg",
      title: "Barbecued Tofu Skewers",
      category: "Entrees",
      id: 17,
      price: 10,
    },
];

const restaurantMenu = document.querySelector('.restaurant-menu');
const buttonBox = document.querySelector('.button-box');

window.addEventListener('load', () => {
    displayMenuItems(menu);
    displayButtons(menu);
    buttonEvents(menu);
});

const displayButtons = (menuItems) => {

    const allCategories = menuItems.map(e => e.category);
    const uniqueCategories = new Set(allCategories);
    uniqueCategories.forEach(e => {
        const filterButtons = document.createElement('button');
        filterButtons.classList = 'filter-buttons'
        filterButtons.textContent = `${e}`
        filterButtons.setAttribute('data-id', `${e.toLowerCase()}`);
        
        buttonBox.appendChild(filterButtons);
    });
};

const buttonEvents = (menu) => {

    const filterButtons = document.querySelectorAll('.filter-buttons');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            restaurantMenu.innerHTML = ''

            const category = button.dataset.id;
            const filteredMenu = menu.filter(e => {
                if (e.category.toLowerCase() == category.toLowerCase()) {
                    return e
                }
            });

            category === 'all' ? displayMenuItems(menu) : displayMenuItems(filteredMenu)
        });
    });
};

const displayMenuItems = (menuItems) => {
    const displayedMenu = menuItems.map(e => e)
    displayedMenu.forEach((e) => {
        const itemCard = document.createElement('div')
        itemCard.className = 'item-card'
        itemCard.classList.add('flex-item-column')
        itemCard.innerHTML = 
        `<img src="${e.imageURL}" alt="" class="item-image">
        <div class="item-title flex-item-row">
            <h4>${e.title}</h4>
            <h4 class="price">$ ${e.price}</h4>
        </div>
        <hr />
        <div class="item-info">
            <p class="item-text">${e.description}</p>
        </div>`;

        restaurantMenu.appendChild(itemCard);
    });
};