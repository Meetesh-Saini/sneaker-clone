var cachedCount = 0;

const cartPlusButton = document.getElementById("btn-cart-plus");
const cartMinusButton = document.getElementById("btn-cart-minus");
const cartDisplay = document.querySelectorAll(".cart-display");
const cartCount = document.getElementById("cart-count");
const cartAddButton = document.getElementById("btn-cart-add");
const cartTotalAmount = document.querySelectorAll(".cart-totalAmount");
const cartModal = document.querySelectorAll(".cart-modal");
const cartButton = document.querySelectorAll(".btn-cart");
const cartDeleteButton = document.querySelectorAll(".btn-cart-delete");
const cartCheckoutButton = document.querySelectorAll(".btn-checkout");

const unitPrice = 125;
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    useGrouping: false,
});
const localStorageKey = "cart";

cartPlusButton.addEventListener("click", () => {
    cartCount.innerText = ++cachedCount;
});

cartMinusButton.addEventListener("click", () => {
    if (cachedCount <= 0) cachedCount = 1;
    cartCount.innerText = --cachedCount;
});

cartAddButton.addEventListener("click", () => {
    let totalCount = getCartValue();
    let newCount = totalCount + cachedCount;
    localStorage.setItem(localStorageKey, newCount);
    fillCartModal();
});

cartButton.forEach(elem => {
    elem.addEventListener("click", () => {
        cartModal.forEach(modal => {
            modal.classList.toggle("hidden");
        })
    })
});

cartDeleteButton.forEach(elem => {
    elem.addEventListener("click", () => {
        localStorage.setItem(localStorageKey, "0");
        fillCartModal();
    })
});

cartCheckoutButton.forEach(elem => {
    elem.addEventListener("click", () => {
        localStorage.setItem(localStorageKey, "0");
        fillCartModal();
    })
});

function fillCartModal() {
    let totalCount = getCartValue();
    let forEmptyCart = totalCount === 0 ? ["hidden", "flex"] : ["flex", "hidden"];
    document.querySelectorAll(".cart-empty").forEach(elem => {
        elem.classList.remove(forEmptyCart[0]);
        elem.classList.add(forEmptyCart[1]);
    });
    document.querySelectorAll(".cart-filled").forEach(elem => {
        elem.classList.add(forEmptyCart[0]);
        elem.classList.remove(forEmptyCart[1]);
    });
    cartCheckoutButton.forEach(elem => {
        totalCount === 0 ? elem.classList.add("hidden") :
            elem.classList.remove("hidden");
    });

    cartDisplay.forEach(elem => {
        elem.innerText = totalCount > 0 ? totalCount : "";
    });

    if (totalCount === 0) return;

    cartTotalAmount.forEach(elem => {
        elem.innerText = USDollar.format(unitPrice * totalCount);
    });
}

function getCartValue() {
    let totalCount = parseInt(localStorage.getItem(localStorageKey));
    if (isNaN(totalCount)) {
        totalCount = 0;
        localStorage.setItem(localStorageKey, '0');
    }
    return totalCount;
}

fillCartModal();