
/* =========================================================
   BRIGHTIFY DIGITAL
   UNIVERSAL RESTAURANT WEBSITE TEMPLATE

   Customize this file for each restaurant client.
   ========================================================= */


/* ---------------------------------------------------------
   1. BUSINESS INFORMATION
   --------------------------------------------------------- */

const BUSINESS = {

    name: "Sage & Stone",
    initials: "SS",

    announcement: "Fresh food. Good company. Every day.",

    email: "hello@example.com",
    phone: "(000) 000-0000",

    location: "Houston, Texas",
    address: "123 Main Street, Houston, TX 77000",

    hours: "Tuesday – Sunday, 11 AM – 9 PM",

    // Homepage content
    heroLabel: "GOOD FOOD, MADE WITH CARE",

    heroHeading: "A little more flavor. A lot more to enjoy.",

    heroDescription:
        "Thoughtfully prepared dishes, welcoming surroundings, and a place to slow down and enjoy the moment.",

    introHeading:
        "Good food brings people together.",

    introDescription:
        "Whether you're stopping by for a quick bite, meeting friends, or making an evening of it, there's always room at our table.",

    storyHeading:
        "Made for the moments around the table.",

    storyDescription:
        "We believe a memorable meal is about more than what's on the plate. It's the atmosphere, the people, and the little details that make an ordinary visit feel special.",

    ctaHeading:
        "Make time for something delicious.",

    ctaDescription:
        "Take a look at the menu or get in touch to plan your next visit.",

    // About page content
    aboutIntro:
        "Get to know the people, ideas, and approach behind the restaurant.",

    aboutHeading:
        "It starts with the way we welcome you.",

    aboutParagraphOne:
        "Every restaurant has its own story. Ours is built around bringing people together over food worth sharing.",

    aboutParagraphTwo:
        "We care about the experience just as much as the meal itself. From the atmosphere to the service, we want every visit to feel comfortable and worth repeating.",

    footerDescription:
        "Good food, good company, and a place to enjoy both.",

    menuIntro:
        "Explore our selection of dishes, drinks, and favorites. There's something for every appetite.",

    // Restaurant directions
    directionsURL:
        "https://www.google.com/maps",

    // Images
    heroImage:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=90",

    featureImage:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",

    aboutImage:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85"

};


/* ---------------------------------------------------------
   2. THEME SETTINGS
   Change these colors to create a different brand identity.
   --------------------------------------------------------- */

const THEME = {

    primary: "#354c3b",
    primaryDark: "#26392d",
    accent: "#b58b58",

    background: "#f8f5ef",
    surface: "#f0ede5",
    surfaceDark: "#e7e1d5",

    heading: "#292d27",
    text: "#65675f",
    muted: "#92938a",

    border: "#e5e1d8"

};


/* ---------------------------------------------------------
   3. MENU CONFIGURATION

   Each item includes:
   - name
   - description
   - price
   - image
   - featured

   Prices are examples. Replace them with client-approved prices.
   --------------------------------------------------------- */

const MENU = [

    {
        category: "Starters",
        description: "A good place to start.",

        items: [

            {
                name: "Crispy Calamari",
                description: "Lightly fried calamari served with house dipping sauce.",
                price: "$13",
                image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85",
                featured: true
            },

            {
                name: "Garlic Bread",
                description: "Toasted bread with garlic butter and fresh herbs.",
                price: "$8",
                image: "https://images.unsplash.com/photo-1619531040576-f9416740661f?auto=format&fit=crop&w=900&q=85",
                featured: false
            },

            {
                name: "House Salad",
                description: "Fresh greens, seasonal vegetables, and house dressing.",
                price: "$10",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
                featured: false
            }

        ]

    },

    {
        category: "Main Courses",
        description: "The dishes worth sitting down for.",

        items: [

            {
                name: "Grilled Salmon",
                description: "Grilled salmon with seasonal vegetables and a lemon herb sauce.",
                price: "$24",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
                featured: true
            },

            {
                name: "Classic Steak",
                description: "Grilled steak served with roasted potatoes and seasonal sides.",
                price: "$29",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
                featured: true
            },

            {
                name: "Pasta Primavera",
                description: "Pasta tossed with seasonal vegetables and a light cream sauce.",
                price: "$19",
                image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
                featured: false
            }

        ]

    },

    {
        category: "Desserts",
        description: "Save a little room for something sweet.",

        items: [

            {
                name: "Chocolate Cake",
                description: "Rich chocolate cake served with a smooth chocolate glaze.",
                price: "$9",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
                featured: true
            },

            {
                name: "Classic Cheesecake",
                description: "Creamy cheesecake with a graham cracker crust.",
                price: "$8",
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",
                featured: false
            }

        ]

    },

    {
        category: "Drinks",
        description: "Something refreshing to go with your meal.",

        items: [

            {
                name: "Fresh Lemonade",
                description: "House-made lemonade served chilled.",
                price: "$5",
                image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?auto=format&fit=crop&w=900&q=85",
                featured: false
            },

            {
                name: "Iced Tea",
                description: "Freshly brewed iced tea.",
                price: "$4",
                image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",
                featured: false
            }

        ]

    }

];


/* ---------------------------------------------------------
   4. THEME APPLICATION
   --------------------------------------------------------- */

function applyTheme() {

    const root = document.documentElement;

    root.style.setProperty("--color-primary", THEME.primary);
    root.style.setProperty("--color-primary-dark", THEME.primaryDark);
    root.style.setProperty("--color-accent", THEME.accent);

    root.style.setProperty("--color-background", THEME.background);
    root.style.setProperty("--color-surface", THEME.surface);
    root.style.setProperty("--color-surface-dark", THEME.surfaceDark);

    root.style.setProperty("--color-heading", THEME.heading);
    root.style.setProperty("--color-text", THEME.text);
    root.style.setProperty("--color-muted", THEME.muted);

    root.style.setProperty("--color-border", THEME.border);

}


/* ---------------------------------------------------------
   5. BUSINESS INFORMATION
   --------------------------------------------------------- */

function setText(selector, value) {

    if (value === undefined || value === null) return;

    document.querySelectorAll(selector).forEach((element) => {
        element.textContent = value;
    });

}


function setImage(selector, source, alt) {

    const image = document.querySelector(selector);

    if (!image || !source) return;

    image.src = source;
    image.alt = alt;

}


function applyBusinessInformation() {

    const initials = BUSINESS.initials ||
        BUSINESS.name
            .split(/\s+/)
            .slice(0, 2)
            .map((word) => word.charAt(0).toUpperCase())
            .join("");

    setText("[data-business-name]", BUSINESS.name);
    setText("[data-brand-initials]", initials);

    setText("[data-announcement]", BUSINESS.announcement);

    setText("[data-email]", BUSINESS.email);
    setText("[data-phone]", BUSINESS.phone);

    setText("[data-location]", BUSINESS.location);
    setText("[data-address]", BUSINESS.address);
    setText("[data-hours]", BUSINESS.hours);

    setText("[data-hero-label]", BUSINESS.heroLabel);
    setText("[data-hero-heading]", BUSINESS.heroHeading);
    setText("[data-hero-description]", BUSINESS.heroDescription);

    setText("[data-intro-heading]", BUSINESS.introHeading);
    setText("[data-intro-description]", BUSINESS.introDescription);

    setText("[data-story-heading]", BUSINESS.storyHeading);
    setText("[data-story-description]", BUSINESS.storyDescription);

    setText("[data-cta-heading]", BUSINESS.ctaHeading);
    setText("[data-cta-description]", BUSINESS.ctaDescription);

    setText("[data-about-intro]", BUSINESS.aboutIntro);
    setText("[data-about-heading]", BUSINESS.aboutHeading);

    setText("[data-about-paragraph-one]", BUSINESS.aboutParagraphOne);
    setText("[data-about-paragraph-two]", BUSINESS.aboutParagraphTwo);

    setText("[data-footer-description]", BUSINESS.footerDescription);
    setText("[data-menu-intro]", BUSINESS.menuIntro);

    setText("[data-current-year]", new Date().getFullYear());

    document.querySelectorAll("[data-email-link]").forEach((element) => {

        element.href = BUSINESS.email
            ? `mailto:${BUSINESS.email}`
            : "#";

    });

    document.querySelectorAll("[data-phone-link]").forEach((element) => {

        element.href = BUSINESS.phone
            ? `tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`
            : "#";

    });

    document.querySelectorAll("[data-directions-link]").forEach((element) => {

        element.href = BUSINESS.directionsURL;

    });

    setImage(
        "[data-feature-image]",
        BUSINESS.featureImage,
        `${BUSINESS.name} restaurant`
    );

    setImage(
        "[data-about-image]",
        BUSINESS.aboutImage,
        `${BUSINESS.name} restaurant`
    );

    const heroImage = document.querySelector(".hero-image");

    if (heroImage && BUSINESS.heroImage) {

        heroImage.style.backgroundImage = `
            linear-gradient(
                90deg,
                rgba(24, 32, 25, 0.88) 0%,
                rgba(24, 32, 25, 0.67) 48%,
                rgba(24, 32, 25, 0.15) 100%
            ),
            url("${BUSINESS.heroImage}")
        `;

    }

}


/* ---------------------------------------------------------
   6. MENU CARD CREATION
   --------------------------------------------------------- */

function createMenuCard(item) {

    const article = document.createElement("article");
    article.className = "menu-card";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "menu-card-image";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    image.loading = "lazy";

    imageWrapper.appendChild(image);

    if (item.featured) {

        const badge = document.createElement("span");
        badge.className = "menu-badge";
        badge.textContent = "Guest Favorite";

        imageWrapper.appendChild(badge);

    }

    const content = document.createElement("div");
    content.className = "menu-card-content";

    const heading = document.createElement("div");
    heading.className = "menu-card-heading";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const price = document.createElement("span");
    price.className = "menu-price";
    price.textContent = item.price;

    heading.append(name, price);

    const description = document.createElement("p");
    description.textContent = item.description;

    content.append(heading, description);

    article.append(imageWrapper, content);

    return article;

}


/* ---------------------------------------------------------
   7. FEATURED MENU
   --------------------------------------------------------- */

function renderFeaturedMenu() {

    const container = document.getElementById("featured-menu");

    if (!container) return;

    container.innerHTML = "";

    const featuredItems = MENU
        .flatMap((category) => category.items)
        .filter((item) => item.featured)
        .slice(0, 3);

    featuredItems.forEach((item) => {

        container.appendChild(createMenuCard(item));

    });

}


/* ---------------------------------------------------------
   8. FULL MENU
   --------------------------------------------------------- */

function renderFullMenu() {

    const container = document.getElementById("full-menu");
    const navigation = document.getElementById("menu-category-nav");

    if (!container || !navigation) return;

    container.innerHTML = "";
    navigation.innerHTML = "";

    MENU.forEach((category, index) => {

        const sectionId = `menu-category-${index}`;

        const navButton = document.createElement("button");
        navButton.className = "menu-category-button";
        navButton.type = "button";
        navButton.textContent = category.category;

        navButton.addEventListener("click", () => {

            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

        navigation.appendChild(navButton);


        const section = document.createElement("section");
        section.className = "menu-section";
        section.id = sectionId;

        const heading = document.createElement("div");
        heading.className = "menu-section-heading";

        const title = document.createElement("h2");
        title.textContent = category.category;

        const description = document.createElement("p");
        description.textContent = category.description;

        heading.append(title, description);

        const list = document.createElement("div");
        list.className = "menu-list";

        category.items.forEach((item) => {

            const itemElement = document.createElement("article");
            itemElement.className = "menu-list-item";

            const itemInfo = document.createElement("div");

            const itemName = document.createElement("h3");
            itemName.textContent = item.name;

            const itemDescription = document.createElement("p");
            itemDescription.textContent = item.description;

            itemInfo.append(itemName, itemDescription);

            const itemPrice = document.createElement("span");
            itemPrice.className = "menu-price";
            itemPrice.textContent = item.price;

            itemElement.append(itemInfo, itemPrice);

            list.appendChild(itemElement);

        });

        section.append(heading, list);

        container.appendChild(section);

    });

}


/* ---------------------------------------------------------
   9. MOBILE NAVIGATION
   --------------------------------------------------------- */

function setupMobileNavigation() {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");

    if (!menuButton || !navigation) return;

    menuButton.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });

    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");

        });

    });

}


/* ---------------------------------------------------------
   10. RESERVATION FORM
   Opens an email draft.

   IMPORTANT:
   This is not a live reservation or booking system.
   Connect a booking provider or backend before using
   this form for real customer reservations.
   --------------------------------------------------------- */

function setupReservationForm() {

    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!form.reportValidity()) return;

        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const date = formData.get("date");
        const time = formData.get("time");
        const guests = formData.get("guests");
        const occasion = formData.get("occasion");
        const message = formData.get("message");

        const status = document.getElementById("form-status");

        if (!BUSINESS.email || BUSINESS.email === "hello@example.com") {

            if (status) {
                status.textContent =
                    "Please configure the restaurant's email address first.";
            }

            return;

        }

        const subject = encodeURIComponent(
            `Reservation inquiry from ${name}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Preferred date: ${date}\n` +
            `Preferred time: ${time}\n` +
            `Guests: ${guests}\n` +
            `Occasion: ${occasion}\n\n` +
            `Additional requests:\n${message}\n\n` +
            `Please confirm availability.`
        );

        if (status) {
            status.textContent =
                "Opening your email application. Your reservation is not confirmed until the restaurant replies.";
        }

        window.location.href =
            `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;

    });

}


/* ---------------------------------------------------------
   11. INITIALIZE WEBSITE
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

    applyTheme();

    applyBusinessInformation();

    renderFeaturedMenu();

    renderFullMenu();

    setupMobileNavigation();

    setupReservationForm();

});
