window.onload = function() {
    // TEMP FIX FOR JSON FILE
    // ASSUME MENU IS PARSED JSON FILE
    // TODO
    const menu = full_menu;
    const menu_loc = document.getElementById("menu");
    menu_loc.classList.add("container");

    for (let category in menu)
    {
        // Just simplifying accessing array of items
        let items = menu[category];

        // Creating section of the category
        let section = document.createElement("div");
        section.classList.add("menu-section", "row");

        // Creating the header for the category
        let section_category = document.createElement("h2");
        section_category.classList.add("menu-category");
        section_category.textContent = category;
        menu_loc.appendChild(section_category);

        for (let i = 0; i < items.length; i++)
        {
            let item = items[i];
            // Create and set dish div
            let wrapper = document.createElement("div");
            wrapper.classList.add("menu-item", "col-sm-6");

            // Create elements for dish info

            let name = document.createElement("h3");
            name.classList.add("item-name");

            let price = document.createElement("p");
            price.classList.add("price");

            let desc = document.createElement("p");

            let btn = document.createElement("input");
            btn.setAttribute("type", "button");
            btn.setAttribute("value", "Add to cart");
            btn.classList.add("itembtn", "add");
            btn.setAttribute("id", item.name);

            // Append data to dish
            name.textContent = item.name;
            price.textContent = EURO + " " + item.price;
            desc.textContent = item.description; 

            // Append dish info to wrapper
            wrapper.appendChild(name);
            wrapper.appendChild(price);
            wrapper.appendChild(desc);
            wrapper.appendChild(btn);

            section.appendChild(wrapper);
        }

        menu_loc.appendChild(section);
    }

    $('input.itembtn').click(function() {
        AddToCart(this.id);
    });
}

function testing() {
    AddToCart(full_menu.Pizza[0]);
    console.log(full_menu.Pizza[0]);
    console.log(localStorage);
}